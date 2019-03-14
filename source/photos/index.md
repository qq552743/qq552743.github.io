---
title: "相册列表"
date: 2019-02-26 01:46:57
type: "photos"
---
<!-- 相册功能 https://www.jianshu.com/p/7f6425b3ffb2 -->
<link rel="stylesheet" href="../lib/album/ins.css">
<link rel="stylesheet" href="../lib/album/photoswipe.css">
<link rel="stylesheet" href="../lib/album/default-skin/default-skin.css">
<!-- <div class="photos-btn-wrap">
  <a class="photos-btn active" href="javascript:void(0)">相册列表</a>
  <a class="photos-btn active" href="/photos/videos.html">视频列表</a>
</div> -->
<div class="instagram itemscope">
    <a href="http://huanglei520.xyz/" target="_blank" class="open-ins">图片正在加载中…</a>
</div>

<script>
  (function() {
    var loadScript = function(path) {
      var $script = document.createElement('script')
      document.getElementsByTagName('body')[0].appendChild($script)
      $script.setAttribute('src', path)
    }
    setTimeout(function() {
        loadScript('../lib/album/ins.js')
    }, 0)
  })()
</script>
