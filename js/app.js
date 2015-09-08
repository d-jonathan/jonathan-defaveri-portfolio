
$(document).ready( function() {

	$('.introduction-expand').hover(function() {
		$('.introduction-content').slideDown(400);
		$('.introduction-expand').hide()
	});

	$(window).scroll(function() {
		$('.introduction-content').slideDown(400);
		$('.introduction-expand').hide()

	});


	$('.project img').mouseenter(function(e) {
		var box = $(e.target)
	    box.css("cursor", "pointer");
	    box.animate({
	        width: "105%",
	        height: "130%"
	    }, 'slow');

	  });

	$('.project img').mouseleave(function(e) {
		var box = $(e.target)
	    box.animate({
	        width: "100%",
	        height: "100%"
	    }, 'slow');
	});

});