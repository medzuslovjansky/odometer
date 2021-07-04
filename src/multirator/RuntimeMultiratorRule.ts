import { MultiratorRule } from './MultiratorRule';
import { Replacement } from './Multirator';
import { parse } from '@interslavic/steen-utils';
import constant from 'lodash/constant';
import identity from 'lodash/identity';
import isEmpty from 'lodash/isEmpty';
import isMatch from 'lodash/isMatch';
import pickBy from 'lodash/pickBy';
import { BareRecord } from '../types/BareRecord';

type Predicate<T> = (arg: T) => boolean;

export class RuntimeMultiratorRule {
  public readonly id: string;
  public readonly match: RegExp;
  public readonly replaceWith: Replacement[];

  protected readonly predicates: Predicate<BareRecord>[];

  constructor(rule: MultiratorRule) {
    this.id = rule.id;
    this.match = new RegExp(rule.match, 'ig');
    this.replaceWith = rule.replaceWith.filter(Boolean).map(mapReplacement);

    this.predicates = [
      this.match ? returnTrue : returnFalse,
      RuntimeMultiratorRule.addPartOfSpeechPredicate(rule.partOfSpeech),
      RuntimeMultiratorRule.addGenesisPredicate(rule.genesis),
    ];
  }

  protected static addGenesisPredicate(
    pattern?: string,
  ): Predicate<BareRecord> {
    if (!pattern) {
      return returnTrue;
    }

    const createGenesisPredicate = pattern.endsWith('?')
      ? nonStrictGenesisCheck
      : strictGenesisCheck;

    return createGenesisPredicate(pattern);
  }

  protected static addPartOfSpeechPredicate(
    pattern: string,
  ): Predicate<BareRecord> {
    if (!pattern || pattern.startsWith('#')) {
      return returnTrue;
    }

    const pos = parse.partOfSpeech(pattern);
    if (!pos) {
      return returnFalse;
    }

    const shape = pickBy(pos, identity);
    if (isEmpty(shape)) {
      return returnTrue;
    }

    return ({ partOfSpeech }: BareRecord): boolean => {
      if (!partOfSpeech) {
        return false;
      }

      return isMatch(partOfSpeech, shape);
    };
  }

  public applies(record: BareRecord): boolean {
    return this.predicates.every(callWithThis, record);
  }
}

const returnTrue = constant(true);
const returnFalse = constant(false);

function mapReplacement(s: Replacement): Replacement {
  switch (s) {
    case 'NULL':
      return '';
    default:
      return s;
  }
}

function strictGenesisCheck(pattern: string) {
  return ({ genesis }: BareRecord): boolean => {
    if (!genesis) {
      return false;
    }

    return pattern.indexOf(genesis) >= 0;
  };
}

function nonStrictGenesisCheck(pattern: string) {
  return ({ genesis }: BareRecord): boolean => {
    if (!genesis) {
      return true;
    }

    return pattern.indexOf(genesis) >= 0;
  };
}

function callWithThis<T>(this: T, predicate: Predicate<T>) {
  return predicate(this);
}
