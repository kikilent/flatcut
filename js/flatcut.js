/* Element's helper
———————————————————————————————————————————————————————— */
const eh = {}

/* Select element by css selector */
eh.get = (selector, all = false) => {
  selector = selector.trim()
  if (all) {
    return [...document.querySelectorAll(selector)] || []
  } else {
    return document.querySelector(selector)
  }
}

/* Select element by id */
// Prefer this when selecting single element
eh.getId = id => {
  id = id.trim()
  return document.getElementById(id)
}

/* Event helper */
eh.on = (type, selector, listener, all = false) => {
  if (all) {
    eh.get(selector, all).forEach(e => e.addEventListener(type, listener))
  } else {
    eh.get(selector, all).addEventListener(type, listener)
  }
}
