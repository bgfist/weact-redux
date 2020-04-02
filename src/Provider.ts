/// <reference types="miniprogram-api-typings" />

import { Store } from "./types"

export default function Provider(store: Store) {
  return <T extends WechatMiniprogram.IAnyObject>(options: WechatMiniprogram.App.Options<T>): WechatMiniprogram.App.Options<T> => {
    return { ...options, store }
  }
}
