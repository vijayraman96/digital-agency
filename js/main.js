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
$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
    // $('.nav-link').animate({
    //     right: '40%',
    //     opacity:1
    // },2000, 'linear')
  
});

// close button 
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
    
}); 
$(window).on("scroll", function() {
    if($(window).scrollTop() > 600) {
        // $("#header1").addClass(".back");
        $("header").css("background-color","#0f0f0a")
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header").css("background-color","transparent")
    }
});
