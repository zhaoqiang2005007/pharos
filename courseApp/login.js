define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!cordova-plugin-device");
	
	var Model = function() {
		this.callParent();
	};
	
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";
	};
	
	Model.prototype.registerClick = function(event){
		justep.Shell.showPage("register");
	};
	
	Model.prototype.loginBtnClick = function(event){
		var phoneInput = this.comp("nameInput").val();
		var passwordInput = this.comp("password1").val();
		alert("设备号: "+window.device.uuid)
		 $.ajax({
				type : "POST",
				async : false,
				dataType : "json",
				url : "http://192.168.1.3:8090/pharos/pharos/user/login.do",
				data : {
					"requestHeader" : "",
		            "requestBody" : "{'logonId' : '"+phoneInput+"','logonPwd' : '"+passwordInput+"','deviceSn' : '"+window.device.uuid+"'}"
				},
				success : function(resData) {
					alert("成功登录");
					localStorage.setItem("userName", phoneInput);
					localStorage.setItem("device", phoneInput);
					justep.Shell.closePage();
				}
			});
	};
	
	return Model;
});