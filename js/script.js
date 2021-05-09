const navButton = document.querySelector('.nav__burger');

navButton.addEventListener('click', e => {
    navButton.classList.toggle('active');
    document.querySelector('.nav__menu_mobile').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock')
})


const closeButton = document.querySelector('.btn__close');

closeButton.addEventListener('click', e => {
    e.preventDefault();
    closeButton.classList.toggle('active');
    document.querySelector('.tools__text').classList.toggle('active');
    document.querySelector('.tools__content').classList.toggle('hide');
    (closeButton.innerHTML == '<i class="fas fa-times"></i>')? closeButton.innerHTML = '<i class="far fa-arrow-alt-circle-down"></i>' : closeButton.innerHTML = '<i class="fas fa-times"></i>'
})

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero,
    
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      type: 'custom'
    },
  });

  function addZero(num){
    return (num > 9) ? num : '0' + num;
  }