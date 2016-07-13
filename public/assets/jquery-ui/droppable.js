/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t,n){var r,s,o,a=t.nodeName.toLowerCase();return"area"===a?(r=t.parentNode,s=r.name,t.href&&s&&"map"===r.nodeName.toLowerCase()?(o=e("img[usemap='#"+s+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(a)?!t.disabled:"a"===a?t.href||n:n)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),n="absolute"===i,r=t?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){var t=e(this);return n&&"static"===t.css("position")?!1:r.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&s.length?s:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var n=e.attr(i,"tabindex"),r=isNaN(n);return(r||n>=0)&&t(i,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function n(t,i,n,s){return e.each(r,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var r="Width"===i?["Left","Right"]:["Top","Bottom"],s=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(s,n(this,t)+"px")})},e.fn["outer"+i]=function(t,r){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(s,n(this,t,!0,r)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,n,r=e(this[0]);r.length&&r[0]!==document;){if(i=r.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(n=parseInt(r.css("zIndex"),10),!isNaN(n)&&0!==n))return n;r=r.parent()}return 0}}),e.ui.plugin={add:function(t,i,n){var r,s=e.ui[t].prototype;for(r in n)s.plugins[r]=s.plugins[r]||[],s.plugins[r].push([i,n[r]])},call:function(e,t,i,n){var r,s=e.plugins[t];if(s&&(n||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(r=0;r<s.length;r++)e.options[s[r][0]]&&s[r][1].apply(e.element,i)}}}),/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t=0,i=Array.prototype.slice;return e.cleanData=function(t){return function(i){var n,r,s;for(s=0;null!=(r=i[s]);s++)try{n=e._data(r,"events"),n&&n.remove&&e(r).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,n){var r,s,o,a,l={},u=t.split(".")[0];return t=t.split(".")[1],r=u+"-"+t,n||(n=i,i=e.Widget),e.expr[":"][r.toLowerCase()]=function(t){return!!e.data(t,r)},e[u]=e[u]||{},s=e[u][t],o=e[u][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new o(e,t)},e.extend(o,s,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),a=new i,a.options=e.widget.extend({},a.options),e.each(n,function(t,n){return e.isFunction(n)?void(l[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},r=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,s=this._superApply;return this._super=e,this._superApply=r,t=n.apply(this,arguments),this._super=i,this._superApply=s,t}}()):void(l[t]=n)}),o.prototype=e.widget.extend(a,{widgetEventPrefix:s?a.widgetEventPrefix||t:t},l,{constructor:o,namespace:u,widgetName:t,widgetFullName:r}),s?(e.each(s._childConstructors,function(t,i){var n=i.prototype;e.widget(n.namespace+"."+n.widgetName,o,i._proto)}),delete s._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var n,r,s=i.call(arguments,1),o=0,a=s.length;a>o;o++)for(n in s[o])r=s[o][n],s[o].hasOwnProperty(n)&&void 0!==r&&(e.isPlainObject(r)?t[n]=e.isPlainObject(t[n])?e.widget.extend({},t[n],r):e.widget.extend({},r):t[n]=r);return t},e.widget.bridge=function(t,n){var r=n.prototype.widgetFullName||t;e.fn[t]=function(s){var o="string"==typeof s,a=i.call(arguments,1),l=this;return o?this.each(function(){var i,n=e.data(this,r);return"instance"===s?(l=n,!1):n?e.isFunction(n[s])&&"_"!==s.charAt(0)?(i=n[s].apply(n,a),i!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+s+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+s+"'")}):(a.length&&(s=e.widget.extend.apply(null,[s].concat(a))),this.each(function(){var t=e.data(this,r);t?(t.option(s||{}),t._init&&t._init()):e.data(this,r,new n(s,this))})),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(i,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var n,r,s,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},n=t.split("."),t=n.shift(),n.length){for(r=o[t]=e.widget.extend({},this.options[t]),s=0;s<n.length-1;s++)r[n[s]]=r[n[s]]||{},r=r[n[s]];if(t=n.pop(),1===arguments.length)return void 0===r[t]?null:r[t];r[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,n){var r,s=this;"boolean"!=typeof t&&(n=i,i=t,t=!1),n?(i=r=e(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,r=this.widget()),e.each(n,function(n,o){function a(){return t||s.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?s[o]:o).apply(s,arguments):void 0}"string"!=typeof o&&(a.guid=o.guid=o.guid||a.guid||e.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+s.eventNamespace,c=l[2];c?r.delegate(c,u,a):i.bind(u,a)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?n[e]:e).apply(n,arguments)}var n=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,n){var r,s,o=this.options[t];if(n=n||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(r in s)r in i||(i[r]=s[r]);return this.element.trigger(i,n),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(n,r,s){"string"==typeof r&&(r={effect:r});var o,a=r?r===!0||"number"==typeof r?i:r.effect||i:t;r=r||{},"number"==typeof r&&(r={duration:r}),o=!e.isEmptyObject(r),r.complete=s,r.delay&&n.delay(r.delay),o&&e.effects&&e.effects.effect[a]?n[t](r):a!==t&&n[a]?n[a](r.duration,r.easing,s):n.queue(function(i){e(this)[t](),s&&s.call(n[0]),i()})}}),e.widget}),/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery","./widget"],e):e(jQuery)}(function(e){var t=!1;return e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var n=this,r=1===i.which,s="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return r&&!s&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){n.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return n._mouseMove(e)},this._mouseUpDelegate=function(e){return n._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(i){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,i.target===this._mouseDownEvent.target&&e.data(i.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(i)),t=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}),/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],e):e(jQuery)}(function(e){return e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(n){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var n=this._uiHash();if(this._trigger("drag",t,n)===!1)return this._mouseUp({}),!1;this.position=n.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,n=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(n=e.ui.ddmanager.drop(this,t)),this.dropped&&(n=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!n||"valid"===this.options.revert&&n||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,n=e.isFunction(i.helper),r=n?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),n&&r[0]===this.element[0]&&this._setPositionRelative(),r[0]===this.element[0]||/(fixed|absolute)/.test(r.css("position"))||r.css("position","absolute"),r},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,n,r=this.options,s=this.document[0];return this.relativeContainer=null,r.containment?"window"===r.containment?void(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===r.containment?void(this.containment=[0,0,e(s).width()-this.helperProportions.width-this.margins.left,(e(s).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):r.containment.constructor===Array?void(this.containment=r.containment):("parent"===r.containment&&(r.containment=this.helper[0].parentNode),i=e(r.containment),n=i[0],void(n&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i))):void(this.containment=null)},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,n=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:n?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:n?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,n,r,s,o=this.options,a=this._isRootNode(this.scrollParent[0]),l=e.pageX,u=e.pageY;return a&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(n=this.relativeContainer.offset(),i=[this.containment[0]+n.left,this.containment[1]+n.top,this.containment[2]+n.left,this.containment[3]+n.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(u=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(u=i[3]+this.offset.click.top)),o.grid&&(r=o.grid[1]?this.originalPageY+Math.round((u-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,u=i?r-this.offset.click.top>=i[1]||r-this.offset.click.top>i[3]?r:r-this.offset.click.top>=i[1]?r-o.grid[1]:r+o.grid[1]:r,s=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?s-this.offset.click.left>=i[0]||s-this.offset.click.left>i[2]?s:s-this.offset.click.left>=i[0]?s-o.grid[0]:s+o.grid[0]:s),"y"===o.axis&&(l=this.originalPageX),"x"===o.axis&&(u=this.originalPageY)),{top:u-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:a?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:a?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,n){return n=n||this._uiHash(),e.ui.plugin.call(this,t,[i,n,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),n.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,n)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,n){var r=e.extend({},i,{item:n.element});n.sortables=[],e(n.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(n.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,r))})},stop:function(t,i,n){var r=e.extend({},i,{item:n.element});n.cancelHelperRemoval=!1,e.each(n.sortables,function(){var e=this;e.isOver?(e.isOver=0,n.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,r))})},drag:function(t,i,n){e.each(n.sortables,function(){var r=!1,s=this;s.positionAbs=n.positionAbs,s.helperProportions=n.helperProportions,s.offset.click=n.offset.click,s._intersectsWith(s.containerCache)&&(r=!0,e.each(n.sortables,function(){return this.positionAbs=n.positionAbs,this.helperProportions=n.helperProportions,this.offset.click=n.offset.click,this!==s&&this._intersectsWith(this.containerCache)&&e.contains(s.element[0],this.element[0])&&(r=!1),r})),r?(s.isOver||(s.isOver=1,n._parent=i.helper.parent(),s.currentItem=i.helper.appendTo(s.element).data("ui-sortable-item",!0),s.options._helper=s.options.helper,s.options.helper=function(){return i.helper[0]},t.target=s.currentItem[0],s._mouseCapture(t,!0),s._mouseStart(t,!0,!0),s.offset.click.top=n.offset.click.top,s.offset.click.left=n.offset.click.left,s.offset.parent.left-=n.offset.parent.left-s.offset.parent.left,s.offset.parent.top-=n.offset.parent.top-s.offset.parent.top,n._trigger("toSortable",t),n.dropped=s.element,e.each(n.sortables,function(){this.refreshPositions()}),n.currentItem=n.element,s.fromOutside=n),s.currentItem&&(s._mouseDrag(t),i.position=s.position)):s.isOver&&(s.isOver=0,s.cancelHelperRemoval=!0,s.options._revert=s.options.revert,s.options.revert=!1,s._trigger("out",t,s._uiHash(s)),s._mouseStop(t,!0),s.options.revert=s.options._revert,s.options.helper=s.options._helper,s.placeholder&&s.placeholder.remove(),i.helper.appendTo(n._parent),n._refreshOffsets(t),i.position=n._generatePosition(t,!0),n._trigger("fromSortable",t),n.dropped=!1,e.each(n.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,n){var r=e("body"),s=n.options;r.css("cursor")&&(s._cursor=r.css("cursor")),r.css("cursor",s.cursor)},stop:function(t,i,n){var r=n.options;r._cursor&&e("body").css("cursor",r._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,n){var r=e(i.helper),s=n.options;r.css("opacity")&&(s._opacity=r.css("opacity")),r.css("opacity",s.opacity)},stop:function(t,i,n){var r=n.options;r._opacity&&e(i.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,n){var r=n.options,s=!1,o=n.scrollParentNotHidden[0],a=n.document[0];o!==a&&"HTML"!==o.tagName?(r.axis&&"x"===r.axis||(n.overflowOffset.top+o.offsetHeight-t.pageY<r.scrollSensitivity?o.scrollTop=s=o.scrollTop+r.scrollSpeed:t.pageY-n.overflowOffset.top<r.scrollSensitivity&&(o.scrollTop=s=o.scrollTop-r.scrollSpeed)),r.axis&&"y"===r.axis||(n.overflowOffset.left+o.offsetWidth-t.pageX<r.scrollSensitivity?o.scrollLeft=s=o.scrollLeft+r.scrollSpeed:t.pageX-n.overflowOffset.left<r.scrollSensitivity&&(o.scrollLeft=s=o.scrollLeft-r.scrollSpeed))):(r.axis&&"x"===r.axis||(t.pageY-e(a).scrollTop()<r.scrollSensitivity?s=e(a).scrollTop(e(a).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(a).scrollTop())<r.scrollSensitivity&&(s=e(a).scrollTop(e(a).scrollTop()+r.scrollSpeed))),r.axis&&"y"===r.axis||(t.pageX-e(a).scrollLeft()<r.scrollSensitivity?s=e(a).scrollLeft(e(a).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(a).scrollLeft())<r.scrollSensitivity&&(s=e(a).scrollLeft(e(a).scrollLeft()+r.scrollSpeed)))),s!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(n,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,n){var r=n.options;n.snapElements=[],e(r.snap.constructor!==String?r.snap.items||":data(ui-draggable)":r.snap).each(function(){var t=e(this),i=t.offset();this!==n.element[0]&&n.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,n){var r,s,o,a,l,u,c,d,h,p,f=n.options,m=f.snapTolerance,g=i.offset.left,v=g+n.helperProportions.width,y=i.offset.top,b=y+n.helperProportions.height;for(h=n.snapElements.length-1;h>=0;h--)l=n.snapElements[h].left-n.margins.left,u=l+n.snapElements[h].width,c=n.snapElements[h].top-n.margins.top,d=c+n.snapElements[h].height,l-m>v||g>u+m||c-m>b||y>d+m||!e.contains(n.snapElements[h].item.ownerDocument,n.snapElements[h].item)?(n.snapElements[h].snapping&&n.options.snap.release&&n.options.snap.release.call(n.element,t,e.extend(n._uiHash(),{snapItem:n.snapElements[h].item})),n.snapElements[h].snapping=!1):("inner"!==f.snapMode&&(r=Math.abs(c-b)<=m,s=Math.abs(d-y)<=m,o=Math.abs(l-v)<=m,a=Math.abs(u-g)<=m,r&&(i.position.top=n._convertPositionTo("relative",{top:c-n.helperProportions.height,left:0}).top),s&&(i.position.top=n._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l-n.helperProportions.width}).left),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:u}).left)),p=r||s||o||a,"outer"!==f.snapMode&&(r=Math.abs(c-y)<=m,s=Math.abs(d-b)<=m,o=Math.abs(l-g)<=m,a=Math.abs(u-v)<=m,r&&(i.position.top=n._convertPositionTo("relative",{top:c,left:0}).top),s&&(i.position.top=n._convertPositionTo("relative",{top:d-n.helperProportions.height,left:0}).top),o&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l}).left),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:u-n.helperProportions.width}).left)),!n.snapElements[h].snapping&&(r||s||o||a||p)&&n.options.snap.snap&&n.options.snap.snap.call(n.element,t,e.extend(n._uiHash(),{snapItem:n.snapElements[h].item})),n.snapElements[h].snapping=r||s||o||a||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,n){var r,s=n.options,o=e.makeArray(e(s.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(r=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",r+t)}),this.css("zIndex",r+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,n){var r=e(i.helper),s=n.options;r.css("zIndex")&&(s._zIndex=r.css("zIndex")),r.css("zIndex",s.zIndex)},stop:function(t,i,n){var r=n.options;r._zIndex&&e(i.helper).css("zIndex",r._zIndex)}}),e.ui.draggable}),/*!
 * jQuery UI Droppable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/droppable/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./mouse","./draggable"],e):e(jQuery)}(function(e){return e.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,n=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(n)?n:function(e){return e.is(n)},this.proportions=function(){return arguments.length?void(t=arguments[0]):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;t<e.length;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var n=e.ui.ddmanager.droppables[this.options.scope];this._splice(n),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var n=i||e.ui.ddmanager.current,r=!1;return n&&(n.currentItem||n.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===n.options.scope&&i.accept.call(i.element[0],n.currentItem||n.element)&&e.ui.intersect(n,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(r=!0,!1):void 0}),r?!1:this.accept.call(this.element[0],n.currentItem||n.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(n)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,n,r){if(!i.offset)return!1;var s=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,a=s+t.helperProportions.width,l=o+t.helperProportions.height,u=i.offset.left,c=i.offset.top,d=u+i.proportions().width,h=c+i.proportions().height;switch(n){case"fit":return s>=u&&d>=a&&o>=c&&h>=l;case"intersect":return u<s+t.helperProportions.width/2&&a-t.helperProportions.width/2<d&&c<o+t.helperProportions.height/2&&l-t.helperProportions.height/2<h;case"pointer":return e(r.pageY,c,i.proportions().height)&&e(r.pageX,u,i.proportions().width);case"touch":return(o>=c&&h>=o||l>=c&&h>=l||c>o&&l>h)&&(s>=u&&d>=s||a>=u&&d>=a||u>s&&a>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var n,r,s=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,a=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(n=0;n<s.length;n++)if(!(s[n].options.disabled||t&&!s[n].accept.call(s[n].element[0],t.currentItem||t.element))){for(r=0;r<a.length;r++)if(a[r]===s[n].element[0]){s[n].proportions().height=0;continue e}s[n].visible="none"!==s[n].element.css("display"),s[n].visible&&("mousedown"===o&&s[n]._activate.call(s[n],i),s[n].offset=s[n].element.offset(),s[n].proportions({width:s[n].element[0].offsetWidth,height:s[n].element[0].offsetHeight}))}},drop:function(t,i){var n=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(n=this._drop.call(this,i)||n),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),n},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var n,r,s,o=e.ui.intersect(t,this,this.options.tolerance,i),a=!o&&this.isover?"isout":o&&!this.isover?"isover":null;a&&(this.options.greedy&&(r=this.options.scope,s=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===r}),s.length&&(n=e(s[0]).droppable("instance"),n.greedyChild="isover"===a)),n&&"isover"===a&&(n.isover=!1,n.isout=!0,n._out.call(n,i)),this[a]=!0,this["isout"===a?"isover":"isout"]=!1,this["isover"===a?"_over":"_out"].call(this,i),n&&"isout"===a&&(n.isout=!1,n.isover=!0,n._over.call(n,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable});