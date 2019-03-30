// build time:Sat Mar 30 2019 14:14:41 GMT+0800 (GMT+08:00)
(function(e,i){if(typeof define==="function"&&define.amd){define(i)}else if(typeof exports==="object"){module.exports=i()}else{e.PhotoSwipe=i()}})(this,function(){"use strict";var e=function(e,i,t,n){var o={features:null,bind:function(e,i,t,n){var o=(n?"remove":"add")+"EventListener";i=i.split(" ");for(var r=0;r<i.length;r++){if(i[r]){e[o](i[r],t,false)}}},isArray:function(e){return e instanceof Array},createEl:function(e,i){var t=document.createElement(i||"div");if(e){t.className=e}return t},getScrollY:function(){var e=window.pageYOffset;return e!==undefined?e:document.documentElement.scrollTop},unbind:function(e,i,t){o.bind(e,i,t,true)},removeClass:function(e,i){var t=new RegExp("(\\s|^)"+i+"(\\s|$)");e.className=e.className.replace(t," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,i){if(!o.hasClass(e,i)){e.className+=(e.className?" ":"")+i}},hasClass:function(e,i){return e.className&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e.className)},getChildByClass:function(e,i){var t=e.firstChild;while(t){if(o.hasClass(t,i)){return t}t=t.nextSibling}},arraySearch:function(e,i,t){var n=e.length;while(n--){if(e[n][t]===i){return n}}return-1},extend:function(e,i,t){for(var n in i){if(i.hasOwnProperty(n)){if(t&&e.hasOwnProperty(n)){continue}e[n]=i[n]}}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(o.features){return o.features}var e=o.createEl(),i=e.style,t="",n={};n.oldIE=document.all&&!document.addEventListener;n.touch="ontouchstart"in window;if(window.requestAnimationFrame){n.raf=window.requestAnimationFrame;n.caf=window.cancelAnimationFrame}n.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled;if(!n.pointerEvent){var r=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var a=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);if(a&&a.length>0){a=parseInt(a[1],10);if(a>=1&&a<8){n.isOldIOSPhone=true}}}var l=r.match(/Android\s([0-9\.]*)/);var s=l?l[1]:0;s=parseFloat(s);if(s>=1){if(s<4.4){n.isOldAndroid=true}n.androidVersion=s}n.isMobileOpera=/opera mini|opera mobi/i.test(r)}var f=["transform","perspective","animationName"],u=["","webkit","Moz","ms","O"],c,d;for(var p=0;p<4;p++){t=u[p];for(var m=0;m<3;m++){c=f[m];d=t+(t?c.charAt(0).toUpperCase()+c.slice(1):c);if(!n[c]&&d in i){n[c]=d}}if(t&&!n.raf){t=t.toLowerCase();n.raf=window[t+"RequestAnimationFrame"];if(n.raf){n.caf=window[t+"CancelAnimationFrame"]||window[t+"CancelRequestAnimationFrame"]}}}if(!n.raf){var h=0;n.raf=function(e){var i=(new Date).getTime();var t=Math.max(0,16-(i-h));var n=window.setTimeout(function(){e(i+t)},t);h=i+t;return n};n.caf=function(e){clearTimeout(e)}}n.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;o.features=n;return n}};o.detectFeatures();if(o.features.oldIE){o.bind=function(e,i,t,n){i=i.split(" ");var o=(n?"detach":"attach")+"Event",r,a=function(){t.handleEvent.call(t)};for(var l=0;l<i.length;l++){r=i[l];if(r){if(typeof t==="object"&&t.handleEvent){if(!n){t["oldIE"+r]=a}else{if(!t["oldIE"+r]){return false}}e[o]("on"+r,t["oldIE"+r])}else{e[o]("on"+r,t)}}}}}var r=this;var a=25,l=3;var s={allowPanToNext:true,spacing:.12,bgOpacity:1,mouseUsed:false,loop:true,pinchToClose:true,closeOnScroll:true,closeOnVerticalDrag:true,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:false,focus:true,escKey:true,arrowKeys:true,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return e.tagName==="A"},getDoubleTapZoom:function(e,i){if(e){return 1}else{return i.initialZoomLevel<.7?1:1.33}},maxSpreadZoom:1.33,modal:true,scaleMode:"fit"};o.extend(s,n);var f=function(){return{x:0,y:0}};var u,c,d,p,m,h,v=f(),y=f(),x=f(),g,w,b,I={},C,D,T,M,S,A,E=0,O={},k=f(),R,Z,P=0,F,L,z,_,N,U,H=true,Y,W=[],B,G,X,V,K,q,$,j={},J=false,Q,ee=function(e,i){o.extend(r,i.publicMethods);W.push(e)},ie=function(e){var i=ot();if(e>i-1){return e-i}else if(e<0){return i+e}return e},te={},ne=function(e,i){if(!te[e]){te[e]=[]}return te[e].push(i)},oe=function(e){var i=te[e];if(i){var t=Array.prototype.slice.call(arguments);t.shift();for(var n=0;n<i.length;n++){i[n].apply(r,t)}}},re=function(){return(new Date).getTime()},ae=function(e){gi=e;r.bg.style.opacity=e*s.bgOpacity},le=function(e,i,t,n,o){if(!J||o&&o!==r.currItem){n=n/(o?o.fitRatio:r.currItem.fitRatio)}e[N]=T+i+"px, "+t+"px"+M+" scale("+n+")"},se=function(e){if(di){if(e){if(C>r.currItem.fitRatio){if(!J){dt(r.currItem,false,true);J=true}}else{if(J){dt(r.currItem);J=false}}}le(di,x.x,x.y,C)}},fe=function(e){if(e.container){le(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)}},ue=function(e,i){i[N]=T+e+"px, 0px"+M},ce=function(e,i){if(!s.loop&&i){var t=p+(k.x*E-e)/k.x,n=Math.round(e-ci.x);if(t<0&&n>0||t>=ot()-1&&n<0){e=ci.x+n*s.mainScrollEndFriction}}ci.x=e;ue(e,m)},de=function(e,i){var t=mi[e]-O[e];return y[e]+v[e]+t-t*(i/D)},pe=function(e,i){e.x=i.x;e.y=i.y;if(i.id){e.id=i.id}},me=function(e){e.x=Math.round(e.x);e.y=Math.round(e.y)},he=null,ve=function(){if(he){o.unbind(document,"mousemove",ve);o.addClass(e,"pswp--has_mouse");s.mouseUsed=true;oe("mouseUsed")}he=setTimeout(function(){he=null},100)},ye=function(){o.bind(document,"keydown",r);if($.transform){o.bind(r.scrollWrap,"click",r)}if(!s.mouseUsed){o.bind(document,"mousemove",ve)}o.bind(window,"resize scroll orientationchange",r);oe("bindEvents")},xe=function(){o.unbind(window,"resize scroll orientationchange",r);o.unbind(window,"scroll",b.scroll);o.unbind(document,"keydown",r);o.unbind(document,"mousemove",ve);if($.transform){o.unbind(r.scrollWrap,"click",r)}if(ei){o.unbind(window,g,r)}clearTimeout(Q);oe("unbindEvents")},ge=function(e,i){var t=st(r.currItem,I,e);if(i){ui=t}return t},we=function(e){if(!e){e=r.currItem}return e.initialZoomLevel},be=function(e){if(!e){e=r.currItem}return e.w>0?s.maxSpreadZoom:1},Ie=function(e,i,t,n){if(n===r.currItem.initialZoomLevel){t[e]=r.currItem.initialPosition[e];return true}else{t[e]=de(e,n);if(t[e]>i.min[e]){t[e]=i.min[e];return true}else if(t[e]<i.max[e]){t[e]=i.max[e];return true}}return false},Ce=function(){if(N){var i=$.perspective&&!Y;T="translate"+(i?"3d(":"(");M=$.perspective?", 0px)":")";return}N="left";o.addClass(e,"pswp--ie");ue=function(e,i){i.left=e+"px"};fe=function(e){var i=e.fitRatio>1?1:e.fitRatio,t=e.container.style,n=i*e.w,o=i*e.h;t.width=n+"px";t.height=o+"px";t.left=e.initialPosition.x+"px";t.top=e.initialPosition.y+"px"};se=function(){if(di){var e=di,i=r.currItem,t=i.fitRatio>1?1:i.fitRatio,n=t*i.w,o=t*i.h;e.width=n+"px";e.height=o+"px";e.left=x.x+"px";e.top=x.y+"px"}}},De=function(e){var i="";if(s.escKey&&e.keyCode===27){i="close"}else if(s.arrowKeys){if(e.keyCode===37){i="prev"}else if(e.keyCode===39){i="next"}}if(i){if(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey){if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}r[i]()}}},Te=function(e){if(!e){return}if(ni||ti||pi||qe){e.preventDefault();e.stopPropagation()}},Me=function(){r.setScrollOffset(0,o.getScrollY())};var Se={},Ae=0,Ee=function(e){if(Se[e]){if(Se[e].raf){G(Se[e].raf)}Ae--;delete Se[e]}},Oe=function(e){if(Se[e]){Ee(e)}if(!Se[e]){Ae++;Se[e]={}}},ke=function(){for(var e in Se){if(Se.hasOwnProperty(e)){Ee(e)}}},Re=function(e,i,t,n,o,r,a){var l=re(),s;Oe(e);var f=function(){if(Se[e]){s=re()-l;if(s>=n){Ee(e);r(t);if(a){a()}return}r((t-i)*o(s/n)+i);Se[e].raf=B(f)}};f()};var Ze={shout:oe,listen:ne,viewportSize:I,options:s,isMainScrollAnimating:function(){return pi},getZoomLevel:function(){return C},getCurrentIndex:function(){return p},isDragging:function(){return ei},isZooming:function(){return li},setScrollOffset:function(e,i){O.x=e;q=O.y=i;oe("updateScrollOffset",O)},applyZoomPan:function(e,i,t,n){x.x=i;x.y=t;C=e;se(n)},init:function(){if(u||c){return}var t;r.framework=o;r.template=e;r.bg=o.getChildByClass(e,"pswp__bg");X=e.className;u=true;$=o.detectFeatures();B=$.raf;G=$.caf;N=$.transform;K=$.oldIE;r.scrollWrap=o.getChildByClass(e,"pswp__scroll-wrap");r.container=o.getChildByClass(r.scrollWrap,"pswp__container");m=r.container.style;r.itemHolders=R=[{el:r.container.children[0],wrap:0,index:-1},{el:r.container.children[1],wrap:0,index:-1},{el:r.container.children[2],wrap:0,index:-1}];R[0].el.style.display=R[2].el.style.display="none";Ce();b={resize:r.updateSize,orientationchange:function(){clearTimeout(Q);Q=setTimeout(function(){if(I.x!==r.scrollWrap.clientWidth){r.updateSize()}},500)},scroll:Me,keydown:De,click:Te};var n=$.isOldIOSPhone||$.isOldAndroid||$.isMobileOpera;if(!$.animationName||!$.transform||n){s.showAnimationDuration=s.hideAnimationDuration=0}for(t=0;t<W.length;t++){r["init"+W[t]]()}if(i){var a=r.ui=new i(r,o);a.init()}oe("firstUpdate");p=p||s.index||0;if(isNaN(p)||p<0||p>=ot()){p=0}r.currItem=nt(p);if($.isOldIOSPhone||$.isOldAndroid){H=false}e.setAttribute("aria-hidden","false");if(s.modal){if(!H){e.style.position="absolute";e.style.top=o.getScrollY()+"px"}else{e.style.position="fixed"}}if(q===undefined){oe("initialLayout");q=V=o.getScrollY()}var f="pswp--open ";if(s.mainClass){f+=s.mainClass+" "}if(s.showHideOpacity){f+="pswp--animate_opacity "}f+=Y?"pswp--touch":"pswp--notouch";f+=$.animationName?" pswp--css_animation":"";f+=$.svg?" pswp--svg":"";o.addClass(e,f);r.updateSize();h=-1;P=null;for(t=0;t<l;t++){ue((t+h)*k.x,R[t].el.style)}if(!K){o.bind(r.scrollWrap,w,r)}ne("initialZoomInEnd",function(){r.setContent(R[0],p-1);r.setContent(R[2],p+1);R[0].el.style.display=R[2].el.style.display="block";if(s.focus){e.focus()}ye()});r.setContent(R[1],p);r.updateCurrItem();oe("afterInit");if(!H){S=setInterval(function(){if(!Ae&&!ei&&!li&&C===r.currItem.initialZoomLevel){r.updateSize()}},1e3)}o.addClass(e,"pswp--visible")},close:function(){if(!u){return}u=false;c=true;oe("close");xe();$i(r.currItem,null,true,r.destroy)},destroy:function(){oe("destroy");if(qi){clearTimeout(qi)}e.setAttribute("aria-hidden","true");e.className=X;if(S){clearInterval(S)}o.unbind(r.scrollWrap,w,r);o.unbind(window,"scroll",r);Di();ke();te=null},panTo:function(e,i,t){if(!t){if(e>ui.min.x){e=ui.min.x}else if(e<ui.max.x){e=ui.max.x}if(i>ui.min.y){i=ui.min.y}else if(i<ui.max.y){i=ui.max.y}}x.x=e;x.y=i;se()},handleEvent:function(e){e=e||window.event;if(b[e.type]){b[e.type](e)}},goTo:function(e){e=ie(e);var i=e-p;P=i;p=e;r.currItem=nt(p);E-=i;ce(k.x*E);ke();pi=false;r.updateCurrItem()},next:function(){r.goTo(p+1)},prev:function(){r.goTo(p-1)},updateCurrZoomItem:function(e){if(e){oe("beforeChange",0)}if(R[1].el.children.length){var i=R[1].el.children[0];if(o.hasClass(i,"pswp__zoom-wrap")){di=i.style}else{di=null}}else{di=null}ui=r.currItem.bounds;D=C=r.currItem.initialZoomLevel;x.x=ui.center.x;x.y=ui.center.y;if(e){oe("afterChange")}},invalidateCurrItems:function(){A=true;for(var e=0;e<l;e++){if(R[e].item){R[e].item.needsUpdate=true}}},updateCurrItem:function(e){if(P===0){return}var i=Math.abs(P),t;if(e&&i<2){return}r.currItem=nt(p);J=false;oe("beforeChange",P);if(i>=l){h+=P+(P>0?-l:l);i=l}for(var n=0;n<i;n++){if(P>0){t=R.shift();R[l-1]=t;h++;ue((h+2)*k.x,t.el.style);r.setContent(t,p-i+n+1+1)}else{t=R.pop();R.unshift(t);h--;ue(h*k.x,t.el.style);r.setContent(t,p+i-n-1-1)}}if(di&&Math.abs(P)===1){var o=nt(Z);if(o.initialZoomLevel!==C){st(o,I);dt(o);fe(o)}}P=0;r.updateCurrZoomItem();Z=p;oe("afterChange")},updateSize:function(i){if(!H&&s.modal){var t=o.getScrollY();if(q!==t){e.style.top=t+"px";q=t}if(!i&&j.x===window.innerWidth&&j.y===window.innerHeight){return}j.x=window.innerWidth;j.y=window.innerHeight;e.style.height=j.y+"px"}I.x=r.scrollWrap.clientWidth;I.y=r.scrollWrap.clientHeight;Me();k.x=I.x+Math.round(I.x*s.spacing);k.y=I.y;ce(k.x*E);oe("beforeResize");if(h!==undefined){var n,a,f;for(var u=0;u<l;u++){n=R[u];ue((u+h)*k.x,n.el.style);f=p+u-1;if(s.loop&&ot()>2){f=ie(f)}a=nt(f);if(a&&(A||a.needsUpdate||!a.bounds)){r.cleanSlide(a);r.setContent(n,f);if(u===1){r.currItem=a;r.updateCurrZoomItem(true)}a.needsUpdate=false}else if(n.index===-1&&f>=0){r.setContent(n,f)}if(a&&a.container){st(a,I);dt(a);fe(a)}}A=false}D=C=r.currItem.initialZoomLevel;ui=r.currItem.bounds;if(ui){x.x=ui.center.x;x.y=ui.center.y;se(true)}oe("resize")},zoomTo:function(e,i,t,n,r){if(i){D=C;mi.x=Math.abs(i.x)-x.x;mi.y=Math.abs(i.y)-x.y;pe(y,x)}var a=ge(e,false),l={};Ie("x",a,l,e);Ie("y",a,l,e);var s=C;var f={x:x.x,y:x.y};me(l);var u=function(i){if(i===1){C=e;x.x=l.x;x.y=l.y}else{C=(e-s)*i+s;x.x=(l.x-f.x)*i+f.x;x.y=(l.y-f.y)*i+f.y}if(r){r(i)}se(i===1)};if(t){Re("customZoomTo",0,1,t,n||o.easing.sine.inOut,u)}else{u(1)}}};var Pe=30,Fe=10;var Le,ze,_e={},Ne={},Ue={},He={},Ye={},We=[],Be={},Ge,Xe=[],Ve={},Ke,qe,$e,je=0,Je=f(),Qe=0,ei,ii,ti,ni,oi,ri,ai,li,si,fi,ui,ci=f(),di,pi,mi=f(),hi=f(),vi,yi,xi,gi,wi,bi=function(e,i){return e.x===i.x&&e.y===i.y},Ii=function(e,i){return Math.abs(e.x-i.x)<a&&Math.abs(e.y-i.y)<a},Ci=function(e,i){Ve.x=Math.abs(e.x-i.x);Ve.y=Math.abs(e.y-i.y);return Math.sqrt(Ve.x*Ve.x+Ve.y*Ve.y)},Di=function(){if(oi){G(oi);oi=null}},Ti=function(){if(ei){oi=B(Ti);Yi()}},Mi=function(){return!(s.scaleMode==="fit"&&C===r.currItem.initialZoomLevel)},Si=function(e,i){if(!e||e===document){return false}if(e.getAttribute("class")&&e.getAttribute("class").indexOf("pswp__scroll-wrap")>-1){return false}if(i(e)){return e}return Si(e.parentNode,i)},Ai={},Ei=function(e,i){Ai.prevent=!Si(e.target,s.isClickableElement);oe("preventDragEvent",e,i,Ai);return Ai.prevent},Oi=function(e,i){i.x=e.pageX;i.y=e.pageY;i.id=e.identifier;return i},ki=function(e,i,t){t.x=(e.x+i.x)*.5;t.y=(e.y+i.y)*.5},Ri=function(e,i,t){if(e-ze>50){var n=Xe.length>2?Xe.shift():{};n.x=i;n.y=t;Xe.push(n);ze=e}},Zi=function(){var e=x.y-r.currItem.initialPosition.y;return 1-Math.abs(e/(I.y/2))},Pi={},Fi={},Li=[],zi,_i=function(e){while(Li.length>0){Li.pop()}if(!U){if(e.type.indexOf("touch")>-1){if(e.touches&&e.touches.length>0){Li[0]=Oi(e.touches[0],Pi);if(e.touches.length>1){Li[1]=Oi(e.touches[1],Fi)}}}else{Pi.x=e.pageX;Pi.y=e.pageY;Pi.id="";Li[0]=Pi}}else{zi=0;We.forEach(function(e){if(zi===0){Li[0]=e}else if(zi===1){Li[1]=e}zi++})}return Li},Ni=function(e,i){var t,n=0,o=x[e]+i[e],a,l=i[e]>0,f=ci.x+i.x,u=ci.x-Be.x,c,d;if(o>ui.min[e]||o<ui.max[e]){t=s.panEndFriction}else{t=1}o=x[e]+i[e]*t;if(s.allowPanToNext||C===r.currItem.initialZoomLevel){if(!di){d=f}else if(vi==="h"&&e==="x"&&!ti){if(l){if(o>ui.min[e]){t=s.panEndFriction;n=ui.min[e]-o;a=ui.min[e]-y[e]}if((a<=0||u<0)&&ot()>1){d=f;if(u<0&&f>Be.x){d=Be.x}}else{if(ui.min.x!==ui.max.x){c=o}}}else{if(o<ui.max[e]){t=s.panEndFriction;n=o-ui.max[e];a=y[e]-ui.max[e]}if((a<=0||u>0)&&ot()>1){d=f;if(u>0&&f<Be.x){d=Be.x}}else{if(ui.min.x!==ui.max.x){c=o}}}}if(e==="x"){if(d!==undefined){ce(d,true);if(d===Be.x){ri=false}else{ri=true}}if(ui.min.x!==ui.max.x){if(c!==undefined){x.x=c}else if(!ri){x.x+=i.x*t}}return d!==undefined}}if(!pi){if(!ri){if(C>r.currItem.fitRatio){x[e]+=i[e]*t}}}},Ui=function(e){if(e.type==="mousedown"&&e.button>0){return}if(it){e.preventDefault();return}if($e&&e.type==="mousedown"){return}if(Ei(e,true)){e.preventDefault()}oe("pointerDown");if(U){var i=o.arraySearch(We,e.pointerId,"id");if(i<0){i=We.length}We[i]={x:e.pageX,y:e.pageY,id:e.pointerId}}var t=_i(e),n=t.length;ai=null;ke();if(!ei||n===1){ei=yi=true;o.bind(window,g,r);Ke=wi=xi=qe=ri=ni=ii=ti=false;vi=null;oe("firstTouchStart",t);pe(y,x);v.x=v.y=0;pe(He,t[0]);pe(Ye,He);Be.x=k.x*E;Xe=[{x:He.x,y:He.y}];ze=Le=re();ge(C,true);Di();Ti()}if(!li&&n>1&&!pi&&!ri){D=C;ti=false;li=ii=true;v.y=v.x=0;pe(y,x);pe(_e,t[0]);pe(Ne,t[1]);ki(_e,Ne,hi);mi.x=Math.abs(hi.x)-x.x;mi.y=Math.abs(hi.y)-x.y;si=fi=Ci(_e,Ne)}},Hi=function(e){e.preventDefault();if(U){var i=o.arraySearch(We,e.pointerId,"id");if(i>-1){var t=We[i];t.x=e.pageX;t.y=e.pageY}}if(ei){var n=_i(e);if(!vi&&!ni&&!li){if(ci.x!==k.x*E){vi="h"}else{var r=Math.abs(n[0].x-He.x)-Math.abs(n[0].y-He.y);if(Math.abs(r)>=Fe){vi=r>0?"h":"v";ai=n}}}else{ai=n}}},Yi=function(){if(!ai){return}var e=ai.length;if(e===0){return}pe(_e,ai[0]);Ue.x=_e.x-He.x;Ue.y=_e.y-He.y;if(li&&e>1){He.x=_e.x;He.y=_e.y;if(!Ue.x&&!Ue.y&&bi(ai[1],Ne)){return}pe(Ne,ai[1]);if(!ti){ti=true;oe("zoomGestureStarted")}var i=Ci(_e,Ne);var t=Vi(i);if(t>r.currItem.initialZoomLevel+r.currItem.initialZoomLevel/15){wi=true}var n=1,o=we(),a=be();if(t<o){if(s.pinchToClose&&!wi&&D<=r.currItem.initialZoomLevel){var l=o-t;var f=1-l/(o/1.2);ae(f);oe("onPinchClose",f);xi=true}else{n=(o-t)/o;if(n>1){n=1}t=o-n*(o/3)}}else if(t>a){n=(t-a)/(o*6);if(n>1){n=1}t=a+n*o}if(n<0){n=0}si=i;ki(_e,Ne,Je);v.x+=Je.x-hi.x;v.y+=Je.y-hi.y;pe(hi,Je);x.x=de("x",t);x.y=de("y",t);Ke=t>C;C=t;se()}else{if(!vi){return}if(yi){yi=false;if(Math.abs(Ue.x)>=Fe){Ue.x-=ai[0].x-Ye.x}if(Math.abs(Ue.y)>=Fe){Ue.y-=ai[0].y-Ye.y}}He.x=_e.x;He.y=_e.y;if(Ue.x===0&&Ue.y===0){return}if(vi==="v"&&s.closeOnVerticalDrag){if(!Mi()){v.y+=Ue.y;x.y+=Ue.y;var u=Zi();qe=true;oe("onVerticalDrag",u);ae(u);se();return}}Ri(re(),_e.x,_e.y);ni=true;ui=r.currItem.bounds;var c=Ni("x",Ue);if(!c){Ni("y",Ue);me(x);se()}}},Wi=function(e){if($.isOldAndroid){if($e&&e.type==="mouseup"){return}if(e.type.indexOf("touch")>-1){clearTimeout($e);$e=setTimeout(function(){$e=0},600)}}oe("pointerUp");if(Ei(e,false)){e.preventDefault()}var i;if(U){var t=o.arraySearch(We,e.pointerId,"id");if(t>-1){i=We.splice(t,1)[0];if(navigator.pointerEnabled){i.type=e.pointerType||"mouse"}else{var n={4:"mouse",2:"touch",3:"pen"};i.type=n[e.pointerType];if(!i.type){i.type=e.pointerType||"mouse"}}}}var a=_i(e),l,f=a.length;if(e.type==="mouseup"){f=0}if(f===2){ai=null;return true}if(f===1){pe(Ye,a[0])}if(f===0&&!vi&&!pi){if(!i){if(e.type==="mouseup"){i={x:e.pageX,y:e.pageY,type:"mouse"}}else if(e.changedTouches&&e.changedTouches[0]){i={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"}}}oe("touchRelease",e,i)}var u=-1;if(f===0){ei=false;o.unbind(window,g,r);Di();if(li){u=0}else if(Qe!==-1){u=re()-Qe}}Qe=f===1?re():-1;if(u!==-1&&u<150){l="zoom"}else{l="swipe"}if(li&&f<2){li=false;if(f===1){l="zoomPointerUp"}oe("zoomGestureEnded")}ai=null;if(!ni&&!ti&&!pi&&!qe){return}ke();if(!Ge){Ge=Bi()}Ge.calculateSwipeSpeed("x");if(qe){var c=Zi();if(c<s.verticalDragRange){r.close()}else{var d=x.y,p=gi;Re("verticalDrag",0,1,300,o.easing.cubic.out,function(e){x.y=(r.currItem.initialPosition.y-d)*e+d;ae((1-p)*e+p);se()});oe("onVerticalDrag",1)}return}if((ri||pi)&&f===0){var m=Xi(l,Ge);if(m){return}l="zoomPointerUp"}if(pi){return}if(l!=="swipe"){Ki();return}if(!ri&&C>r.currItem.fitRatio){Gi(Ge)}},Bi=function(){var e,i;var t={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(n){if(Xe.length>1){e=re()-ze+50;i=Xe[Xe.length-2][n]}else{e=re()-Le;i=Ye[n]}t.lastFlickOffset[n]=He[n]-i;t.lastFlickDist[n]=Math.abs(t.lastFlickOffset[n]);if(t.lastFlickDist[n]>20){t.lastFlickSpeed[n]=t.lastFlickOffset[n]/e}else{t.lastFlickSpeed[n]=0}if(Math.abs(t.lastFlickSpeed[n])<.1){t.lastFlickSpeed[n]=0}t.slowDownRatio[n]=.95;t.slowDownRatioReverse[n]=1-t.slowDownRatio[n];t.speedDecelerationRatio[n]=1},calculateOverBoundsAnimOffset:function(e,i){if(!t.backAnimStarted[e]){if(x[e]>ui.min[e]){t.backAnimDestination[e]=ui.min[e]}else if(x[e]<ui.max[e]){t.backAnimDestination[e]=ui.max[e]}if(t.backAnimDestination[e]!==undefined){t.slowDownRatio[e]=.7;t.slowDownRatioReverse[e]=1-t.slowDownRatio[e];if(t.speedDecelerationRatioAbs[e]<.05){t.lastFlickSpeed[e]=0;t.backAnimStarted[e]=true;Re("bounceZoomPan"+e,x[e],t.backAnimDestination[e],i||300,o.easing.sine.out,function(i){x[e]=i;se()})}}}},calculateAnimOffset:function(e){if(!t.backAnimStarted[e]){t.speedDecelerationRatio[e]=t.speedDecelerationRatio[e]*(t.slowDownRatio[e]+t.slowDownRatioReverse[e]-t.slowDownRatioReverse[e]*t.timeDiff/10);t.speedDecelerationRatioAbs[e]=Math.abs(t.lastFlickSpeed[e]*t.speedDecelerationRatio[e]);t.distanceOffset[e]=t.lastFlickSpeed[e]*t.speedDecelerationRatio[e]*t.timeDiff;x[e]+=t.distanceOffset[e]}},panAnimLoop:function(){if(Se.zoomPan){Se.zoomPan.raf=B(t.panAnimLoop);t.now=re();t.timeDiff=t.now-t.lastNow;t.lastNow=t.now;t.calculateAnimOffset("x");t.calculateAnimOffset("y");se();t.calculateOverBoundsAnimOffset("x");t.calculateOverBoundsAnimOffset("y");if(t.speedDecelerationRatioAbs.x<.05&&t.speedDecelerationRatioAbs.y<.05){x.x=Math.round(x.x);x.y=Math.round(x.y);se();Ee("zoomPan");return}}}};return t},Gi=function(e){e.calculateSwipeSpeed("y");ui=r.currItem.bounds;e.backAnimDestination={};e.backAnimStarted={};if(Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05){e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0;e.calculateOverBoundsAnimOffset("x");e.calculateOverBoundsAnimOffset("y");return true}Oe("zoomPan");e.lastNow=re();e.panAnimLoop()},Xi=function(e,i){var t;if(!pi){je=p}var n;if(e==="swipe"){var a=He.x-Ye.x,l=i.lastFlickDist.x<10;if(a>Pe&&(l||i.lastFlickOffset.x>20)){n=-1}else if(a<-Pe&&(l||i.lastFlickOffset.x<-20)){n=1}}var f;if(n){p+=n;if(p<0){p=s.loop?ot()-1:0;f=true}else if(p>=ot()){p=s.loop?0:ot()-1;f=true}if(!f||s.loop){P+=n;E-=n;t=true}}var u=k.x*E;var c=Math.abs(u-ci.x);var d;if(!t&&u>ci.x!==i.lastFlickSpeed.x>0){d=333}else{d=Math.abs(i.lastFlickSpeed.x)>0?c/Math.abs(i.lastFlickSpeed.x):333;d=Math.min(d,400);d=Math.max(d,250)}if(je===p){t=false}pi=true;oe("mainScrollAnimStart");Re("mainScroll",ci.x,u,d,o.easing.cubic.out,ce,function(){ke();pi=false;je=-1;if(t||je!==p){r.updateCurrItem()}oe("mainScrollAnimComplete")});if(t){r.updateCurrItem(true)}return t},Vi=function(e){return 1/fi*e*D},Ki=function(){var e=C,i=we(),t=be();if(C<i){e=i}else if(C>t){e=t}var n=1,a,l=gi;if(xi&&!Ke&&!wi&&C<i){r.close();return true}if(xi){a=function(e){ae((n-l)*e+l)}}r.zoomTo(e,0,200,o.easing.cubic.out,a);return true};ee("Gestures",{publicMethods:{initGestures:function(){var e=function(e,i,t,n,o){F=e+i;L=e+t;z=e+n;if(o){_=e+o}else{_=""}};U=$.pointerEvent;if(U&&$.touch){$.touch=false}if(U){if(navigator.pointerEnabled){e("pointer","down","move","up","cancel")}else{e("MSPointer","Down","Move","Up","Cancel")}}else if($.touch){e("touch","start","move","end","cancel");Y=true}else{e("mouse","down","move","up")}g=L+" "+z+" "+_;w=F;if(U&&!Y){Y=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1}r.likelyTouchDevice=Y;b[F]=Ui;b[L]=Hi;b[z]=Wi;if(_){b[_]=b[z]}if($.touch){w+=" mousedown";g+=" mousemove mouseup";b.mousedown=b[F];b.mousemove=b[L];b.mouseup=b[z]}if(!Y){s.allowPanToNext=false}}}});var qi,$i=function(i,t,n,a){if(qi){clearTimeout(qi)}it=true;et=true;var l;if(i.initialLayout){l=i.initialLayout;i.initialLayout=null}else{l=s.getThumbBoundsFn&&s.getThumbBoundsFn(p)}var f=n?s.hideAnimationDuration:s.showAnimationDuration;var u=function(){Ee("initialZoom");if(!n){ae(1);if(t){t.style.display="block"}o.addClass(e,"pswp--animated-in");oe("initialZoom"+(n?"OutEnd":"InEnd"))}else{r.template.removeAttribute("style");r.bg.removeAttribute("style")}if(a){a()}it=false};if(!f||!l||l.x===undefined){oe("initialZoom"+(n?"Out":"In"));C=i.initialZoomLevel;pe(x,i.initialPosition);se();e.style.opacity=n?0:1;ae(1);if(f){setTimeout(function(){u()},f)}else{u()}return}var c=function(){var t=d,a=!r.currItem.src||r.currItem.loadError||s.showHideOpacity;if(i.miniImg){i.miniImg.style.webkitBackfaceVisibility="hidden"}if(!n){C=l.w/i.w;x.x=l.x;x.y=l.y-V;r[a?"template":"bg"].style.opacity=.001;se()}Oe("initialZoom");if(n&&!t){o.removeClass(e,"pswp--animated-in")}if(a){if(n){o[(t?"remove":"add")+"Class"](e,"pswp--animate_opacity")}else{setTimeout(function(){o.addClass(e,"pswp--animate_opacity")},30)}}qi=setTimeout(function(){oe("initialZoom"+(n?"Out":"In"));if(!n){C=i.initialZoomLevel;pe(x,i.initialPosition);se();ae(1);if(a){e.style.opacity=1}else{ae(1)}qi=setTimeout(u,f+20)}else{var r=l.w/i.w,s={x:x.x,y:x.y},c=C,d=gi,p=function(i){if(i===1){C=r;x.x=l.x;x.y=l.y-q}else{C=(r-c)*i+c;x.x=(l.x-s.x)*i+s.x;x.y=(l.y-q-s.y)*i+s.y}se();if(a){e.style.opacity=1-i}else{ae(d-i*d)}};if(t){Re("initialZoom",0,1,f,o.easing.cubic.out,p,u)}else{p(1);qi=setTimeout(u,f+20)}}},n?25:90)};c()};var ji,Ji={},Qi=[],et,it,tt={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:false,preload:[1,1],getNumItemsFn:function(){return ji.length}};var nt,ot,rt,at=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},lt=function(e,i,t){var n=e.bounds;n.center.x=Math.round((Ji.x-i)/2);n.center.y=Math.round((Ji.y-t)/2)+e.vGap.top;n.max.x=i>Ji.x?Math.round(Ji.x-i):n.center.x;n.max.y=t>Ji.y?Math.round(Ji.y-t)+e.vGap.top:n.center.y;n.min.x=i>Ji.x?0:n.center.x;n.min.y=t>Ji.y?e.vGap.top:n.center.y},st=function(e,i,t){if(e.src&&!e.loadError){var n=!t;if(n){if(!e.vGap){e.vGap={top:0,bottom:0}}oe("parseVerticalMargin",e)}Ji.x=i.x;Ji.y=i.y-e.vGap.top-e.vGap.bottom;if(n){var o=Ji.x/e.w;var r=Ji.y/e.h;e.fitRatio=o<r?o:r;var a=s.scaleMode;if(a==="orig"){t=1}else if(a==="fit"){t=e.fitRatio}if(t>1){t=1}e.initialZoomLevel=t;if(!e.bounds){e.bounds=at()}}if(!t){return}lt(e,e.w*t,e.h*t);if(n&&t===e.initialZoomLevel){e.initialPosition=e.bounds.center}return e.bounds}else{e.w=e.h=0;e.initialZoomLevel=e.fitRatio=1;e.bounds=at();e.initialPosition=e.bounds.center;return e.bounds}},ft=function(e,i,t,n,o,a){if(i.loadError){return}if(n){i.imageAppended=true;dt(i,n,i===r.currItem&&J);t.appendChild(n);if(a){setTimeout(function(){if(i&&i.loaded&&i.placeholder){i.placeholder.style.display="none";i.placeholder=null}},500)}}},ut=function(e){e.loading=true;e.loaded=false;var i=e.img=o.createEl("pswp__img","img");var t=function(){e.loading=false;e.loaded=true;if(e.loadComplete){e.loadComplete(e)}else{e.img=null}i.onload=i.onerror=null;i=null};i.onload=t;i.onerror=function(){e.loadError=true;t()};i.src=e.src;return i},ct=function(e,i){if(e.src&&e.loadError&&e.container){if(i){e.container.innerHTML=""}e.container.innerHTML=s.errorMsg.replace("%url%",e.src);return true}},dt=function(e,i,t){if(!e.src){return}if(!i){i=e.container.lastChild}var n=t?e.w:Math.round(e.w*e.fitRatio),o=t?e.h:Math.round(e.h*e.fitRatio);if(e.placeholder&&!e.loaded){e.placeholder.style.width=n+"px";e.placeholder.style.height=o+"px"}i.style.width=n+"px";i.style.height=o+"px"},pt=function(){if(Qi.length){var e;for(var i=0;i<Qi.length;i++){e=Qi[i];if(e.holder.index===e.index){ft(e.index,e.item,e.baseDiv,e.img,false,e.clearPlaceholder)}}Qi=[]}};ee("Controller",{publicMethods:{lazyLoadItem:function(e){e=ie(e);var i=nt(e);if(!i||(i.loaded||i.loading)&&!A){return}oe("gettingData",e,i);if(!i.src){return}ut(i)},initController:function(){o.extend(s,tt,true);r.items=ji=t;nt=r.getItemAt;ot=s.getNumItemsFn;rt=s.loop;if(ot()<3){s.loop=false}ne("beforeChange",function(e){var i=s.preload,t=e===null?true:e>=0,n=Math.min(i[0],ot()),o=Math.min(i[1],ot()),a;for(a=1;a<=(t?o:n);a++){r.lazyLoadItem(p+a)}for(a=1;a<=(t?n:o);a++){r.lazyLoadItem(p-a)}});ne("initialLayout",function(){r.currItem.initialLayout=s.getThumbBoundsFn&&s.getThumbBoundsFn(p)});ne("mainScrollAnimComplete",pt);ne("initialZoomInEnd",pt);ne("destroy",function(){var e;for(var i=0;i<ji.length;i++){e=ji[i];if(e.container){e.container=null}if(e.placeholder){e.placeholder=null}if(e.img){e.img=null}if(e.preloader){e.preloader=null}if(e.loadError){e.loaded=e.loadError=false}}Qi=null})},getItemAt:function(e){if(e>=0){return ji[e]!==undefined?ji[e]:false}return false},allowProgressiveImg:function(){return s.forceProgressiveLoading||!Y||s.mouseUsed||screen.width>1200},setContent:function(e,i){if(s.loop){i=ie(i)}var t=r.getItemAt(e.index);if(t){t.container=null}var n=r.getItemAt(i),a;if(!n){e.el.innerHTML="";return}oe("gettingData",i,n);e.index=i;e.item=n;var l=n.container=o.createEl("pswp__zoom-wrap");if(!n.src&&n.html){if(n.html.tagName){l.appendChild(n.html)}else{l.innerHTML=n.html}}ct(n);st(n,I);if(n.src&&!n.loadError&&!n.loaded){n.loadComplete=function(t){if(!u){return}if(e&&e.index===i){if(ct(t,true)){t.loadComplete=t.img=null;st(t,I);fe(t);if(e.index===p){r.updateCurrZoomItem()}return}if(!t.imageAppended){if($.transform&&(pi||it)){Qi.push({item:t,baseDiv:l,img:t.img,index:i,holder:e,clearPlaceholder:true})}else{ft(i,t,l,t.img,pi||it,true)}}else{if(!it&&t.placeholder){t.placeholder.style.display="none";t.placeholder=null}}}t.loadComplete=null;t.img=null;oe("imageLoadComplete",i,t)};if(o.features.transform){var f="pswp__img pswp__img--placeholder";f+=n.msrc?"":" pswp__img--placeholder--blank";var c=o.createEl(f,n.msrc?"img":"");if(n.msrc){c.src=n.msrc}dt(n,c);l.appendChild(c);n.placeholder=c}if(!n.loading){ut(n)}if(r.allowProgressiveImg()){if(!et&&$.transform){Qi.push({item:n,baseDiv:l,img:n.img,index:i,holder:e})}else{ft(i,n,l,n.img,true,true)}}}else if(n.src&&!n.loadError){a=o.createEl("pswp__img","img");a.style.opacity=1;a.src=n.src;dt(n,a);ft(i,n,l,a,true)}if(!et&&i===p){di=l.style;$i(n,a||n.img)}else{fe(n)}e.el.innerHTML="";e.el.appendChild(l)},cleanSlide:function(e){if(e.img){e.img.onload=e.img.onerror=null}e.loaded=e.loading=e.img=e.imageAppended=false}}});var mt,ht={},vt=function(e,i,t){var n=document.createEvent("CustomEvent"),o={origEvent:e,target:e.target,releasePoint:i,pointerType:t||"touch"};n.initCustomEvent("pswpTap",true,true,o);e.target.dispatchEvent(n)};ee("Tap",{publicMethods:{initTap:function(){ne("firstTouchStart",r.onTapStart);ne("touchRelease",r.onTapRelease);ne("destroy",function(){ht={};mt=null})},onTapStart:function(e){if(e.length>1){clearTimeout(mt);mt=null}},onTapRelease:function(e,i){if(!i){return}if(!ni&&!ii&&!Ae){var t=i;if(mt){clearTimeout(mt);mt=null;if(Ii(t,ht)){oe("doubleTap",t);return}}if(i.type==="mouse"){vt(e,i,"mouse");return}var n=e.target.tagName.toUpperCase();if(n==="BUTTON"||o.hasClass(e.target,"pswp__single-tap")){vt(e,i);return}pe(ht,t);mt=setTimeout(function(){vt(e,i);mt=null},300)}}}});var yt;ee("DesktopZoom",{publicMethods:{initDesktopZoom:function(){if(K){return}if(Y){ne("mouseUsed",function(){r.setupDesktopZoom()})}else{r.setupDesktopZoom(true)}},setupDesktopZoom:function(i){yt={};var t="wheel mousewheel DOMMouseScroll";ne("bindEvents",function(){o.bind(e,t,r.handleMouseWheel)});ne("unbindEvents",function(){if(yt){o.unbind(e,t,r.handleMouseWheel)}});r.mouseZoomedIn=false;var n,a=function(){if(r.mouseZoomedIn){o.removeClass(e,"pswp--zoomed-in");r.mouseZoomedIn=false}if(C<1){o.addClass(e,"pswp--zoom-allowed")}else{o.removeClass(e,"pswp--zoom-allowed")}l()},l=function(){if(n){o.removeClass(e,"pswp--dragging");n=false}};ne("resize",a);ne("afterChange",a);ne("pointerDown",function(){if(r.mouseZoomedIn){n=true;o.addClass(e,"pswp--dragging")}});ne("pointerUp",l);if(!i){a()}},handleMouseWheel:function(e){if(C<=r.currItem.fitRatio){if(s.modal){if(!s.closeOnScroll||Ae||ei){e.preventDefault()}else if(N&&Math.abs(e.deltaY)>2){d=true;r.close()}}return true}e.stopPropagation();yt.x=0;if("deltaX"in e){if(e.deltaMode===1){yt.x=e.deltaX*18;yt.y=e.deltaY*18}else{yt.x=e.deltaX;yt.y=e.deltaY}}else if("wheelDelta"in e){if(e.wheelDeltaX){yt.x=-.16*e.wheelDeltaX}if(e.wheelDeltaY){yt.y=-.16*e.wheelDeltaY}else{yt.y=-.16*e.wheelDelta}}else if("detail"in e){yt.y=e.detail}else{return}ge(C,true);var i=x.x-yt.x,t=x.y-yt.y;if(s.modal||i<=ui.min.x&&i>=ui.max.x&&t<=ui.min.y&&t>=ui.max.y){e.preventDefault()}r.panTo(i,t)},toggleDesktopZoom:function(i){i=i||{x:I.x/2+O.x,y:I.y/2+O.y};var t=s.getDoubleTapZoom(true,r.currItem);var n=C===t;r.mouseZoomedIn=!n;r.zoomTo(n?r.currItem.initialZoomLevel:t,i,333);o[(!n?"add":"remove")+"Class"](e,"pswp--zoomed-in")}}});var xt={history:true,galleryUID:1};var gt,wt,bt,It,Ct,Dt,Tt,Mt,St,At,Et,Ot,kt=function(){return Et.hash.substring(1)},Rt=function(){if(gt){clearTimeout(gt)}if(bt){clearTimeout(bt)}},Zt=function(){var e=kt(),i={};if(e.length<5){return i}var t,n=e.split("&");for(t=0;t<n.length;t++){if(!n[t]){continue}var o=n[t].split("=");if(o.length<2){continue}i[o[0]]=o[1]}if(s.galleryPIDs){var r=i.pid;i.pid=0;for(t=0;t<ji.length;t++){if(ji[t].pid===r){i.pid=t;break}}}else{i.pid=parseInt(i.pid,10)-1}if(i.pid<0){i.pid=0}return i},Pt=function(){if(bt){clearTimeout(bt)}if(Ae||ei){
bt=setTimeout(Pt,500);return}if(It){clearTimeout(wt)}else{It=true}var e=p+1;var i=nt(p);if(i.hasOwnProperty("pid")){e=i.pid}var t=Tt+"&"+"gid="+s.galleryUID+"&"+"pid="+e;if(!Mt){if(Et.hash.indexOf(t)===-1){At=true}}var n=Et.href.split("#")[0]+"#"+t;if(Ot){if("#"+t!==window.location.hash){history[Mt?"replaceState":"pushState"]("",document.title,n)}}else{if(Mt){Et.replace(n)}else{Et.hash=t}}Mt=true;wt=setTimeout(function(){It=false},60)};ee("History",{publicMethods:{initHistory:function(){o.extend(s,xt,true);if(!s.history){return}Et=window.location;At=false;St=false;Mt=false;Tt=kt();Ot="pushState"in history;if(Tt.indexOf("gid=")>-1){Tt=Tt.split("&gid=")[0];Tt=Tt.split("?gid=")[0]}ne("afterChange",r.updateURL);ne("unbindEvents",function(){o.unbind(window,"hashchange",r.onHashChange)});var e=function(){Dt=true;if(!St){if(At){history.back()}else{if(Tt){Et.hash=Tt}else{if(Ot){history.pushState("",document.title,Et.pathname+Et.search)}else{Et.hash=""}}}}Rt()};ne("unbindEvents",function(){if(d){e()}});ne("destroy",function(){if(!Dt){e()}});ne("firstUpdate",function(){p=Zt().pid});var i=Tt.indexOf("pid=");if(i>-1){Tt=Tt.substring(0,i);if(Tt.slice(-1)==="&"){Tt=Tt.slice(0,-1)}}setTimeout(function(){if(u){o.bind(window,"hashchange",r.onHashChange)}},40)},onHashChange:function(){if(kt()===Tt){St=true;r.close();return}if(!It){Ct=true;r.goTo(Zt().pid);Ct=false}},updateURL:function(){Rt();if(Ct){return}if(!Mt){Pt()}else{gt=setTimeout(Pt,800)}}}});o.extend(r,Ze)};return e});
//rebuild by neat 