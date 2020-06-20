$('.owl-carousel').owlCarousel({
    // loop:true,
    margin:10,
    center:false,
    nav:false,
    // navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});