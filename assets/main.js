//Slick slider

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});


$(document).ready(function(){
    $('#slider-container').slick({
      centerMode: true,
      dots: true,
      arrows: false,
      focusOnSelect:true,
      slidesToShow: 1,
    });

  });

$(document).ready(function(){
  $('#profile-card-slider').slick({
    centerMode: true,
    dots: true,
    arrows: false,
    focusOnSelect:true,
    slidesToShow: 1,
    slidesToScroll: 3,
  });

});

$(document).ready(function(){
  $('#review-card-slider').slick({
    centerMode: true,
    dots: true,
    arrows: false,
    focusOnSelect:true,
    slidesToShow: 1,
    slidesToScroll: 3,
  });

});

// Currency selectors
$(document).ready(function(){
  $('.shopify-currency-form select').on('change', function() {
  $(this)
    .parents('form')
    .submit();
  });

});

// Accordion
$(document).ready(function(){
  $("#accordion > li > ul").hide();

  $("#accordion > li > div").click(function () {
    $('.active').not(this).removeClass('active').next().hide(300);

    $(this).toggleClass('active');
                  if (false == $(this).next().is(':visible')) {
                    $('#accordion > ul').slideUp(300);
                  }
                  $(this).next().slideToggle(300);
                });

});

$(document).ready(function(){
  $("#faqAccordion > li > ul").hide();

  $("#faqAccordion > li > div").click(function () {
    $('.active').not(this).removeClass('active').next().hide(300);

    $(this).toggleClass('active');
                  if (false == $(this).next().is(':visible')) {
                    $('#faqAccordion > ul').slideUp(300);
                  }
                  $(this).next().slideToggle(300);
                });
});


$(document).ready(function(){

  $(".accordion-tab > .tab-content").hide();

   $(".accordion-tab > #accordion-opener").click(function(){
    $('.active').not(this).removeClass('active').next().hide(300);

     $(this).toggleClass('active');
     if (false == $(this).next().is(':visible')) {
      $('#accordion-tab > .tab-content ').slideUp(300);
    }
      $(this).next().slideToggle(300);

   });

});

$(document).ready(function(){

  $('.filter-item > .filter-content').hide();

  $(".filter-item > .filter-title").click(function(){
    $(this).next().slideToggle(300);
  });

  $(".filter-item > .filter-title").click(function(){
      $(this).toggleClass('active-filter');
      $(this).children().toggleClass('white-font');
  });

});

//Dropdown

$(document).ready(function(){

  $('#customer-dropdown-menu').hide();

  $('#customer-dropdown-btn').click(function(){
    $('#customer-dropdown-menu').slideToggle(300);

  })


});


//Overlay menu

$(function(){

  $('#navigation-menu .menu-list .menu-item').on('click', function(){
    $('body').css('overflow', 'hidden');
    $('#navigation-menu .menu-list .menu-item').removeClass('active-title');
    $(this).addClass('active-title');
    $('.overlay-menu .subcategories').css('transform', 'translateX(-700%)');
    $('.overlay-menu .upsell').css('transform', 'translateX(700%)');
    let target = $(this).attr('data-target');
    $('#' + target + '> .subcategories').css('transform', 'translateX(0)');
    $('#' + target + '> .upsell').css('transform', 'translateX(0)');

  });

  $('.overlay-menu .overlay-remove-btn').on('click', function(){
    $('body').css('overflow', 'visible');
    $('#navigation-menu .menu-list .menu-item').removeClass('active-title');
    $('.overlay-menu .subcategories').css('transform', 'translateX(-700%)');
    $('.overlay-menu .upsell').css('transform', 'translateX(700%)');
  });
})

// Freebie

$(function(){
  $('.add-freebie').on('click', function(){
    $('#freebie-container').hide();
    $('.number-spinner').hide();
  });
});


// Smart search overlay

$(function(){
  $('#searchInput').focus(function(){
    $('body').css('overflow', 'hidden');
    $('#smart-search-menu').css('transform', 'translateX(0px)');
    $('#smart-search-upsell').css('transform', 'translateX(0px)');
  })

  $('#smart-search-remove').click(function(){
    $('body').css('overflow', 'visible');
    $('#smart-search-menu').css('transform','translateX(-100%)');
    $('#smart-search-upsell').css('transform','translateX(100%)');
  });

});

//Off canvas cart

$(function(){

  $('.cart-btn').click(function(){
    $('.off-canvas-menu').css('right', '0px');
  });

  $('.off-canvas-menu > svg').click(function(){
    $('.off-canvas-menu').css('right', '-504px');
  });

  $('.discountApply').on('click', function(){
    $('.code-flex').append("<p>Promocode applied</p>");
  });

  $('.checkout').on('click', function(event){
    event.preventDefault();

    var url = '/checkout?discount=';

    var code = $('.discountCode').val();

    window.location.href = url+code;
  });

});

