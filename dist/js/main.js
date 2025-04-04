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
  const icon1 = document.querySelector('.icon-1');
  const icon2 = document.querySelector('.icon-2');
  const icon3 = document.querySelector('.icon-3');
  const icon4 = document.querySelector('.icon-4');

  playPauseButton.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.closest('.video-player')
      const video = parent.querySelector('video')

      console.log(video)
      if (video.paused) {
        video.play();

        item.style.visibility = "hidden"

        item.style.opacity = "0"

        if(icon1 || icon2 || icon3 || icon4) {
          icon1.classList.add('active')
          icon2.classList.add('active')
          icon3.classList.add('active')
          icon4.classList.add('active')
        }
      } else {
        video.pause();

        item.style.opacity = "1"

        item.style.visibility = "visible"

        if(icon1 || icon2 || icon3 || icon4) {
          icon1.classList.remove('active')
          icon2.classList.remove('active')
          icon3.classList.remove('active')
          icon4.classList.remove('active')
        }
      }

      video.addEventListener('ended',function(){
        video.load();

        item.style.opacity = "1"

        item.style.visibility = "visible"

        if(icon1 || icon2 || icon3 || icon4) {
          icon1.classList.remove('active')
          icon2.classList.remove('active')
          icon3.classList.remove('active')
          icon4.classList.remove('active')
        }
      },false);
    });
  })
}

setupVideoPlayer()