// import Swiper JS

var swiper = new Swiper('.swiper1', {
  // Optional parameters  
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    // when window width is >= 1000px
    1000: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  }

});

var swiper = new Swiper('.swiper2', {
  // Optional parameters  
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,  
   

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    },
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    },
    // when window width is >= 800px
    800: {
      slidesPerView: 3,
      spaceBetween: 15,
      navigation: {
        nextEl: '._reviews-prev',
        prevEl: '._reviews-next',
        clickable: true
      },
    }
  }  

});


var swiper = new Swiper('.swiper3', {
  // Optional parameters  
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,  

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 4,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 20,
      navigation: {
        nextEl: '._clients-prev',
        prevEl: '._clients-next',
        clickable: true
      },
    }
  }  

});