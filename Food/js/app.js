$(document).ready(function() {
  $('.myorders-btn').click(function() {
    $('.section').toggle(200)
  })
})

const signUpButton = document.querySelector("#info-linkup");
const signInButton = document.querySelector("#info-linkin");
const containerSign = document.querySelector("#container-sign");

signInButton.addEventListener('click', () =>
containerSign.classList.add('sign-in-active'));

signUpButton.addEventListener('click', () =>
containerSign.classList.remove('sign-in-active'));
