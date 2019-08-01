$(document).ready(function () {
  $('button#resume').click(function () {
    window.open("https://edwardaldrincastro.github.io/Castro, Edward Aldrin N..pdf")
  })
  $('button#email').click(function () {
    window.open("mailto:edwardaldrincastro@gmail.com")
  })
  $('svg#back-to-top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 800);
  })

  $(window).scroll(function () {
    var stickyHeight = $('nav').height();
    var headerHeight = $('header').height();
    var windowScroll = $(this).scrollTop();
    // $('#parallax-header').css('top', -(windowScroll * 0.2) + "px");

    if (headerHeight - windowScroll - 40 < stickyHeight) {
      // $('.sticky-nav').css('top', '0px');
      $('#back-to-top').css('right', '50px');
    }

    else {
      // $('.sticky-nav').css('top', '-200px');
      $('#back-to-top').css('right', '-100px');
    }
  });
});