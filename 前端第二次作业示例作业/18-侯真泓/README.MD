# 第三次作业

## Github GPG
在 Windows 下使用 GPG \
[git commit signing failed: secret key not available](https://stackoverflow.com/questions/36810467/git-commit-signing-failed-secret-key-not-available/36811656)


## flex
[阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)


### 盒模型（content-box 默认）

- width/height、padding、border、margin

- 标准盒模型

元素实际大小=width/height+padding+margin

- IE盒模型（border-box）

元素实际大小=width/height

- 盒模型切换

box-sizing: content-box/border-box;   视情况使用哪种盒模型

### 布局

#### div的作用

division，把页面分成一个个板块，先对板块布局，再对内部元素布局

#### display

* block：
* inline：默认。此元素会被显示为内联元素，元素前后没有换行符。
* inline-block：显示一行，转化为内联块级元素 （有间隙：把字体大小设为0）
* none：此元素不会被显示。
* **flex**：新一代的排版方式
* table：此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。


#### position

- relative、absolute、fixed、sticky

- 相对定位（relative）与绝对定位（absolute），本质上位置都是相对的

#### float

- 缺陷

  对周围元素的布局产生影响

  父元素高度崩塌

- 清除浮动
- 闭合浮动

#### z-index

三维坐标系中的z轴 **（在absolute时可用）**

#### 居中方案

##### 水平

- 上下margin随意，左右margin为auto;

  把**有宽度、非浮动、非绝对定位元素**的margin-left和margin-right设为auto

- text-align:center;

  **内联元素**水平居中

- flex布局

##### 垂直

- 模拟单元格

  对父元素设置display: table-cell;vertical-align: middle;

- 单行文字垂直居中

  将line-height设为与父元素高度相同

- 利用margin

  设置元素为绝对定位且top与bottom均为零，margin-top与margin-bottom为auto

- flex布局

##### 水平垂直

- 利用margin

  设置元素为绝对定位且top、bottom、left与right均为零，margin值为auto

- 模拟单元格

  对父元素设置display: table-cell;vertical-align: middle; text-align: center;子元素display设为inline-block

- 绝对定位加元素本身偏移

  设置元素为绝对定位，left:50%且top:50%，然后利用translate(-50%, -50%)，也可以使用负margin但宽高要已知

- flex布局

#### flex布局

对父元素设置

display:flex;

align-items

justify-content

### 伪类与伪元素

- 伪类

  :link 

  :visited 

  :hover 

  :active 

- 伪元素

  ::before

  ::after

### CSS3

- background

  线性与径向渐变

  背景图

- border

  阴影

  圆角

  图片

- transform

  平移：translate

  旋转：rotate

- 过渡

  transition-duration

- 动画

  自定义动画 @keyframes + 动画名 { }

  将动画应用到某元素上 animation-name, animation-duration