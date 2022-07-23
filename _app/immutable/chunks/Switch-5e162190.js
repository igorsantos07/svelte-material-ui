import{S as me,i as Ee,s as _e,C as Y,l as P,a as H,m as F,n as w,h as S,c as q,p as I,Z,b as de,H as y,_ as N,I as Ce,z as ue,$ as x,E as re,a0 as ye,a1 as ie,a2 as Se,F as De,o as Oe,a3 as we,X as V,Y as z,M as ae}from"./index-c7a09abc.js";import{a as Ie,b as W,_ as $,e as ke,g as Me,M as Pe,c as J,u as he,f as Fe,d as j}from"./useActions-97c80212.js";import{e as ne,p as le}from"./prefixFilter-4c6b67e2.js";import{R as Le}from"./Ripple-6826bd2e.js";/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var R;(function(s){s.PROCESSING="mdc-switch--processing",s.SELECTED="mdc-switch--selected",s.UNSELECTED="mdc-switch--unselected"})(R||(R={}));var oe;(function(s){s.RIPPLE=".mdc-switch__ripple"})(oe||(oe={}));/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Re(s,t,e){var i=Te(s,t),c=i.getObservers(t);return c.push(e),function(){c.splice(c.indexOf(e),1)}}var X=new WeakMap;function Te(s,t){var e=new Map;X.has(s)||X.set(s,{isEnabled:!0,getObservers:function(d){var m=e.get(d)||[];return e.has(d)||e.set(d,m),m},installedProperties:new Set});var i=X.get(s);if(i.installedProperties.has(t))return i;var c=Ue(s,t)||{configurable:!0,enumerable:!0,value:s[t],writable:!0},l=Ie({},c),u=c.get,f=c.set;if("value"in c){delete l.value,delete l.writable;var v=c.value;u=function(){return v},c.writable&&(f=function(d){v=d})}return u&&(l.get=function(){return u.call(this)}),f&&(l.set=function(d){var m,p,E=u?u.call(this):d;if(f.call(this,d),i.isEnabled&&(!u||d!==E))try{for(var a=W(i.getObservers(t)),o=a.next();!o.done;o=a.next()){var h=o.value;h(d,E)}}catch(_){m={error:_}}finally{try{o&&!o.done&&(p=a.return)&&p.call(a)}finally{if(m)throw m.error}}}),i.installedProperties.add(t),Object.defineProperty(s,t,l),i}function Ue(s,t){for(var e=s,i;e&&(i=Object.getOwnPropertyDescriptor(e,t),!i);)e=Object.getPrototypeOf(e);return i}function Ae(s,t){var e=X.get(s);e&&(e.isEnabled=t)}/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ge=function(s){$(t,s);function t(e){var i=s.call(this,e)||this;return i.unobserves=new Set,i}return t.prototype.destroy=function(){s.prototype.destroy.call(this),this.unobserve()},t.prototype.observe=function(e,i){var c,l,u=this,f=[];try{for(var v=W(Object.keys(i)),d=v.next();!d.done;d=v.next()){var m=d.value,p=i[m].bind(this);f.push(this.observeProperty(e,m,p))}}catch(a){c={error:a}}finally{try{d&&!d.done&&(l=v.return)&&l.call(v)}finally{if(c)throw c.error}}var E=function(){var a,o;try{for(var h=W(f),_=h.next();!_.done;_=h.next()){var b=_.value;b()}}catch(M){a={error:M}}finally{try{_&&!_.done&&(o=h.return)&&o.call(h)}finally{if(a)throw a.error}}u.unobserves.delete(E)};return this.unobserves.add(E),E},t.prototype.observeProperty=function(e,i,c){return Re(e,i,c)},t.prototype.setObserversEnabled=function(e,i){Ae(e,i)},t.prototype.unobserve=function(){var e,i;try{for(var c=W(ke([],Me(this.unobserves))),l=c.next();!l.done;l=c.next()){var u=l.value;u()}}catch(f){e={error:f}}finally{try{l&&!l.done&&(i=c.return)&&i.call(c)}finally{if(e)throw e.error}}},t}(Pe);/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Be=function(s){$(t,s);function t(e){var i=s.call(this,e)||this;return i.handleClick=i.handleClick.bind(i),i}return t.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},t.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},t.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},t}(Ge),Ve=function(s){$(t,s);function t(){return s!==null&&s.apply(this,arguments)||this}return t.prototype.init=function(){s.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},t.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(R.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(R.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},t.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},t.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,R.PROCESSING)},t.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,R.SELECTED),this.toggleClass(!this.adapter.state.selected,R.UNSELECTED)},t.prototype.toggleClass=function(e,i){e?this.adapter.addClass(i):this.adapter.removeClass(i)},t}(Be);function ce(s){let t,e,i,c,l,u,f,v,d,m,p=[{class:f=J({[s[7]]:!0,"mdc-switch__icons":!0})},le(s[18],"icons$")],E={};for(let a=0;a<p.length;a+=1)E=Y(E,p[a]);return{c(){t=P("div"),e=V("svg"),i=V("path"),c=H(),l=V("svg"),u=V("path"),this.h()},l(a){t=F(a,"DIV",{class:!0});var o=w(t);e=z(o,"svg",{class:!0,viewBox:!0});var h=w(e);i=z(h,"path",{d:!0}),w(i).forEach(S),h.forEach(S),c=q(o),l=z(o,"svg",{class:!0,viewBox:!0});var _=w(l);u=z(_,"path",{d:!0}),w(u).forEach(S),_.forEach(S),o.forEach(S),this.h()},h(){I(i,"d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"),I(e,"class","mdc-switch__icon mdc-switch__icon--on"),I(e,"viewBox","0 0 24 24"),I(u,"d","M20 13H4v-2h16v2z"),I(l,"class","mdc-switch__icon mdc-switch__icon--off"),I(l,"viewBox","0 0 24 24"),Z(t,E)},m(a,o){de(a,t,o),y(t,e),y(e,i),y(t,c),y(t,l),y(l,u),d||(m=N(v=he.call(null,t,s[6])),d=!0)},p(a,o){Z(t,E=ue(p,[o[0]&128&&f!==(f=J({[a[7]]:!0,"mdc-switch__icons":!0}))&&{class:f},o[0]&262144&&le(a[18],"icons$")])),v&&x(v.update)&&o[0]&64&&v.update.call(null,a[6])},d(a){a&&S(t),d=!1,m()}}}function ze(s){let t,e,i,c,l,u,f,v,d,m,p,E,a,o,h,_,b=s[5]&&ce(s),M=[{class:p=J({[s[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!s[9],"mdc-switch--selected":s[9],"mdc-switch--processing":s[1],"smui-switch--color-secondary":s[4]==="secondary",...s[11]})},{type:"button"},{role:"switch"},{"aria-checked":E=s[9]?"true":"false"},{disabled:s[0]},s[15],ne(s[18],["icons$"])],L={};for(let n=0;n<M.length;n+=1)L=Y(L,M[n]);return{c(){t=P("button"),e=P("div"),i=H(),c=P("div"),l=P("div"),u=P("div"),f=P("div"),v=H(),d=P("div"),m=H(),b&&b.c(),this.h()},l(n){t=F(n,"BUTTON",{class:!0,type:!0,role:!0,"aria-checked":!0});var g=w(t);e=F(g,"DIV",{class:!0}),w(e).forEach(S),i=q(g),c=F(g,"DIV",{class:!0});var D=w(c);l=F(D,"DIV",{class:!0});var k=w(l);u=F(k,"DIV",{class:!0});var T=w(u);f=F(T,"DIV",{class:!0}),w(f).forEach(S),T.forEach(S),v=q(k),d=F(k,"DIV",{class:!0}),w(d).forEach(S),m=q(k),b&&b.l(k),k.forEach(S),D.forEach(S),g.forEach(S),this.h()},h(){I(e,"class","mdc-switch__track"),I(f,"class","mdc-elevation-overlay"),I(u,"class","mdc-switch__shadow"),I(d,"class","mdc-switch__ripple"),I(l,"class","mdc-switch__handle"),I(c,"class","mdc-switch__handle-track"),Z(t,L)},m(n,g){de(n,t,g),y(t,e),y(t,i),y(t,c),y(c,l),y(l,u),y(u,f),y(l,v),y(l,d),s[27](d),y(l,m),b&&b.m(l,null),t.autofocus&&t.focus(),s[28](t),h||(_=[N(a=he.call(null,t,s[2])),N(s[14].call(null,t)),N(o=Le.call(null,t,{unbounded:!0,color:s[4],active:s[13],rippleElement:s[12],disabled:s[0],addClass:s[16],removeClass:s[17]})),Ce(t,"click",s[29])],h=!0)},p(n,g){n[5]?b?b.p(n,g):(b=ce(n),b.c(),b.m(l,null)):b&&(b.d(1),b=null),Z(t,L=ue(M,[g[0]&2586&&p!==(p=J({[n[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!n[9],"mdc-switch--selected":n[9],"mdc-switch--processing":n[1],"smui-switch--color-secondary":n[4]==="secondary",...n[11]}))&&{class:p},{type:"button"},{role:"switch"},g[0]&512&&E!==(E=n[9]?"true":"false")&&{"aria-checked":E},g[0]&1&&{disabled:n[0]},n[15],g[0]&262144&&ne(n[18],["icons$"])])),a&&x(a.update)&&g[0]&4&&a.update.call(null,n[2]),o&&x(o.update)&&g[0]&12305&&o.update.call(null,{unbounded:!0,color:n[4],active:n[13],rippleElement:n[12],disabled:n[0],addClass:n[16],removeClass:n[17]})},i:re,o:re,d(n){n&&S(t),s[27](null),b&&b.d(),s[28](null),h=!1,ye(_)}}}function je(s,t,e){const i=["use","class","disabled","color","group","checked","value","processing","icons","icons$use","icons$class","getId","getElement"];let c=ie(t,i);var l;const u=Fe(Se());let f=()=>{};function v(r){return r===f}let{use:d=[]}=t,{class:m=""}=t,{disabled:p=!1}=t,{color:E="primary"}=t,{group:a=f}=t,{checked:o=f}=t,{value:h=null}=t,{processing:_=!1}=t,{icons:b=!0}=t,{icons$use:M=[]}=t,{icons$class:L=""}=t,n,g,D={},k,T=!1,K=(l=De("SMUI:generic:input:props"))!==null&&l!==void 0?l:{},C=v(a)?v(o)?!1:o:a.indexOf(h)!==-1,A={get disabled(){return p},set disabled(r){e(0,p=r)},get processing(){return _},set processing(r){e(1,_=r)},get selected(){return C},set selected(r){e(9,C=r)}},G=o,B=v(a)?[]:[...a],U=C;Oe(()=>{e(10,g=new Ve({addClass:ee,hasClass:fe,isDisabled:()=>p,removeClass:te,setAriaChecked:()=>{},setDisabled:O=>{e(0,p=O)},state:A}));const r={get element(){return Q()},get checked(){return C},set checked(O){C!==O&&(A.selected=O,n&&j(n,"SMUISwitch:change",{selected:O,value:h}))},activateRipple(){p||e(13,T=!0)},deactivateRipple(){e(13,T=!1)}};return j(n,"SMUIGenericInput:mount",r),g.init(),g.initFromDOM(),()=>{j(n,"SMUIGenericInput:unmount",r),g.destroy()}});function fe(r){return r in D?D[r]:Q().classList.contains(r)}function ee(r){D[r]||e(11,D[r]=!0,D)}function te(r){(!(r in D)||D[r])&&e(11,D[r]=!1,D)}function ve(){return K&&K.id}function Q(){return n}function ge(r){ae[r?"unshift":"push"](()=>{k=r,e(12,k)})}function pe(r){ae[r?"unshift":"push"](()=>{n=r,e(8,n)})}const be=()=>g&&g.handleClick();return s.$$set=r=>{t=Y(Y({},t),we(r)),e(18,c=ie(t,i)),"use"in r&&e(2,d=r.use),"class"in r&&e(3,m=r.class),"disabled"in r&&e(0,p=r.disabled),"color"in r&&e(4,E=r.color),"group"in r&&e(19,a=r.group),"checked"in r&&e(20,o=r.checked),"value"in r&&e(21,h=r.value),"processing"in r&&e(1,_=r.processing),"icons"in r&&e(5,b=r.icons),"icons$use"in r&&e(6,M=r.icons$use),"icons$class"in r&&e(7,L=r.icons$class)},s.$$.update=()=>{if(s.$$.dirty[0]&121111296){let r=!1;if(!v(a))if(U!==C){const O=a.indexOf(h);C&&O===-1?(a.push(h),e(19,a),e(26,U),e(9,C),e(21,h),e(25,B),e(20,o),e(24,G),e(8,n)):!C&&O!==-1&&(a.splice(O,1),e(19,a),e(26,U),e(9,C),e(21,h),e(25,B),e(20,o),e(24,G),e(8,n)),r=!0}else{const O=B.indexOf(h),se=a.indexOf(h);O>-1&&se===-1?A.selected=!1:se>-1&&O===-1&&(A.selected=!0)}v(o)?U!==C&&(r=!0):o!==C&&(o===G?(e(20,o=C),r=!0):A.selected=o),e(24,G=o),e(25,B=v(a)?[]:[...a]),e(26,U=C),r&&n&&j(n,"SMUISwitch:change",{selected:C,value:h})}},[p,_,d,m,E,b,M,L,n,C,g,D,k,T,u,K,ee,te,c,a,o,h,ve,Q,G,B,U,ge,pe,be]}class Xe extends me{constructor(t){super(),Ee(this,t,je,ze,_e,{use:2,class:3,disabled:0,color:4,group:19,checked:20,value:21,processing:1,icons:5,icons$use:6,icons$class:7,getId:22,getElement:23},null,[-1,-1])}get getId(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}export{Xe as S};
