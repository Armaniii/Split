(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"3kpt":function(e,t,n){"use strict";n.r(t),n.d(t,"IonNav",function(){return h}),n.d(t,"IonNavPop",function(){return l}),n.d(t,"IonNavPush",function(){return d}),n.d(t,"IonNavSetRoot",function(){return f});var r=n("cBjU"),i=n("qOrH"),o=(n("Ti8Y"),n("iMcU")),s=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,a)}u((r=r.apply(e,t||[])).next())})},a=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},u=function(){function e(e,t){this.component=e,this.params=t,this.state=1}return e.prototype.init=function(e){return s(this,void 0,void 0,function(){var t,n;return a(this,function(r){switch(r.label){case 0:return this.state=2,this.element?[3,2]:(t=this.component,n=this,[4,Object(i.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)]);case 1:n.element=r.sent(),r.label=2;case 2:return[2]}})})},e.prototype._destroy=function(){var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}();function c(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var r=e.params;if(!r&&!n)return!1;if(r===n)return!0;if(!r||!n)return!1;var i=Object.keys(r),o=Object.keys(n);if(i.length!==o.length)return!1;for(var s=0,a=i;s<a.length;s++){var u=a[s];if(r[u]!==n[u])return!1}return!0}function p(e,t){return e?e instanceof u?e:new u(e,t):null}var h=function(){function e(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}return e.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)},e.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture&&(this.swipeGesture=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){return s(this,void 0,void 0,function(){var e,t=this;return a(this,function(r){switch(r.label){case 0:return this.rootChanged(),e=this,[4,n.e(2).then(n.bind(null,"BgXr"))];case 1:return e.gesture=r.sent().createGesture({el:this.win.document.body,queue:this.queue,gestureName:"goback-swipe",gesturePriority:30,threshold:10,canStart:function(){return t.canStart()},onStart:function(){return t.onStart()},onMove:function(e){return t.onMove(e)},onEnd:function(e){return t.onEnd(e)}}),this.swipeGestureChanged(),[2]}})})},e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];Object(o.b)(this.win,n.element,"ionViewWillUnload"),n._destroy()}this.gesture&&this.gesture.destroy(),this.sbTrns&&this.sbTrns.destroy(),this.transInstr.length=this.views.length=0,this.sbTrns=void 0,this.destroyed=!0},e.prototype.push=function(e,t,n,r){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},r)},e.prototype.insert=function(e,t,n,r,i){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:r},i)},e.prototype.insertPages=function(e,t,n,r){return this.queueTrns({insertStart:e,insertViews:t,opts:n},r)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var r={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(r.removeView=e,r.removeStart=1):"number"==typeof e&&(r.removeStart=e+1),this.queueTrns(r,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,r){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},r)},e.prototype.setRoot=function(e,t,n,r){return this.setPages([{page:e,params:t}],n,r)},e.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n){var r,i=this,o=this.getActiveSync();if(c(o,e,t))return Promise.resolve({changed:!1,element:o.element});var u,p=new Promise(function(e){return r=e}),h={updateURL:!1,viewIsReady:function(e){var t,n=new Promise(function(e){return t=e});return r({changed:!0,element:e,markVisible:function(){return s(i,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return t(),[4,u];case 1:return e.sent(),[2]}})})}}),n}};if(0===n)u=this.setRoot(e,t,h);else{var l=this.views.find(function(n){return c(n,e,t)});l?u=this.popTo(l,Object.assign({},h,{direction:"back"})):1===n?u=this.push(e,t,h):-1===n&&(u=this.setRoot(e,t,Object.assign({},h,{direction:"back",animated:!0})))}return p},e.prototype.getRouteId=function(){return s(this,void 0,void 0,function(){var e;return a(this,function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]})})},e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},e.prototype.getLength=function(){return this.views.length},e.prototype.getActiveSync=function(){return this.views[this.views.length-1]},e.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},e.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.queueTrns=function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise(function(t,n){e.resolve=t,e.reject=n});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},e.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=this.win.document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?-1:1)}},e.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return s(this,void 0,void 0,function(){var t,n,r,i;return a(this,function(o){switch(o.label){case 0:if(o.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&1===n.state?[4,n.init(this.el)]:[3,2];case 1:o.sent(),o.label=2;case 2:return this.postViewInit(n,t,e),(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t?[4,this.transition(n,t,e)]:[3,4];case 3:return r=o.sent(),[3,5];case 4:r={hasCompleted:!0,requiresTransition:!1},o.label=5;case 5:return this.success(r,e),this.ionNavDidChange.emit(),[3,7];case 6:return i=o.sent(),this.failed(i,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}})})},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var r=e.insertViews;if(r){var i=r.map(function(e){return e instanceof u?e:"page"in e?p(e.page,e.params):p(e,void 0)}).filter(function(e){return null!==e});if(0===i.length)throw new Error("invalid views to insert");for(var o=0,s=i;o<s.length;o++){var a=s[o];a.delegate=e.opts.delegate;var c=a.nav;if(c&&c!==this)throw new Error("inserted view was already inserted");if(3===a.state)throw new Error("inserted view was already destroyed")}e.insertViews=i}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var r=e.removeStart;if(void 0!==r)for(var i=this.views,o=r+e.removeCount,s=i.length-1;s>=0;s--){var a=i[s];if((s<r||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){var r,i=n.opts,s=n.insertViews,a=n.removeStart,u=n.removeCount;if(void 0!==a&&void 0!==u){r=[];for(var c=0;c<u;c++)(d=this.views[c+a])&&d!==e&&d!==t&&r.push(d);i.direction=i.direction||"back"}if(0==this.views.length+(void 0!==s?s.length:0)-(void 0!==u?u:0))throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(s){for(var p=n.insertStart,h=0,l=s;h<l.length;h++){var d=l[h];this.insertViewAt(d,p),p++}n.enteringRequiresTransition&&(i.direction=i.direction||"forward")}if(r&&r.length>0){for(var f=0,v=r;f<v.length;f++)d=v[f],Object(o.b)(this.win,d.element,"ionViewWillLeave"),Object(o.b)(this.win,d.element,"ionViewDidLeave"),Object(o.b)(this.win,d.element,"ionViewWillUnload");for(var m=0,g=r;m<g.length;m++)this.destroyView(d=g[m])}},e.prototype.transition=function(e,t,n){return s(this,void 0,void 0,function(){var r,i,s,u,c,p,h,l=this;return a(this,function(a){switch(a.label){case 0:return this.sbTrns&&(this.sbTrns.destroy(),this.sbTrns=void 0),i=(r=n.opts).progressAnimation?function(e){l.sbTrns=e}:void 0,s=e.element,u=t&&t.element,c=this.animated&&this.config.getBoolean("animated",!0),p=Object.assign({mode:this.mode,showGoBack:this.canGoBackSync(e),animationCtrl:this.animationCtrl,queue:this.queue,window:this.win,baseEl:this.el,progressCallback:i,animated:c,enteringEl:s,leavingEl:u},r),[4,Object(o.d)(p)];case 1:return h=a.sent().hasCompleted,[2,this.transitionFinish(h,e,t,r)]}})})},e.prototype.transitionFinish=function(e,t,n,r){var i=e?t:n;return i&&this.cleanup(i),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:r.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,r=n.indexOf(e);r>-1?n.splice(t,0,n.splice(r,1)[0]):(e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){var t=this.views,n=t.indexOf(e);n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),r=t.length-1;r>=0;r--){var i=t[r],s=i.element;r>n?(Object(o.b)(this.win,s,"ionViewWillUnload"),this.destroyView(i)):r<n&&Object(o.c)(s,!0)}},e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&this.canGoBackSync()},e.prototype.onStart=function(){this.isTransitioning||this.transInstr.length>0||this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.onMove=function(e){this.sbTrns&&(this.isTransitioning=!0,this.sbTrns.progressStep(e.deltaX/this.win.innerWidth))},e.prototype.onEnd=function(e){if(this.sbTrns){var t=this.win.innerWidth,n=e.deltaX/t,r=e.velocityX,i=r>=0&&(r>.2||e.deltaX>t/2),o=(i?1-n:n)*t,s=0;if(o>5){var a=o/Math.abs(r);s=Math.min(a,300)}this.sbTrns.progressEnd(i,n,s)}},e.prototype.render=function(){return["ios"===this.mode&&Object(r.b)("div",{class:"nav-decor"}),Object(r.b)("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"ion-nav"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeGesture:{type:Boolean,attr:"swipe-gesture",mutable:!0,watchCallbacks:["swipeGestureChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}.nav-decor{display:none}:host(.show-decor) .nav-decor{left:0;right:0;top:0;bottom:0;display:block;position:absolute;background:#000;z-index:0;pointer-events:none}"},enumerable:!0,configurable:!0}),e}(),l=function(){function e(){}return e.prototype.pop=function(){var e=this.el.closest("ion-nav");return e?e.pop({skipIfBusy:!0}):Promise.resolve(!1)},Object.defineProperty(e,"is",{get:function(){return"ion-nav-pop"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"pop"}]},enumerable:!0,configurable:!0}),e}(),d=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;return e&&void 0!==t?e.push(t,this.componentProps,{skipIfBusy:!0}):Promise.resolve(!1)},Object.defineProperty(e,"is",{get:function(){return"ion-nav-push"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}(),f=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;return e&&void 0!==t?e.setRoot(t,this.componentProps,{skipIfBusy:!0}):Promise.resolve(!1)},Object.defineProperty(e,"is",{get:function(){return"ion-nav-set-root"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}()}}]);