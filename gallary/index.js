import templates from './templates.js'

/**
 * @param {Element} element
 */
var __Gallary__ = function(element) {
  var self = element
  var current_index = 0
  var main_frame = templates.main_frame()
  self.appendChild(main_frame)
  /** */
  var nextEl = templates.next()
  main_frame.appendChild(nextEl)
  /** */
  var prevEl = templates.prev()
  main_frame.appendChild(prevEl)
  /** */
  var closeEl = templates.close()
  main_frame.appendChild(closeEl)
  /** */
  var thumbnail_list = templates.thumbnail_list()
  self.appendChild(thumbnail_list)
  //
  var img_wraps = []
  var thumbnails = []
  element.querySelectorAll('img').forEach((img, index) => {
    let img_wrap = templates.img_wrap()
    img.src = img.dataset.src
    img_wrap.appendChild(img)
    main_frame.appendChild(img_wrap)
    img_wraps.push(img_wrap)
    /** */
    let thumbnail = templates.thumbnail()
    thumbnail.classList.add('item')
    thumbnail.style.backgroundImage = `url(${img.dataset.src})`
    thumbnail_list.appendChild(thumbnail)
    thumbnail.addEventListener('click', e => goto(index))
    thumbnails.push(thumbnail)
  })
  var thumbnail_width = 160
  /** */
  function goto(index) {
    current_index = index
    img_wraps.forEach((item, i) => {
      item.style.transform=`translateX(-${current_index*100}%)`
      if (current_index == 0) thumbnails[i].style.transform=`translateX(0px)`
      else thumbnails[i].style.transform=`translateX(-${over(thumbnails[current_index])*thumbnail_width}px)`
      thumbnails[i].classList.remove('active')
    })
    thumbnails[current_index].classList.add('active')
  }
  /** */
  function over(thumbnail) {
    return Math.floor((thumbnail.getBoundingClientRect().x + thumbnail.getBoundingClientRect().width - window.innerWidth) / thumbnail_width)
  }
  /** */
  this.next = function () {
    goto(((current_index + 1) % img_wraps.length))
  }
  nextEl.addEventListener('click', e => this.next())
  /** */
  this.prev = function () {
    goto(((img_wraps.length + current_index - 1) % img_wraps.length))
  }
  prevEl.addEventListener('click', e => this.prev())
  /** */
  closeEl.addEventListener('click', e => self.classList.remove('show'))
  /** */
  this.show = function () {
    self.classList.add('show')
  }
}
export default __Gallary__
