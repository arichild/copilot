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
    videoPlayers.forEach(item => {
      const video = item.querySelector('video');

      video.addEventListener('play', () => {
        const btn = item.querySelector('.play')
        btn.classList.add('active')

        video.setAttribute("controls","controls")

        if (icon1) icon1.classList.add('active');
        if (icon2) icon2.classList.add('active');
        if (icon3) icon3.classList.add('active');
        if (icon4) icon4.classList.add('active');
      });
      video.addEventListener('pause', () => {
        const btn = item.querySelector('.play')
        btn.classList.remove('active')

        video.removeAttribute("controls")

        if (icon1) icon1.classList.remove('active');
        if (icon2) icon2.classList.remove('active');
        if (icon3) icon3.classList.remove('active');
        if (icon4) icon4.classList.remove('active');
      });
    });

    playPauseButton.forEach(item => {
      const parent = item.closest('.video-player');
      const video = parent.querySelector('video');

      item.addEventListener('click', () => {
        if (video.paused) {
          video.play();
          video.setAttribute("controls","controls")

          item.classList.add('active');

          if (icon1) icon1.classList.add('active');
          if (icon2) icon2.classList.add('active');
          if (icon3) icon3.classList.add('active');
          if (icon4) icon4.classList.add('active');
        } else {
          video.pause();
          video.removeAttribute("controls")

          item.classList.remove('active');

          if (icon1) icon1.classList.remove('active');
          if (icon2) icon2.classList.remove('active');
          if (icon3) icon3.classList.remove('active');
          if (icon4) icon4.classList.remove('active');
        }

        video.addEventListener('ended', () => {
          video.load();
          video.removeAttribute("controls")

          item.classList.remove('active');

          if (icon1) icon1.classList.remove('active');
          if (icon2) icon2.classList.remove('active');
          if (icon3) icon3.classList.remove('active');
          if (icon4) icon4.classList.remove('active');
        }, false);
      });
    });
  } else {
    videoPlayers.forEach(item => {
      const btn = item.querySelector('.play');
      const video = item.querySelector('video');

      // Добавляем обработчики событий только один раз
      video.addEventListener('play', () => {
        btn.classList.add('active');
        video.setAttribute("controls", "controls");

        if (icon1) icon1.classList.add('active');
        if (icon2) icon2.classList.add('active');
        if (icon3) icon3.classList.add('active');
        if (icon4) icon4.classList.add('active');
      });

      video.addEventListener('pause', () => {
        btn.classList.remove('active');
        video.removeAttribute("controls");

        if (icon1) icon1.classList.remove('active');
        if (icon2) icon2.classList.remove('active');
        if (icon3) icon3.classList.remove('active');
        if (icon4) icon4.classList.remove('active');
      });

      item.addEventListener('click', () => {
        // Включаем/выключаем видео по состоянию
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    });
  }
}

setupVideoPlayer()