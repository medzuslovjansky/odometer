import { Intermediate } from '../core';
import { BareRecord } from '../types/BareRecord';

export interface InterslavicIntermediate extends Intermediate {
  readonly context: BareRecord;
}
