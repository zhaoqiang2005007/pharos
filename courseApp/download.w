<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:30px;top:242px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="fID"><column label="fID" name="fID" type="String" xid="xid1"></column>
  <column label="列表标题" name="fTitle" type="String" xid="xid2"></column>
  <column label="发布人" name="fAuthor" type="String" xid="xid3"></column>
  <column label="下载地址" name="fUrl" type="String" xid="xid4"></column>
  <column label="本地文件名称" name="fLocalName" type="String" xid="xid5"></column>
  <data xid="default1">[{"fID":"1","fTitle":"文件下载测试1","fAuthor":"biyao","fUrl":"http://movie.ks.js.cn/flv/other/1_0.mp4","fLocalName":"1.mp4"},{"fID":"2","fTitle":"文件下载测试2","fAuthor":"biyao","fUrl":"http://sd.downxia.com/down/pptview2003.rar","fLocalName":"pptview2003.rar"},{"fID":"3","fTitle":"文本下载测试3","fAuthor":"biyao","fUrl":"http://filelx.liqucn.com/didi_psngr_v4.2.5_50010.apk","fLocalName":"didi_psngr_v4.2.5_50010.apk"}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="文件下载例子"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">文件下载例子</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C6F7F7DA4B0000019BF4121064101880" style="bottom: 0px;"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-content-center x-pull-down container" xid="div1">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-50 x-col-center" xid="col1"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref="ref('fTitle')"></div></div>
   <div class="x-col x-col-20 x-col-center" xid="col2">
           <div class="progress" style="margin-bottom:0px;" xid="div5">
   <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" xid="progressbar1"></div></div></div><div class="x-col x-col-fixed x-col-center" xid="col3"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="下载" xid="button1" onClick="downLoadFile">
   <i xid="i2"></i>
   <span xid="span3">下载</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="打开" xid="button2" onClick="openFile">
   <i xid="i3"></i>
   <span xid="span4">打开</span></a>
  </div></div></li></ul> </div></div>
   <div class="x-content-center x-pull-up" xid="div3">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div></div>
  </div> 
</div>