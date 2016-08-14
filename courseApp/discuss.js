define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.span1Click = function(event){
		$.ajax({
				type : "POST",
				async : false,
				dataType : "json",
				url : "http://localhost:8090/pharos/pharos/course/saveCourseComment.do",
				data : {
					  "requestHeader" : "{'sysName' : 'user001','deviceSerialNum' : '011472001975695','locale' : 'zh_CN','token' : '4A2A86E418CAFA6C53128ECBE590D9FA'}",
					  "requestBody" : "{'discussUserId' : 'user001','discussCourseId' : '1','discussChapterId' : '2','discussContent' : '这门课程好！~'}"
				},
				success : function(resData) {
					alert(resData.responseBody.msg)
					justep.Shell.closePage();
				}
			});
	};

	return Model;
});