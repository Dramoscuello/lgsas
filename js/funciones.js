$(function(){
	$('#cd-main-nav ul li a').on('click', function(e){
		e.preventDefault();
		var strAncla = $(this).attr('href');
		$('body, html').stop('true, true').animate({
			scrollTop: $(strAncla).offset().top
		},1500);
	});
});
$('.goTop').click(function(){
	$('body, html').animate({
		scrollTop: '0px'
	});
   
});
$( document ).ready(function() {
    $('.redes').hover(function(){
		$(this).addClass('animated rotateIn infinite');
	});
	$('.redes').mouseleave(function(){
		$(this).removeClass('animated rotateIn infinite');
	});
});