// Search bar

$(function(){

    if(window.location.href.indexOf("login") > -1) {
      $('.section-border').hide();
    }

    if(window.location.href.indexOf("register") > -1) {
      $('.section-border').hide();
    }
})


// Mobile navigation

$(function(){

  $('#filter-icon').hide();

  if(window.location.href == "https://softwaredepotco.myshopify.com/") {
    $('#mobile-home-img').attr('src','https://cdn.shopify.com/s/files/1/0244/3614/6228/files/icon-home-color.svg?17958')
}

  if(window.location.href.indexOf("collections") > -1){
    $('#mobile-product-img').attr('src','https://cdn.shopify.com/s/files/1/0244/3614/6228/files/icon_product_color.svg?17958')
  }

  if (window.location.href.indexOf("cart") > -1) {
    $('#mobile-cart-img').attr('src','https://cdn.shopify.com/s/files/1/0244/3614/6228/files/icon-shop-color.svg?17751');
    $('.full-search-box').hide();
    $('footer').hide();
  }

  if (window.location.href.indexOf("account") > -1) {
    $('#mobile-account-img').attr('src','https://cdn.shopify.com/s/files/1/0244/3614/6228/files/icon-user-color.svg?34357');
    $('.full-search-box').hide();
    $('footer').hide();
  }

  if (window.location.href.indexOf("collections/microsoft-office-for-mac") > -1) {
    $('#filter-icon').show();
  }

  if (window.location.href.indexOf("collections/microsoft-office") > -1) {
    $('#filter-icon').show();
  }

  if (window.location.href.indexOf("collections/office-apps") > -1) {
    $('#filter-icon').show();
  }

  if (window.location.href.indexOf("collections/windows") > -1) {
    $('#filter-icon').show();
  }

  if (window.location.href.indexOf("collections/antivirus") > -1) {
    $('#filter-icon').show();
  }

  if(window.location.href == "https://softwaredepotco.myshopify.com/collections") {
    $('#filter-icon').hide();
  }

  if (window.location.href.indexOf("products") > -1) {
    $('footer').hide();
  }

  if (window.location.href.indexOf("blog") > -1) {
    $('footer').hide();
  }

  if (window.location.href.indexOf("login") > -1) {
    $('footer').hide();
  }

  if (window.location.href.indexOf("register") > -1) {
    $('footer').hide();
  }

});



// Search autocomplete

$(function() {
  // Current Ajax request.
  var currentAjaxRequest = null;
  // Grabbing all search forms on the page, and adding a .search-results list to each.
  var searchForms = $('form[action="/search"]').css('position','relative').each(function() {
    // Grabbing text input.
    var input = $(this).find('input[name="q"]');
    // Adding a list for showing search results.
    var offSet = input.position().top + input.innerHeight();
    $('<ul class="search-results"></ul>').css( { 'position': 'absolute', 'left': '-14%', 'top': '48px' } ).appendTo($(this)).hide();
    // Listening to keyup and change on the text field within these search forms.
    input.attr('autocomplete', 'off').bind('keyup change', function() {
      // What's the search term?
      var term = $(this).val();
      // What's the search form?
      var form = $(this).closest('form');
      // What's the search URL?
      var searchURL = '/search?type=product&q=' + term;
      // What's the search results list?
      var resultsList = form.find('.search-results');
      // If that's a new term and it contains at least 3 characters.
      if (term.length > 3 && term != $(this).attr('data-old-term')) {
        // Saving old query.
        $(this).attr('data-old-term', term);
        // Killing any Ajax request that's currently being processed.
        if (currentAjaxRequest != null) currentAjaxRequest.abort();
        // Pulling results.
        currentAjaxRequest = $.getJSON(searchURL + '&view=json', function(data) {
          // Reset results.
          resultsList.empty();
          // If we have no results.
          if(data.results_count == 0) {
            // resultsList.html('<li><span class="title">No results.</span></li>');
            // resultsList.fadeIn(200);
            resultsList.hide();
          } else {
            // If we have results.
            $.each(data.results, function(index, item) {
              var link = $('<a></a>').attr('href', item.url);
              link.append('<span class="title">' + item.title + '</span>');
              link.wrap('<li></li>');
              resultsList.append(link.parent());
            });
            // The Ajax request will return at the most 10 results.
            // If there are more than 10, let's link to the search results page.
            if(data.results_count > 10) {
              resultsList.append('<li><span class="title"><a href="' + searchURL + '">See all results (' + data.results_count + ')</a></span></li>');
            }
            resultsList.fadeIn(200);
          }
        });
      }
    });
  });
  // Clicking outside makes the results disappear.
  $('body').bind('click', function(){
    $('.search-results').hide();
  });
});


