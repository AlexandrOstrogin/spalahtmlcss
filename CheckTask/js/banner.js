var speed=5000; //time for delay

var time_t=18000; //time for timeout

var time_r=1700; //time for replacement

var now_visible=0;

var number;

var counter=0;

var busy=false;

$(document).ready(function() {

	$(".banner").css('opacity',0);

	number = $("#banner_modul .banner").size();

	while (counter<number) {

			counter++;

			$("#banner_modul .banner_nav_block").append('<span class="banner_nav"></span>');

		}

	$("#banner_modul .banner_nav_block .banner_nav").eq(0).toggleClass('activ');

	$("#banner_modul .banner").eq(0).show().animate({opacity:1}, time_r, t_next_bann());

	

	$('.banner_nav').bind('click', function() {

		now_visible = $(this).index();

		$(".banner_nav").removeClass('activ');

		$(".banner").stop().animate({opacity:0}, time_r, function(){$("#banner_modul .banner").eq(now_visible-1).hide();});

		$(".banner_nav").eq(now_visible).addClass('activ');

		$("#banner_modul .banner").eq(now_visible).stop().show().animate({opacity:1}, time_r);

		if (!busy) {busy=true; setTimeout(zadergka, time_t);}

  		});

});



function next_bann(){

	if (busy) return ;

	$("#banner_modul .banner").eq(now_visible).animate({opacity:0}, time_r, function(){$("#banner_modul .banner").eq(now_visible-1).hide();});

	$("#banner_modul .banner_nav_block .banner_nav").eq(now_visible).toggleClass('activ');

	now_visible++;

	if (now_visible>=number) now_visible=0;

	$("#banner_modul .banner").eq(now_visible).show().animate({opacity:1}, time_r, t_next_bann());

	$("#banner_modul .banner_nav_block .banner_nav").eq(now_visible).toggleClass('activ');

};



function t_next_bann(){setTimeout(next_bann, speed);}

function zadergka(){busy=false; next_bann();}