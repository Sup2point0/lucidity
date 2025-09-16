// FIXME
// figure out a way to type this?
// static members don't mesh with generics, and static accessors are even worse...

/** Base class for objects that can reset their state. */
export abstract class Resettable
{
  protected static _defaults_ = null;

  static get defaults()
  {
    if (this._defaults_ === null) {
      let inst = new this();
      inst.reset();
      this._defaults_ = inst;
    }
    return this._defaults_!;
  }

  abstract reset(): void;
}
