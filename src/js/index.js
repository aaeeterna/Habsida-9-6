import '../scss/style.scss'

console.log('It works!')

/* =====================================================
   SIDEBAR (БУРГЕР-МЕНЮ)
===================================================== */

const burger = document.getElementById('burger')
const sidebar = document.getElementById('sidebar')
const overlay = document.querySelector('.overlay')

burger.addEventListener('click', () => {
  sidebar.classList.toggle('active')
  overlay.classList.toggle('active')
  document.body.style.overflow = 'hidden'
})

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active')
  overlay.classList.remove('active')
  document.body.style.overflow = ''
})


/* =====================================================
   BRANDS (БРЕНДЫ)
===================================================== */

const button = document.querySelector('.showMore')
const brands = document.querySelector('.brandContainer')
const text = document.querySelector('.buttonText')

if (button && brands && text) {
  button.addEventListener('click', () => {
    brands.classList.toggle('active')

    if (brands.classList.contains('active')) {
      text.textContent = 'Скрыть'
    } else {
      text.textContent = 'Показать все'
    }
  })
}


/* =====================================================
   REPAIR (РЕМОНТ)
===================================================== */

const repairButton = document.querySelector('.showMoreRepair')
const repairContainer = document.querySelector('.repairContainer')
const repairText = document.querySelector('.repairButtonText')

if (repairButton && repairContainer && repairText) {
  repairButton.addEventListener('click', () => {
    repairContainer.classList.toggle('active')

    if (repairContainer.classList.contains('active')) {
      repairText.textContent = 'Скрыть'
    } else {
      repairText.textContent = 'Показать все'
    }
  })
}


/* =====================================================
   SWIPER (БРЕНДЫ)
===================================================== */

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.mySwiper .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      enabled: false,
    },
  },
})


/* =====================================================
   SWIPER (РЕМОНТ)
===================================================== */

const repairSwiper = new Swiper('.repairSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.repairSwiper .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      enabled: false,
    },
  },
})
