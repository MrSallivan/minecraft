$(document).ready(function(){	$(".dots").click(function(){		$(".menuunvisible").toggleClass("menuvisible"); return false;	});});$(document).on('click touchstart',function(e) {	if (!$(e.target).is(".menuvisible")) {		$('.menuvisible').removeClass('menuvisible');	};});