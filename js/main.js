$('#works-carousel').owlCarousel({
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
$('#latest-carousel').owlCarousel({
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
$(window).on("scroll", function() {
    if($(window).scrollTop() > 600) {
        // $("#header1").addClass(".back");
        $(".navbar").css("background-color","#0f0f0a")
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar").css("background-color","transparent")
    }
});