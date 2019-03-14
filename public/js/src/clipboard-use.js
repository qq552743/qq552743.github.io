  /*页面载入完成后，创建复制按钮*/
  /*页https://yfzhou.coding.me/2018/08/27/Hexo-Next搭建个人博客%EF%BC%88代码块复制功能%EF%BC%89/*/
  !function (e, t, a) {
    /* code */
    var initCopyCode = function(){
      var copyHtml = '';
      copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
      //fa fa-globe可以去字体库替换自己想要的图标
copyHtml += '  <i class="fa fa-clipboard"></i><span>copy</span>';
      copyHtml += '</button>';
      $(".highlight .code pre").before(copyHtml);
      new ClipboardJS('.btn-copy', {
          target: function(trigger) {
              return trigger.nextElementSibling;
          }
      });
    }
    initCopyCode();
  }(window, document);
