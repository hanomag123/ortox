document.addEventListener("DOMContentLoaded", () => {

  const swipers = document.querySelectorAll('.actions__swiper');
  if (swipers.length) {
    swipers.forEach(el => {
      new Swiper(el, {
        loop: true,
        speed: 400,
        slidesPerView: 'auto',
        spaceBetween: 0,
        navigation: {
          nextEl: el.parentElement.querySelector('.next'),
          prevEl: el.parentElement.querySelector('.prev'),
        },
        pagination: {
          el: el.parentElement.querySelector('.swiper-pagination'),
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="actions-bullet swiper-pagination-bullet"></span>`; 
          },
        },
      })
    })
  }

  const swipers2 = document.querySelectorAll('.specialists__swiper');
  if (swipers2.length) {
    swipers2.forEach(el => {
      new Swiper(el, {
        loop: true,
        speed: 400,
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        navigation: {
          nextEl: el.parentElement.querySelector('.next'),
          prevEl: el.parentElement.querySelector('.prev'),
        },
        pagination: {
          el: el.parentElement.querySelector('.swiper-pagination'),
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="actions-bullet swiper-pagination-bullet"></span>`; 
          },
        },

        breakpoints: {

          850: {
              slidesPerView: 'auto',
          },
        }
      })
    })
  }
  
  const swipers3 = document.querySelectorAll('.reviews__swiper');
  if (swipers3.length) {
    swipers3.forEach(el => {
      const swiper = new Swiper(el, {
        loop: true,
        speed: 400,
        slidesPerView: 'auto',
        spaceBetween: 0,
        slidesPerGroup: 3,
        navigation: {
          nextEl: el.parentElement.querySelector('.next'),
          prevEl: el.parentElement.querySelector('.prev'),
        },
        pagination: {
          el: el.parentElement.querySelector('.swiper-pagination'),
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="actions-bullet swiper-pagination-bullet"></span>`; 
          },
        },
        on: {
          transitionEnd: function () {
            const buttons = document.querySelectorAll('.reviews__swiper .swiper-slide');
            if (buttons.length) {
              buttons.forEach(el=>el.classList.remove('hover'));
            }
          }
        },
      })

    })
  }
  const buttons = document.querySelectorAll('.reviews__swiper .swiper-slide');

  function removeHover() {
    if (!event.target.closest('.hover')) {
      buttons.forEach(el=>el.classList.remove('hover'));
      document.removeEventListener('click', removeHover);
    }
    
  }

  if (buttons.length) {
    buttons.forEach(el=>{
      el.addEventListener('click',function () {
        if (!this.classList.contains('hover')) {
          buttons.forEach(el=>el.classList.remove('hover'));
          this.classList.add('hover');
          document.addEventListener('click', removeHover);
        } else {
          buttons.forEach(el=>el.classList.remove('hover'));
          document.removeEventListener('click', removeHover);
        }
      })
    })
  }



});











