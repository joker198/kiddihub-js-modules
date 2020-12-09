import templates from './templates.js'
/**
 * @param {Element} element
 */
var __RangeInput__ = function(element) {
  var startX = 0, x = 0, normalizeFact = 26, self = element
  self.__defineGetter__('nodeName', function () {
    return 'INPUT'
  })
  self.__defineGetter__('type', function () {
    return 'range'
  })
  self.__defineGetter__('name', function () {
    return self.getAttribute('name')
  })
  self.__defineGetter__('value', function () {
    return {min: self.min, max: self.max}
  })
  // render range input
  var touchMin = templates.item('touch-left')
  self.appendChild(touchMin)
  var touchMax = touchMax = templates.item('touch-right')
  self.appendChild(touchMax)
  var range = templates.item('range')
  self.appendChild(range)
  range = range.querySelector('span')

  // get some properties
  var min = parseFloat(self.getAttribute('min'))
  var max = parseFloat(self.getAttribute('max'))
  // retrieve default values
  var defaultMin = min
  if(self.hasAttribute('min-value')) defaultMin = parseFloat(self.getAttribute('min-value'))
  var defaultMax = max
  if(self.hasAttribute('max-value')) defaultMax = parseFloat(self.getAttribute('max-value'))
  // check values are correct
  if(defaultMin < min) defaultMin = min
  if(defaultMax > max) defaultMax = max
  if(defaultMin > defaultMax) defaultMin = defaultMax

  var step = 0.0
  if (self.getAttribute('step')) step = Math.abs(parseFloat(self.getAttribute('step')))
  // initial reset
  touchMin.style.left = '0px'
  touchMax.style.left = `${self.offsetWidth - touchMin.offsetWidth}px`
  range.style.marginLeft = '0px'
  range.style.width = `${self.offsetWidth - touchMin.offsetWidth}px`
  // usefull values, min, max, normalize fact is the width of both touch buttons
  var maxX = self.offsetWidth - touchMax.offsetWidth
  var selectedTouch = null
  var initialValue = range.offsetWidth - normalizeFact
  //
  this.setMin = function(value) {
    var ratio = (value - min) / (max - min)
    touchMin.style.left = `${Math.ceil(ratio * (self.offsetWidth - touchMin.offsetWidth - normalizeFact))}px`
    range.style.marginLeft = `${touchMin.offsetLeft}px`
    range.style.width = `${touchMax.offsetLeft - touchMin.offsetLeft}px`
    self.min = value
  }
  // 
  this.setMax = function(value) {
    var ratio = (value - min) / (max - min)
    touchMax.style.left = `${Math.ceil(ratio * (self.offsetWidth - touchMin.offsetWidth - normalizeFact) + normalizeFact)}px`
    range.style.marginLeft = `${touchMin.offsetLeft}px`
    range.style.width = `${touchMax.offsetLeft - touchMin.offsetLeft}px`
    self.max = value
  }
  // set defualt values
  this.setMin(defaultMin)
  this.setMax(defaultMax)
  // setup touch/click events
  function start(event) {
    // Prevent default dragging of selected content
    event.preventDefault()
    var eventTouch = event
    if (event.touches) eventTouch = event.touches[0]
    if(this === touchMin) x = touchMin.offsetLeft
    else x = touchMax.offsetLeft
    // 
    startX = eventTouch.pageX - x
    selectedTouch = this
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', stop)
    document.addEventListener('touchmove', move)
    document.addEventListener('touchend', stop)
  }
  function move(event) {
    var eventTouch = event
    if (event.touches) eventTouch = event.touches[0]
    x = eventTouch.pageX - startX
    if (selectedTouch === touchMin) {
      if(x > (touchMax.offsetLeft - selectedTouch.offsetWidth + 10)) {
        x = (touchMax.offsetLeft - selectedTouch.offsetWidth + 10)
      } else if(x < 0) x = 0
      selectedTouch.style.left = `${x}px`
    } else if (selectedTouch === touchMax) {
      if(x < (touchMin.offsetLeft + touchMin.offsetWidth - 10)) {
        x = (touchMin.offsetLeft + touchMin.offsetWidth - 10)
      } else if(x > maxX) x = maxX
      selectedTouch.style.left = `${x}px`
    }
    // update line span
    range.style.marginLeft = `${touchMin.offsetLeft}px`
    range.style.width = `${touchMax.offsetLeft - touchMin.offsetLeft}px`
    // write new value
    calculate()
    //
    self.dispatchEvent(new Event('input'))
  }
  
  function stop(event) {
    document.removeEventListener('mousemove', move)
    document.removeEventListener('mouseup', stop)
    document.removeEventListener('touchmove', move)
    document.removeEventListener('touchend', stop)
    selectedTouch = null
    // write new value
    calculate()
    //
    self.dispatchEvent(new Event('change'))
  }
  
  function calculate() {
    var value = (range.offsetWidth - normalizeFact) / initialValue
    var minValue = range.offsetLeft / initialValue
    var maxValue = minValue + value
    minValue = minValue * (max - min) + min
    maxValue = maxValue * (max - min) + min
    if (step !== 0.0) {
      var multi = Math.floor((minValue / step))
      minValue = step * multi
      multi = Math.floor((maxValue / step))
      maxValue = step * multi
    }
    self.min = minValue
    self.max = maxValue
  }
  // link events
  touchMin.addEventListener('mousedown', start)
  touchMax.addEventListener('mousedown', start)
  touchMin.addEventListener('touchstart', start)
  touchMax.addEventListener('touchstart', start)
  // 
  this.on = function (event, listener) {
    self.addEventListener(event, listener)
  }
}

export default __RangeInput__
