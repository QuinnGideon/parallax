// http://www.javascriptkit.com/dhtmltutors/parallaxscrolling/ this is the tutorial page


window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

 var smalldiv = document.getElementById('small')
 var mediumdiv = document.getElementById('medium')
 var largediv = document.getElementById('large')
 var XLdiv = document.getElementById('XL')

 function parallaxCircles () {
 	var scrolltop = window.pageYOffset;
 	smalldiv.style.top = scrolltop * 1 + 'px'
 	mediumdiv.style.top = scrolltop * 0.7 + 'px'
 	largediv.style.top = scrolltop * 2 + 'px'
 	XLdiv.style.top = scrolltop * .9 + 'px'
 }

 window.addEventListener('scroll', function(){
 	requestAnimationFrame(parallaxCircles)
 }, false)