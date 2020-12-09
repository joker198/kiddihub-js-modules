/**
 * @author joker20
 */
export default {
  prev() {
    let element = document.createElement('button')
    element.setAttribute('action', '')
    element.classList.add('prev')
    element.innerHTML = `<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492">
    <path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/>
    </svg>`
    return element
  },
  next() {
    let element = document.createElement('button')
    element.setAttribute('action', '')
    element.classList.add('next')
    element.innerHTML = `<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004">
    <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
    </svg>`
    return element
  },
  close() {
    let element = document.createElement('button')
    element.setAttribute('action', '')
    element.classList.add('close')
    element.innerHTML = `<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492">
    <path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
    c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
    c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
    L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
    c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
    c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
    c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"/></svg>`
    return element
  },
  main_frame() {
    let element = document.createElement('div')
    element.setAttribute('main-frame', '')
    return element
  },
  img_wrap() {
    let element = document.createElement('div')
    element.classList.add('img-wrap')
    return element
  },
  thumbnail_list() {
    let element = document.createElement('div')
    element.setAttribute('thumbnail-list', '')
    return element
  },
  thumbnail() {
    let element = document.createElement('div')
    element.classList.add('item')
    return element
  }
}