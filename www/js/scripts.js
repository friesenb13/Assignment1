var app = new Framework7({
  // App root element
  
  el: '#app',
  // ... other parameters
  routes: [
    {
      path: '/',
      url: 'index.html',
    },
    {
      path: '/page2/',
      url: 'pages/page2.html',
    },
    {
      path: '/page3/',
      url: 'pages/page3.html',
    },
  ],
  
  
});
var mainView = app.views.create('.view-main')

$("#turt").on("click", function(){
  console.log("turt");
  // $("#bubble").fadeIn();
})



//code pen
// $(document).ready(function() {
//   var $magic = $(".magic"),
//       magicWHalf = $magic.width() / 2;
//   $(document).on("mousemove", function(e) {
//     $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
//   });
// });
