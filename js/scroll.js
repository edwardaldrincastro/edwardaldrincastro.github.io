$(document).ready(function () {
  var stickyHeight = $('nav').height();
  var screenHeight = $(document).height();
  var nav = screenHeight < 1024 ? 0 : 80;
  var offset = screenHeight < 1024 ? -100 : -80;
    $('a.nav-item').click(function(e){
        targetSection = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(targetSection).offset().top - 80
        }, 800)
        e.preventDefault();
  });
});
