$( document ).ready(function() {
  AOS.init({
    startEvent: 'DOMContentLoaded',
    duration: 800,
    offset: 120,
    delay: 50,
    once: false,
    easing: 'ease-out',
    disable: 'mobile'
  });

  new SimpleBar(document.querySelector('.tutorial-list'));

  const accordionBtn = document.querySelectorAll('.faq-accordion-head')

  accordionBtn.forEach(item => {
    item.addEventListener('click', function() {
      const parent = item.closest('.faq-accordion')
      const accordionBody = parent.querySelector('.faq-accordion-body')
      const accordionHead= parent.querySelector('.faq-accordion-head')

      accordionBody.classList.toggle('active')
      accordionHead.classList.toggle('active')
    })
  })
});

function setupVideoPlayer() {
  const playPauseButton = document.querySelectorAll('.play');
  const videoPlayers = document.querySelectorAll('.video-player');
  const icon1 = document.querySelector('.icon-1');
  const icon2 = document.querySelector('.icon-2');
  const icon3 = document.querySelector('.icon-3');
  const icon4 = document.querySelector('.icon-4');

  if (window.innerWidth > 1024) {
    // Обработчик для разрешений больше 1024px
    playPauseButton.forEach(item => {
      item.addEventListener('click', () => {
        const parent = item.closest('.video-player');
        const video = parent.querySelector('video');

        if (video.paused) {
          video.play();

          item.classList.add('active');

          if (icon1 || icon2 || icon3 || icon4) {
            icon1.classList.add('active');
            icon2.classList.add('active');
            icon3.classList.add('active');
            icon4.classList.add('active');
          }
        } else {
          video.pause();

          item.classList.remove('active');

          if (icon1 || icon2 || icon3 || icon4) {
            icon1.classList.remove('active');
            icon2.classList.remove('active');
            icon3.classList.remove('active');
            icon4.classList.remove('active');
          }
        }

        video.addEventListener('ended', () => {
          video.load();

          item.classList.remove('active');

          if (icon1 || icon2 || icon3 || icon4) {
            icon1.classList.remove('active');
            icon2.classList.remove('active');
            icon3.classList.remove('active');
            icon4.classList.remove('active');
          }
        }, false);
      });
    });
  } else {
    // Обработчик для разрешений меньше 1024px
    videoPlayers.forEach(item => {
      item.addEventListener('touchend', () => {
        const btn = item.querySelector('.play');
        const video = item.querySelector('video');

        if (btn.classList.contains('active')) {
          btn.classList.remove('active');
          video.pause();
        } else {
          btn.classList.add('active');
          video.play();
        }
      });
    });
  }

}

setupVideoPlayer()