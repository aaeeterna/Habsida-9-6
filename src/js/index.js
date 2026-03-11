import '../scss/style.scss'

console.log('It works!')

const button = document.querySelector('.showMore')
const brands = document.querySelector('.brandContainer')
const text = document.querySelector('.buttonText')

button.addEventListener('click', () => {
  brands.classList.toggle('active')

  if (brands.classList.contains('active')) {
    text.textContent = 'Скрыть'
  } else {
    text.textContent = 'Показать все'
  }
})

const repairButton = document.querySelector(".showMoreRepair");
const repairContainer = document.querySelector(".repairContainer");
const repairText = document.querySelector(".repairButtonText");

repairButton.addEventListener("click", () => {

  repairContainer.classList.toggle("active");

  if(repairContainer.classList.contains("active")){
    repairText.textContent = "Скрыть";
  } else {
    repairText.textContent = "Показать все";
  }

});
