/**
 * @intro: intro.
 */
import {tokenStorageKey} from '../utils/setting'
import {sessionStorage} from '../utils/storage/storage'

const storage = sessionStorage

export default {
  get () {
    return storage.get(tokenStorageKey)
  },
  // set (Token, ExpiredTime) {
  set (Token) {
    // 设置
    storage.set(tokenStorageKey, Token)
  },
  remove () {
    storage.remove(tokenStorageKey)
  }
}
