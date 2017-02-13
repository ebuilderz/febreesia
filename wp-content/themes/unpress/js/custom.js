jQuery(document).ready(function ($) {

var dtGlobals = {}; // Global storage
dtGlobals.isMobile	= (/(Android|BlackBerry|iPhone|Palm|Symbian|Opera Mini|IEMobile|webOS)/.test(navigator.userAgent));
dtGlobals.isAndroid	= (/(Android)/.test(navigator.userAgent));
dtGlobals.isiOS		= (/(iPhone|iPod|iPad)/.test(navigator.userAgent));
dtGlobals.isiPhone	= (/(iPhone|iPod)/.test(navigator.userAgent));
dtGlobals.isiPad	= (/(iPad|iPod)/.test(navigator.userAgent));

var unpress_window_width = $(window).width();

$(window).load(function(){
  if (jQuery('div').hasClass('unpress-sticky')) {	
  	$(".unpress-sticky").sticky({ topSpacing: 0 });
  }
  
});

//////////////////////////////////////////////
// Organize Menu
//////////////////////////////////////////////

$('#main-nav .sub-links').not($('.dropdown-menu .sub-links')).wrapAll('<div class="dropdown-menu"><div class="yamm-content 1111"><div class="row full-width" />');/* Fix for Custom Link only */ 

$('#main-nav .dropdown-menu .yamm-content .row').each(function (index, element) {

	if ($(element).children().length === 1) {

		$(element).addClass("full-width");

		$(".full-width .sub-posts").removeClass('col-lg-9 col-md-9 col-sm-9');
		$(".full-width .sub-posts").addClass('col-lg-12 col-md-12 col-sm-12');

		$(".full-width .sub-links").removeClass('col-lg-3 col-md-3 col-sm-3');
		$(".full-width .sub-links").addClass('col-lg-12 col-md-12');
		$('.sub-links .dropdown-menu').remove();
	}

	if ($(element).children().length === 0) {
		$(element).remove();
	}
});

//////////////////////////////////////////////
// Sidebar in Mobile View
//////////////////////////////////////////////

var sidebar = $('#pageslide');
$('.unpress-main-menu').children().clone().removeClass('dropdown').removeAttr('id').removeAttr('class').appendTo($(sidebar));
$('.unpress-secondary-menu, .sidebar-mobile').children().clone().removeAttr('id').removeAttr('class').appendTo($(sidebar));
$(sidebar).children().nextUntil().wrap('<div class="block" />');
	
//////////////////////////////////////////////
// Masonry
//////////////////////////////////////////////
var $container = $('.masonry .post-row');
$container.imagesLoaded(function(){
	$container.masonry({
		itemSelector: '.post-holder',
	});
});


/*************** Tag Cloud ****************/
var tagfix = $('.tagcloud a').html();
jQuery('.tagcloud a').each(function(){
	$(this).removeAttr('style');
	var tagfix = $(this).html();
	jQuery(this).html('').append('&#35;'+tagfix);
});


//////////////////////////////////////////////
//Sticky boxes
//////////////////////////////////////////////
function colUpdateSize(){

	// Get the dimensions of the viewport
	var width = $('.sticky-col').width();
	$('.sticky-box').css( "width", [width] );
	$('.sticky-box').css( "height", [width] );
};
$(document).ready(colUpdateSize);    // When the page first loads
$(window).resize(colUpdateSize);     // When the browser changes size  


//////////////////////////////////////////////
// ISO SLIDER
//////////////////////////////////////////////
$('.iosSlider').iosSlider({
	desktopClickDrag: true,
	snapToChildren: true,
	infiniteSlider: true,
	snapSlideCenter: true,
	navPrevSelector: '#prev',
	navNextSelector: '#next',
	onSlideComplete: slideComplete,
	onSliderLoaded: sliderLoaded,
	onSlideChange: slideChange,
	autoSlide: false,
	keyboardControls: true,
	responsiveSlides: true,
	responsiveSlideContainer: true,
	elasticPullResistance: 0.6,
	frictionCoefficient: 0.92,
	elasticFrictionCoefficient: 0.6,
	snapFrictionCoefficient: 0.92
});


function slideChange(args) {
	jQuery('.sliderContainer .slider .item').removeClass('selected');
	jQuery('.sliderContainer .slider .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
}

function slideComplete(args) {
	if(!args.slideChanged) return false;
}

function sliderLoaded(args) {		
	slideChange(args);
}

//////////////////////////////////////////////
// Elastic Slider
//////////////////////////////////////////////
$(function() {
	$('#ei-slider').eislideshow({
		animation			: 'right',
		autoplay			: true,
		slideshow_interval	: 3000,
		titlesFactor		: 0
	});
});
//////////////////////////////////////////////
//iLightbox
//////////////////////////////////////////////
$('.ilightbox').iLightBox({ 
	skin: 'dark',
	path: 'horizontal',
	fullViewPort: 'fill',
	infinite: false,
	styles: {
		nextOffsetX: 0,
		nextOpacity: .55,
		prevOffsetX: 0,
		prevOpacity: .55
	},
	thumbnails: {
	normalOpacity: .6,
	activeOpacity: 1
	}
});

//////////////////////////////////////////////
// WP Native Gallery
//////////////////////////////////////////////
$('.custom-gallery .gallery-item a').iLightBox({
	skin: 'dark',
	path: 'horizontal',
	fullViewPort: 'fill',
	infinite: false,
	styles: {
		nextOffsetX: 75,
		nextOpacity: .55,
		prevOffsetX: 75,
		prevOpacity: .55
	},
	thumbnails: {
		normalOpacity: .6,
		activeOpacity: 1
	}
});

/* Show a smooth animation when images are loaded */
if(dtGlobals.isMobile || dtGlobals.isiPad){
	$('.csstransitions .post-holder').css('opacity','1');
}
else{
	
	$('.post-holder').on('inview', function(event, isInView) {
		if (isInView) {
			$(this).addClass('inview');
		}
	});
}



//////////////////////////////////////////////
// Post Share
//////////////////////////////////////////////
$('#show-inline').bind('click', function(event) {
	event.preventDefault();
	$.iLightBox([{ URL: '#share-page', type: 'inline' }]);
  });
//////////////////////////////////////////////
//Fluid Width Video
//////////////////////////////////////////////
if ( $().fitVids ){
	$('.video-wrapper').fitVids();
	$('.entry-content').fitVids();
}
//////////////////////////////////////////////
//  Gallery 
//////////////////////////////////////////////
if ( $().imgLiquid ){
	$('.custom-gallery').find('.gallery-item').imgLiquid({
		fill:true
	});
}


// Using custom configuration

$(window).load(function(e) {
    
	$('#unPress-Carousel-Related-Gallery').carouFredSel({
		auto				: false,
		items               : 3,
		direction           : "left",
		prev				: '#galleries-carousel-prev',
		next				: '#galleries-carousel-next',
		scroll : {
			items           : 1,
			easing          : "easeOutExpo",
			duration        : 500,                         
			pauseOnHover    : true
		},
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
		}                   
	});
	
	$('#unPress-Carousel-Related-Video').carouFredSel({
		auto				: false,
		items               : 4,
		direction           : "left",
		prev				: '#videos-carousel-prev',
		next				: '#videos-carousel-next',
		scroll : {
			items           : 1,
			easing          : "quadratic",
			duration        : 500,                         
			pauseOnHover    : true
		},
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
		}                  
	});
	
	/*================================================================
	=
	=		Gallery 
	=================================================================*/
	
	if(dtGlobals.isMobile){
		$('#unPress-Single-Gallery-Carousel').carouFredSel({
			auto				: false,
			direction           : "left",
			items               : 2,
			prev				: '#single-galleries-carousel-prev',
			next				: '#single-galleries-carousel-next',
			scroll : {
				items           : 1,
				easing          : "quadratic",
				duration        : 500,                         
				pauseOnHover    : true
			},
			mousewheel: false,
			swipe: {
				onMouse: true,
				onTouch: true
			}                 
		});
	}
	else if( dtGlobals.isiPad ){
		$('#unPress-Single-Gallery-Carousel').carouFredSel({
			auto				: false,
			direction           : "left",
			items               : 3,
			prev				: '#single-galleries-carousel-prev',
			next				: '#single-galleries-carousel-next',
			scroll : {
				items           : 1,
				easing          : "quadratic",
				duration        : 500,                         
				pauseOnHover    : true
			},
			mousewheel: false,
			swipe: {
				onMouse: true,
				onTouch: true
			}                 
		});
	}else{
		$('#unPress-Single-Gallery-Carousel').carouFredSel({
			auto				: false,
			direction           : "left",
			items               : 4,
			prev				: '#single-galleries-carousel-prev',
			next				: '#single-galleries-carousel-next',
			scroll : {
				items           : 1,
				easing          : "quadratic",
				duration        : 500,                         
				pauseOnHover    : true
			},
			mousewheel: false,
			swipe: {
				onMouse: true,
				onTouch: true
			}                 
		});
	}
	$('#unPress-Homepage-Gallery-Carousel').carouFredSel({
		direction           : "left",
		prev				: '#gallery-carousel-prev',
		next				: '#gallery-carousel-next',
		scroll : {
			items           : 1,
			easing          : "quadratic",
			duration        : 500,                         
			pauseOnHover    : true
		},
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
		}                 
	});

	
	$('#unPress-Homepage-Interviews-Carousel').carouFredSel({
		direction           : "left",
		items               : 5,
		prev				: '#interviews-carousel-prev',
		next				: '#interviews-carousel-next',
		scroll : {
			items           : 1,
			easing          : "quadratic",
			duration        : 500,                         
			pauseOnHover    : true
		},
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
		}                 
	});
	
	$('.widget-latest-post-carousel').carouFredSel({
		auto				: false,
		items               : 1,
		responsive			: true,
		direction           : "left",
		prev				: '.latest-post-gallery-carousel-prev',
		next				: '.latest-post-gallery-carousel-next',
		scroll : {
			items           : 1,
			easing          : "quadratic",
			duration        : 500,                         
			pauseOnHover    : true
		},
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
		}                 
	});
	
	$('.widget-instagram-slider').carouFredSel({
		auto				: true,
		items               : 1,
		responsive			: true,
		direction           : "left",
		prev				: '.instagram-slider-prev',
		next				: '.instagram-slider-next',
		scroll : {
			items           : 1,
			easing          : "quadratic",
			duration        : 500,                         
			pauseOnHover    : true
		},
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
		}                 
	});
	
	$('.widget-latest-interviews-carousel').carouFredSel({
		auto				: false,
		items               : 1,
		responsive			: true, 
		direction           : "left",
		prev				: '.latest-interviews-carousel-prev',
		next				: '.latest-interviews-carousel-next',
		scroll : {
			items           : 1,
			easing          : "quadratic",
			duration        : 500,                         
			pauseOnHover    : true
		},
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
		}                 
	});
	
	$('.widget-featured-post-carousel').carouFredSel({
		auto				: false,
		items               : 1,
		responsive			: true,
		direction           : "left",
		prev				: '.featured-post-gallery-carousel-prev',
		next				: '.featured-post-gallery-carousel-next',
		scroll : {
			items           : 1,
			easing          : "quadratic",
			duration        : 500,                         
			pauseOnHover    : true
		},
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
		}                 
	});
	
});/* End load function*/


});/* End jQuery*/


