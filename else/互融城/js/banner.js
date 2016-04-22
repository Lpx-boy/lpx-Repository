var x=0;
$(".banner dl dt").hide();
$(".banner dl dt:first").show();
$(".banner_button ul li").click(function(){
	$(".banner_button ul li").removeClass("banner_button_first");
	$(this).addClass("banner_button_first");
var x=$(".banner_button ul li").index(this);
	$(".banner dl dt").fadeOut();
	$(".banner dl dt").eq(x).fadeIn();	
});
function times(){
	if(x<$(".banner dl dt").length-1){
		x=x+1;
	}else{
		x=0;
	}
	$(".banner dl dt").fadeOut(500);
	$(".banner dl dt").eq(x).fadeIn(500);
	$(".banner_button ul li").removeClass("banner_button_first");
	$(".banner_button ul li").eq(x).addClass("banner_button_first");	
}
var zd=setInterval(times,3000);
$(".banner").mouseover(function(){
	clearInterval(zd);	
}).mouseout(function(){
	zd=setInterval(times,3000);
});