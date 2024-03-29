/*********************************************************************************

	Template Name: Lanes Bootstrap5 Ecommerce Template
	Note: This is Main JS Here.

**********************************************************************************/


/*==========================
	Main Js Index 

    	01. Wow Active 
    	02. Youtub Popup
		04. Bg Color
		07. Catalogue Images 
		08. Slider Activation
		11. Scroll Up Activation
==============================*/

(function ($) {

	'use strict';

    /*======================= 
    	01. Wow Active 
    ======================*/

    new WOW().init();

	/*=========================== 
    	02. Youtub Popup 
    ============================*/

	$('.play__btn').yu2fvl();
	

	/*==================================
		04. Bg Color
	===================================*/

	var $bgcolor = $('.bg-color');
	$bgcolor.each(function () {
		var $this = $(this),
			$color = $this.data('bg-color');
		$this.css('background-color', $color);
	});


	/*----------------------------------
		07. Product Details Images 
	------------------------------------*/

	$('.product-details-images').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		infinite: true,
		centerMode: true,
		centerPadding: 0,
		prevArrow: '<span class="slider-navigation slider-navigation-prev"><i class="fa fa-caret-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-next"><i class="fa fa-caret-right"></i></span>',
		asNavFor: '.product-details-thumbs'
	});

	$('.product-details-thumbs').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		infinite: true,
		focusOnSelect: true,
		centerMode: true,
		centerPadding: 0,
		prevArrow: '<span class="slider-navigation slider-navigation-prev"><i class="fa fa-caret-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-next"><i class="fa fa-caret-right"></i></span>',
		asNavFor: '.product-details-images'
	});

	/*----------------------------------
		08. Slider Activation
	------------------------------------*/

	$('.slider-activation').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		infinite: true,
		centerPadding: 0,
		prevArrow: '<span class="slider-navigation slider-navigation-prev"><i class="fa fa-caret-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-next"><i class="fa fa-caret-right"></i></span>',
	});


	/*==================================
		11. Scroll Up Activation
	=====================================*/

	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'slide'
	});



})(jQuery)