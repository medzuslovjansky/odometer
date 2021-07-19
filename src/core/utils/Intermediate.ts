import type { Replacement } from '../multireplacer/Replacement';

export class Intermediate {
  public readonly value: string;
  public readonly parent: Intermediate | null;
  public readonly context: unknown;
  public readonly via: Replacement | null;
  public readonly deduped: Intermediate[] = [];

  constructor(
    value: string,
    parent: Intermediate | unknown,
    via?: Replacement,
  ) {
    this.value = value;
    this.via = via || null;

    if (parent instanceof Intermediate) {
      this.context = parent.context;
      this.parent = parent;
    } else {
      this.context = parent;
      this.parent = null;
    }
  }

  toString() {
    return this.value;
  }

  equals(other: Intermediate) {
    return this.value === other.value;
  }

  static cast(value: string, record?: unknown) {
    return new Intermediate(value, record);
  }

  get root() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let item: Intermediate | null = this;

    while (item?.parent) {
      item = item.parent;
    }

    return item;
  }

  *replacements(): IterableIterator<Replacement> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let item: Intermediate | null = this;

    while (item) {
      if (item.via) {
        yield item.via;
      }

      item = item.parent;
    }
  }
}
