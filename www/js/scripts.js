var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
// var mainView = app.views.create('.view-main')

//code pen
$(document).ready(function() {
  var $magic = $(".magic"),
      magicWHalf = $magic.width() / 2;
  $(document).on("mousemove", function(e) {
    $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
  });
});


// Popover
// export default (props, { $, $f7, $on }) => {

  $on('pageInit', () => {
    // DOM events for About popover
    $('.popover-about').on('popover:open', function (e) {
      console.log('About popover open');
    });
    $('.popover-about').on('popover:opened', function (e) {
      console.log('About popover opened');
    });
  })

  // return $render;
// }