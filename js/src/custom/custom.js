// build time:Sat Apr 13 2019 18:14:55 GMT+0800 (GMT+08:00)
$(document).ready(function(){$(window).scroll(function(){$(".top-scroll-bar").attr("style","width: "+$(this).scrollTop()/($(document).height()-$(this).height())*100+"%; display: block;");var c=$(window).scrollTop();var o=$(document).height();var r=$(window).height();var s=parseInt(c/(o-r)*100);$(".top-scroll-bar").css("width",s+"%");if(s>=0&&s<=19)$(".top-scroll-bar").css("background","#cccccc");if(s>=20&&s<=39)$(".top-scroll-bar").css("background","#50bcb6");if(s>=40&&s<=59)$(".top-scroll-bar").css("background","#85c440");if(s>=60&&s<=79)$(".top-scroll-bar").css("background","#f2b63c");if(s>=80&&s<=99)$(".top-scroll-bar").css("background","#FF0000");if(s==100)$(".top-scroll-bar").css("background","#f58ca1")})});
//rebuild by neat 