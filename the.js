$(function() {
    function center() { 
	var offset = $(window).height()/2 - 90;
	$("#name").css("margin-top", offset);
    }
    $(window).resize(center);
    center();
});
