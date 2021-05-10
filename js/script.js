const navButton = document.querySelector('.nav__burger');

navButton.addEventListener('click', e => {
    navButton.classList.toggle('active');
    document.querySelector('.nav__menu_mobile').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock')
})

var container = document.querySelector('.tools__content');
container.style.height = container.clientHeight + 'px';

var linkToggle = document.querySelector('.btn__close');

  linkToggle.addEventListener('click', function(event){
    event.preventDefault();
    var container = document.querySelector('.tools__content');
    (linkToggle.innerHTML == '<i class="fas fa-times"></i>')? linkToggle.innerHTML = '<i class="far fa-arrow-alt-circle-down"></i>' : linkToggle.innerHTML = '<i class="fas fa-times"></i>'
    document.querySelector('.tools__text').classList.toggle('active');
    if (!container.classList.contains('hide')) {
  
    container.style.height = '0px';
    container.classList.add('hide');
      
    } else {
      container.style.height = 'auto';
      var height = container.clientHeight + 30 + 'px';
      container.style.height = '0px';

      setTimeout(function () { 
        container.style.height = height ;
      }, 0);
      container.classList.remove('hide');
      
    }
  });


  var linkTogglee = document.querySelectorAll('.js-toggle');
for(i = 0; i < linkTogglee.length; i++){
  linkTogglee[i].addEventListener('click', function(event){
    event.preventDefault();
    var container = document.getElementById(this.dataset.container);
    this.classList.toggle('active');
    if (!container.classList.contains('active')) {
      container.classList.add('active');
      container.style.height = 'auto';
      var height = container.clientHeight + 'px';
      container.style.height = '0px';
      setTimeout(function () {
        container.style.height = height;
      }, 0);
    } else {
      container.style.height = '0px';
      container.addEventListener('transitionend', function () {
        container.classList.remove('active');
      }, {
        once: true
      });
    }
  });
}




const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    autoHeight: true,
    preloadImages: false,
    lazy: true,
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