define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/courseApp/download'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cV3aqIb';
	this._flag_='1790e00d015daae38fefff5a0e2801a9';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAuthor":{"define":"fAuthor","label":"发布人","name":"fAuthor","relation":"fAuthor","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fLocalName":{"define":"fLocalName","label":"本地文件名称","name":"fLocalName","relation":"fLocalName","type":"String"},"fTitle":{"define":"fTitle","label":"列表标题","name":"fTitle","relation":"fTitle","type":"String"},"fUrl":{"define":"fUrl","label":"下载地址","name":"fUrl","relation":"fUrl","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[{\"fID\":\"1\",\"fTitle\":\"文件下载测试1\",\"fAuthor\":\"biyao\",\"fUrl\":\"http://movie.ks.js.cn/flv/other/1_0.mp4\",\"fLocalName\":\"1.mp4\"},{\"fID\":\"2\",\"fTitle\":\"文件下载测试2\",\"fAuthor\":\"biyao\",\"fUrl\":\"http://sd.downxia.com/down/pptview2003.rar\",\"fLocalName\":\"pptview2003.rar\"},{\"fID\":\"3\",\"fTitle\":\"文本下载测试3\",\"fAuthor\":\"biyao\",\"fUrl\":\"http://filelx.liqucn.com/didi_psngr_v4.2.5_50010.apk\",\"fLocalName\":\"didi_psngr_v4.2.5_50010.apk\"}]","limit":20,"xid":"data1"});
}}); 
return __result;});