/**
 * Created by Web Developer on 27/12/2016.
 */

$(document).ready(function () {
    var docposition = $(document).scrollTop();

    if (docposition >= 500) {
        $('.top-button').show();
    }

    $(window).scroll(function(){
        if (window.pageYOffset >= 500) {
            $('.top-button').fadeIn(500);
        } else {
            $('.top-button').fadeOut(500);
        }
    });

   $('.btn-rolltop').click(function (evt) {
       evt.preventDefault();
       $('html').animate({scrollTop: 0}, 1200);
   });

    $('#nav-titpage').click(function (evt) {
        evt.preventDefault();
        $('html').animate({scrollTop: 0}, 1200);
    });
});
