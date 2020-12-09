/**
 * @author joker20
 */
export default {
  item(class_name) {
    let element = document.createElement('div')
    element.classList.add(class_name)
    element.innerHTML = '<span></span>'
    return element
  },
  wrap() {
  	let element = document.createElement('div')
    element.classList.add('slider')
    return element
  }
}