jQuery(document).ready(function ($) {
/////////////////////////////////////////////
//Isotope portfolio
/////////////////////////////////////////////
var $container = $('#archive-list');
$container.imagesLoaded( function(){
	$container.isotope({
		itemSelector : '.block',
		layoutMode: 'sloppyMasonry'
	});
});


//filter items when filter link is clicked
jQuery('#isotope-filter a').click(function(){
	var selector = $(this).attr('data-filter');
	$container.isotope({ filter: selector });
	jQuery(this).parents('ul').find('li').removeClass('active');
	jQuery(this).parent().addClass('active');
		return false;
});

});

/////////////////////////////////////////////
//Flexslider
/////////////////////////////////////////////
jQuery(window).load(function() {
	jQuery('.flexslider').flexslider({
		animation: "slide",
		slideshow: true,
		controlNav: false, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		directionNav: true,
		animationLoop: true, //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
		pauseOnHover: true,
		slideshowSpeed: 6000, //Integer: Set the speed of the slideshow cycling, in milliseconds
		animationSpeed: 500, //Integer: Set the speed of animations, in milliseconds 
	});
});

/////////////////////////////////////////////
//ScrollUp
/////////////////////////////////////////////
jQuery(function () {
	jQuery.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 300, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationSpeed: 200, // Animation in speed (ms)
        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
				//scrollTarget: false, // Set a custom target element for scrolling to the top
        scrollText: 'Scroll to top', // Text for element, can contain HTML
        scrollTitle: false, // Set a custom <a> title if required.
        scrollImg: false, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647 // Z-Index for the overlay
	});
});