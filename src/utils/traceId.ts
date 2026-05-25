import { AsyncLocalStorage } from 'async_hooks'
import { v4 as uuid } from 'uuid'

const storage = new AsyncLocalStorage<{ traceId: string }>()

export const runWithTraceId = (fn: () => void) => {
  storage.run({ traceId: uuid() }, fn)
}

export const getTraceId = () => {
  return storage.getStore()?.traceId ?? 'no-trace'
}