/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  fadeOut(div)
}

function delayedFadeIn(div, range) {
  fadeIn(div)
}

function fadeAllOut(el, group) {
  group.splice(group.indexOf(el), 1)

  group.forEach(div => {
    delayedFadeOut(div)
  })

  setTimeout(() => fadeOut(el), 250)
  group.push(el)
}

function fadeAllIn(group) {
  group.forEach(div => {
    delayedFadeIn(div)
  })
}
