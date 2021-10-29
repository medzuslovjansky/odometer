import { Replacement } from './index';

export class Intermediate<ContextClass = unknown> {
  public readonly value: string;
  public readonly context: ContextClass;
  public readonly parent: Intermediate<ContextClass> | null;
  public readonly root: Intermediate<ContextClass> | null;
  public readonly via: Replacement<ContextClass> | null;

  public dupes: Set<Intermediate<ContextClass>> | null = null;

  constructor(
    value: string,
    parent: Intermediate<ContextClass> | ContextClass,
    via?: Replacement<ContextClass>,
  ) {
    this.value = value;
    this.via = via || null;

    if (parent instanceof Intermediate) {
      this.context = parent.context;
      this.parent = parent;
      this.root = parent.root || parent;
    } else {
      this.context = parent;
      this.parent = null;
      this.root = null;
    }
  }

  toString(): string {
    return this.value;
  }

  equals(other: Intermediate<ContextClass>): boolean {
    return this.value === other.value;
  }

  absorb(other: Intermediate<ContextClass>): this {
    if (this.value !== other.value) {
      throw new Error(
        `Cannot merge different intermediates: ${this.value} and ${other.value}`,
      );
    }

    if (other.dupes !== null) {
      throw new Error(
        `Cannot merge intermediates with existing duplicates sets: ${other.value}`,
      );
    }

    if (!this.dupes) {
      this.dupes = new Set<Intermediate<ContextClass>>().add(this);
    }

    this.dupes.add(other);
    return this;
  }

  *replacements(): IterableIterator<Replacement<ContextClass>> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let item: Intermediate<ContextClass> | null = this;

    while (item) {
      if (item.via) {
        yield item.via;
      }

      item = item.parent;
    }
  }
}
