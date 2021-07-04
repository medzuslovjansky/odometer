import { parse } from '@interslavic/steen-utils';
import { Multirator } from './Multirator';
import { BareRecord } from '../types/BareRecord';

test('rule pos', () => {
  const multirator = new Multirator([
    {
      id: '1',
      match: 'ti se$',
      genesis: '',
      partOfSpeech: 'v.',
      replaceWith: ['тися'],
    },
    {
      id: '2',
      match: 'bra',
      genesis: '',
      partOfSpeech: '',
      replaceWith: ['бра'],
    },
  ]);

  const word: BareRecord = {
    id: 1000,
    isv: parse.synset('brati se', { isPhrase: false }),
    ru: parse.synset('браться', { isPhrase: false }),
    genesis: 'Slavic',
    partOfSpeech: parse.partOfSpeech('v. intr.pf.'),
  };

  const flavor = multirator.process(word);
  const difference = multirator.getDifference(flavor, word.ru);

  expect(difference).toBeCloseTo(0.15, 1);
  expect(flavor).toEqual([{ appliedRules: ['1', '2'], value: 'братися' }]);
});
