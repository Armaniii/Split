(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{jSfc:function(t,n,r){"use strict";r.r(n),r.d(n,"IonChip",function(){return i}),r.d(n,"IonChipButton",function(){return a}),r.d(n,"IonChipIcon",function(){return c});var e=r("cBjU"),o=r("qOrH"),i=function(){function t(){}return t.prototype.hostData=function(){return{class:Object(o.k)(this.color)}},Object.defineProperty(t,"is",{get:function(){return"ion-chip"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-chip-md-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-weight:400;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--color:var(--ion-text-color-step-150, #262626);--label-margin-top:0;--label-margin-end:10px;--label-margin-bottom:0;--label-margin-start:10px;--avatar-width:24px;--avatar-height:24px;--avatar-margin-top:0;--avatar-margin-end:4px;--avatar-margin-bottom:0;--avatar-margin-start:4px;border-radius:16px;margin:2px 0;height:32px;font-size:13px}.ion-color.sc-ion-chip-md-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-chip-md-h.ion-color.sc-ion-chip-md-s  ion-chip-button , .sc-ion-chip-md-h.ion-color.sc-ion-chip-md-s  ion-chip-icon {--color:currentColor}.sc-ion-chip-md-s  ion-label {margin:var(--label-margin-top) var(--label-margin-end) var(--label-margin-bottom) var(--label-margin-start)}.sc-ion-chip-md-s  ion-avatar {margin:var(--avatar-margin-top) var(--avatar-margin-end) var(--avatar-margin-bottom) var(--avatar-margin-start);width:var(--avatar-width);height:var(--avatar-height)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),a=function(){function t(){this.disabled=!1,this.fill="clear"}return t.prototype.hostData=function(){var t;return{class:Object.assign({},Object(o.k)(this.color),(t={},t["chip-button-"+this.fill]=!0,t))}},t.prototype.render=function(){var t=void 0===this.href?"button":"a";return Object(e.b)(t,{type:"button",class:"chip-button-native",disabled:this.disabled,href:this.href},Object(e.b)("span",{class:"chip-button-inner"},Object(e.b)("slot",null)),"md"===this.mode&&Object(e.b)("ion-ripple-effect",null))},Object.defineProperty(t,"is",{get:function(){return"ion-chip-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},fill:{type:String,attr:"fill"},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-chip-button-h{--border-radius:50%;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--width:32px;--height:100%;width:var(--width);height:var(--height);font-size:32px}.chip-button-clear.sc-ion-chip-button-h{--background:transparent;--color:var(--ion-text-color-step-400, #666666)}.chip-button-solid.sc-ion-chip-button-h{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}.chip-button-solid.ion-color.sc-ion-chip-button-h   .chip-button-native.sc-ion-chip-button{background:var(--ion-color-base);color:var(--ion-color-contrast)}.chip-button-clear.ion-color.sc-ion-chip-button-h   .chip-button-native.sc-ion-chip-button{background:0 0;color:var(--ion-color-base)}.chip-button-native.sc-ion-chip-button{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);position:relative;width:var(--width);height:var(--height);border:0;outline:0;background:var(--background);color:var(--color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.chip-button-inner.sc-ion-chip-button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){this.fill="clear"}return t.prototype.hostData=function(){var t;return{class:Object.assign({},Object(o.k)(this.color),(t={},t["chip-icon-"+this.fill]=!0,t))}},t.prototype.render=function(){return Object(e.b)("ion-icon",{name:this.name,src:this.src,mode:this.mode})},Object.defineProperty(t,"is",{get:function(){return"ion-chip-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},fill:{type:String,attr:"fill"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},src:{type:String,attr:"src"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-chip-icon-h{border-radius:50%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:var(--width,32px);height:var(--height,32px);background:var(--background);color:var(--color);font-size:18px}.chip-icon-clear.sc-ion-chip-icon-h{--background:transparent;--color:var(--ion-text-color-step-400, #666666)}.chip-icon-solid.sc-ion-chip-icon-h{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}.chip-icon-solid.ion-color.sc-ion-chip-icon-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.chip-icon-clear.ion-color.sc-ion-chip-icon-h{background:0 0;color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),t}()}}]);