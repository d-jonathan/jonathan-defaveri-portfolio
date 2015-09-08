
$(document).ready( function() {

$('.project').hover(function() {
    $(this).css("cursor", "pointer");
    $(this).animate({
        width: "50%",
        height: "50%"
    }, 'slow');

}

});