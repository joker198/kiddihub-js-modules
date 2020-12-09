var __Modal__ = function(element, delay) {
  var self = element
  var visible = false
  self.__defineGetter__('visible', function() {
    return visible
  })
  self.__defineGetter__('type', function() {
    return 'modal'
  })
  this.__defineGetter__('visible', function() {
    return visible
  })
  self.hide = function() {
    self.classList.remove('show')
    setTimeout(function () {
      self.style.display='none'
      if (visible) self.dispatchEvent(new Event('hide-modal'))
    }, delay)
  }
  this.forceHide = function() {
    self.style.display='none'
    self.classList.remove('show')
    if (visible) self.dispatchEvent(new Event('hide-modal'))
  }
  self.show = function() {
    self.visible = true
    self.style.display='block'
    self.classList.add('show')
    self.dispatchEvent(new Event('show-modal'))
  }
  self.querySelectorAll('[close]').forEach(act => {
    act.addEventListener('click', function() { self.hide() })
  })
  self.addEventListener('click', function(e) {
    e.stopPropagation()
  })
}
export default __Modal__