// Collection filter
!function(e){e.fn.tagSort=function(t){var s={items:".item-tagsort",tagElement:"span",tagClassPrefix:!1,itemTagsView:!1,itemTagsSeperator:" ",itemTagsElement:!1,sortType:"exclusive",fadeTime:0,reset:!1};t=e.extend(s,t);var i={generateTags:function(s){var a={},n={pointers:[],tags:[]},o=e(document.createElement(t.tagElement));return s.each(function(s){$element=e(this);var r=$element.data("item-tags"),c=r.match(/,\s+/)?r.split(", "):r.split(",");e.each(c,function(n,r){var c=r.toLowerCase();a[c]||(a[c]=[],i.container.append(t.tagClassPrefix!==!1?o.clone().text(r).addClass((t.tagClassPrefix+r.toLowerCase()).replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g,"")):o.clone().text(r))),t.itemTagsView!==!1&&(t.itemTagsElement!==!1?$element.find(t.itemTagsView).append(e(document.createElement(t.itemTagsElement)).clone().text(r)):$element.find(t.itemTagsView).append(n>0?t.itemTagsSeperator+r:r)),a[c].push(s)}),"exclusive"==t.sortType&&(n.pointers.push(s),n.tags.push(c))}),"inclusive"==t.sortType||"single"==t.sortType?a:"exclusive"==t.sortType?n:void 0},exclusiveSort:function(t){var s=[[],[]];return e.each(t.pointers,function(a,n){var o=!0;i.container.find(".tagsort-active").each(function(i){-1==t.tags[a].indexOf(e(this).text())&&(o=!1,s[0].push(n))}),1==o&&s[1].push(n)}),s},inclusiveSort:function(t,s){var a=[s,[]];return i.container.find(".tagsort-active").each(function(s){e.each(t[e(this).text().toLowerCase()],function(e,t){a[0].splice(a[0].indexOf(t),1),a[1].push(t)})}),a},showElements:function(s,i){e.each(s,function(e,s){i.eq(s).fadeIn(t.fadeTime)})},hideElements:function(s,i){e.each(s,function(e,s){i.eq(s).fadeOut(t.fadeTime)})},inititalize:function(s){i.container=s;for(var a,n=e(t.items),o=[],r=t.reset,c=0;c<n.length;c++)o.push(c);i.tags=i.generateTags(n,i.container);var l=i.container.find(t.tagElement);l.click(function(){"single"==t.sortType?e(this).hasClass("tagsort-active")?e(this).toggleClass("tagsort-active"):(e(".tagsort-active").removeClass("tagsort-active"),e(this).toggleClass("tagsort-active"),a=i.inclusiveSort(i.tags,o.slice())):(e(this).toggleClass("tagsort-active"),a="inclusive"==t.sortType?i.inclusiveSort(i.tags,o.slice()):i.exclusiveSort(i.tags)),l.hasClass("tagsort-active")||(a=[[],o.slice()]),a[0].length>0&&i.hideElements(a[0],n),a[1].length>0&&i.showElements(a[1],n)}),r&&e(r).click(function(){e(".tagsort-active").removeClass("tagsort-active"),a=[[],o.slice()],i.showElements(a[1],n)})}};return i.inititalize(this),e(this)}}(jQuery);

$(function(){
      $('ul.tag-container').tagSort({
      items: '.product-grid',
      tagElement: 'li',
      tagClassPrefix: '',
      itemTagsView: false,
      itemTagsSeperator: ' ',
      itemTagsElement: false,
      sortType: 'exclusive',
      fadeTime: 0,
      reset: true,
      sortAlphabetical: false
    });
})

