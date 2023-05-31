export class LocalStorage {
  static set(sName: string, value: unknown): void {
    if (!sName) return
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(sName, value as string)
  }
  static get(sName: string): any {
    let info = window.localStorage.getItem(sName) || ''
    info = info ? JSON.parse(info) : info
    return info
  }
  static remove(sName: string): void {
    if (!sName) return
    window.localStorage.removeItem(sName)
  }
}
