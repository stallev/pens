console.log(125);
$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 500,
    easing: 'ease',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 500,
    pauseOnFocus: true,
    pauseOnHover: true,
  });
});