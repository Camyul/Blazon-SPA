(function($) {

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.navbar-nav li a').bind('click', function(event) {
            $('.navbar-nav li').removeClass('active');
            $(this).closest('li').addClass('active');
            var $anchor = $(this);
            var nav = $($anchor.attr('href'));
            if (nav.length) {
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');

                event.preventDefault();
            }
        });

    });

    $(function() {
        $('.bayNow').bind('click', function(event) {
            $('.navbar-nav li').removeClass('active');
            if ($(this)[0].innerText === 'Galery') {
                $('#gallery-li').addClass('active');
            } else {
                $('#pricing-li').addClass('active');
            }
            var $anchor = $(this);
            var nav = $($anchor.attr('href'));
            if (nav.length) {
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');

                event.preventDefault();
            }
        });
    });

    $(function() {
        $('.order-now').bind('click', function(event) {
            $('.navbar-nav li').removeClass('active');
            $('#contact-li').addClass('active');
            var $anchor = $(this);
            var nav = $($anchor.attr('href'));
            if (nav.length) {
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');

                event.preventDefault();
            }
        });
    });

    // $('body').flipLightBox({

    //     lightbox_text_status: 0,
    //     lightbox_navigation_status: 0

    // })

    $('.parallax-window').parallax({ imageSrc: 'assets/img/3.png' });

    wow = new WOW({}).init();


})(jQuery);
