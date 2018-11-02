//////////////////////////////////
// NAV BAR
//////////////////////////////////

//////// SMOOTH SCROLL ////////////

$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.scroll').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate(
          {
            scrollTop: target.offset().top
          },
          1500
        ); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

//////////////////////////////////
// I MAKE TYPING ANIMATION
//////////////////////////////////

var typed = new Typed('.type', {
  strings: [
    'Amazing Custom Websites',
    'Word Press Look Good',
    // 'Web Designs That Get Results',
    'Amazing user experiences',
    'Awesome Meatloaf',
    'Brands Have a Revival'
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  smartBackspace: true // Default value
});
