// JavaScript Document
$(".submenu").click(function(){
	$(this).children("ul").slideToggle();
})

/*
//Para que el padre no se esconda  
$("ul").click(function(p){
	p.stopPropagation(); //Para q
})
*/