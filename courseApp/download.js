define(function(require){
        var $ = require("jquery");
        var justep = require("$UI/system/lib/justep");
        require("$UI/system/lib/cordova/cordova");
        require("cordova!org.apache.cordova.open");
        require("cordova!org.apache.cordova.file");
        require("cordova!org.apache.cordova.file-transfer");
        
        var Model = function(){
                this.callParent();
        };

        Model.prototype.downLoadFile = function(event){
                var divProgress = $(event.source.domNode.parentElement.parentElement).find("div[xid='progressbar1']"); //获取当前行的进度条XID
                var downLoadBtn = $(event.source.domNode.parentElement).find("a[xid='button1']")
                var row = event.bindingContext.$object;  //获取当前行的数据
                var filePath = 'file:///storage/emulated/0/biyao/'+ row.val('fLocalName'); //下载路径,数据库保存文件名
                var uri = encodeURI(row.val('fUrl')); //下载地址
       
        var fileTransfer = new FileTransfer(); 
                fileTransfer.onprogress = function(progressEvent) { //文件传输插件对象的进度方法调用
                        var percentProgress = parseInt((progressEvent.loaded / progressEvent.total) * 100)+ "%"; //获取已下载和总大小的百分比
                        if (progressEvent.lengthComputable)//获取浏览器返回HEAD信息包含CONTENT-LENGTH为TRUE 则执行下面
                        {        
                                divProgress.css("width",percentProgress); //设置进度条的样式
                                divProgress.html(percentProgress);        //设置进度条里面的数字
                        }
                };
                
        fileTransfer.download( //调用对象的下载方法，开始下载
            uri,
            filePath,
            function(entry) {
                console.log("download complete: " + entry.fullPath);//下载完成后调用方法
                //这里下载完成后，将进度条隐藏或者写其他需要的代码
                downLoadBtn.hide();
            },
            function(error) {  //出错回调函数
                console.log("download error source " + error.source);
                console.log("download error target " + error.target);
                console.log("upload error code" + error.code);
            },
            false,
            {
                headers: {
                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                }
            }
        );        
        };

        Model.prototype.openFile = function(event){
                var row = event.bindingContext.$object;
                var localUrl = "file:///storage/emulated/0/biyao/"+ row.val('fLocalName');
                
                var open = cordova.plugins.disusered.open;
                function success() {
                        justep.Util.hint('正在打开！！！');
                }
                function error(code) {
                        if (code === 1) {
                                alert('文件未在本地保存，请点击下载！');
                        } else {
                                justep.Util.hint('未知错误，请联系管理员！');
                        }
                }
                open(localUrl, success, error);
        };

        return Model;
});