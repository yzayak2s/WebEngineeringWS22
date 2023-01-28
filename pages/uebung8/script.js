// Keep clicked button highlighted
// Reference: https://stackoverflow.com/questions/68347721/how-do-i-keep-a-clicked-navigation-button-highlighted-in-css/68348062#68348062
import {CONTENT} from "./fetchContent.js";

let elements = document.querySelectorAll('.header-nav-button')

elements.forEach(el => {
    el.addEventListener('click', () => {
        elements.forEach(el => el.classList.remove('active'))
        el.classList.add('active')
    })
})

let elementsBtn = document.querySelectorAll('.main-nav-button')

elementsBtn.forEach(el => {
    el.addEventListener('click', () => {
        elementsBtn.forEach(el => el.classList.remove('active'))
        el.classList.add('active')
    })
})
