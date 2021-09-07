export class Intermediate<Context = unknown, Replacement = unknown> {
  public readonly value: string;
  public readonly parent: Intermediate<Context, Replacement> | null;
  public readonly context: Context;
  public readonly via: Replacement | null;
  public readonly deduped: Intermediate[] = [];

  constructor(
    value: string,
    parent: Intermediate<Context, Replacement> | Context,
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

  toString(): string {
    return this.value;
  }

  equals(other: Intermediate): boolean {
    return this.value === other.value;
  }

  static cast<Context, Replacement>(
    value: string,
    record: Context,
  ): Intermediate<Context, Replacement> {
    return new Intermediate<Context, Replacement>(value, record);
  }

  get root(): Intermediate<Context, Replacement> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let item: Intermediate<Context, Replacement> | null = this;

    while (item?.parent) {
      item = item.parent;
    }

    return item;
  }

  *replacements(): IterableIterator<Replacement> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let item: Intermediate<Context, Replacement> | null = this;

    while (item) {
      if (item.via) {
        yield item.via;
      }

      item = item.parent;
    }
  }
}
