(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"maV/":function(e,t,o){"use strict";o.r(t),o.d(t,"IonSearchbar",function(){return i});var a=o("cBjU"),n=o("Ti8Y"),r=o("qOrH"),i=function(){function e(){this.isCancelVisible=!1,this.shouldAlignLeft=!0,this.focused=!1,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonIcon="md-arrow-back",this.cancelButtonText="Cancel",this.debounce=250,this.placeholder="Search",this.showCancelButton=!1,this.spellcheck=!1,this.type="search",this.value=""}return e.prototype.debounceChanged=function(){this.ionChange=Object(n.f)(this.ionChange,this.debounce)},e.prototype.valueChanged=function(){var e=this.nativeInput,t=this.value;e.value!==t&&(e.value=t),this.ionChange.emit({value:t})},e.prototype.componentDidLoad=function(){this.positionElements(),this.debounceChanged()},e.prototype.focus=function(){this.nativeInput.focus()},e.prototype.clearInput=function(e){var t=this;this.ionClear.emit(),e&&(e.preventDefault(),e.stopPropagation()),setTimeout(function(){""!==t.value&&(t.value="",t.ionInput.emit())},64)},e.prototype.cancelSearchbar=function(){this.ionCancel.emit(),this.clearInput()},e.prototype.onInput=function(e){var t=e.target;t&&(this.value=t.value),this.ionInput.emit(e)},e.prototype.onBlur=function(){this.focused=!1,this.ionBlur.emit(),this.positionElements()},e.prototype.onFocus=function(){this.focused=!0,this.ionFocus.emit(),this.positionElements()},e.prototype.positionElements=function(){var e=this.shouldAlignLeft,t=!this.animated||this.value&&""!==this.value.toString().trim()||!!this.focused;this.shouldAlignLeft=t,"ios"===this.mode&&(e!==t&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())},e.prototype.positionPlaceholder=function(){var e="rtl"===this.doc.dir,t=this.nativeInput,o=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)t.removeAttribute("style"),o.removeAttribute("style");else{var a=this.doc,n=a.createElement("span");n.innerHTML=this.placeholder,a.body.appendChild(n);var r=n.offsetWidth;n.remove();var i="calc(50% - "+r/2+"px)",c="calc(50% - "+(r/2+30)+"px)";e?(t.style.paddingRight=i,o.style.marginRight=c):(t.style.paddingLeft=i,o.style.marginLeft=c)}},e.prototype.positionCancelButton=function(){var e="rtl"===this.doc.dir,t=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button"),o=this.focused;if(t&&o!==this.isCancelVisible){var a=t.style;if(this.isCancelVisible=o,o)e?a.marginLeft="0":a.marginRight="0";else{var n=t.offsetWidth;n>0&&(e?a.marginLeft=-n+"px":a.marginRight=-n+"px")}}},e.prototype.hostData=function(){return{class:Object.assign({},Object(r.k)(this.color),{"searchbar-animated":this.animated,"searchbar-has-value":""!==this.value,"searchbar-show-cancel":this.showCancelButton,"searchbar-left-aligned":this.shouldAlignLeft,"searchbar-has-focus":this.focused})}},e.prototype.render=function(){var e=this,t=this.clearIcon||("ios"===this.mode?"ios-close-circle":"md-close"),o=this.searchIcon||"search",n=this.showCancelButton&&Object(a.b)("button",{type:"button",tabIndex:"ios"!==this.mode||this.focused?void 0:-1,onClick:this.cancelSearchbar.bind(this),class:"searchbar-cancel-button"},"md"===this.mode?Object(a.b)("ion-icon",{mode:this.mode,icon:this.cancelButtonIcon,lazy:!1}):this.cancelButtonText);return[Object(a.b)("div",{class:"searchbar-input-container"},Object(a.b)("input",{ref:function(t){return e.nativeInput=t},class:"searchbar-input",onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),placeholder:this.placeholder,type:this.type,value:this.value,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),"md"===this.mode&&n,Object(a.b)("ion-icon",{mode:this.mode,icon:o,lazy:!1,class:"searchbar-search-icon"}),Object(a.b)("button",{type:"button","no-blur":!0,class:"searchbar-clear-button",onClick:this.clearInput.bind(this),onMouseDown:this.clearInput.bind(this),onTouchStart:this.clearInput.bind(this)},Object(a.b)("ion-icon",{mode:this.mode,icon:t,lazy:!1,class:"searchbar-clear-icon"}))),"ios"===this.mode&&n]},Object.defineProperty(e,"is",{get:function(){return"ion-searchbar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},cancelButtonIcon:{type:String,attr:"cancel-button-icon"},cancelButtonText:{type:String,attr:"cancel-button-text"},clearIcon:{type:String,attr:"clear-icon"},color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},doc:{context:"document"},el:{elementRef:!0},focus:{method:!0},focused:{state:!0},mode:{type:String,attr:"mode"},placeholder:{type:String,attr:"placeholder"},searchIcon:{type:String,attr:"search-icon"},showCancelButton:{type:Boolean,attr:"show-cancel-button"},spellcheck:{type:Boolean,attr:"spellcheck"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClear",method:"ionClear",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-searchbar-md-h{--placeholder-color:currentColor;--placeholder-font-style:inherit;--placeholder-font-weight:inherit;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--ion-font-family,inherit)}.ion-color.sc-ion-searchbar-md-h{--background:var(--ion-color-base);--color-button-clear:inherit;--color-button-cancel:inherit;--color-icon:inherit;color:var(--ion-color-contrast)}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--color-icon);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-family:inherit;font-style:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:0;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{color:var(--color-button-cancel)}.searchbar-clear-button.sc-ion-searchbar-md{margin:0;display:none;min-height:0;outline:0;color:var(--button-color-clear);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h   .searchbar-clear-button.sc-ion-searchbar-md{display:block}.sc-ion-searchbar-md-h{--color-button-clear:currentColor;--color-button-cancel:var(--ion-text-color-step-100, #1a1a1a);--color-icon:var(--ion-text-color-step-400, #666666);--background:var(--ion-background-color, #fff);padding:8px;background:inherit;color:var(--ion-text-color-step-150,#262626)}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}.searchbar-cancel-button.sc-ion-searchbar-md{left:10px;top:0;margin:0;display:none;height:100%;border:0;background-color:transparent;font-size:1.8em}.searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-search-icon.sc-ion-searchbar-md{position:absolute}.searchbar-cancel-button.activated.sc-ion-searchbar-md, .searchbar-search-icon.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding:6px 55px;border-radius:2px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding:0;position:absolute;height:100%;border:0;background-color:transparent}.searchbar-clear-button.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.searchbar-show-cancel.sc-ion-searchbar-md-h   .searchbar-search-icon.sc-ion-searchbar-md{display:none}.searchbar-has-focus.searchbar-show-cancel.sc-ion-searchbar-md-h   .searchbar-cancel-button.sc-ion-searchbar-md{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar   .sc-ion-searchbar-md-h{padding:3px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}()}}]);