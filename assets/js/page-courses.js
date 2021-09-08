let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(document).ready(function () {
  $('*[placeholder="Контактный телефон *"]*').mask('+7(000)-000-00-00');

  $('.rocket-anchor a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 700);
  });

  $('.slider-courses .slider-item').matchHeight({
    byRow: true,
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $('.rocket-anchor').addClass('show');
    } else {
      $('.rocket-anchor').removeClass('show');
    }
  });
});