$(function(){

  $('ul#filter-system').children('li.2016').hide();
  $('ul#filter-system').children('li.2011').hide();
  $('ul#filter-system').children('li.office').hide();
  $('ul#filter-system').children('li.exchange.server').hide();
  $('ul#filter-system').children('li.home.and.business').hide();
  $('ul#filter-system').children('li.home.and.student').hide();
  $('ul#filter-system').children('li.excel').hide();
  $('ul#filter-system').children('li.word').hide();
  $('ul#filter-system').children('li.outlook').hide();
  $('ul#filter-system').children('li.access').hide();
  $('ul#filter-system').children('li.2013').hide();
  $('ul#filter-system').children('li.2012').hide();
  $('ul#filter-system').children('li.2014').hide();
  $('ul#filter-system').children('li.2019').hide();
  $('ul#filter-system').children('li.2015').hide();
  $('ul#filter-system').children('li.2010').hide();
  $('ul#filter-system').children('li.2008').hide();
  $('ul#filter-system').children('li.2015').hide();
  $('ul#filter-system').children('li.standard').hide();
  $('ul#filter-system').children('li.visio').hide();
  $('ul#filter-system').children('li.powerpoint').hide();
  $('ul#filter-system').children('li.publisher').hide();
  $('ul#filter-system').children('li.enterprise').hide();
  $('ul#filter-system').children('li.datacenter').hide();
  $('ul#filter-system').children('li.foundation').hide();
  $('ul#filter-system').children('li.essentials').hide();
  $('ul#filter-system').children('li.windows.10').hide();
  $('ul#filter-system').children('li.windows.7').hide();
  $('ul#filter-system').children('li.windows.8').hide();
  $('ul#filter-system').children('li.home').hide();
  $('ul#filter-system').children('li.pro').hide();
  $('ul#filter-system').children('li.home premium').hide();
  $('ul#filter-system').children('li.server').hide();
  $('ul#filter-system').children('li.sql.server').hide();
  $('ul#filter-system').children('li.professional').hide();
  $('ul#filter-system').children('li.ultimate').hide();
  $('ul#filter-system').children('li.developer').hide();
  $('ul#filter-system').children('li.project').hide();
  $('ul#filter-system').children('li.skype').hide();
  $('ul#filter-system').children('li.64.bit').hide();
  $('ul#filter-system').children('li.32.bit').hide();
  $('ul#filter-system').children('li.£1.-.£99').hide();
  $('ul#filter-system').children('li.£100.-.£199').hide();
  $('ul#filter-system').children('li.£200.-.£399').hide();
  $('ul#filter-system').children('li.£400.-.£599').hide();
  $('ul#filter-system').children('li.£600').hide();
  $('ul#filter-system').children('li.eset').hide();
  $('ul#filter-system').children('li.kaspersky').hide();
  $('ul#filter-system').children('li.trend.micro').hide();
  $('ul#filter-system').children('li.norton').hide();
  $('ul#filter-system').children('li.symantec').hide();
  $('ul#filter-system').children('li.open.license').hide();
  $('ul#filter-system').children('li.open.academic').hide();
});

