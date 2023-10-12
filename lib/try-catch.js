import debug from 'debug'

const error = debug('app:try-catch:error')

/**
 * @template T
 * @template U
 * @param {() => T} fn 
 * @param {(error: unknown) => U} errorHandler 
 * @returns {T | U}
 */
export function tryCatch (fn, errorHandler = (err) => {
  error(err)
  return undefined
}) {
  try {
    return fn()
  } catch (err) {
    return errorHandler(err)
  }
}