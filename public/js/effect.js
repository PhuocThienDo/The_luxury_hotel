$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
	$('.scroll-top').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 'fast')
	});
	var offset = 600, //thiết lập điều kiện khoảng cách hiển thị 
	$back_to_top = $('.scroll-top');
	$(window).scroll(function(){
		($(this).scrollTop() > offset ) ? $back_to_top.addClass('visible-top') :  $back_to_top.removeClass('visible-top');
	});
	$('.numbe').each(function () {
	    $(this).prop('Counter',100).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 10000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});
    $('.numbe2').each(function () {
	    $(this).prop('Counter',100).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 4000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});
	 $('.numbe3').each(function () {
	    $(this).prop('Counter',100).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 9000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});
	 $('.numbe4').each(function () {
	    $(this).prop('Counter',100).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 7000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});
	