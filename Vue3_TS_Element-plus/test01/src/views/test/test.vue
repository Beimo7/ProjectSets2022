<template>
  <div class="container">
    <el-button @click="generateImg">下载pdf</el-button>
<div>
  // 滑动状态也可全部截图
  <el-scrollbar>
    <div id="test-id">
        <img src="@/assets/background-01.png" alt="" />
        <div>
          <div>今天是个好天气</div>
          <div>测试截图中</div>
          <div>最后一行</div>
        </div>
    </div>
  </el-scrollbar>
</div>

  </div>
</template>
<script lang="ts" setup>
import html2canvas from "html2canvas";
// html

 // js
 const generateImg = ()=>{
	let el = document.getElementById("test-id");
	let options = {
        width: el.offsetWidth,
        height: el.offsetHeight,
        useCORS: true, // 是否尝试使用 CORS 从服务器加载图像
        allowTaint: false, // 是否允许跨源图像污染画布
	}
	
	html2canvas(el, options).then((canvas) => {
       let imgData = canvas.toDataURL("image/jpeg"); // 转base64
       fileDownload(imgData);
    });
 };
    
 // 下载图片方法
 const fileDownload = (downloadUrl) => {
   debugger
	let aLink = document.createElement("a");
	aLink.style.display = "none";
	// 以防base64过长导致下载失败，所以将base64转成blob格式
	aLink.href = URL.createObjectURL(dataURIToBlob(downloadUrl));
	aLink.download = "img.png";
	document.body.appendChild(aLink);
	aLink.click();
	document.body.removeChild(aLink);
 };

 // base64转blob方法
 const dataURIToBlob = (dataURI) => {
	let binStr = atob(dataURI.split(",")[1]),
    len = binStr.length,
	arr = new Uint8Array(len);
    
	for (var i = 0; i < len; i++) {
		arr[i] = binStr.charCodeAt(i);
	}
	return new Blob([arr]);
 };

</script>
<style>
.class1, .class2, .class3, .class4, .class5, .class6 {
  width: 300px;
  height: 300px;
  background-color: indianred;
}

.container {
  display: flex;
  /* align-content: stretch; */
  align-items: flex-start;
  height: 900px;
}

</style>