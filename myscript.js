$(document).ready(function(){

    $("#image").hover(function(){
        $(this).addClass("img2", 500);
        
    }, function(){
        $(this).removeClass("img2", 500);
        
    });

	$("#index-c1, #index-c2, #index-c3").hover(function(){
		$(this).addClass("hov", "500");
	},function(){
		$(this).removeClass("hov", "500");
	});

	$("#index-c2").click(function() {
		$("#work-pop-overlay").fadeIn(500);
		$("#work-pop").fadeIn(500);
	});

	$("#confirm").click(function(){
		$("#work-pop-overlay").fadeOut(500);
		$("#work-pop").fadeOut(500);
	});

	$("#index-c3").click(function() {
		$("#ref-pop-overlay").fadeIn(500);
		$("#ref-pop").fadeIn(500);
	});

	$("#ref-pop-overlay").click(function() {
		$("#ref-pop-overlay").fadeOut(500);
		$("#ref-pop").fadeOut(500);
	});
});