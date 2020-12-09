/**
 * @param {Element} element
 * @param {Number} index
 */
var __Step__ = function (element, index) {
  var self = element
  var distance = index * 100

  this.__defineGetter__('element', function () {
    return element
  })
  this.__defineGetter__('distance', function () {
    return distance
  })
  this.transform = function(distance) {
    self.style.transform=`translateX(-${distance}%)`
  }
}
/**
 * @param {Element} element
 * @param {Number} index
 */
export default function (element, index) {
  return new __Step__(element, index)
}