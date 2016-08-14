define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/messageDialog/messageDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/courseApp/main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cU3mURb';
	this._flag_='ba1f4a7e69cf47239f91639fff16b2b7';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"imgUrl":{"define":"imgUrl","label":"图片","name":"imgUrl","relation":"imgUrl","type":"String"},"linkUrl":{"define":"linkUrl","label":"链接地址","name":"linkUrl","relation":"linkUrl","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"imgDataCustomRefresh"},"idColumn":"imgUrl","limit":20,"xid":"imgData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"courseId":{"define":"courseId","label":"课程ID","name":"courseId","relation":"courseId","type":"String"},"courseName":{"define":"courseName","label":"课程名称","name":"courseName","relation":"courseName","type":"String"},"courseState":{"define":"courseState","label":"更新状态","name":"courseState","relation":"courseState","type":"String"},"imageUrl":{"define":"imageUrl","label":"图片路径","name":"imageUrl","relation":"imageUrl","type":"String"},"videoUrl":{"define":"videoUrl","label":"课程视频地址","name":"videoUrl","relation":"videoUrl","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"courseDataCustomRefresh"},"idColumn":"courseId","limit":20,"xid":"courseData"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"downLoadPrecent":{"define":"downLoadPrecent","name":"downLoadPrecent","relation":"downLoadPrecent","type":"String"},"fLocalName":{"define":"fLocalName","name":"fLocalName","relation":"fLocalName","type":"String"},"fUrl":{"define":"fUrl","name":"fUrl","relation":"fUrl","type":"String"},"fileId":{"define":"fileId","name":"fileId","relation":"fileId","type":"String"},"fileName":{"define":"fileName","name":"fileName","relation":"fileName","type":"String"},"fileSize":{"define":"fileSize","name":"fileSize","relation":"fileSize","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"downloadDataCustomRefresh"},"idColumn":"fileId","initData":"[{\"fileId\":\"0001\",\"fileName\":\"词汇详细分析第二讲\",\"fileSize\":\"20.5M\",\"downLoadPrecent\":\"56\",\"fUrl\":\"http://movie.ks.js.cn/flv/other/1_0.mp4\",\"fLocalName\":\"1.mp4\"}]","limit":20,"xid":"downloadData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"articleContent":{"define":"articleContent","name":"articleContent","relation":"articleContent","type":"String"},"articleId":{"define":"articleId","name":"articleId","relation":"articleId","type":"String"},"articleTitle":{"define":"articleTitle","name":"articleTitle","relation":"articleTitle","type":"String"},"browseCount":{"define":"browseCount","name":"browseCount","relation":"browseCount","rules":{"integer":true},"type":"Integer"},"discussCount":{"define":"discussCount","name":"discussCount","relation":"discussCount","rules":{"integer":true},"type":"Integer"},"recommendCount":{"define":"recommendCount","name":"recommendCount","relation":"recommendCount","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{"onCustomRefresh":"articleDataCustomRefresh"},"idColumn":"articleId","limit":6,"xid":"articleData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"answerContent":{"define":"answerContent","name":"answerContent","relation":"answerContent","type":"String"},"answerCount":{"define":"answerCount","name":"answerCount","relation":"answerCount","type":"String"},"questionAsker":{"define":"questionAsker","name":"questionAsker","relation":"questionAsker","type":"String"},"questionContent":{"define":"questionContent","name":"questionContent","relation":"questionContent","type":"String"},"questionId":{"define":"questionId","name":"questionId","relation":"questionId","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"questionDataCustomRefresh"},"idColumn":"questionId","limit":20,"xid":"questionData"});
}}); 
return __result;});