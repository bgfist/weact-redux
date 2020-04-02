import { Store as ReduxStore, ActionCreator as ReduxActionCreator } from "redux"

export { Unsubscribe, Dispatch } from "redux"
export type Store = ReduxStore<any, any>
export type State = ReturnType<Store["getState"]>
export type ActionCreator = ReduxActionCreator<any>
export type ActionCreators = { [k: string]: ActionCreator }
