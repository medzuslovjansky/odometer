import { Intermediate } from './Intermediate';

export class IntermediatesCache<Context> {
  private readonly map = new Map<string, Intermediate<Context>>();

  public resolve(intermediate: Intermediate<Context>): Intermediate<Context> {
    const existing = this.map.get(intermediate.value);
    if (existing) {
      return existing.absorb(intermediate);
    }

    this.map.set(intermediate.value, intermediate);
    return intermediate;
  }
}
