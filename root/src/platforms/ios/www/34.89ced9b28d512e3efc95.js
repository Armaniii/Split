(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{oa00:function(e,o,c){"use strict";c.r(o),c.d(o,"IonCheckbox",function(){return r});var t=c("cBjU"),i=c("Ti8Y"),n=c("qOrH"),r=function(){function e(){this.inputId="ion-cb-"+a++,this.labelId=this.inputId+"-lbl",this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on"}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.componentDidLoad=function(){this.ionStyle=Object(i.d)(this.ionStyle)},e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},e.prototype.onChange=function(){this.checked=!this.checked},e.prototype.onKeyUp=function(){this.keyFocus=!0},e.prototype.onFocus=function(){this.ionFocus.emit()},e.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},e.prototype.hostData=function(){return{class:Object.assign({},Object(n.k)(this.color),{"in-item":Object(n.n)(".item",this.el),"checkbox-checked":this.checked,"checkbox-disabled":this.disabled,"checkbox-key":this.keyFocus,interactive:!0})}},e.prototype.render=function(){return Object(i.e)(this.el,this.name,this.value,this.disabled),[Object(t.b)("div",{class:"checkbox-icon"},Object(t.b)("div",{class:"checkbox-inner"})),Object(t.b)("input",{type:"checkbox",id:this.inputId,"aria-labelledby":this.labelId,onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),checked:this.checked,name:this.name,value:this.value,disabled:this.disabled})]},Object.defineProperty(e,"is",{get:function(){return"ion-checkbox"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-checkbox-md-h{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--size:16px;--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:var(--ion-border-color, #c1c4cd);--background:var(--ion-item-background-color, var(--ion-background-color, #fff));--transition:background 280ms cubic-bezier(0.4, 0, 0.2, 1)}.ion-color.sc-ion-checkbox-md-h{--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}input.sc-ion-checkbox-md{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.checkbox-icon.sc-ion-checkbox-md{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict}.checkbox-inner.sc-ion-checkbox-md{border-color:var(--checkmark-color);opacity:0}.checkbox-checked.sc-ion-checkbox-md-h   .checkbox-icon.sc-ion-checkbox-md{border-color:var(--border-color-checked);background:var(--background-checked)}.checkbox-checked.sc-ion-checkbox-md-h   .checkbox-inner.sc-ion-checkbox-md{opacity:1;left:calc(var(--size) * .3);top:calc(var(--size) * .05);position:absolute;width:calc(var(--size) * .3125);height:calc(var(--size) * .625);-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:calc(var(--size) * .125);border-top-width:0;border-left-width:0;border-style:solid}.checkbox-disabled.sc-ion-checkbox-md-h{pointer-events:none;opacity:.3}.checkbox-key.sc-ion-checkbox-md-h   .checkbox-icon.sc-ion-checkbox-md::after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:"";opacity:.2}.in-item.sc-ion-checkbox-md-h{margin:9px 36px 9px 4px;display:block;position:static}.in-item[slot=end].sc-ion-checkbox-md-h{margin:11px 10px 10px 0}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),a=0}}]);