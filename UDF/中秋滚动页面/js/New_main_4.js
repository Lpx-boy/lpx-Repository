var vs=0;
$(".main_4_header ul li").click(function(){
	$(".main_4_header ul li").removeClass("first_li");
	$(this).addClass("first_li");
var a=$(".main_4_header ul li").index(this);	
	$(".content_box_c img").fadeOut();
	$(".content_box_c img").eq(a).fadeIn();
});
$(".big_l_arr").click(function(){
	if(vs<$(".content_box_c img").length-1){
		vs=vs+1;
	}else{
		vs=0;
	}
	$(".content_box_c img").fadeOut();
	$(".content_box_c img").eq(vs).fadeIn();
	$(".main_4_header ul li").removeClass("first_li");
	$(".main_4_header ul li").eq(vs).addClass("first_li");	
});
$(".big_r_arr").click(function(){
	if(vs<-3){
		vs=0;
	}else{
		vs=vs-1;
	}
	$(".content_box_c img").fadeOut();
	$(".content_box_c img").eq(vs).fadeIn();
	$(".main_4_header ul li").removeClass("first_li");
	$(".main_4_header ul li").eq(vs).addClass("first_li");		
});
function time(){
	if(vs<$(".content_box_c img").length-1){
		vs=vs+1;
	}else{
		vs=0;
	}
	$(".content_box_c img").fadeOut();
	$(".content_box_c img").eq(vs).fadeIn();
	$(".main_4_header ul li").removeClass("first_li");
	$(".main_4_header ul li").eq(vs).addClass("first_li");	
}
var times=setInterval(time,2500);
$(".main_4_top").mouseover(function(){
	clearInterval(times);	
}).mouseout(function(){
	times=setInterval(time,2500);	
});