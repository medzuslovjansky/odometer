import { core, types } from '@interslavic/steen-utils';

export type BareRecord = {
  id: number;
  isv: core.Synset;
  ru?: core.Synset;
  genesis?: keyof typeof types.Genesis;
  partOfSpeech: types.PartOfSpeech;
};
