define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/courseApp/course'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cYRFfeq';
	this._flag_='b88be579188da17b0855835d56b6f5d9';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"courseId":{"define":"courseId","name":"courseId","relation":"courseId","type":"String"},"courseName":{"define":"courseName","label":"课程名称","name":"courseName","relation":"courseName","type":"String"},"courseTime":{"define":"courseTime","label":"课程时间","name":"courseTime","relation":"courseTime","rules":{"time":true},"type":"Time"},"courseType":{"define":"courseType","name":"courseType","relation":"courseType","type":"String"},"courseUrl":{"define":"courseUrl","name":"courseUrl","relation":"courseUrl","type":"String"},"exciseId":{"define":"exciseId","name":"exciseId","relation":"exciseId","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"courseId","initData":"[]","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"commentContent":{"define":"commentContent","label":"commentconyent","name":"commentContent","relation":"commentContent","type":"String"},"commentName":{"define":"commentName","label":"commentname","name":"commentName","relation":"commentName","type":"String"},"content":{"define":"content","label":"content","name":"content","relation":"content","type":"String"},"fId":{"define":"fId","label":"ID","name":"fId","relation":"fId","rules":{"integer":true},"type":"Integer"},"name":{"define":"name","label":"name","name":"name","relation":"name","type":"String"},"photo":{"define":"photo","label":"photo","name":"photo","relation":"photo","type":"String"},"praise":{"define":"praise","label":"praise","name":"praise","relation":"praise","type":"String"},"state":{"define":"state","label":"state","name":"state","relation":"state","type":"String"},"time":{"define":"time","label":"time","name":"time","relation":"time","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"dataCustomRefresh"},"idColumn":"fId","limit":20,"xid":"data"});
}}); 
return __result;});