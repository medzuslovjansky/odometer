import {
  Intermediate,
  Multireplacer,
  MultireplacerPredicate,
  MultireplacerPredicateWrapper,
  MultireplacerRule,
} from '..';

type TestContext = {
  isOkay: boolean;
  isBad: boolean;
};

class TestIntermediate extends Intermediate<TestContext> {}

describe('Multireplacer', () => {
  test('predicates', () => {
    const predicateFn: MultireplacerPredicate<TestContext> = (x) =>
      Boolean(x.context?.isBad);

    const predicateObj = new MultireplacerPredicateWrapper(predicateFn, false);

    const intermediate = new TestIntermediate('good', {
      isOkay: true,
      isBad: false,
    });

    expect(predicateFn(intermediate)).toBe(false);
    expect(predicateObj.appliesTo(intermediate)).toBe(true);
  });

  test('rule', () => {
    const rule = new MultireplacerRule<TestContext>('1');

    expect(rule.comment).toBe('1');

    rule.predicates
      .and((x) => Boolean(x.context?.isOkay))
      .andNot((x) => Boolean(x.context?.isBad));

    const intermediate = new TestIntermediate('good', {
      isOkay: true,
      isBad: false,
    });

    rule.searchValue = 'oo';
    rule.replacements.add('u');
    rule.replacements.add((match) => `${match[0]}^${match.length}`);

    const replacementObjects = [...rule.replacements];
    for (const obj of replacementObjects) {
      expect(obj.owner).toBe(rule);
    }

    const results = rule.apply(intermediate);
    for (const r of results) {
      expect(r.parent).toBe(intermediate);
      expect(r.context).toBe(intermediate.context);
    }

    expect(results[0].via).toBe(replacementObjects[0]);
    expect(results[0].value).toBe('gud');

    expect(results[1].via).toBe(replacementObjects[1]);
    expect(results[1].value).toBe('go^2d');

    const multireplacer = new Multireplacer<TestContext>();
    multireplacer.rules.add(rule);

    const multiresult = multireplacer.process(
      [intermediate.value],
      intermediate.context,
    );

    expect(multiresult.variants).toEqual(results);

    expect(() => multireplacer.rules.add(rule)).toThrowError(/already added/);
    expect(multireplacer.rules.find(rule)).toBe(rule);
    expect(multireplacer.rules.find(results[0].via)).toBe(rule);
    expect(multireplacer.rules.find(results[1].via)).toBe(rule);
    expect(multireplacer.rules.find(null)).toBe(null);

    const otherResult = multireplacer.process(['bad'], {
      isOkay: true,
      isBad: true,
    });

    expect(otherResult.variants.length).toBe(1);
    expect(otherResult.variants[0].parent).toBe(null);
  });
});
