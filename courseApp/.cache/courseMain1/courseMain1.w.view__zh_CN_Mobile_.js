window.__justep.__ResourceEngine.loadCss([{url: '/v_8246924ec38d40a3a11c881e8dcf6b0fl_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_8e41b78433a54198a9522f09ccabf66el_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_c5ceb7f4656045fa807509510cc2b9a9l_zh_CNs_d_m/system/core.min.js','/v_1d95d358d9a94c939091fb63ed3a8f3dl_zh_CNs_d_m/system/common.min.js','/v_49700af344594f938bee056a32ce0d66l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/bar/bar');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/courseApp/courseMain1'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c6VjAva';
	this._flag_='af611172bc5bb44e7798cd3882644947';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"courseId":{"define":"courseId","name":"courseId","relation":"courseId","type":"String"},"courseName":{"define":"courseName","label":"课程名称","name":"courseName","relation":"courseName","type":"String"},"courseTime":{"define":"courseTime","label":"课程时间","name":"courseTime","relation":"courseTime","rules":{"time":true},"type":"Time"},"courseType":{"define":"courseType","name":"courseType","relation":"courseType","type":"String"},"courseUrl":{"define":"courseUrl","name":"courseUrl","relation":"courseUrl","type":"String"},"exciseId":{"define":"exciseId","name":"exciseId","relation":"exciseId","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"courseId","initData":"[]","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"commentContent":{"define":"commentContent","label":"commentconyent","name":"commentContent","relation":"commentContent","type":"String"},"commentName":{"define":"commentName","label":"commentname","name":"commentName","relation":"commentName","type":"String"},"content":{"define":"content","label":"content","name":"content","relation":"content","type":"String"},"fId":{"define":"fId","label":"ID","name":"fId","relation":"fId","rules":{"integer":true},"type":"Integer"},"name":{"define":"name","label":"name","name":"name","relation":"name","type":"String"},"photo":{"define":"photo","label":"photo","name":"photo","relation":"photo","type":"String"},"praise":{"define":"praise","label":"praise","name":"praise","relation":"praise","type":"String"},"state":{"define":"state","label":"state","name":"state","relation":"state","type":"String"},"time":{"define":"time","label":"time","name":"time","relation":"time","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"dataCustomRefresh"},"idColumn":"fId","limit":20,"xid":"data"});
}}); 
return __result;});
