/*--------------------- Copyright (c) 2020 -----------------------
[Master Javascript]
Project: Machine For Hire
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var PharmaShop = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {
			if(!this.initialised) {
				this.initialised = true;
			} 
			else {
				return;
			}
		/*-------------- Pharma Shop Functions Calling ---------------------------------------------------
		------------------------------------------------------------------------------------------------*/
			this.submenu_toggle();
			this.main_banner_slider();
			this.ps_testimonial_slider();
			this.ps_partner_slider();
			this.bottom_top();
			this.loader();
		},
		
		/*-------------- Pharma Shop Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/

		// sub menu start
		submenu_toggle: function() {
			$('.ps-title').click(function(j) {
			
			var dropDown = $(this).closest('.ps-menu-children').find('.ps-submenu');
			$(this).closest('.ps-toggle').find('.ps-submenu').not(dropDown).slideUp();
			
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.ps-toggle').find('.ps-title.active').removeClass('active');
				$(this).addClass('active');
			}
			
			dropDown.stop(false, true).slideToggle();
			j.preventDefault();
			})
		},
		// sub menu end

		// banner slider			
			main_banner_slider: function () {
				var swiper = new Swiper('.ps-banner-swiper-main-wrapper .swiper-container', {
					loop: true,
					speed: 1500,
					cubeEffect: {
						slideShadows: false,
					},
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: '.ps-banner-slider-btn .swiper-button-next',
						prevEl: '.ps-banner-slider-btn .swiper-button-prev',
					},
					
				});
			},
		// banner slider
		// testimonials slider			
		ps_testimonial_slider: function () {
				var swiper = new Swiper('.ps-testmonial-slider-wrapper .swiper-container', {
					slidesPerView: 3,
					spaceBetween: 30,
					loop: true,
					speed: 1000,
					autoplay: {
						delay: 2500,
						disableOnInteraction: false,
					},
					pagination: {
						el: '.ps-testmonial-slider-wrapper .swiper-pagination',
						clickable: true,
					},
				
					breakpoints: {
						1199: {
						  slidesPerView: 3,
						  spaceBetween: 30,
						},
						992: {
						  slidesPerView: 3,
						  spaceBetween: 30,
						},
						768: {
						  slidesPerView: 2,
						  spaceBetween: 30,
						},
						575: {
						  slidesPerView: 2,
						  spaceBetween: 15,
						},
						320: {
						  slidesPerView: 1,
						  spaceBetween: 15,
						}
					}
				});
			},
		// testimonial slider
		// partner slider			
		ps_partner_slider: function () {
			var swiper = new Swiper('.ps-partner-main-wrapper .swiper-container', {
				slidesPerView: 6,
				spaceBetween: 30,
				loop: true,
				speed: 1000,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},				
				breakpoints: {
					1199: {
					  slidesPerView: 6,
					  spaceBetween: 30,
					},
					992: {
					  slidesPerView: 5,
					  spaceBetween: 30,
					},
					768: {
					  slidesPerView: 4,
					  spaceBetween: 30,
					},
					575: {
					  slidesPerView: 3,
					  spaceBetween: 15,
					},
					320: {
					  slidesPerView: 1,
					  spaceBetween: 15,
					}
				}
			});
		},
	// partner slider
	// Bottom To Top
	bottom_top: function(){  
		if($('#button').length > 0){
			
			var btn = $('#button');

			$(window).scroll(function() {
			  if ($(window).scrollTop() > 300) {
				btn.addClass('show');
			  } else {
				btn.removeClass('show');
			  }
			});

			btn.on('click', function(e) {
			  e.preventDefault();
			  $('html, body').animate({scrollTop:0}, '300');
			});


		}
	},
// Bottom To Top
// loader			
		loader: function () {
		jQuery(window).on('load', function() {
			$(".loader").fadeOut();
			$(".spinner").delay(500).fadeOut("slow");
		});
	}, 
		// loader
	
	};
	PharmaShop.init();	

}(jQuery));	

// sign in popup
$(".login").on('click',function(){
	$("body").addClass('ps-signin-popup_open');
  });
	$(".close").on('click',function(){
	$("body").removeClass('ps-signin-popup_open');

  });

// register popup
  $(".register").on('click',function(){
	$("body").removeClass('ps-signin-popup_open');
	$("body").addClass('ps-register-popup_open');
  });
	$(".close").on('click',function(){
	$("body").removeClass('ps-register-popup_open');

  });

// toggle menu

  	$('.ps-toggle-btn').on('click',function(){
			$('body').toggleClass('menu_open');
		})


 //On scroll fixed menu
 $(window).scroll(function() {
	var wh = window.innerWidth;
	if (wh > 767) {
		var h = window.innerHeight;
		var window_top = $(window).scrollTop() + 1;
		if (window_top > 100) {
			$('.ps-navigation-wrapper').addClass('ps-navbar-fixed');
		} else {
			$('.ps-navigation-wrapper').removeClass('ps-navbar-fixed');
		}
	}
});