$(function(){

  $('ul#filter-system').children().click(function(){
    $('ul#filter-system > li.tagsort-active').css('font-weight', '300');
  })

  $('.filter-category').click(function(){
    $(this).next().children('li.pc').hide();
    $(this).next().children('li.mac').hide();
    $(this).next().children('li.office').hide();
    $(this).next().children('li.2008').hide();
    $(this).next().children('li.2010').hide();
    $(this).next().children('li.2011').hide();
    $(this).next().children('li.2012').hide();
    $(this).next().children('li.2014').hide();
    $(this).next().children('li.2013').hide();
    $(this).next().children('li.2015').hide();
    $(this).next().children('li.2016').hide();
    $(this).next().children('li.2019').hide();
    $(this).next().children('li.£1.-.£99').hide();
    $(this).next().children('li.£100.-.£199').hide();
    $(this).next().children('li.£200.-.£399').hide();
    $(this).next().children('li.£400.-.£599').hide();
    $(this).next().children('li.£600').hide();

  })

  $('.filter-year').click(function(){
    $(this).next().children('li.enterprise').hide();
    $(this).next().children('li.developer').hide();
    $(this).next().children('li.ultimate').hide();
    $(this).next().children('li.home').hide();
    $(this).next().children('li.pro').hide();
    $(this).next().children('li.home.premium').hide();
    $(this).next().children('li.open.license').hide();
    $(this).next().children('li.pc').hide();
    $(this).next().children('li.mac').hide();
    $(this).next().children('li.office').hide();
    $(this).next().children('li.server').hide();
    $(this).next().children('li.standard').hide();
    $(this).next().children('li.datacenter').hide();
    $(this).next().children('li.essentials').hide();
    $(this).next().children('li.foundation').hide();
    $(this).next().children('li.home.and.business').hide();
    $(this).next().children('li.home.and.student').hide();
    $(this).next().children('li.professional').hide();
    $(this).next().children('li.professional.plus').hide();
    $(this).next().children('li.word').hide();
    $(this).next().children('li.excel').hide();
    $(this).next().children('li.outlook').hide();
    $(this).next().children('li.access').hide();
    $(this).next().children('li.powerpoint').hide();
    $(this).next().children('li.publisher').hide();
    $(this).next().children('li.project').hide();
    $(this).next().children('li.visio').hide();
    $(this).next().children('li.skype').hide();
    $(this).next().children('li.windows.10').hide();
    $(this).next().children('li.windows.7').hide();
    $(this).next().children('li.eset').hide();
    $(this).next().children('li.trend.micro').hide();
    $(this).next().children('li.kaspersky').hide();
    $(this).next().children('li.norton').hide();
    $(this).next().children('li.symantec').hide();
    $(this).next().children('li.64.bit').hide();
    $(this).next().children('li.32.bit').hide();
    $(this).next().children('li.£1.-.£99').hide();
    $(this).next().children('li.£100.-.£199').hide();
    $(this).next().children('li.£200.-.£399').hide();
    $(this).next().children('li.£400.-.£599').hide();
    $(this).next().children('li.£600').hide();
  })

  $('.filter-price').click(function(){
    $(this).next().children('li.2008').hide();
    $(this).next().children('li.2010').hide();
    $(this).next().children('li.2011').hide();
    $(this).next().children('li.2012').hide();
    $(this).next().children('li.2014').hide();
    $(this).next().children('li.2013').hide();
    $(this).next().children('li.2015').hide();
    $(this).next().children('li.2016').hide();
    $(this).next().children('li.2019').hide();
    $(this).next().children('li.enterprise').hide();
    $(this).next().children('li.developer').hide();
    $(this).next().children('li.essentials').hide();
    $(this).next().children('li.datacenter').hide();
    $(this).next().children('li.foundation').hide();
    $(this).next().children('li.ultimate').hide();
    $(this).next().children('li.home').hide();
    $(this).next().children('li.pro').hide();
    $(this).next().children('li.home.premium').hide();
    $(this).next().children('li.open.license').hide();
    $(this).next().children('li.pc').hide();
    $(this).next().children('li.mac').hide();
    $(this).next().children('li.office').hide();
    $(this).next().children('li.server').hide();
    $(this).next().children('li.standard').hide();
    $(this).next().children('li.home.and.business').hide();
    $(this).next().children('li.home.and.student').hide();
    $(this).next().children('li.professional').hide();
    $(this).next().children('li.professional.plus').hide();
    $(this).next().children('li.word').hide();
    $(this).next().children('li.excel').hide();
    $(this).next().children('li.outlook').hide();
    $(this).next().children('li.access').hide();
    $(this).next().children('li.powerpoint').hide();
    $(this).next().children('li.publisher').hide();
    $(this).next().children('li.project').hide();
    $(this).next().children('li.visio').hide();
    $(this).next().children('li.skype').hide();
    $(this).next().children('li.windows.10').hide();
    $(this).next().children('li.windows.7').hide();
    $(this).next().children('li.eset').hide();
    $(this).next().children('li.trend.micro').hide();
    $(this).next().children('li.kaspersky').hide();
    $(this).next().children('li.norton').hide();
    $(this).next().children('li.symantec').hide();
    $(this).next().children('li.64.bit').hide();
    $(this).next().children('li.32.bit').hide();
  })

  $('.filter-os').click(function(){
    $(this).next().children('li.2008').hide();
    $(this).next().children('li.2010').hide();
    $(this).next().children('li.2011').hide();
    $(this).next().children('li.2012').hide();
    $(this).next().children('li.2014').hide();
    $(this).next().children('li.2013').hide();
    $(this).next().children('li.2015').hide();
    $(this).next().children('li.2016').hide();
    $(this).next().children('li.2019').hide();
    $(this).next().children('li.enterprise').hide();
    $(this).next().children('li.developer').hide();
    $(this).next().children('li.ultimate').hide();
    $(this).next().children('li.home').hide();
    $(this).next().children('li.pro').hide();
    $(this).next().children('li.open.license').hide();
    $(this).next().children('li.home.premium').hide();
    $(this).next().children('li.office').hide();
    $(this).next().children('li.server').hide();
    $(this).next().children('li.standard').hide();
    $(this).next().children('li.essentials').hide();
    $(this).next().children('li.datacenter').hide();
    $(this).next().children('li.foundation').hide();
    $(this).next().children('li.home.and.business').hide();
    $(this).next().children('li.home.and.student').hide();
    $(this).next().children('li.professional').hide();
    $(this).next().children('li.professional.plus').hide();
    $(this).next().children('li.word').hide();
    $(this).next().children('li.excel').hide();
    $(this).next().children('li.outlook').hide();
    $(this).next().children('li.access').hide();
    $(this).next().children('li.powerpoint').hide();
    $(this).next().children('li.publisher').hide();
    $(this).next().children('li.project').hide();
    $(this).next().children('li.visio').hide();
    $(this).next().children('li.skype').hide();
    $(this).next().children('li.windows.10').hide();
    $(this).next().children('li.windows.7').hide();
    $(this).next().children('li.eset').hide();
    $(this).next().children('li.trend.micro').hide();
    $(this).next().children('li.kaspersky').hide();
    $(this).next().children('li.norton').hide();
    $(this).next().children('li.symantec').hide();
    $(this).next().children('li.64.bit').hide();
    $(this).next().children('li.32.bit').hide();
    $(this).next().children('li.£1.-.£99').hide();
    $(this).next().children('li.£100.-.£199').hide();
    $(this).next().children('li.£200.-.£399').hide();
    $(this).next().children('li.£400.-.£599').hide();
    $(this).next().children('li.£600').hide();
  })

  $('.mobile-filter-remove').click(function(){
    $('.mobile-filter').css({
      'transform': 'translateY(100%)',
      'opacity': '0'
    });
    $('body').css('overflow', 'unset');
  })

  $('#filter-icon').click(function(){
    $('.mobile-filter').css({
      'transform': 'translateY(0%)',
      'opacity': '1'
    });
    $('body').css('overflow', 'hidden');
  })

})

