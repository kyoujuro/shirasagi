/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){return function(){function e(t,e,n){return[parseFloat(t[0])*(d.test(t[0])?e/100:1),parseFloat(t[1])*(d.test(t[1])?n/100:1)]}function n(e,n){return parseInt(t.css(e,n),10)||0}function i(e){var n=e[0];return 9===n.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(n)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var r,o,s=Math.max,a=Math.abs,f=Math.round,u=/left|center|right/,c=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,h=/^\w+/,d=/%$/,p=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==r)return r;var e,n,i=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=i.children()[0];return t("body").append(i),e=o.offsetWidth,i.css("overflow","scroll"),n=o.offsetWidth,e===n&&(n=i[0].clientWidth),i.remove(),r=e-n},getScrollInfo:function(e){var n=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),i=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),r="scroll"===n||"auto"===n&&e.width<e.element[0].scrollWidth,o="scroll"===i||"auto"===i&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:r?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var n=t(e||window),i=t.isWindow(n[0]),r=!!n[0]&&9===n[0].nodeType;return{element:n,isWindow:i,isDocument:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:i||r?n.width():n.outerWidth(),height:i||r?n.height():n.outerHeight()}}},t.fn.position=function(r){if(!r||!r.of)return p.apply(this,arguments);r=t.extend({},r);var d,g,m,v,b,y,x=t(r.of),w=t.position.getWithinInfo(r.within),C=t.position.getScrollInfo(w),_=(r.collision||"flip").split(" "),k={};return y=i(x),x[0].preventDefault&&(r.at="left top"),g=y.width,m=y.height,v=y.offset,b=t.extend({},v),t.each(["my","at"],function(){var t,e,n=(r[this]||"").split(" ");1===n.length&&(n=u.test(n[0])?n.concat(["center"]):c.test(n[0])?["center"].concat(n):["center","center"]),n[0]=u.test(n[0])?n[0]:"center",n[1]=c.test(n[1])?n[1]:"center",t=l.exec(n[0]),e=l.exec(n[1]),k[this]=[t?t[0]:0,e?e[0]:0],r[this]=[h.exec(n[0])[0],h.exec(n[1])[0]]}),1===_.length&&(_[1]=_[0]),"right"===r.at[0]?b.left+=g:"center"===r.at[0]&&(b.left+=g/2),"bottom"===r.at[1]?b.top+=m:"center"===r.at[1]&&(b.top+=m/2),d=e(k.at,g,m),b.left+=d[0],b.top+=d[1],this.each(function(){var i,u,c=t(this),l=c.outerWidth(),h=c.outerHeight(),p=n(this,"marginLeft"),y=n(this,"marginTop"),M=l+p+n(this,"marginRight")+C.width,W=h+y+n(this,"marginBottom")+C.height,j=t.extend({},b),I=e(k.my,c.outerWidth(),c.outerHeight());"right"===r.my[0]?j.left-=l:"center"===r.my[0]&&(j.left-=l/2),"bottom"===r.my[1]?j.top-=h:"center"===r.my[1]&&(j.top-=h/2),j.left+=I[0],j.top+=I[1],o||(j.left=f(j.left),j.top=f(j.top)),i={marginLeft:p,marginTop:y},t.each(["left","top"],function(e,n){t.ui.position[_[e]]&&t.ui.position[_[e]][n](j,{targetWidth:g,targetHeight:m,elemWidth:l,elemHeight:h,collisionPosition:i,collisionWidth:M,collisionHeight:W,offset:[d[0]+I[0],d[1]+I[1]],my:r.my,at:r.at,within:w,elem:c})}),r.using&&(u=function(t){var e=v.left-j.left,n=e+g-l,i=v.top-j.top,o=i+m-h,f={target:{element:x,left:v.left,top:v.top,width:g,height:m},element:{element:c,left:j.left,top:j.top,width:l,height:h},horizontal:0>n?"left":e>0?"right":"center",vertical:0>o?"top":i>0?"bottom":"middle"};l>g&&a(e+n)<g&&(f.horizontal="center"),h>m&&a(i+o)<m&&(f.vertical="middle"),s(a(e),a(n))>s(a(i),a(o))?f.important="horizontal":f.important="vertical",r.using.call(this,t,f)}),c.offset(t.extend(j,{using:u}))})},t.ui.position={fit:{left:function(t,e){var n,i=e.within,r=i.isWindow?i.scrollLeft:i.offset.left,o=i.width,a=t.left-e.collisionPosition.marginLeft,f=r-a,u=a+e.collisionWidth-o-r;e.collisionWidth>o?f>0&&0>=u?(n=t.left+f+e.collisionWidth-o-r,t.left+=f-n):u>0&&0>=f?t.left=r:f>u?t.left=r+o-e.collisionWidth:t.left=r:f>0?t.left+=f:u>0?t.left-=u:t.left=s(t.left-a,t.left)},top:function(t,e){var n,i=e.within,r=i.isWindow?i.scrollTop:i.offset.top,o=e.within.height,a=t.top-e.collisionPosition.marginTop,f=r-a,u=a+e.collisionHeight-o-r;e.collisionHeight>o?f>0&&0>=u?(n=t.top+f+e.collisionHeight-o-r,t.top+=f-n):u>0&&0>=f?t.top=r:f>u?t.top=r+o-e.collisionHeight:t.top=r:f>0?t.top+=f:u>0?t.top-=u:t.top=s(t.top-a,t.top)}},flip:{left:function(t,e){var n,i,r=e.within,o=r.offset.left+r.scrollLeft,s=r.width,f=r.isWindow?r.scrollLeft:r.offset.left,u=t.left-e.collisionPosition.marginLeft,c=u-f,l=u+e.collisionWidth-s-f,h="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,d="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,p=-2*e.offset[0];0>c?(n=t.left+h+d+p+e.collisionWidth-s-o,(0>n||n<a(c))&&(t.left+=h+d+p)):l>0&&(i=t.left-e.collisionPosition.marginLeft+h+d+p-f,(i>0||a(i)<l)&&(t.left+=h+d+p))},top:function(t,e){var n,i,r=e.within,o=r.offset.top+r.scrollTop,s=r.height,f=r.isWindow?r.scrollTop:r.offset.top,u=t.top-e.collisionPosition.marginTop,c=u-f,l=u+e.collisionHeight-s-f,h="top"===e.my[1],d=h?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,p="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(i=t.top+d+p+g+e.collisionHeight-s-o,(0>i||i<a(c))&&(t.top+=d+p+g)):l>0&&(n=t.top-e.collisionPosition.marginTop+d+p+g-f,(n>0||a(n)<l)&&(t.top+=d+p+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,n,i,r,s,a=document.getElementsByTagName("body")[0],f=document.createElement("div");e=document.createElement(a?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&t.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in i)e.style[s]=i[s];e.appendChild(f),n=a||document.documentElement,n.insertBefore(e,n.firstChild),f.style.cssText="position: absolute; left: 10.7432222px;",r=t(f).offset().left,o=r>10&&11>r,e.innerHTML="",n.removeChild(e)}()}(),t.ui.position});