$(document).ready(function(){
    $('.spoiler_links').click(function(){
        $(this).parent().children('div.spoiler_body').toggle('');
        return false;
    });
});




$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});




// $(document).ready(function(){
// 	$(".owl-carousel").owlCarousel();
// });
//
// /*ForgotPassword*/
// $(document).ready(function() {
// 	$(".arrow-cart").click(function(){
// 		$(this).prev(".drop-dawn-forgot").toggleClass('open');
// 	});
// });
// $(document).ready(function() {
// 	$(".menu").click(function(){
// 		$(this)(".menu li").toggleClass('active');
// 	});
// });
// /* checkbox */
// $(function(){
// 	$('.checkbox input,.radio input').change(function(){
// 		if($(this).prop('checked')){
// 			$('[name='+$(this).attr('name')+']').not($(this)).parents('label').removeClass('checked');
// 			$(this).parents('label').addClass('checked');
// 		}
// 		else $(this).parents('label').removeClass('checked');
// 	}).change();
// });
// /*footer*/
// function footer_resize(){
// 	ft_realsize = $('#main-footer-inner').height();
// 	ft_short = 0;
// 	if ($('#main-footer').height()==ft_short){
// 		$('#main-footer').animate({height: ft_realsize}, 800 );
// 		$("html, body").animate({ scrollTop: $(document).height() }, 800);
// 	} else {
// 		$('#main-footer').animate({height: ft_short}, 800 );
// 	}
// }
//
// $(document).ready(function() {
//
// 	$("#owl-demo-index").owlCarousel({
// 		items : 4,
// 		itemsCustom : false,
// 		itemsDesktop : [1199,4],
// 		itemsDesktopSmall : [980,3],
// 		itemsTablet: [768,2],
// 		itemsTabletSmall: false,
// 		itemsMobile : [479,1],
// 		singleItem : false,
// 		itemsScaleUp : false,
// 		navigation : false, // Show next and prev buttons
// 		slideSpeed : 400,
// 		paginationSpeed : 800,
// 		pagination:false,
//
// 	});
// 	var owl = $("#owl-demo-index")
// 	$(".ar-left-a").click(function(){
// 		owl.trigger('owl.prev');
// 	})
// 	$(".ar-right-a").click(function(){
// 		owl.trigger('owl.next');
// 	})
//
// });
// /*owl-2*/
// $(document).ready(function() {
//
// 	$("#owl-demo-dash").owlCarousel({
// 		items : 2,
// 		itemsCustom : false,
// 		itemsDesktop : [1199,2],
// 		itemsDesktopSmall : [980,2],
// 		itemsTablet: [768,1],
// 		itemsTabletSmall: false,
// 		itemsMobile : [479,1],
// 		singleItem : false,
// 		itemsScaleUp : false,
// 		navigation : false, // Show next and prev buttons
// 		slideSpeed : 400,
// 		paginationSpeed : 800,
// 		pagination:true,
// 	});
// });
//
// /*owlCarousel*/
// $(document).ready(function() {
//
//     $("#owl-demo").owlCarousel({
//
//     autoPlay: 3000, //Set AutoPlay to 3 seconds
//
//     items : 3,
//     itemsDesktop : [1199,3],
//     itemsDesktopSmall : [979,3],
//     pagination:false
//     });
//
// });
//
// /*share*/
// $(document).ready(function() {
// 	$(".share-btn").click(function(){
// 		$(".share-bl-icon").toggle();
// 	});
// 	$(".share-bg").click(function () {
// 		$(".share-bl-icon").toggle();
// 	});
// });
//
// /*share*/
// $(document).ready(function() {
//
// 	$("#owl-demo-03").owlCarousel({
//
// 	navigation : false, // Show next and prev buttons
// 	slideSpeed : 300,
// 	pagination:false,
// 	singleItem:true
//
// 	});
// 	var owl = $("#owl-demo-03").data('owlCarousel');
// 		$("#arrow_next").click(function(){
// 			owl.next();
// 		})
// 		$("#arrow_prev").click(function(){
// 			owl.prev();
// 	})
//
// });
//
// /*photo_view_lightbox*/
// $(document).ready(function() {
//
// 	$("#owl-demo-04").owlCarousel({
// 	items : 3,
// 	navigation : false, // Show next and prev buttons
// 	slideSpeed : 300,
// 	pagination:false,
// 	singleItem:true
//
// 	});
// 	var owl = $("#owl-demo-04").data('owlCarousel');
// 		$("#arrow-ligh-next").click(function(){
// 			owl.next();
// 		})
// 		$("#arrow-ligh-prev").click(function(){
// 			owl.prev();
// 	})
//
// });
//
// /*photo_view_lightbox_sharelightweight*/
// $(document).ready(function() {
// 	$(".arr-share").click(function(){
// 		$(".share-block").toggle();
// 		$(this).parent('.al-right').addClass('cl-al-rig');
// 	});
// });
//
// /*Dropdowns*/
// $(document).ready(function() {
// 	$(".your-account,.cart-items").click(function(){
// 		var $el = $(this);
// 		$el.find(".drop-dawn-forgot").toggle();
// 		$el.find(".drop-dawn-forgot").unbind("mouseleave").mouseleave(function(){
// 			$(this).hide();
// 		});
// 	});
// });
//
// /*Videos*/
//
// $(document).ready(function(){
// 	$('.tit-menu-left').click(function(){
// 		$(this).next(".drop-dawn-videos").toggleClass('open');
//
// 	})
//
// });
// /*shopping-cart*/
// $(document).ready(function(){
// 	$('.sh_title_menu').toggle(function(){
// 		$(this).parent('.sh-but_menu').next(".sh_drop_dawn").stop(true,true).slideDown();
// 		$(this).find(".faq-ar img").attr("src","images/arrow-all.png");
// 	},function(){
// 		$(this).parent('.sh-but_menu').next(".sh_drop_dawn").stop(true,true).slideUp();
// 		$(this).find(".faq-ar img").attr("src","images/arrow-lin.png");
//
// 	})
//
// });
//
// $(document).ready(function() {
// 	$(".qwe1").click(function(){
// 		$(".blcok_pay").show();//.toggleClass('open');
// 		$(".blcok_pay-2").hide();
// 	});
// });
// $(document).ready(function() {
// 	$(".qwe2").click(function(){
// 		$(".blcok_pay").hide();//.toggleClass('open');
// 		$(".blcok_pay-2").show();
// 	});
// });
//
// $(document).ready(function() {
// 	$(".cr2_dawn_menu a").click(function(){
// 		if($(this).parent().find('ul').length){
// 			if($(this).parent().find('ul').hasClass("opened")) {
// 				$(this).parent().find('ul').stop(true, true).slideUp().removeClass("opened");
// 			}else{
// 				$(this).parent().find('ul').stop(true, true).slideDown().addClass("opened");
// 			}
// 			return false;
// 		}
// 	});
// });
//
// $(document).ready(function() {
// var owl = $('.owl-carousel-2');
// owl.owlCarousel({
// 	margin: 0,
// 	loop: true,
// 	items:2,
// 	responsive: true,
// 	dots: true,
// 	nav:false,
// 	responsiveClass:true,
// 	responsive:{
// 		0:{
// 			items:1,
// 			nav:false
// 		},
// 		600:{
// 			items:1,
// 			nav:false
// 		},
// 		1000:{
// 			items:1,
// 			nav:false,
// 			loop:false
// 		},
// 		1200:{
// 			items:2,
// 			nav:false,
// 			loop:false
// 		}
// 	}
// })
// });
// $(document).ready(function(){
// 	$('.week').click(function(){
// 		$(this).parent().toggleClass('open');
//
// 	})
//
// });
// $(document).ready(function(){
// 	$('.ollbloks').click(function(){
// 		$(this).toggleClass('open');
//
// 	})
// });
//
//
// $(document).ready(function(){
// 	$("#somescroll").on("click","a", function (event) {
// 		//отменяем стандартную обработку нажатия по ссылке
// 		event.preventDefault();
// 		//забираем идентификатор бока с атрибута href
// 		var id  = $(this).attr('href'),
// 		//узнаем высоту от начала страницы до блока на который ссылается якорь
// 		top = $(id).offset().top;
//
// 		//анимируем переход на расстояние - top за 1500 мс
//
// 		$('body,html').animate({scrollTop: top}, 1500);
//
// 	});
//
// });
