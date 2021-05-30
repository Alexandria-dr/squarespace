gsap.registerPlugin(ScrollTrigger);

function init () {const navButton = document.querySelector('.nav__burger');

navButton.addEventListener('click', e => {
    navButton.classList.toggle('active');
    document.querySelector('.nav__menu_mobile').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock')
})

const container = document.querySelector('.tools__content');
container.style.height = container.clientHeight + 'px';
const linkToggle = document.querySelector('.btn__close');

  linkToggle.addEventListener('click', function(event){
    event.preventDefault();
    const container = document.querySelector('.tools__content');
    (linkToggle.innerHTML == '<i class="fas fa-times"></i>')? linkToggle.innerHTML = '<i class="far fa-arrow-alt-circle-down"></i>' : linkToggle.innerHTML = '<i class="fas fa-times"></i>'
    document.querySelector('.tools__text').classList.toggle('active');
    if (!container.classList.contains('hide')) {
    container.style.height = '0px';
    container.classList.add('hide');
    } else {
      container.style.height = 'auto';
      const height = container.clientHeight + 30 + 'px';
      container.style.height = '0px';
      setTimeout(function () { 
        container.style.height = height ;
      }, 0);
      container.classList.remove('hide');
    }
  });

  const linkTogglee = document.querySelectorAll('.js-toggle');
for(i = 0; i < linkTogglee.length; i++){
  linkTogglee[i].addEventListener('click', function(event){
    event.preventDefault();
    const container = document.getElementById(this.dataset.container);
    this.classList.toggle('active');
    if (!container.classList.contains('active')) {
      container.classList.add('active');
      container.style.height = 'auto';
      let height = container.clientHeight + 'px';
      container.style.height = '0px';
      setTimeout(function () {
        container.style.height = height;
      }, 0);
    } else {
      container.style.height = '50px';
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

  const header = document.querySelector('.header__nav');
  
  
  function toggleTopMenu (){
    if (pageYOffset > 30) {
      header.classList.add('is-scroll')}
       else
      {header.classList.remove('is-scroll')}
      }
  window.addEventListener('scroll', toggleTopMenu);
    
  // gsap

      // ScrollTrigger.defaults({
      //   markers:true
      // })
  
  let tl2 = gsap.timeline({ duration: 0.7, delay: 0.1 });


  tl2
    .fromTo(".info__content h1", { x: -100, opacity: 0, }, {
      opacity: 1,
      x: 0
    })
    .fromTo([".info__content p", ".info__content a"], { x: -100, opacity: 0, }, {
      opacity: 1,
      x: 0,
    })
    .fromTo(".info__links", { opacity: 0, }, {
      opacity: 1,
      delay: 0.2
    })
    .fromTo(".header__nav", { opacity: 0, }, {
      opacity: 1,
      duration: 0.1
    })
  
  function hide(element) {
    gsap.set(element, {opacity: 0, duration: 0.5});
  }

  let tl = gsap.timeline();

  function fromBottom(element, y, y2, o1, o2) {tl.fromTo(element,  {y: y, opacity:o1, }, {
    y: y2,
    opacity: o2,
    duration: 0.4,
  },)  
}

const tools = document.querySelectorAll('.tools__item');

  tools.forEach(function(element){
    hide(element);
    ScrollTrigger.create({
      start: 'top-=150 center',
      end: 'bottom top',
      trigger: element,
      onEnter: function() { fromBottom(element, 200, 0, 0, 1)
     },
     onLeaveBack: function() { fromBottom(element, 0, 200, 1, 0) }
    });
  });

  const featuresItems = document.querySelectorAll('.features__item');
  const listItem = document.querySelectorAll('.gsap-right-left');
  

  function fromGSAPlr(element, x, x1, o, o1) {
    gsap.fromTo(element,  {x: x, opacity:o, }, {
      x: x1,
      opacity: o1,
      duration: 1
    },)  
  }
  function fromLeftRight(element, o, o1, check) { 
    let x;
    let x1 = 0;
    if (element.classList.contains('reverse')) { x = -200} else { x = 200};
    if(check == true){ x1 = x; x = 0}
    fromGSAPlr(element, x, x1, o, o1)
  }

  featuresItems.forEach(function(element){
    hide(element);
    ScrollTrigger.create({
      start: 'top-=250 center',
      end: 'bottom top',
      trigger: element,
      onEnter: function() {fromLeftRight(element, 0, 1, 0)},
      onLeaveBack: function() {fromLeftRight(element, 1, 0, 1)},
  })})
  listItem.forEach(function(element){
    hide(element);
    ScrollTrigger.create({
      start: 'top-=200 center',
      end: 'bottom top',
      trigger: element,
      onEnter: function() {fromLeftRight(element, 0, 1, 0)},
      onLeaveBack: function() {fromLeftRight(element, 1, 0, 1)},
  })})

  
  
  
    }

// 

  window.addEventListener('load', function () {
    init();
  })