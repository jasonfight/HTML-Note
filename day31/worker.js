
importScripts("./fun.js")

fun();
console.log("a = ", a);

//worker线程的执行环境有限，只可以使用定时器，location, ajax等少量对象
//不可以操作DOM

//等待接收主线程的数据
this.onmessage = function(event){
	var num = event.data;

	setInterval(function(){
		
	//postMessage方法用于给主线程发送数据
	postMessage(num++);
}, 1000);
};