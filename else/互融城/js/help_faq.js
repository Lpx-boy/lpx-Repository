$(".help_right_center_top_header_main_top ul li").click(function(){
	$(".help_right_center_top_header_main_top ul li span").fadeTo(300,0.5).removeClass("first_span");
	$(this).children(".help_right_center_top_header_main_top ul li span").fadeTo(100,1).addClass("first_span");
	$(".help_right_center_top_header_main_top ul li a").removeClass("first_a");
	$(this).children(".help_right_center_top_header_main_top ul li a").addClass("first_a");

});
$(".help_right_center_top_header_main_top ul li").eq(0).click(function(){
	$(".help_right_center_top_header_main_bottom_text img").animate({left:60},500);
	$(".bottom_text_left").css({display:"none"});
	$(".bottom_text_left").eq(0).css({display:"block"});
});
$(".help_right_center_top_header_main_top ul li").eq(1).click(function(){
	$(".help_right_center_top_header_main_bottom_text img").animate({left:190},500);
	$(".bottom_text_left").css({display:"none"});
	$(".bottom_text_left").eq(1).css({display:"block"});
});
$(".help_right_center_top_header_main_top ul li").eq(2).click(function(){
	$(".help_right_center_top_header_main_bottom_text img").animate({left:318},500);
	$(".bottom_text_left").css({display:"none"});
	$(".bottom_text_left").eq(2).css({display:"block"});
});
$(".help_right_center_top_header_main_top ul li").eq(3).click(function(){
	$(".help_right_center_top_header_main_bottom_text img").animate({left:448},500);
	$(".bottom_text_left").css({display:"none"});
	$(".bottom_text_left").eq(3).css({display:"block"});
});
$(".help_right_center_top_header_main_top ul li").eq(4).click(function(){
	$(".help_right_center_top_header_main_bottom_text img").animate({left:576},500);
	$(".bottom_text_left").css({display:"none"});
	$(".bottom_text_left").eq(4).css({display:"block"});
});
$(".help_right_center_top_header_main_top ul li").eq(5).click(function(){
	$(".help_right_center_top_header_main_bottom_text img").animate({left:706},500);
	$(".bottom_text_left").css({display:"none"});
	$(".bottom_text_left").eq(5).css({display:"block"});
});