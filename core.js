import Element from './element.js'

const query = function (selector) {
  return Element(selector)
}
/**
 * Listen to document on load event
 * @param {Function} listener
 */
query.load = function (listener) {
  document.addEventListener("DOMContentLoaded", listener)
}
/**
 * Listen to document on scroll event
 * @param {Function} listener
 */
query.scroll = function (listener) {
  document.addEventListener("scroll", listener)
}
/**
 * Listen to window on resize event
 * @param {Function} listener
 */
query.resize = function (listener) {
  window.addEventListener("resize", listener)
}
/**
 * Assign event listener to element
 * @param {Element|String} el 
 * @param {String} event 
 * @param {Function} listener 
 */
query.on = function (el, event, listener) {
  el = typeof el=='object'?el:query.first(el)
  el.addEventListener(event, listener)
}
/**
 * Create element
 * @param {String} tag_name tag name
 */
query.create = function (tag_name) {
  return document.createElement(tag_name)
}
/**
 * Find first element
 *
 * @param {String} selector 
 * @param {Element||document} parent
 *
 * @return Element
 */
query.first = function (selector, parent = document) {
  return parent.querySelector(selector)
}
/**
 * Find elements
 *
 * @param {String} selector 
 * @param {Element||document} parent
 *
 * @return NodeListOf<Element>
 */
query.find = function (selector, parent = document) {
  return parent.querySelectorAll(selector)
}
/**
 * 
 * @param {Element} el 
 * @param {Number} offset distance to top edge 
 */
query.scrollTop = function (el, offset = null) {
  offset = offset==null?el.offsetTop:offset
  var condition;
  if (el.getBoundingClientRect().top < offset) {
    condition = function (el, offset) {
      if (el.getBoundingClientRect().top > offset) return false
      window.scrollTo(0, window.pageYOffset - 10)
      return true
    }
  } else {
    condition = function (el, offset) {
      if (el.getBoundingClientRect().top < offset) return false
      window.scrollTo(0, window.pageYOffset + 10)
      return true
    }
  }
  var mark = setInterval(function () {
    if (!condition(el, offset)) clearInterval(mark)
  }, 10)
}
/**
 * Prevent body from scroll
 */
query.lock = function () {
  query.first('body').classList.add('locked')
}
/**
 * Unlock body
 */
query.unlock = function () {
  query.first('body').classList.remove('locked')
}

export default query