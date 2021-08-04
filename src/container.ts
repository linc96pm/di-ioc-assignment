export class Container {
  public readonly _deps: Record<string, any> = {}
  public _key: string = ''

  public bind(key: string) {
    console.log('bind key: ', key)
    this._key = key
    return this
  }

  public to(dep: any) {
    console.log('to _dep before: ', this._deps)
    console.log('to _key: ', this._key)
    this._deps[this._key] = new dep()
    console.log('to _dep after: ', this._deps)
    this._key = ''
  }

  public get<T>(key: string) {
    console.log('get _dep: ', this._deps)
    return this._deps[key] as T
  }
}
