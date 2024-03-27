function mobileSlider() {
	$(document).ready(function(){
    	$(".requirements__cards").slick();	
	})
}

if(window.innerWidth < 768) {
    mobileSlider();
}

$(window).resize(function(e){
    if(window.innerWidth < 768) {
        if(!$('.slider').hasClass('slick-initialized')){
            mobileSlider();
        }

    }else{
        if($('.slider').hasClass('slick-initialized')){
            $('.slider').slick('unslick');
        }
    }
});

$(window).on('load resize', function() {
  if ($(window).width() <768) {
    $('#items:not(.slick-initialized)').slick({
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $("#items.slick-initialized").slick("unslick");
  }
});
