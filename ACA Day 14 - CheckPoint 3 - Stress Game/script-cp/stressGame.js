$(document).ready(function()
{
    $("h1").hover(function()
    {
    $(this).addClass("navuak")
    }, function(){
      $(this).removeClass("navuak")
    });

var clicked = 0;
var divclicked =$("<div id='clicked'></div>");
$("body").append(divclicked);
  
setInterval(function(){ 

	var color = ["#0D9CBA", "#0A484D", "#771C55", "#0F6976", "#B4309B","#lightseagreen"];

	var randcolor = color[Math.floor(Math.random() * color.length)];
	var randX = Math.floor((Math.random()*500)+1);
	var randY = Math.floor((Math.random()*1900)+1);


	var circle = $("<div/>");
	circle.addClass("circle");
	circle.css({
		top:randX,
		left:randY,
		backgroundColor:randcolor
	});
	$('body').append(circle); 

	circle.click(function(){
	$(this).remove();
	clicked= clicked+1;
	divclicked.text(clicked);
	})
	


}, 1000);

  
  
})