//Mobile more menu
$(function(){

  $('.mobile-more-remove').click(function(){
    $('.mobile-more-menu').css({
      'transform': 'translateY(100%)',
      'opacity': '0'
    });
    $('body').css('overflow', 'unset');
  })

  $('#icon-more').click(function(){
    $('.mobile-more-menu').css({
      'transform': 'translateY(0%)',
      'opacity': '1'
    });
    $('body').css('overflow', 'hidden');
  })
});

// Load MORE
'use strict';

/* ===================================================================================== @preserve =
 ___  _   _    _
/   || | | |  | |
\__  | | | |  | |  __
/    |/  |/_) |/  /  \_/\/
\___/|__/| \_/|__/\__/  /\_/
              |\
              |/
Ajaxinate
version v2.0.11
https://github.com/Elkfox/Ajaxinate
Copyright (c) 2017 Elkfox Co Pty Ltd
https://elkfox.com
MIT License
================================================================================================= */

var Ajaxinate = function ajaxinateConstructor(config) {
  var settings = config || {};
  /*
    pagination: Selector of pagination container
    method: [options are 'scroll', 'click']
    container: Selector of repeating content
    offset: 0, offset the number of pixels before the bottom to start loading more on scroll
    loadingText: 'Loading', The text changed during loading
    callback: null, function to callback after a new page is loaded
  */
  var defaultSettings = {
    pagination: '.AjaxinatePagination',
    method: 'scroll',
    container: '.AjaxinateLoop',
    offset: 0,
    loadingText: 'Loading',
    callback: null
  };
  // Merge configs
  this.settings = Object.assign(defaultSettings, settings);

  // Bind 'this' to applicable prototype functions
  this.addScrollListeners = this.addScrollListeners.bind(this);
  this.addClickListener = this.addClickListener.bind(this);
  this.checkIfPaginationInView = this.checkIfPaginationInView.bind(this);
  this.stopMultipleClicks = this.stopMultipleClicks.bind(this);
  this.destroy = this.destroy.bind(this);

  // Set up our element selectors
  this.containerElement = document.querySelector(this.settings.container);
  this.paginationElement = document.querySelector(this.settings.pagination);

  this.initialize();
};

Ajaxinate.prototype.initialize = function initializeTheCorrectFunctionsBasedOnTheMethod() {
  // Find and initialise the correct function based on the method set in the config
  if (this.containerElement) {
    var initializers = {
      click: this.addClickListener,
      scroll: this.addScrollListeners
    };
    initializers[this.settings.method]();
  }
};

Ajaxinate.prototype.addScrollListeners = function addEventListenersForScrolling() {
  if (this.paginationElement) {
    document.addEventListener('scroll', this.checkIfPaginationInView);
    window.addEventListener('resize', this.checkIfPaginationInView);
    window.addEventListener('orientationchange', this.checkIfPaginationInView);
  }
};

Ajaxinate.prototype.addClickListener = function addEventListenerForClicking() {
  if (this.paginationElement) {
    this.nextPageLinkElement = this.paginationElement.querySelector('a');
    this.clickActive = true;
    if (this.nextPageLinkElement !== null) {
      this.nextPageLinkElement.addEventListener('click', this.stopMultipleClicks);
    }
  }
};

Ajaxinate.prototype.stopMultipleClicks = function handleClickEvent(event) {
  event.preventDefault();
  if (this.clickActive) {
    this.nextPageLinkElement.innerHTML = this.settings.loadingText;
    this.nextPageUrl = this.nextPageLinkElement.href;
    this.clickActive = false;
    this.loadMore();
  }
};

Ajaxinate.prototype.checkIfPaginationInView = function handleScrollEvent() {
  var top = this.paginationElement.getBoundingClientRect().top - this.settings.offset;
  var bottom = this.paginationElement.getBoundingClientRect().bottom + this.settings.offset;
  if (top <= window.innerHeight && bottom >= 0) {
    this.nextPageLinkElement = this.paginationElement.querySelector('a');
    this.removeScrollListener();
    if (this.nextPageLinkElement) {
      this.nextPageLinkElement.innerHTML = this.settings.loadingText;
      this.nextPageUrl = this.nextPageLinkElement.href;
      this.loadMore();
    }
  }
};

