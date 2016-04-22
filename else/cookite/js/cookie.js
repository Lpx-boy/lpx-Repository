var Cookie = function (){
	//添加cookie 
	this.add = function(name, value, hours) {
		var dt = new Date().getTime();
		var life  = dt+7* 1000 * 60;//默认过期时间一周
		if(hours>0)
		{
		   life = dt +hours * 1000 * 60;
		}
		var cookieStr = name + "=" + escape(value) + ";expires=" + new Date(life).toGMTString(); 
		document.cookie = cookieStr;
	};
	//获取cookie值 
	this.get = function(name) {
		var cookies = document.cookie.split(";"); 
		if (cookies.length > 0) { 
		 for(var i=0; i<cookies.length;i++)
		 { 
		 		var newcookie = cookies[i].split("="); 
		 		if ($.trim(newcookie[0]) == $.trim(name))
				return unescape(newcookie[1]); 
		 }
  
		}
		return null;
	};
	//删除cookie 
	this.remove = function(name) {
		var cookieStr = name + "=" + escape('null') + ";expires=" + new Date().toGMTString();
		document.cookie = cookieStr;
	};
}