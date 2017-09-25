var upLoadObj = {
	fileInput: null, //html file控件
	drapDrop: null, //拖拽敏感区域 
	sub_btn: null, //提交按钮
	url: "", //ajax地址
	fileFilter: [], //过滤后的文件数据
	filter: function (files) { //选择文件组的过滤方法
		return files;
	},
	onSelect: function () {}, //文件选择后
	onDelete: function () {}, //文件删除后
	onDragOver: function () {}, //文件拖拽到敏感区域时
	onProgress : function(){},
	onSuccess: function(){},
	onFailure: function(){},
	onComplete: function(){},

	/*********************************/

	//文件拖放
	funDragHover : function(e){
		e.preventDefault();
		e.stopPropagation();
		this[e.type === "dragover"? "onDragover" : "onDragLeave"].call(e.target);
		return this;
	},
	//获取选择文件 file控件或拖放
	funGetFile : function(e){
		//取消鼠标经过样式
		this.funDragHover(e);

		var files = e.target.files || e.dataTransfer.files;
		//继续添加文件
		this.fileFilter = this.fileFilter.concat(this.filter(files));
		this.funDealFiles();
		return this;
	},

	//选中文件的处理与回调
	funDealFiles : function(){
		for(var i = 0, file; file = this.fileFilter[i]; i++){
			//增加唯一的索引值
			file.index = i;
		}
		//执行回调
		this.onSelect(this.fileFilter);
		return this;
	},

	//删除对应的文件
	funDeleteFile : function(fileDelete){
		var arrFile = [];
		for(var i = 0, file; file = this.fileFilter[i]; i++){
			if(file != fileDelete){
				arrFile.push(file);
			}else{
				this.onDelete(fileDelete);
			}
		}
		this.fileFilter = arrFile;
		return this;
	},

	//文件上传
	funUpLoadFile : function(){
		var self = this;
		for(var i = 0, file; file = this.fileFilter[i]; i++){
			(function(){
				var xhr = new XMLHttpRequest();
				if(xhr.upload){
					//上传中
					xhr.upload.addEventListener("progress",function(e){
						self.onProgress(file, e.loaded, e.total);
					},false);
	
					//文件上传成功或是失败
					xhr.onreadystatechange = function(e){
						if(xhr.readyState == 4 && xhr.status == 200){
							self.onSuccess(file, xhr.responseText);
							self.funDeleteFile(file);
							if(!self.fileFilter.length){
								self.onComplete();
							}
						}else{
							self.onFailure(file, xhr, responseText);
						}
					};
	
					//开始上传
					xhr.open('POST', self.url, true);
					xhr.setRequestHeader("x_filename", encodeURIComponent(file.name));
					xhr.send(file);
				}
			})(file);
		}
	},

	init : function(){
		var self = this;
		if(this.drapDrop){
			this.drapDrop.addEventListener("dragover",function(e){self.funDragHover(e);},false);
			this.drapDrop.addEventListener("dragleave",function(e){self.funDragHover(e);},false);
			this.drapDrop.addEventListener("drop",function(e){self.funGetFiles(e);},false);
		}

		//文件选择控件
		if(this.fileInput){
			this.fileInput.addEventListener("change",function(e){e.funGetFiles(e);},false);
		}

		//上传按钮提交
		if(this.sub_btn){
			this.sub_btn.addEventListener('click',function(e){self.funUpLoadFile(e);},false);
		}
	}
}