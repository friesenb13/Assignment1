var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
// var mainView = app.views.create('.view-main')


$(document).ready(function() {
  var $magic = $(".magic"),
      magicWHalf = $magic.width() / 2;
  $(document).on("mousemove", function(e) {
    $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
  });
});