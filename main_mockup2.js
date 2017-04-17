$(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
        $('.top_nav').removeClass('home');
        $('.top_nav').addClass('little');
        $("li > a").addClass('small_link');
        // $('.top').addClass('appear');
        $(".top_nav > nav > li > a").removeClass('white');
        $(".top_nav > nav > li > a").addClass('black');
    } else {
        $('.top_nav').addClass('home');
        $('.top_nav').removeClass('little');
        $("li > a").removeClass('small_link');
        // $('.top').removeClass('appear');
        $(".top_nav > nav > li > a").addClass('white');
    }
});
// $(window).scroll(function() {
//     var scrollPos = -20 + $(window).scrollTop() * (-1) * 0.5;
//     if ($(window).scrollTop() < $(window).height() * 0.7) {
//         $("#content").css('margin-top', scrollPos + "px");
//     }
// });