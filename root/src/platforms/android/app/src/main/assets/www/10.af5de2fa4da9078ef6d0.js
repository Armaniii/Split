(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{TBPC:function(t,e,o){"use strict";o.r(e),o.d(e,"IonToast",function(){return p}),o.d(e,"IonToastController",function(){return m});var n=o("cBjU"),a=o("A6vh"),i=o("qOrH"),r=function(t,e,o,n){return new(o||(o=Promise))(function(a,i){function r(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){t.done?a(t.value):new o(function(e){e(t.value)}).then(r,s)}c((n=n.apply(t,e||[])).next())})},s=function(t,e){var o,n,a,i,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;r;)try{if(o=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,n=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){r=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){r.label=i[1];break}if(6===i[0]&&r.label<a[1]){r.label=a[1],a=i;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(i);break}a[2]&&r.ops.pop(),r.trys.pop();continue}i=e.call(t,r)}catch(t){i=[6,t],n=0}finally{o=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};function c(t,e,o){var n=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var r=Math.floor(e.clientHeight/2-i.clientHeight/2);i.style.top=r+"px",a.fromTo("opacity",.01,1);break;default:a.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(a))}function l(t,e,o){var n=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(a))}function u(t,e,o){var n=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","-100%","0%");break;case"middle":var r=Math.floor(e.clientHeight/2-i.clientHeight/2);i.style.top=r+"px",a.fromTo("opacity",.01,1);break;default:a.fromTo("translateY","100%","0%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(a))}function d(t,e,o){var n=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","0px","-100%");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("translateY","0px","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(a))}var p=function(){function t(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}return t.prototype.componentDidLoad=function(){this.ionToastDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionToastDidUnload.emit()},t.prototype.onDismiss=function(t){return t.stopPropagation(),t.preventDefault(),this.dismiss()},t.prototype.present=function(){return r(this,void 0,void 0,function(){var t=this;return s(this,function(e){switch(e.label){case 0:return[4,Object(a.e)(this,"toastEnter",c,u,this.position)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss()},this.duration)),[2]}})})},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(a.b)(this,t,e,"toastLeave",l,d,this.position)},t.prototype.onDidDismiss=function(){return Object(a.c)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(a.c)(this.el,"ionToastWillDismiss")},t.prototype.hostData=function(){var t=this.translucent?Object(i.m)(this.mode,"toast-translucent"):{};return{class:Object.assign({},t,Object(i.m)(this.mode,"toast"),Object(i.j)(this.cssClass))}},t.prototype.render=function(){var t,e=this,o=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(n.b)("div",{class:o},Object(n.b)("div",{class:"toast-container"},void 0!==this.message&&Object(n.b)("div",{class:"toast-message"},this.message),this.showCloseButton&&Object(n.b)("ion-button",{fill:"clear",color:"light","ion-activable":!0,class:"toast-button",onClick:function(){return e.dismiss()}},this.closeButtonText||"Close")))},Object.defineProperty(t,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-toast{left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}.toast-wrapper{background:var(--background)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{font-size:15px}.toast-message{-webkit-box-flex:1;-ms-flex:1;flex:1}.toast-md{--background:var(--ion-text-color-step-150, #262626);--color:var(--ion-background-color, #fff);font-size:15px}.toast-md .toast-wrapper{left:0;right:0;margin:auto;display:block;position:absolute;width:100%;max-width:700px;z-index:10}.toast-md .toast-wrapper.toast-top{padding-top:var(--ion-safe-area-top,0)}.toast-md .toast-wrapper.toast-bottom{padding-bottom:var(--ion-safe-area-bottom,0)}.toast-md .toast-wrapper.toast-middle{opacity:.01}.toast-md .toast-message{padding:19px 16px 17px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),m=function(){function t(){}return t.prototype.create=function(t){return Object(a.f)(this.doc.createElement("ion-toast"),t)},t.prototype.dismiss=function(t,e,o){return Object(a.g)(this.doc,t,e,"ion-toast",o)},t.prototype.getTop=function(){return r(this,void 0,void 0,function(){return s(this,function(t){return[2,Object(a.h)(this.doc,"ion-toast")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}()}}]);