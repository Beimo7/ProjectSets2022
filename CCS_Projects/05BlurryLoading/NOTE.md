# 项目复盘

> 该复盘以项目开发的流程，过程中遇到的问题，相应的解决方法，以及对应的知识薄弱之处作为总结。
>
> 后期可能会不断调整。

## 背景图的设置

### 方法一

对body设置属性background-image，通过background-image: url()设置背景图片。

#### 出现的问题

这样可以显示背景；但是后期在通过document.getElementsByTagName('body')[0]获取到元素设置模糊程度的时候，会将span标签一起改变。此路不通。

### 方法二

在body中新建section标签，为标签设置背景；样式为width:100vw;height:100vh

#### 出现的问题

- 这样可以设置背景，但是图片的位置不对，后面通过设置背景为positiion: fixed；left,right，top, bottom，来框住整个背景图片；当然每个方位的属性值都是负值

### 知识薄弱

- 标签section
- 背景的处理
- position：fixed是什么意思
- 为什么用%设置背景的宽和高不显示背景，但是vw和vh可以？理解几种长度单位的区别
- 关于js原生的一些属性weikit等

## 数字的显示

#### 问题一

怎么动态显示数字

- 一开始，用{}，这个方法在原生js中不管用
- 使用getElement('span').innerHTML获取元素，或设置元素的值

#### 问题二

怎么设置元素居中

- 使用高度和宽度进行计算，但是这个方法肯定不行

怎么设置文字的粗细

- 使用font-weight

### 薄弱

- getElement
- 文字相关样式
- 居中

## 计数

#### 问题

怎么捕获网页刚加载完成的时间

- 使用window.onload

怎么使number随时间递增

- 计时setInterval()

薄弱

- window
- 时间相关函数

## 变透明；变模糊

### 问题

怎么修改透明度

- filter: opacity(0px)

怎么修改模糊程度

- filter: blur(0%)

怎么使上面两个属性值变化

- \`opacity(${couont}px)`

### 薄弱

- 滤镜相关样式
- $符号















# steps and difficulties

## background-image

### the image shows some, not all
background-image: url();
background-size: 100% auto;
## number style
### how to make number center
## number counts
### start

![image-20221018224342719](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20221018224342719.png)

同一个元素，由id和className获取的时候的不同

### per second
### finish
## gradually appear
### 为什么用body的背景图不行，但是用section的背景图可以
### 为什么用width的100%不行，但是用width的100vw可以；

# knowledge
## CSS background-image