bootstrap简介
## HTML5 文档类型

Bootstrap 使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。在你项目中的每个页面都要参照下面的格式进行设置。

```html
<!DOCTYPE html>
<html lang="zh-CN">
  ...
</html>
```
## 全局CSS样式

### 基本的全局样式。分别是：

* 为 body 元素设置 background-color: #fff;
* 使用 @font-family-base、@font-size-base 和 @line-height-base 变量作为排版的基本参数
* 为所有链接设置了基本颜色 @link-color ，并且当链接处于 :hover 状态时才添加下划线

#### 布局容器

Bootstrap 需要为页面内容和栅格系统包裹一个 .container 容器。我们提供了两个作此用处的类。注意，由于 padding 等属性的原因，这两种 容器类不能互相嵌套。

.container 类用于固定宽度并支持响应式布局的容器。

```html
<div class="container">
  ...
</div>
```
.container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。

```html
<div class="container-fluid">
  ...
</div>

```

#### 栅格系统
栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。
##### 栅格参数
通过下表可以详细查看 Bootstrap 的栅格系统是如何在多种屏幕设备上工作的。


 |超小屏幕 手机 (<768px)|	小屏幕 平板 (≥768px)	|中等屏幕 桌面显示器 (≥992px)	|大屏幕 大桌面显示器 (≥1200px)
----|----|----|----
栅格系统行为|总是水平排列	|开始是堆叠在一起的，当大于这些阈值时将变为水平排列C(后面一致)|
.container最大宽度|	None自动）|	750px|	970px|	1170px
类前缀	|.col-xs-	|.col-sm-	|.col-md-|	.col-lg-
列（column）数|	12
最大列（column）宽	|自动	|~62px|	~81px|	~97px
槽（gutter）宽|	30px （每列左右均有 15px）
可嵌套|	是
偏移（Offsets）	|是
列排序	|是

### 排版

####　 标题
HTML 中的所有标题标签，`<h1>` 到 `<h6>` 均可使用。另外，还提供了 `.h1` 到 `.h6` 类，为的是给内联（inline）属性的文本赋予标题的样式。


#### 小号文本
对于不需要强调的inline或block类型的文本，使用 <small> 标签包裹，其内的文本将被设置为父容器字体大小的 85%。标题元素中嵌套的 <small> 元素被设置不同的 font-size 。

你还可以为行内元素赋予 .small 类以代替任何 <small> 元素。


`<small>This line of text is meant to be treated as fine print.</small>`

#### 着重
通过增加 font-weight 值强调一段文本。


`<strong>rendered as bold text</strong>`
#### 斜体
用斜体强调一段文本。


`<em>rendered as italicized text</em>`
