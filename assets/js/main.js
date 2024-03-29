//for the screen preloade

//$(document).ready(function() {
////Preloader
//$(window).on("load", function() {
//preloaderFadeOutTime = 500;
//function hidePreloader() {
//var preloader = $('.spinner-wrapper');
//preloader.fadeOut(preloaderFadeOutTime);
//}
//hidePreloader();
//});
//});





//for the animations on the work and tesimonials section

$(function() {
    smoothScroll(600);
    workBelt();
    workLoad();
    clientStuff();
});


//smooth scroll function
function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event){
        var target = $( $(this).attr('href'));
        
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

//function for switching between thumb-wrap and work-wrap

function workBelt() {
    $('.thumb-unit').click(function() {
        $('.work-belt').css('left', '-100%');  
        $('.work-container').show();
    });
    $('#return').click(function(){
         $('.work-belt').css('left', '0%');
         $('.work-container').hide(400);    
    });
};


function workLoad() {
    $.ajaxSetup({cache: true});
    $('.thumb-unit').click(function() {
        var $this = $(this),
            newTitle = $this.find('strong').text(),
            newFolder = $this.data('folder'),
            spinner = '<div class="loader">Loading...</div>',
            newHTML ='/assets/work/'+ newFolder +'.html';
        $('.work-load').html(spinner).load(newHTML);
        $('.project-title').text(newTitle);
    });
};


//function for adding the class active for the client units

function clientStuff() {
    $('.clients-unit').first().addClass('active-clients');
    $('.client-logo').first().addClass('active-client');
    $('.client-mobile-nav span').first().addClass('active-client-nav');
    
    $('.client-logo, .client-mobile-nav span').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);
    console.log(position);
    
    $('.clients-unit').removeClass('active-clients').eq(position).addClass('active-clients');
    $siblings.removeClass('active-client');
        if($this.hasClass('client-logo')) {
           $this.addClass('active-client');
            $('.client-mobile-nav span').removeClass('active-client-nav').eq(position).addClass('active-client-nav');
        } else {
            $siblings.removeClass('active-client-nav');
            $this.addClass('active-client-nav');
            $('.client-logo').removeClass('active-client').eq(position).addClass('active-client');
        }
});
    
    $('.client-control-next, .client-control-previous').click(function() {
        var $this = $(this),
            curActiveClient = $('.clients-belt').find('.active-clients'),
            position = $('.clients-belt').children().index(curActiveClient),
            clientNum = $('.clients-unit').length;
        
        if($this.hasClass('client-control-next')) {
            if(position < clientNum -1 ) {
                $('.active-clients').removeClass('active-clients').next().addClass('active-clients');
                $('.active-client').removeClass('active-client').next().addClass('active-client');
                
            } else {
                $('.clients-unit').removeClass('active-clients').first().addClass('active-clients');
                $('.client-logo').removeClass('active-client').first().addClass('active-client')
            }  
        } else {
            if(position === 0 ) {
                $('.clients-unit').removeClass('active-clients').last().addClass('active-clients');
                $('.client-logo').removeClass('active-client').last().addClass('active-client');
            } else {
                
                $('.active-clients').removeClass('active-clients').prev().addClass('active-clients');
                $('.active-client').removeClass('active-client').prev().addClass('active-client');
            } 
        }
        
    })
};


//for scrollreveal

window.sr = ScrollReveal();


// for the landing page
sr.reveal('.nav li', {
    origin: 'bottom',
    duration: 1600,
    scale: 0.9,
    opacity:0,
    mobile: false
})

sr.reveal('.logo', {
    origin: 'left',
    duration: 1600,
    scale: 0.8,
    opacity:0
})

sr.reveal('.intro-wrapper', {
    origin: 'right',
    duration:1600,
    mobile:false,
    scale: 0.5,
    opacity:0,
})

sr.reveal('#down-btn', {
    origin: 'bottom',
    duration: 1000,
    mobile:false,
    delay:500
});


// for about me section

sr.reveal('#about-me h3', {
    origin: 'top',
    duration: 1000
});

sr.reveal('.blurb', {
    origin: 'bottom',
    duration: 1000,
    viewFactor: 0.3,
});

sr.reveal('.face-img', {
    origin: 'top',
    delay: 300,
    duration: 1000,
    viewFactor: 0.2,
    mobile: false
});

sr.reveal('.for-reveal-left', {
    origin: 'left',
    duration: 1500,
    mobile: false,
    viewFactor: 0.2
});

sr.reveal('.for-reveal-right', {
    origin: 'right',
    duration: 1500, 
    mobile: false,
    viewFactor: 0.2
});

sr.reveal('.skill-unit',{
    duration: 1600,
    viewFactor:0.8,
    mobile: false
},200);


//for the work section

sr.reveal('#work h3', {
    duration: 1500,
    origin: 'top',
    mobile: false
});

sr.reveal('.thumb-unit', {
    duration: 2000,
    origin: 'bottom',
    opacity: 0
}, 300);


//for the testimonials(clients which we dont have any at the moment) section

sr.reveal('#clients h3', {
    duration: 1600,
    origin: 'top',
    mobile: false
})

sr.reveal('.client-control-next', {
    duration: 2000,
    origin: 'right',
    mobile: false
})

sr.reveal('.client-control-previous', {
    duration: 2000,
    origin: 'left',
    mobile: false
})

sr.reveal('.client-logo', {
    duration: 2000,
    origin: 'bottom',
    delay: 300,
    mobile: false
}, 200)


// for the contact section

sr.reveal('#contact', {
    duration: 2000, 
    origin: 'top',
    delay: 300,
    viewFactor: 0.5,
    mobile: false
})

sr.reveal('.social-links' , {
    duration: 2000,
    origin: 'bottom',
    viewFactor:0.4,
    opacity: 0,
    mobile: false
})

sr.reveal('.biglink', {
    duration: 2000,
    origin: 'top',
    viewFactor: 0.4,
    mobile: false
})


// for the form section

sr.reveal('#form h3', {
    duration: 2000,
    origin: 'top',
    viewFactor: 0.4,
    opacitY: 0,
    mobile: false
})

sr.reveal('form' , {
    duration: 2000,
    origin: 'bottom',
    viewFactor:0.6,
    opacity: 0,
    mobile: false
})

// for the footer section

sr.reveal('.nav-f', {
    duration: 2000,
    origin: 'left',
    opacity: 0,
    mobile: false
}, 100)

sr.reveal('footer .back-to-top', {
    duration: 2000,
    origin: 'right',
    opacity: 0,
    delay: 300,
    mobile: false
})















