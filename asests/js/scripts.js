$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
            nav:false
        },
        768:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
  .  }
})

$('#hamburger').click(function() {
    $('.hamburger').toggleClass('open');
    $('.menu').toggleClass('open');
});