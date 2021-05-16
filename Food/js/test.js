const addMeal = document.querySelector(".add_meal");
const backgroundAddMeal = document.querySelector(".active_add_meal");
const exitAddMeal = document.querySelector(".exit-add-meal");
const button = document.querySelector(".btn-div-plus");

exitAddMeal.addEventListener('click', () => {
  addMeal.style.display = "none";
  backgroundAddMeal.style.display = "none";
})

button.addEventListener('click', () => {
    addMeal.style.display = "block";
    backgroundAddMeal.style.display = "block";
  })