$(document).ready(function(){

  if( window.innerWidth < 768 ) {
    $('.social').removeClass('pull-right');
  }

  /*
   The navigation has a transparent background by default, but it's fixed on the top,
   so when the user scrolls down the background of the menu turns white.
   */
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $(".homenav").toggleClass('scrolled', $(this).scrollTop() > 300);
      $(".scrolled .homelogo").removeClass("hidden");
      if ($(document).height() < 1000){
        $(".scrolled .homelogo").removeClass("hidden");
      }
    });
  });

  /*
   Scrollspy settings
   */
  $('body').scrollspy({target: "#scrollspy"});
  $("#scrollspy").on("activate.bs.scrollspy", function(){
    $(this).parent().addClass('is-active');
  });

  // $('#scrollspy').on("click", "a", function(event) {
  //   event.preventDefault();
  //   var id = $(this).attr('href');
  //   var element = $('div'+id);
  //   console.log(element);
  //   $('html, body').stop().animate({
  //     scrollTop: element.offset().top
  //   }, 1000);
  // });
  /*
   Close the burger menu, if you click outside of it
   */
  $('body').bind('click', function(e) {
    if($(e.target).closest('.navbar').length == 0) {
      // click happened outside of .navbar, so hide
      var opened = $('.navbar-collapse').hasClass('collapse in');
      if ( opened === true ) {
        $('.navbar-collapse').collapse('hide');
      }
    }
  });


});