Ajaxinate.prototype.loadMore = function getTheHtmlOfTheNextPageWithAnAjaxRequest() {
  this.request = new XMLHttpRequest();
  this.request.onreadystatechange = function success() {
    if (this.request.readyState === 4 && this.request.status === 200) {
      var newContainer = this.request.responseXML.querySelectorAll(this.settings.container)[0];
      var newPagination = this.request.responseXML.querySelectorAll(this.settings.pagination)[0];
      this.containerElement.insertAdjacentHTML('beforeend', newContainer.innerHTML);
      this.paginationElement.innerHTML = newPagination.innerHTML;
      if (this.settings.callback && typeof this.settings.callback === 'function') {
        this.settings.callback(this.request.responseXML);
      }
      this.initialize();
    }
  }.bind(this);
  this.request.open('GET', this.nextPageUrl);
  this.request.responseType = 'document';
  this.request.send();
};

Ajaxinate.prototype.removeClickListener = function removeClickEventListener() {
  this.nextPageLinkElement.addEventListener('click', this.stopMultipleClicks);
};

Ajaxinate.prototype.removeScrollListener = function removeScrollEventListener() {
  document.removeEventListener('scroll', this.checkIfPaginationInView);
  window.removeEventListener('resize', this.checkIfPaginationInView);
  window.removeEventListener('orientationchange', this.checkIfPaginationInView);
};

Ajaxinate.prototype.destroy = function removeEventListenersAndReturnThis() {
  // This method is used to unbind event listeners from the DOM
  // This function is called manually to destroy "this" Ajaxinate instance
  var destroyers = {
    click: this.removeClickListener,
    scroll: this.removeScrollListener
  };
  destroyers[this.settings.method]();
  return this;
};

document.addEventListener("DOMContentLoaded", function() {
  var endlessScroll = new Ajaxinate();
});


//Forget password

$(function(){

  if(window.location.href == "https://softwaredepotco.myshopify.com/account/login#recover") {
    $('#customer_login').hide();

  }

})


/*Success Cart
$(function(){

  $('.successful-cart').hide();

  $('.add-to-cart').click(function(){
    $('.successful-cart').show();
    $('body').css('overflow', 'hidden');
  })

  $('.success-cart-remove').click(function(){
    $('.successful-cart').hide();
    $('body').css('overflow', 'unset');
  })
});

*/

