/**
 * [tabControl 选项卡切换]
 * @type {Object}
 * 使用方法
 * tabControl({
 * 		oId : 'tabWrap',
 * 		current : 'current'
 * });
 */
var tabControl = {
	oId : '',			//最外层DIV ID
	current : '',		//点击添加的样式
	/**
	 * 初使化
	 * @param opts
	 */
	init : function(opts){
		this.oId = 'tabWrap' || opts.oId;
		this.current = 'current' || opts.current;
		this.oGetId = document.getElementById(this.oId);
		this.tabSwitch();
	},
	tabSwitch : function(){
		this.oDivCon = this.oGetId.children;					//得到子元素(切换导航|切换内容)
		this.oNavDiv = this.oDivCon[0];							//切换导航
		this.oWrapDiv = this.oDivCon[1];						//切换内容
		this.oNavLi = this.oNavDiv.getElementsByTagName('li');	//得到导航的子标签LI
		this.oWrapDivChild = this.oWrapDiv.children;			//得到内容的子标签DIV
		this.nLiLen = this.oNavLi.length;						//得到导航的子标签数组长度
		
		for(var i = 0; i < this.nLiLen; i++){
			var that = this;
			this.oNavLi[i].index = i;
			this.oNavLi[i].onclick = function(){
				for(n = 0; n < that.nLiLen; n++){
					that.oNavLi[n].className = '';
					that.oWrapDivChild[n].style.display = 'none';
				}
				that.oNavLi[this.index].className = that.current; 
            	that.oWrapDivChild[this.index].style.display = "block"; 
			};
		}
	}
};