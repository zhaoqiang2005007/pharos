window.__justep.__ResourceEngine.loadCss([{url: '/v_2db3c6cc99824cf2b60bf0884a0f5439l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_d571e4ebea2748f8bff9010f075ece39l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_587f7d253cde4e46b06780cf1b4d71c2l_zh_CNs_d_m/system/core.min.js','/v_b407c122ae1246b3a407f3cf4d322ff7l_zh_CNs_d_m/system/common.min.js','/v_5df63450bd2242d6b3a2a72880de71b8l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
