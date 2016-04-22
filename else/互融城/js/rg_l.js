$(function(){
	$(".u-xy").click(function(){
		$(".m-formf").removeClass("f-dn");
	});
	$(".m-formf .cls").click(function(){
		$(this).parents(".m-formf").addClass("f-dn");
	});
	$(".u-wrap .u-rdoa").click(function(){
		var val = $(this).attr("data-val");
		$(this).addClass("u-rdoa-sel").siblings().removeClass("u-rdoa-sel");
		$(this).siblings(".rdov").val(val)
	});
	//验证
	$(".register").Validform({
		showAllError:true,
		tiptype:function(msg,o,cssctl){
			if(!o.obj.is("form")){
				var objtip=o.obj.parents("li").find(".Validform_checktip");
				cssctl(objtip,o.type);
				objtip.html(msg);
				o.obj.parents("li").find(".Validform_inr").show();
				if(o.type == 3){
					objtip.parent().removeClass("Validform_suc").addClass("Validform_ero");
				}else if(o.type == 2){
					objtip.parent().removeClass("Validform_ero").addClass("Validform_suc");
				}
			}	
		}
	});
	$("[datatype]").focusin(function(){
		$(this).parents("li").find(".Validform_inr").hide().siblings(".Validform_inf").show();
	}).focusout(function(){
		$(this).parents("li").find(".Validform_inf").hide().siblings(".Validform_inr").show();
	});
});
function resendcode(){
	var now = new Date();    
	var year = now.getFullYear();       //年   
	var month = now.getMonth() + 1;     //月   
	var day = now.getDate();            //日
	var timesign = year+'-'+month+'-'+day+' '+new Date().toLocaleTimeString();
	var mobile = $("#mobile").val();
	
	var mob = $("#mobile"),
		btn = $(".register_main_bottom");
	btn.attr('disabled', true);
	if(mob.hasClass("Validform_error") || mobile==null || mobile.length==0){
		mob.next().find(".Validform_inr").addClass("Validform_ero").show();
		mob.next().find(".Validform_checktip").addClass("Validform_wrong").text("请输入有效的手机号！");
		return false;
	}
	$.get("/register/sendregmobilecode",{
		"membertype":'broker',
		"mobile":mobile,
		"timesign":timesign
	},function(result){
		if(result=="1"){
			btn.next().find(".Validform_inr").addClass("Validform_suc").show();
			btn.next().find(".Validform_checktip").addClass("Validform_right").text("验证码已发送到您的手机，请查收！");
			var countdown = 80;
			var now = new Date().getTime();
			var interval = setInterval(function(){
				var seconds = countdown - parseInt((new Date().getTime() - now)/1000);
				btn.val('请等待('+seconds+')秒');
				if(seconds <= 0){
					btn.attr('disabled', false).val('点击获取验证码');
					clearInterval(interval);
				}
			}, 1000);
		}else{
			if(result=="3"){
				mob.next().find(".Validform_inr").addClass("Validform_ero").show();
				mob.next().find(".Validform_checktip").addClass("Validform_wrong").text("请输入有效的手机号！");
				return false;
			}else if(result=="2"){
				btn.next().find(".Validform_inr").addClass("Validform_suc").show();
				btn.next().find(".Validform_checktip").addClass("Validform_right").text("请不要频繁注册");
			}/*else{
				$("#mobile").next().html("<div class='Vbox'>手机号码格式错误<i></i></div>");
			}*/
		}
	},"html");
}