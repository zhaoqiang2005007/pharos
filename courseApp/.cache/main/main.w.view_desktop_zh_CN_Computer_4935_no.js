window.__justep.__ResourceEngine.loadCss([{url: '/v_4935_nol_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_4935_nol_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_4935_nol_zh_CNs_desktopd_pc/system/components/comp2.min.js','/v_4935_nol_zh_CNs_desktopd_pc/system/core.min.js','/v_4935_nol_zh_CNs_desktopd_pc/system/common.min.js','/v_4935_nol_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
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
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fImgUrl":{"define":"fImgUrl","label":"图片","name":"fImgUrl","relation":"fImgUrl","type":"String"},"fUrl":{"define":"fUrl","label":"链接地址","name":"fUrl","relation":"fUrl","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"imgDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"imgData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"courseId":{"define":"courseId","label":"课程ID","name":"courseId","relation":"courseId","type":"String"},"courseImg":{"define":"courseImg","label":"图片路径","name":"courseImg","relation":"courseImg","type":"String"},"courseName":{"define":"courseName","label":"课程名称","name":"courseName","relation":"courseName","type":"String"},"courseUrl":{"define":"courseUrl","label":"课程视频地址","name":"courseUrl","relation":"courseUrl","type":"String"},"updateState":{"define":"updateState","label":"更新状态","name":"updateState","relation":"updateState","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"courseDataCustomRefresh"},"idColumn":"courseId","limit":20,"xid":"courseData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"downLoadPrecent":{"define":"downLoadPrecent","name":"downLoadPrecent","relation":"downLoadPrecent","type":"String"},"fileId":{"define":"fileId","name":"fileId","relation":"fileId","type":"String"},"fileName":{"define":"fileName","name":"fileName","relation":"fileName","type":"String"},"fileSize":{"define":"fileSize","name":"fileSize","relation":"fileSize","type":"String"}},"directDelete":false,"events":{},"idColumn":"fileId","initData":"[{\"fileId\":\"0001\",\"fileName\":\"词汇详细分析第二讲\",\"fileSize\":\"20.5M\",\"downLoadPrecent\":\"56\"}]","limit":20,"xid":"downloadData"});
}}); 
return __result;});
