ajax
### 概念介绍

#### 同步

客户端发起请求，服务器进行处理，此时，客户端会一直等待服务器的响应，响应完成后，客户端重新载入页面，

#### 异步

客户端发起请求，服务器进行处理和响应，同时客户端进行后续操作，两者不相互干扰。



XMLHttpRequest 对象，ajax的核心对象

运用html和css来实现页面，表达信息

运用XMLHttpRequest和web服务器进行数据的异步交换

运用JavaScript操作DOM，实现动态局部刷新


#### XMLHttpRequest对象

 *  实例化一个XHR对象：

 ```js
  var request = new XMLHttpRequest();
 ```
 ie5和6不支持XMLHttpRequest,只支持ActiveXObject,

兼容ie5和6的写法
```js
 var request;
 if (window.XMLHttpRequest){
   request = new XMLHttpRequest();
 }else{
   request = new HTTPXObject("Microsoft.XMLHTTP");
 }
 ```
*  HTTP请求

http是计算机通过网络进行通信的规则,是浏览器向服务器请求信息和服务,是一种无状态协议,即不建立持久的连接,一个完成的http请求,有下面7个步骤:

1. 建立TCP连接
1. 浏览器向服务器发送请求命令
1. 浏览器发送请求头信息
1. 服务器应答
1. 服务器发送应答头信息
1. 服务器向浏览器发送数数据
1. 服务器关闭TCP连接

一个HTTP请求由4个部分组成:

1. 请求方式: get 或者post
1. 请求地址url
1. 请求头,包含客户端环境信息,身份验证信息等
1. 请求体,及请求正文,可以包含客户提交的查询字符串信息,表单信息等.

get: 一般用于信息获取,使用url传递参数,对所发信息的数量也有限制,一般2000个字符

post: 一般用于修改服务器上的资源,对所发信息的数量无限制.

一个HTTP的响应一般由三部分组成:

1. 一个数字和文字组成的状态码,用来显示请求是否成功,
1. 响应头,响应头和请求头一样,包含许多信息,例如服务器类型,日期时间,内容类型和长度等,
1. 响应体,即响应正文

HTTP状态码:

1. 1XX:信息类,表示收到浏览器请求,正在处理中
1. 2XX:成功,表示用户请求被正确接手,
1. 3XX:重定向,表示请求没有成功,客户必须采取下一步操作,
1. 4XX:客户端错误,表示客户端提交的请求有错误,如404 NOT FOUND
1. 5XX: 服务器错误,表示服务器不能完成对请求的处理


#### XMLHttpRequest发送请求

open(method,url,async);
send(string);

当method为post时,需要在open 和 send 中间,设置请求头:
```js
request.setRequestHeader('Content-type','application/x-www-form-urlencoded')
```

#### XMLHttpRequest取得响应:

responseText:获得字符串形式的相应数据

responseXML:获得XML形式的相应数据

status和statusText: 以数字和文本形式返回HTTP状态码

getAllResponseHeader():获取所有的响应报头
