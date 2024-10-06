'use strict'

const nav = document.querySelector('.Nav')
const menuBtn = document.querySelector('.Nav-menu')

menuBtn.addEventListener('click' , ()=>{
    nav.classList.toggle('isOpen')
})