var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const searchButton = document.querySelector('.search-button')
const searchBar = document.querySelector('.search-bar')

searchButton.addEventListener('click',()=>{
  if(searchBar.classList.contains('hide')){
    searchBar.classList.remove('hide')
  }
  else{
    searchBar.classList.add('hide')
  }
})
