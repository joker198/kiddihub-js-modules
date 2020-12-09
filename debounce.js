/**
 * Debounce action
 * @author joker20
 * @param {Function} callback
 * @param {Number} time
 */
export default function(callback, time) {
  let timeout
  return function() {
    let context = this
    let args = arguments
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(function() {
      timeout = null
      callback.apply(context, args)
    }, time)
  }
}