
$.noConflict();

// Re-introduce $ scope to self executing function
(function($) {

  $(document).ready(function(){

    // Slide show function on main page
    $(function(){
      $('.slideshow img:gt(0)').hide();
      setInterval(function(){
        $('.slideshow :first-child').fadeOut(3000)
          .next('img').fadeIn(3000)
          .end().appendTo('.slideshow');},
      5500);
    });

  });

})(jQuery);
