(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{kQ2J:function(n,t,r){"use strict";r.r(t),r.d(t,"setupConfig",function(){return e}),r.d(t,"configFromSession",function(){return f}),r.d(t,"saveConfig",function(){return d}),r.d(t,"configFromURL",function(){return a});var o=r("Ti8Y");r.d(t,"reorderArray",function(){return o.l}),r.d(t,"rIC",function(){return o.a}),r.d(t,"hasShadowDom",function(){return o.c}),r.d(t,"renderHiddenInput",function(){return o.e}),r.d(t,"clamp",function(){return o.i}),r.d(t,"assert",function(){return o.h}),r.d(t,"now",function(){return o.b}),r.d(t,"pointerCoord",function(){return o.k}),r.d(t,"isEndSide",function(){return o.g}),r.d(t,"deferEvent",function(){return o.d}),r.d(t,"debounceEvent",function(){return o.f}),r.d(t,"debounce",function(){return o.j}),r.d(t,"PLATFORMS_MAP",function(){return o.n}),r.d(t,"getPlatforms",function(){return o.o}),r.d(t,"isPlatform",function(){return o.m}),r.d(t,"setupPlatforms",function(){return o.p});var i=r("qOrH");function e(n){var t=window,r=t.Ionic;if(!r||!r.config||"Object"===r.config.constructor.name)return t.Ionic=t.Ionic||{},t.Ionic.config=Object.assign({},t.Ionic.config,n),t.Ionic.config;console.error("ionic config was already initialized")}r.d(t,"hapticAvailable",function(){return i.g}),r.d(t,"hapticSelection",function(){return i.f}),r.d(t,"hapticSelectionStart",function(){return i.e}),r.d(t,"hapticSelectionChanged",function(){return i.c}),r.d(t,"hapticSelectionEnd",function(){return i.d}),r.d(t,"hapticNotification",function(){return i.h}),r.d(t,"hapticImpact",function(){return i.i}),r.d(t,"attachComponent",function(){return i.a}),r.d(t,"detachComponent",function(){return i.b});var c="ionic:",u="ionic-persist-config";function f(){try{var n=window.sessionStorage.getItem(u);return null!==n?JSON.parse(n):{}}catch(n){return{}}}function d(n){try{window.sessionStorage.setItem(u,JSON.stringify(n))}catch(n){return}}function a(){var n={};return window.location.search.slice(1).split("&").map(function(n){return n.split("=")}).map(function(n){var t=n[1];return[decodeURIComponent(n[0]),decodeURIComponent(t)]}).filter(function(n){return n[0].substr(0,(t=c).length)===t;var t}).map(function(n){var t=n[1];return[n[0].slice(c.length),t]}).forEach(function(t){n[t[0]]=t[1]}),n}}}]);