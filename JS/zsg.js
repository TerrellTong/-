function crtAndAdd1(){
	//1.创建一个新的结点
	var oTextNode = document.createTextNode("这是一个文本");
	//2.获取div1的结点
	var oDivNode = document.getElementById("div_1");
	//3.将我们创建的结点添加到div中
	oDivNode.appendChild(oTextNode);
}

function crtAndAdd2(){
	//1.直接获取div1的结点
	var DivNode = document.getElementById("div_1");
	//2.用里面的innerHTML属性直接添加结点
	DivNode.innerHTML = "<input type='button' value='按钮'>";
	DivNode.innerHTML = "<a href='http://www.baidu.com'>这是百度</a>";
	}

function delNode(){
	//用父节点来删除
	//1.获取被删除结点div2
	var DivNode = document.getElementById("div_2");
	//2.通过其父结点来删除该结点
	DivNode.parentNode.removeChild(DivNode);
}

function updateNode(){
	//与删除结点一样，通过父结点进行替换
	//1.获取被替换结点div1和div3
	var DivNode_1 = document.getElementById("div_1");
	var DivNode_3 = document.getElementById("div_3");
	//2.通过其父结点来进行替换
	DivNode_1.parentNode.replaceChild(DivNode_3,DivNode_1);
}

function cloneDemo(){
	//1.获取被替换结点div1,div3以及div3的克隆结点
	var DivNode_1 = document.getElementById("div_1");
	var DivNode_3 = document.getElementById("div_3");
	var Copy_3 = DivNode_3.cloneNode(true);
	//2.进行替换
	DivNode_1.parentNode.replaceChild(Copy_3,DivNode_1);
}