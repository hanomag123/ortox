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
        slidesPerView: 1,
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
            slidesPerView: 3,
          },

          500: {
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
        slidesPerGroup: 1,
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
              buttons.forEach(el => el.classList.remove('hover'));
            }
          }
        },

        breakpoints: {

          850: {
            slidesPerView: 'auto',
            slidesPerGroup: 3,
          },

          500: {
            slidesPerView: 'auto',
            slidesPerGroup: 2,
          },
        }
      })

    })
  }
  const buttons = document.querySelectorAll('.reviews__swiper .swiper-slide');

  function removeHover() {
    if (!event.target.closest('.hover')) {
      buttons.forEach(el => el.classList.remove('hover'));
      document.removeEventListener('click', removeHover);
    }

  }

  if (buttons.length) {
    buttons.forEach(el => {
      el.addEventListener('click', function () {
        if (!this.classList.contains('hover')) {
          buttons.forEach(el => el.classList.remove('hover'));
          this.classList.add('hover');
          document.addEventListener('click', removeHover);
        } else {
          buttons.forEach(el => el.classList.remove('hover'));
          document.removeEventListener('click', removeHover);
        }
      })
    })
  }


  const radioContainers = document.querySelectorAll('.radio-container');

  if (radioContainers.length) {
    radioContainers.forEach(function (radioContainer) {
      radioContainer.addEventListener('click', function () {
        radioContainers.forEach(function (container) {
          if (container !== radioContainer) {
            container.querySelector('input').checked = false;
          }
        });
      });
    });
  }




  const selectInput = document.querySelector(".select-input");
  const selectedOption = document.querySelector(".selected-option");
  const arrow = document.querySelector(".arrow");
  const optionsContainer = document.querySelector(".options-container");

  const optionsList = document.querySelectorAll(".option");

  if (selectInput) {
    selectInput.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
      arrow.classList.toggle("active");
    });
  }

  if (optionsList.length) {
    optionsList.forEach((option) => {
      option.addEventListener("click", () => {
        selectedOption.innerHTML = option.innerHTML;
        optionsContainer.classList.remove("active");
        arrow.classList.remove("active");
      });
    });
  }

  document.addEventListener("click", (event) => {
    if (selectInput) {
      const isClickInside = selectInput.contains(event.target);

      if (!isClickInside) {
        optionsContainer.classList.remove("active");
        arrow.classList.remove("active");
      }
    }
  });



  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

});

function modalHandler() {
  const modal = document.querySelector(`${this.dataset?.modal}`) || this
  if (modal.classList.contains('regModal') && modal.hidden) {
    disableScroll();
  } else {
    enableScroll();
  }
  if (modal) {
    if (modal.hidden) {
      modal.hidden = !modal.hidden
      modal.style.setProperty('pointer-events', 'auto');
      setTimeout(() => {
        modal.style.opacity = 1
      }, 10);
    } else {
      modal.style.opacity = 0
      modal.style.setProperty('pointer-events', null);
      const numb = Number(getComputedStyle(modal).transitionDuration.match(/(\d+\.\d+)|(\d+)/g)[0]);
      if (numb > 0) {
        modal.addEventListener('transitionend', hideaftertransition);
      } else {
        modal.hidden = true
      }
    }
  }
}

const regModal = document.querySelectorAll('.regModal');

if (regModal) {
  regModal.forEach(el => {
    el.addEventListener('click', function () {
      if (event.target.classList.contains('regModal')) {
        modalHandler.apply(this);
      }
    });
    const closeButton = el.querySelector('.close-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        modalHandler.apply(el);
      });
    }
  });
}

const buttonsModal = document.querySelectorAll('[data-modal]');

function hideaftertransition() {
  this.hidden = true
  this.removeEventListener('transitionend', hideaftertransition);
}

if (buttonsModal.length) {
  buttonsModal.forEach(el => el.addEventListener('click', modalHandler));

}

function addMask() {
  [].forEach.call(document.querySelectorAll('input[type="tel"]'), function (input) {
    let keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      this.parentElement.classList.remove('error');
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

  });

}
addMask();

function disableScroll() {
  // Get the current page scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  document.documentElement.style.setProperty('scroll-behavior', 'auto');

  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  document.documentElement.style.setProperty('scroll-behavior', null);
  window.onscroll = function () { };
}