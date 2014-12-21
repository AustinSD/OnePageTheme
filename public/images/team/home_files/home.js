(function(){  Template.home.events({

    });
    Meteor.startup(function() {
        
        //jQuery to collapse the navbar on scroll
        $(window).scroll(function() {
            if ($(".navbar").offset().top > 150) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });

        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
            $('.page-scroll a').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });

        //Collapse Navbar When It's Clickicked
        $('.navbar-nav li a, .navbar-brand').click(function() {
            $(".navbar-collapse.in").collapse('hide');
        });
        
        $(window).load(function(){
                $('.parallaxBg').parallax("50%", 0.4);
            });
});

})();
