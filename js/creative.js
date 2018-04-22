(function($) {
    var flagMenuFix = false;
	$(function () {
		$(window).scroll(function () {
			if( $(this).width() > 500 ){
				if ($(this).scrollTop() > 10 && flagMenuFix == false ) {
					$('.navbar').addClass('header-fix-active');
					flagMenuFix = true;
				} else if($(this).scrollTop() <= 10 && flagMenuFix == true){
					flagMenuFix = false;
					$('.navbar').removeClass('header-fix-active');
				}
			}
		});
	});
})(jQuery); // End of use strict