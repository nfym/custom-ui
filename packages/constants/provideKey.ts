import type { InjectionKey } from 'vue'

// provide/inject
// reload
export const RELOAD: InjectionKey<() => void> = Symbol()
// resetScrollbar
export const RESET_SCROLLBAR: InjectionKey<() => void> = Symbol()
