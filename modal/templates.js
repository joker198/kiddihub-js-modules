/**
 * @author joker20
 */
export default {
  box () {
    let box = $.create('div')
    box.setAttribute('modal-box', '')
    box.style.display='none'
    return box
  }
}