// Nice select

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function(e){e.fn.niceSelect=function(t){function s(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var s=t.next(),n=t.find("option"),i=t.find("option:selected");s.find(".current").html(i.data("display")||i.text()),n.each(function(t){var n=e(this),i=n.data("display");s.find("ul").append(e("<li></li>").attr("data-value",n.val()).attr("data-display",i||null).addClass("option"+(n.is(":selected")?" selected":"")+(n.is(":disabled")?" disabled":"")).html(n.text()))})}if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),n=e(this).next(".nice-select"),i=n.hasClass("open");n.length&&(n.remove(),s(t),i&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),s=e(this).next(".nice-select");s.length&&(s.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||s(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var s=e(this);e(".nice-select").not(s).removeClass("open"),s.toggleClass("open"),s.hasClass("open")?(s.find(".option"),s.find(".focus").removeClass("focus"),s.find(".selected").addClass("focus")):s.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var s=e(this),n=s.closest(".nice-select");n.find(".selected").removeClass("selected"),s.addClass("selected");var i=s.data("display")||s.text();n.find(".current").text(i),n.prev("select").val(s.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(t){var s=e(this),n=e(s.find(".focus")||s.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return s.hasClass("open")?n.trigger("click"):s.trigger("click"),!1;if(40==t.keyCode){if(s.hasClass("open")){var i=n.nextAll(".option:not(.disabled)").first();i.length>0&&(s.find(".focus").removeClass("focus"),i.addClass("focus"))}else s.trigger("click");return!1}if(38==t.keyCode){if(s.hasClass("open")){var l=n.prevAll(".option:not(.disabled)").first();l.length>0&&(s.find(".focus").removeClass("focus"),l.addClass("focus"))}else s.trigger("click");return!1}if(27==t.keyCode)s.hasClass("open")&&s.trigger("click");else if(9==t.keyCode&&s.hasClass("open"))return!1});var n=document.createElement("a").style;return n.cssText="pointer-events:auto","auto"!==n.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);

$(document).ready(function() {
  $('select').niceSelect();

    $('form#currency_form .nice-select span.current').before('<span></span>');
    $('form#currency_form .nice-select span:first-child').addClass('flag');

    let selectedCurrency = $('form#currency_form ul.list li.option.selected').data("value");

      if( selectedCurrency == "AUD"){
        $('form#currency_form .nice-select span.flag').addClass('flag-aud');
      }

      else if(selectedCurrency == "CAD"){
        $('form#currency_form .nice-select span.flag').addClass('flag-cad');
      }

      else if(selectedCurrency == "DKK"){
        $('form#currency_form .nice-select span.flag').addClass('flag-dkk');
      }

      else if(selectedCurrency == "EUR"){
        $('form#currency_form .nice-select span.flag').addClass('flag-eur');
      }

      else if(selectedCurrency == "GBP"){
        $('form#currency_form .nice-select span.flag').addClass('flag-gbp');
      }

      else if(selectedCurrency == "HKD"){
        $('form#currency_form .nice-select span.flag').addClass('flag-hkd');
      }

      else if(selectedCurrency == "JPY"){
        $('form#currency_form .nice-select span.flag').addClass('flag-jpy');
      }

      else if(selectedCurrency == "NZD"){
        $('form#currency_form .nice-select span.flag').addClass('flag-nzd');
      }

      else if(selectedCurrency == "SGD"){
        $('form#currency_form .nice-select span.flag').addClass('flag-sgd');
      }

      else if(selectedCurrency == "USD"){
        $('form#currency_form .nice-select span.flag').addClass('flag-usd');
      }

      else {
        $('form#currency_form .nice-select span.flag').hide();
      };


  $('form#currency_form ul.list li.option').append("<span></span>");
    $('form#currency_form ul.list li.option span').addClass('flag');
      $('form#currency_form ul.list li[data-value="AUD"].option span.flag').addClass('flag-aud');
      $('form#currency_form ul.list li[data-value="CAD"].option span.flag').addClass('flag-cad');
      $('form#currency_form ul.list li[data-value="DKK"].option span.flag').addClass('flag-dkk');
      $('form#currency_form ul.list li[data-value="EUR"].option span.flag').addClass('flag-eur');
      $('form#currency_form ul.list li[data-value="GBP"].option span.flag').addClass('flag-gbp');
      $('form#currency_form ul.list li[data-value="HKD"].option span.flag').addClass('flag-hkd');
      $('form#currency_form ul.list li[data-value="JPY"].option span.flag').addClass('flag-jpy');
      $('form#currency_form ul.list li[data-value="NZD"].option span.flag').addClass('flag-nzd');
      $('form#currency_form ul.list li[data-value="SGD"].option span.flag').addClass('flag-sgd');
      $('form#currency_form ul.list li[data-value="USD"].option span.flag').addClass('flag-usd');
});

// scroll

$(function(){

  //Tabs
$("#account-tabs").tabs();

  $(".section-1").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-1").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-2").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-2").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-3").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-3").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-4").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-4").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-5").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-5").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-6").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-6").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-7").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-7").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-8").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-8").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-9").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-9").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-10").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-10").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-11").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-11").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-12").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-12").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-13").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-13").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-14").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-14").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-15").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-15").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-16").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-16").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-17").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-17").offset().top - 200 },
        500 );
      });

})

$(function(){

  $(".section-18").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-18").offset().top - 200 },
        500 );
      });

})


$(function(){

  $(".section-19").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-19").offset().top - 200 },
        500 );
      });

})


$(function(){

  $(".section-20").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-20").offset().top - 200 },
        500 );
      });

})


$(function(){

  $(".section-21").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-c-21").offset().top - 200 },
        500 );
      });

})

$(function(){
  $('#chat-popup').on('click', function(event) {
   event.preventDefault();
   if (typeof $zopim == "function") {
       $zopim.livechat.window.show();
       return false;
   }
});
})


//Read MORE
$(function(){
  $('.read-more > button').on('click', function(){
    $('.faq-wrap').toggleClass('checked')
  })
})

// Lazy Load
/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);

$(function(){
  $('.lazy').Lazy();
})


$('.slider-text').slick({
        mobileFirst: true,
      dots: false,
      arrows: true,
      slidesToShow: 1,
      centerMode: false,
      adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: "unslick"
            },
            {
                breakpoint: 1199,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0',
                }
            }
        ]
});
$('.slider-news-office').slick({
        mobileFirst: true,
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
});
    
$(document).ready(function(){

  $(".table-mobile .tabs-list li a").click(function(e){
     e.preventDefault();
  });

  $(".table-mobile .tabs-list li").click(function(){
     var tabid = $(this).find("a").attr("href");
     $(".table-mobile .tabs-list li,.tabs div.tab").removeClass("active");   // removing active class from tab

     $(".table-mobile .tab").hide();   // hiding open tab
     $(tabid).show();    // show tab
     $(this).addClass("active"); //  adding active class to clicked tab

  });

});
    
$(window).on('scroll', function() {
  var currentScrollTop = $(this).scrollTop()
  if (currentScrollTop >= $(window).scrollTop() && $(this).scrollTop() > 380) {
    $('.take-quiz').addClass('show-quiz');
  } else {
    $('.take-quiz').removeClass('show-quiz');
  }
});
    $(".close-quiz").on("click", function(){
      $('.take-quiz').removeClass('show-quiz');
    });