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
    rule.replacements.add('oo');
    rule.replacements.add((match) => `${match[0]}^${match.length}`);

    const replacementObjects = [...rule.replacements];
    for (const obj of replacementObjects) {
      expect(obj.owner).toBe(rule);
    }

    const [r1, r2, r3] = rule.apply(intermediate);

    expect(r1.parent).toBe(intermediate);
    expect(r1.context).toBe(intermediate.context);
    expect(r1.via).toBe(replacementObjects[0]);
    expect(r1.value).toBe('gud');

    expect(r2).toBe(intermediate);

    expect(r3.parent).toBe(intermediate);
    expect(r3.context).toBe(intermediate.context);
    expect(r3.via).toBe(replacementObjects[2]);
    expect(r3.value).toBe('go^2d');

    const multireplacer = new Multireplacer<TestContext>();
    multireplacer.rules.add(rule);

    const multiresult = multireplacer.process(
      [intermediate.value],
      intermediate.context,
    );

    expect(multiresult.variants).toEqual([r1, r2, r3]);

    expect(() => multireplacer.rules.add(rule)).toThrowError(/already added/);
    expect(multireplacer.rules.find(rule)).toBe(rule);
    expect(multireplacer.rules.find(r1.via)).toBe(rule);
    expect(multireplacer.rules.find(r3.via)).toBe(rule);
    expect(multireplacer.rules.find(null)).toBe(null);

    const otherResult = multireplacer.process(['bad'], {
      isOkay: true,
      isBad: true,
    });

    expect(otherResult.variants.length).toBe(1);
    expect(otherResult.variants[0].parent).toBe(null);
  });
});
