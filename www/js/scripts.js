var app = new Framework7({
  // App root element
  
  el: '#app',
  // ... other parameters
  routes: [
    {
      path: '/page1/',
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
var $$  = Dom7;

$("#porthole").on("click", function(){
  console.log("port")
  $("#porthole").toggleClass('flip');
})

$("#fish").on("click", function() { 
  console.log("fish")
  $("#fish").addClass("animate__animated animate__swing")
})


$$(document).on('page:init', '.page[data-name="page2"]', function(e){ 
  $("#turt").on("click", function() { 
    console.log("turt")
    $("#turt").addClass("animate__animated animate__swing")
  
  })
  })

  $$(document).on('page:init', '.page[data-name="page3"]', function(e){ 
  $("#clown").on("click", function() { 
    console.log("clown")
    $("#clown").addClass("animate__animated animate__swing")
  
  })
  $("#neon").on("click", function() { 
    console.log("neon")
    $("#neon").addClass("animate__animated animate__swing")
  
  })
})

//quotes array
//when panel opens it displays a new quote everytime
$(".panel").on("panel:open", function(){
  var motivation = ["Just keep swimming", "I will find comfort in the rhythm of the sea.", "A fish will never realize its potential until you throw it in water.", "Never forget that only dead fish swim with the stream"];
var indexNum = Math.floor(Math.random()*motivation.length);
console.log(indexNum);
$("#quote").text(motivation[indexNum])
})
