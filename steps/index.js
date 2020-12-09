import Step from './step.js'
/**
 * @author joker20
 * @param {Element} element
 */
var __Steps__ = function(element) {
  var self = element
  var list = [], current = 0, num = 0
  //
  self.querySelectorAll('.step').forEach((el, index) => {
    list.push(Step(el, index))
  })
  num = list.length
  list.forEach(step => {
    let nextEl = step.element.querySelector('[next-step]')
    if (nextEl!=null) {
      nextEl.addEventListener('click', function () { this.next() })
    }
    let prevEl = step.element.querySelector('[prev-step]')
    if (prevEl!=null) {
      prevEl.addEventListener('click', function () { this.prev() })
    }
  })
  //
  this.next = (validate = true) => {
    this.goto((current + 1) % num, validate)
  }
  this.prev = (validate = true) => {
    this.goto(current==0 ? (num - 1) : (current - 1), validate)
  }
  this.goto = (index, validate = true) => {
    if (!validate || (index > num) || index<0) return false
    this.change(list[current].element, list[index].element)
    let distance = list[index].distance
    list.forEach(step => step.transform(distance))
    current = index
  }
  this.change = function () {}
  this.__defineSetter__('onchange', function (callback) {
    this.change = callback
  })
}
/**
 * @param {Element} element
 */
export default function (element) {
  return new __Steps__(element)
}