import __Element__ from './element.js'

const query = element => new __Element__(element)
/**
 * Listen to document on load event
 * @param {Function} listener
 */
query.load = listener => document.addEventListener("DOMContentLoaded", listener)
/**
 * Listen to document on scroll event
 * @param {Function} listener
 */
query.scroll = listener => document.addEventListener("scroll", listener)
/**
 * Listen to window on resize event
 * @param {Function} listener
 */
query.resize = listener => window.addEventListener("resize", listener)
/**
 * Assign event listener to element
 * @param {Element | String} el
 * @param {String} event
 * @param {Function} listener
 */
query.on = function (el, event, listener) {
  el = typeof el=='object' ? el : query.first(el)
  el.addEventListener(event, e => listener(e, e.detail))
}
/**
 * Emit event n element
 * @param {Element | String} el
 * @param {String} event
 * @param {*} data
 */
query.emit = (el, event, data = null) => {
  el = typeof el=='object' ? el : query.first(el)
  el.dispatchEvent(new CustomEvent(event, {detail: data}))
}

/**
 * Create element
 * @param {String} tag_name tag name
 */
query.create = tag_name => document.createElement(tag_name)
/**
 * Find first element
 *
 * @param {String} selector
 * @param {Element||document} parent
 *
 * @return Element
 */
query.first = (selector, parent = document) => parent.querySelector(selector)
/**
 * Find elements
 *
 * @param {String} selector
 * @param {Element||document} parent
 *
 * @return NodeListOf<Element>
 */
query.find = (selector, parent = document) => parent.querySelectorAll(selector)
/**
 *
 * @param {Element} el
 * @param {Number} offset distance to top edge
 */
query.scrollTop = (el, offset = null) => {
  offset = offset==null?el.offsetTop:offset
  var condition;
  if (el.getBoundingClientRect().top < offset) {
    condition = (el, offset) => {
      if (el.getBoundingClientRect().top > offset) return false
      window.scrollTo(0, window.pageYOffset - 10)
      return true
    }
  } else {
    condition = (el, offset) => {
      if (el.getBoundingClientRect().top < offset) return false
      window.scrollTo(0, window.pageYOffset + 10)
      return true
    }
  }
  var mark = setInterval(() => {
    if (!condition(el, offset)) clearInterval(mark)
  }, 10)
}
/**
 * Prevent body from scroll
 */
query.lock = () => query.first('body').classList.add('locked')
/**
 * Unlock body
 */
query.unlock = () => query.first('body').classList.remove('locked')

export default query
