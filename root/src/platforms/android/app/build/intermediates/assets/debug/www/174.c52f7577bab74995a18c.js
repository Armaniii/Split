(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{EycR:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=u("lGQG"),a=(u("OO+k"),u("ajt+")),r=u("tct4"),i=u("15JJ"),o=u("klSw"),s=u("K9Ia"),c=u("26FU"),d=function(n,l,u,t){return new(u||(u=Promise))(function(e,a){function r(n){try{o(t.next(n))}catch(n){a(n)}}function i(n){try{o(t.throw(n))}catch(n){a(n)}}function o(n){n.done?e(n.value):new u(function(l){l(n.value)}).then(r,i)}o((t=t.apply(n,l||[])).next())})},p=function(n,l){var u,t,e,a,r={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(u)throw new TypeError("Generator is already executing.");for(;r;)try{if(u=1,t&&(e=2&a[0]?t.return:a[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,a[1])).done)return e;switch(t=0,e&&(a=[2&a[0],e.value]),a[0]){case 0:case 1:e=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,t=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(e=(e=r.trys).length>0&&e[e.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!e||a[1]>e[0]&&a[1]<e[3])){r.label=a[1];break}if(6===a[0]&&r.label<e[1]){r.label=e[1],e=a;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(a);break}e[2]&&r.ops.pop(),r.trys.pop();continue}a=l.call(n,r)}catch(n){a=[6,n],t=0}finally{u=e=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},h=function(){function n(n,l,u,t,e){this.db=n,this.auth=l,this.modal=u,this.afs=t,this.alertController=e,this.searchstring="",this.start=new s.a,this.end=new s.a,this.filter=new c.a(null)}return n.prototype.ngOnInit=function(){var n=this;this.testUsers=this.auth.user$.pipe(Object(i.a)(function(l){return n.db.collection$("users",function(n){return n.orderBy("displayName","asc")})}),Object(o.a)(1))},n.prototype.presentAlert=function(){return d(this,void 0,void 0,function(){return p(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Sorry",message:"\n      <p>You cannot add yourself as a friend.</p>\n    ",buttons:["OK"]})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},n.prototype.presentSuccessAlert=function(){return d(this,void 0,void 0,function(){return p(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Friend Added",message:"\n      <p>You have successfully added this user.</p>\n    ",buttons:["OK"]})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},n.prototype.presentAddFriend=function(n){var l=this.auth.getUserData().uid;if(n.uid!==l){var u={displayName:n.displayName,friendId:n.uid,photoURL:n.photoURL,email:n.email,createdAt:Date.now(),uid:l,status:!0};this.db.updateAt("friends/"+n.uid,u),this.presentSuccessAlert()}else this.presentAlert()},n.prototype.searchuser=function(n){var l=this,u=this.searchstring,t=u+"\uf8ff";this.testUsers=""!==n.target.value.trim()?this.auth.user$.pipe(Object(i.a)(function(n){return l.db.collection$("users",function(n){return n.orderBy("displayName","asc").startAt(u).endAt(t)})}),Object(o.a)(1)):this.auth.user$.pipe(Object(i.a)(function(n){return l.db.collection$("users",function(n){return n.orderBy("displayName","asc")})}),Object(o.a)(1))},n}(),f=function(){},b=u("pMnS"),k=u("ra/t"),g=u("ntG5"),m=u("M9A9"),y=u("ZYCi"),v=u("Zq1E"),L=u("gIcY"),M=u("Ip0R"),w=u("9opb"),C=u("CssM"),U=t.Ka({encapsulation:0,styles:[[""]],data:{}});function A(n){return t.db(0,[(n()(),t.Ma(0,0,null,null,18,"ion-item",[],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.Wa(n,2).onClick(u)&&e),e},k.Ia,k.u)),t.La(1,49152,null,0,g.F,[t.k],null,null),t.La(2,16384,null,0,m.a,[[2,y.l],t.k],null,null),(n()(),t.Ma(3,0,null,0,7,"ion-item",[],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.Wa(n,5).onClick(u)&&e),e},k.Ia,k.u)),t.La(4,49152,null,0,g.F,[t.k],null,null),t.La(5,16384,null,0,m.a,[[2,y.l],t.k],null,null),(n()(),t.Ma(6,0,null,0,2,"ion-avatar",[["item-left",""],["slot","start"]],null,null,null,k.P,k.b)),t.La(7,49152,null,0,g.b,[],null,null),(n()(),t.Ma(8,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),t.Ma(9,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),t.bb(10,null,["",""])),(n()(),t.Ma(11,0,null,0,7,"ion-item",[["slot","end"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.Wa(n,13).onClick(u)&&e),e},k.Ia,k.u)),t.La(12,49152,null,0,g.F,[t.k],null,null),t.La(13,16384,null,0,m.a,[[2,y.l],t.k],null,null),(n()(),t.Ma(14,0,null,0,4,"ion-button",[["color","primary"]],null,[[null,"click"]],function(n,l,u){var e=!0,a=n.component;return"click"===l&&(e=!1!==t.Wa(n,16).onClick(u)&&e),"click"===l&&(e=!1!==a.presentAddFriend(n.context.$implicit)&&e),e},k.R,k.d)),t.La(15,49152,null,0,g.f,[t.k],{color:[0,"color"]},null),t.La(16,16384,null,0,m.a,[[2,y.l],t.k],null,null),(n()(),t.Ma(17,0,null,0,1,"ion-icon",[["name","person-add"]],null,null,null,k.Fa,k.r)),t.La(18,49152,null,0,g.A,[t.k],{name:[0,"name"]},null)],function(n,l){n(l,15,0,"primary"),n(l,18,0,"person-add")},function(n,l){n(l,8,0,t.Oa(1,"",l.context.$implicit.photoURL,"")),n(l,10,0,l.context.$implicit.displayName)})}function F(n){return t.db(0,[(n()(),t.Ma(0,0,null,null,17,"ion-header",[],null,null,null,k.Ea,k.q)),t.La(1,49152,null,0,g.y,[t.k],null,null),(n()(),t.Ma(2,0,null,0,15,"ion-toolbar",[["color","success"]],null,null,null,k.bb,k.M)),t.La(3,49152,null,0,g.Xa,[t.k],{color:[0,"color"]},null),(n()(),t.Ma(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,k.S,k.e)),t.La(5,49152,null,0,g.g,[],null,null),(n()(),t.Ma(6,0,null,0,1,"ion-menu-button",[["autoHide",""],["class","menuButton"]],null,null,null,k.La,k.y)),t.La(7,49152,null,0,g.P,[t.k],{autoHide:[0,"autoHide"]},null),(n()(),t.Ma(8,0,null,0,2,"ion-title",[],null,null,null,k.ab,k.N)),t.La(9,49152,null,0,g.Ya,[t.k],null,null),(n()(),t.bb(-1,0,["Split | Add Friends"])),(n()(),t.Ma(11,0,null,0,6,"ion-buttons",[["slot","end"]],null,null,null,k.S,k.e)),t.La(12,49152,null,0,g.g,[],null,null),(n()(),t.Ma(13,0,null,0,4,"ion-button",[["href","/myfriends"],["icon-only",""]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.Wa(n,15).onClick(u)&&e),e},k.R,k.d)),t.La(14,49152,null,0,g.f,[t.k],{href:[0,"href"]},null),t.La(15,16384,null,0,m.a,[[2,y.l],t.k],{href:[0,"href"]},null),(n()(),t.Ma(16,0,null,0,1,"ion-icon",[["name","person"]],null,null,null,k.Fa,k.r)),t.La(17,49152,null,0,g.A,[t.k],{name:[0,"name"]},null),(n()(),t.Ma(18,0,null,null,15,"ion-content",[],null,null,null,k.Z,k.l)),t.La(19,49152,null,0,g.r,[t.k],null,null),(n()(),t.Ma(20,0,null,0,6,"ion-searchbar",[["placeholder","Search"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"ionBlur"]],function(n,l,u){var e=!0,a=n.component;return"input"===l&&(e=!1!==t.Wa(n,21)._handleInputEvent(u.target.value)&&e),"ionBlur"===l&&(e=!1!==t.Wa(n,21)._handleBlurEvent()&&e),"ngModelChange"===l&&(e=!1!==(a.searchstring=u)&&e),"input"===l&&(e=!1!==a.searchuser(u)&&e),e},k.Qa,k.C)),t.La(21,16384,null,0,v.a,[t.k],null,null),t.Ya(1024,null,L.g,function(n){return[n]},[v.a]),t.La(23,671744,null,0,L.k,[[8,null],[8,null],[8,null],[6,L.g]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ya(2048,null,L.h,null,[L.k]),t.La(25,16384,null,0,L.i,[[4,L.h]],null,null),t.La(26,49152,null,0,g.Fa,[t.k],{placeholder:[0,"placeholder"]},null),(n()(),t.Ma(27,0,null,0,6,"ion-list",[["no-lines",""]],null,null,null,k.Ka,k.w)),t.La(28,49152,null,0,g.M,[t.k],null,null),(n()(),t.Ma(29,0,null,0,4,"ion-list",[],null,null,null,k.Ka,k.w)),t.La(30,49152,null,0,g.M,[t.k],null,null),(n()(),t.Da(16777216,null,0,2,null,A)),t.La(32,278528,null,0,M.j,[t.L,t.I,t.q],{ngForOf:[0,"ngForOf"]},null),t.Xa(131072,M.b,[t.h])],function(n,l){var u=l.component;n(l,3,0,"success"),n(l,7,0,""),n(l,14,0,"/myfriends"),n(l,15,0,"/myfriends"),n(l,17,0,"person"),n(l,23,0,u.searchstring),n(l,26,0,"Search"),n(l,32,0,t.cb(l,32,0,t.Wa(l,33).transform(u.testUsers)))},function(n,l){n(l,20,0,t.Wa(l,25).ngClassUntouched,t.Wa(l,25).ngClassTouched,t.Wa(l,25).ngClassPristine,t.Wa(l,25).ngClassDirty,t.Wa(l,25).ngClassValid,t.Wa(l,25).ngClassInvalid,t.Wa(l,25).ngClassPending)})}var W=t.Ia("app-friends",h,function(n){return t.db(0,[(n()(),t.Ma(0,0,null,null,1,"app-friends",[],null,null,null,F,U)),t.La(1,114688,null,0,h,[a.a,e.a,w.a,r.a,C.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),O=u("95zI"),j=u("apKv"),I=u("B4/3");u.d(l,"FriendsPageModuleNgFactory",function(){return S});var S=t.Ja(f,[],function(n){return t.Ta([t.Ua(512,t.j,t.Y,[[8,[b.a,W]],[3,t.j],t.v]),t.Ua(4608,M.m,M.l,[t.s,[2,M.v]]),t.Ua(4608,L.q,L.q,[]),t.Ua(4608,O.a,O.a,[t.x,t.g]),t.Ua(4608,w.a,w.a,[O.a,t.j,t.p]),t.Ua(4608,j.a,j.a,[O.a,t.j,t.p]),t.Ua(1073742336,M.c,M.c,[]),t.Ua(1073742336,L.o,L.o,[]),t.Ua(1073742336,L.e,L.e,[]),t.Ua(1073742336,I.a,I.a,[]),t.Ua(1073742336,y.m,y.m,[[2,y.s],[2,y.l]]),t.Ua(1073742336,f,f,[]),t.Ua(1024,y.j,function(){return[[{path:"",component:h}]]},[])])})}}]);