window.__justep.__ResourceEngine.loadCss([{url: '/v_4c128df615514a50b82f78353d7dbc41l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_c008476d4b0945f9bcc4fadd54d082d1l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_2a2827c6ace24d7cbd41ea490c3dff81l_zh_CNs_d_m/system/components/comp2.min.js','/v_24c235b013f3465ea5df1dbeae87a3b7l_zh_CNs_d_m/system/core.min.js','/v_0a87b6c010fb465e8df6e1d5f7e33ed4l_zh_CNs_d_m/system/common.min.js','/v_b735e7847f18428c9d9fd522712729b6l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/messageDialog/messageDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/bootstrap/alert/alert');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/bar/bar');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/courseApp/courseMain'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cNJJ3Uv';
	this._flag_='8e2a7510f290d3ff45754aa3e93e7907';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"sectionAnswer":{"define":"sectionAnswer","name":"sectionAnswer","relation":"sectionAnswer","type":"String"},"sectionId":{"define":"sectionId","name":"sectionId","relation":"sectionId","rules":{"integer":true},"type":"Integer"},"sectionName":{"define":"sectionName","label":"课程名称","name":"sectionName","relation":"sectionName","type":"String"},"sectionTime":{"define":"sectionTime","label":"课程时间","name":"sectionTime","relation":"sectionTime","rules":{"integer":true},"type":"Integer"},"sectionType":{"define":"sectionType","name":"sectionType","relation":"sectionType","type":"String"},"sectionVideoUrl":{"define":"sectionVideoUrl","name":"sectionVideoUrl","relation":"sectionVideoUrl","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"sectionId","initData":"[]","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"commentContent":{"define":"commentContent","label":"commentconyent","name":"commentContent","relation":"commentContent","type":"String"},"commentName":{"define":"commentName","label":"commentname","name":"commentName","relation":"commentName","type":"String"},"content":{"define":"content","label":"content","name":"content","relation":"content","type":"String"},"fId":{"define":"fId","label":"ID","name":"fId","relation":"fId","rules":{"integer":true},"type":"Integer"},"name":{"define":"name","label":"name","name":"name","relation":"name","type":"String"},"photo":{"define":"photo","label":"photo","name":"photo","relation":"photo","type":"String"},"praise":{"define":"praise","label":"praise","name":"praise","relation":"praise","type":"String"},"state":{"define":"state","label":"state","name":"state","relation":"state","type":"String"},"time":{"define":"time","label":"time","name":"time","relation":"time","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"dataCustomRefresh"},"idColumn":"fId","limit":20,"xid":"data"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"discussContent":{"define":"discussContent","name":"discussContent","relation":"discussContent","type":"String"},"discussUserImage":{"define":"discussUserImage","name":"discussUserImage","relation":"discussUserImage","type":"String"},"discussUserName":{"define":"discussUserName","name":"discussUserName","relation":"discussUserName","type":"String"},"index":{"define":"index","name":"index","relation":"index","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"discussDataCustomRefresh"},"idColumn":"index","limit":20,"xid":"discussData"});
}}); 
return __result;});
