/**
 * @author joker20
 * @param {Element} element
 * @param {Number} delay
 * @param {__ModalBox__} box
 */
var __Modal__ = function (element, delay, box) {
  var self = $(element)

  this.__defineGetter__('raw', () => self.raw)
  element.__defineGetter__('type', () => 'modal')
  element.visible = false

  element.show = function() {
    box.modals.forEach(el => {
      el.style.display = 'none'
      el.classList.display = 'none'
      if (el.visible) $.emit(el, 'hide-modal')
    })
    box.show()
    self.show()
    this.visible = true
    self.class.add('show')
    self.emit('show-modal')
  }
  this.show = () => element.show()

  element.hide = function () {
    this.classList.remove('show')
    setTimeout(() => {
      this.style.display='none'
      this.visible = false
      if (this.visible) $.emit(this, 'hide-modal')
    }, delay)
    setTimeout(() => box.hide(), delay)
  }
  this.hide = () => element.hide()

  self.find('[close]').forEach(act => {
    $.on(act, 'click', e => element.hide())
  })
  self.on('click', e => e.stopPropagation())
}
export default __Modal__
