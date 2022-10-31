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

$("#porthole").on("click", function(){
  console.log("port")
  $("#porthole").toggleClass('flip');
})


$("#turt").on("click", function() { 
  console.log("turt")
  $("#fish").addClass("animate__animated animate__swing")

})

$("#fish").on("click", function() { 
  console.log("fish")
  $("#fish").addClass("animate__animated animate__swing")
})


//quotes array
//when panel opens it displays a new quote everytime
$(".panel").on("panel:open", function(){
  var motivation = ["Just keep swimming", "I will find comfort in the rhythm of the sea.", "A fish will never realize its potential until you throw it in water.", "Never forget that only dead fish swim with the stream"];
var indexNum = Math.floor(Math.random()*motivation.length);
console.log(indexNum);
$("#quote").text(motivation[indexNum])
})
