import{S as F,i as B,s as G,l as v,r as g,m as y,n as $,u as R,h as c,p as h,b as O,H as a,_ as K,E as C,a as w,c as P,$ as N,a0 as le,I as Z,w as z,G as re,x as J,y as L,f as Q,t as V,B as W}from"../../../chunks/index-c7a09abc.js";import{D as X}from"../../../chunks/Demo-23ddc17b.js";import{R as H}from"../../../chunks/Ripple-6826bd2e.js";import"../../../chunks/index-2fb696cd.js";import"../../../chunks/useActions-97c80212.js";import"../../../chunks/IconButton-331cfaad.js";import"../../../chunks/index-261df0f3.js";import"../../../chunks/prefixFilter-4c6b67e2.js";import"../../../chunks/index-38f63746.js";function oe(u){let e,t,n,o,s,l,i;return{c(){e=v("p"),t=g("SMUI ripples can be added to arbitrary elements, like this "),n=v("code"),o=g("p"),s=g(`
  element. Try clicking it to see the ripple.`),this.h()},l(b){e=y(b,"P",{tabindex:!0,class:!0});var _=$(e);t=R(_,"SMUI ripples can be added to arbitrary elements, like this "),n=y(_,"CODE",{});var E=$(n);o=R(E,"p"),E.forEach(c),s=R(_,`
  element. Try clicking it to see the ripple.`),_.forEach(c),this.h()},h(){h(e,"tabindex","0"),h(e,"class","svelte-ghwvhd")},m(b,_){O(b,e,_),a(e,t),a(e,n),a(n,o),a(e,s),l||(i=K(H.call(null,e,{surface:!0})),l=!0)},p:C,i:C,o:C,d(b){b&&c(e),l=!1,i()}}}class ae extends F{constructor(e){super(),B(this,e,null,oe,G,{})}}function ue(u){let e,t,n,o;return{c(){e=v("p"),t=g("Primary color."),this.h()},l(s){e=y(s,"P",{tabindex:!0,class:!0});var l=$(e);t=R(l,"Primary color."),l.forEach(c),this.h()},h(){h(e,"tabindex","0"),h(e,"class","svelte-ghwvhd")},m(s,l){O(s,e,l),a(e,t),n||(o=K(H.call(null,e,{surface:!0,color:"primary"})),n=!0)},p:C,i:C,o:C,d(s){s&&c(e),n=!1,o()}}}class ie extends F{constructor(e){super(),B(this,e,null,ue,G,{})}}function pe(u){let e,t,n,o;return{c(){e=v("p"),t=g("Secondary color."),this.h()},l(s){e=y(s,"P",{tabindex:!0,class:!0});var l=$(e);t=R(l,"Secondary color."),l.forEach(c),this.h()},h(){h(e,"tabindex","0"),h(e,"class","svelte-ghwvhd")},m(s,l){O(s,e,l),a(e,t),n||(o=K(H.call(null,e,{surface:!0,color:"secondary"})),n=!0)},p:C,i:C,o:C,d(s){s&&c(e),n=!1,o()}}}class ce extends F{constructor(e){super(),B(this,e,null,pe,G,{})}}function de(u){let e,t,n,o,s,l,i,b,_,E,D,r,U,x,S,I,j;return{c(){e=v("p"),t=v("span"),n=g("D"),l=w(),i=v("span"),b=g("P"),D=w(),r=v("span"),U=g("S"),this.h()},l(m){e=y(m,"P",{class:!0});var p=$(e);t=y(p,"SPAN",{tabindex:!0,class:!0});var M=$(t);n=R(M,"D"),M.forEach(c),l=P(p),i=y(p,"SPAN",{tabindex:!0,class:!0});var k=$(i);b=R(k,"P"),k.forEach(c),D=P(p),r=y(p,"SPAN",{tabindex:!0,class:!0});var T=$(r);U=R(T,"S"),T.forEach(c),p.forEach(c),this.h()},h(){h(t,"tabindex","0"),h(t,"class",o="unbounded "+Object.keys(u[0]).join(" ")+" svelte-c8bsu2"),h(i,"tabindex","0"),h(i,"class",_="unbounded "+Object.keys(u[1]).join(" ")+" svelte-c8bsu2"),h(r,"tabindex","0"),h(r,"class",x="unbounded "+Object.keys(u[2]).join(" ")+" svelte-c8bsu2"),h(e,"class","svelte-c8bsu2")},m(m,p){O(m,e,p),a(e,t),a(t,n),a(e,l),a(e,i),a(i,b),a(e,D),a(e,r),a(r,U),I||(j=[K(s=H.call(null,t,{surface:!0,unbounded:!0,addClass:u[3],removeClass:u[4]})),K(E=H.call(null,i,{surface:!0,unbounded:!0,color:"primary",addClass:u[5],removeClass:u[6]})),K(S=H.call(null,r,{surface:!0,unbounded:!0,color:"secondary",addClass:u[7],removeClass:u[8]}))],I=!0)},p(m,[p]){p&1&&o!==(o="unbounded "+Object.keys(m[0]).join(" ")+" svelte-c8bsu2")&&h(t,"class",o),s&&N(s.update)&&p&1&&s.update.call(null,{surface:!0,unbounded:!0,addClass:m[3],removeClass:m[4]}),p&2&&_!==(_="unbounded "+Object.keys(m[1]).join(" ")+" svelte-c8bsu2")&&h(i,"class",_),E&&N(E.update)&&p&2&&E.update.call(null,{surface:!0,unbounded:!0,color:"primary",addClass:m[5],removeClass:m[6]}),p&4&&x!==(x="unbounded "+Object.keys(m[2]).join(" ")+" svelte-c8bsu2")&&h(r,"class",x),S&&N(S.update)&&p&4&&S.update.call(null,{surface:!0,unbounded:!0,color:"secondary",addClass:m[7],removeClass:m[8]})},i:C,o:C,d(m){m&&c(e),I=!1,le(j)}}}function fe(u,e,t){let n={},o={},s={};return[n,o,s,r=>{n[r]||t(0,n[r]=!0,n)},r=>{n[r]&&(delete n[r],t(0,n))},r=>{o[r]||t(1,o[r]=!0,o)},r=>{o[r]&&(delete o[r],t(1,o))},r=>{s[r]||t(2,s[r]=!0,s)},r=>{s[r]&&(delete s[r],t(2,s))}]}class _e extends F{constructor(e){super(),B(this,e,fe,de,G,{})}}function me(u){let e,t,n,o,s;return{c(){e=v("p"),t=g(`Keyboard activation on a non-button non-link element. (Focus and press
  space/enter.)`),this.h()},l(l){e=y(l,"P",{tabindex:!0,class:!0});var i=$(e);t=R(i,`Keyboard activation on a non-button non-link element. (Focus and press
  space/enter.)`),i.forEach(c),this.h()},h(){h(e,"tabindex","0"),h(e,"class","svelte-ghwvhd")},m(l,i){O(l,e,i),a(e,t),o||(s=[K(n=H.call(null,e,{surface:!0,active:u[0]})),Z(e,"mousedown",u[1],!0),Z(e,"mouseup",u[2],!0),Z(e,"keydown",u[3],!0),Z(e,"keyup",u[4],!0)],o=!0)},p(l,[i]){n&&N(n.update)&&i&1&&n.update.call(null,{surface:!0,active:l[0]})},i:C,o:C,d(l){l&&c(e),o=!1,le(s)}}}function he(u,e,t){let n=!1;return[n,()=>t(0,n=!0),()=>t(0,n=!1),b=>t(0,n=b.code==="Space"||b.code==="Enter"),()=>t(0,n=!1)]}class be extends F{constructor(e){super(),B(this,e,he,me,G,{})}}function ve(u){let e;return{c(){e=g("Unbounded")},l(t){e=R(t,"Unbounded")},m(t,n){O(t,e,n)},d(t){t&&c(e)}}}function ye(u){let e,t,n,o,s,l,i,b,_,E,D,r,U,x,S,I,j,m,p,M,k,T,A,Y;return S=new X({props:{component:ae,file:"ripple/_Simple.svelte"}}),j=new X({props:{component:ie,file:"ripple/_PrimaryColor.svelte"}}),p=new X({props:{component:ce,file:"ripple/_SecondaryColor.svelte"}}),k=new X({props:{component:_e,file:"ripple/_Unbounded.svelte",$$slots:{default:[ve]},$$scope:{ctx:u}}}),A=new X({props:{component:be,file:"ripple/_KeyboardActivation.svelte"}}),{c(){e=w(),t=v("section"),n=v("h2"),o=g("Ripple"),s=w(),l=v("h5"),i=g("Installation"),b=w(),_=v("pre"),E=g("npm i -D @smui/ripple"),D=w(),r=v("h5"),U=g("Demos"),x=w(),z(S.$$.fragment),I=w(),z(j.$$.fragment),m=w(),z(p.$$.fragment),M=w(),z(k.$$.fragment),T=w(),z(A.$$.fragment),this.h()},l(d){re('[data-svelte="svelte-1s9ceeg"]',document.head).forEach(c),e=P(d),t=y(d,"SECTION",{});var f=$(t);n=y(f,"H2",{});var ee=$(n);o=R(ee,"Ripple"),ee.forEach(c),s=P(f),l=y(f,"H5",{});var te=$(l);i=R(te,"Installation"),te.forEach(c),b=P(f),_=y(f,"PRE",{class:!0});var ne=$(_);E=R(ne,"npm i -D @smui/ripple"),ne.forEach(c),D=P(f),r=y(f,"H5",{});var se=$(r);U=R(se,"Demos"),se.forEach(c),x=P(f),J(S.$$.fragment,f),I=P(f),J(j.$$.fragment,f),m=P(f),J(p.$$.fragment,f),M=P(f),J(k.$$.fragment,f),T=P(f),J(A.$$.fragment,f),f.forEach(c),this.h()},h(){document.title="Ripple - SMUI",h(_,"class","demo-spaced")},m(d,q){O(d,e,q),O(d,t,q),a(t,n),a(n,o),a(t,s),a(t,l),a(l,i),a(t,b),a(t,_),a(_,E),a(t,D),a(t,r),a(r,U),a(t,x),L(S,t,null),a(t,I),L(j,t,null),a(t,m),L(p,t,null),a(t,M),L(k,t,null),a(t,T),L(A,t,null),Y=!0},p(d,[q]){const f={};q&1&&(f.$$scope={dirty:q,ctx:d}),k.$set(f)},i(d){Y||(Q(S.$$.fragment,d),Q(j.$$.fragment,d),Q(p.$$.fragment,d),Q(k.$$.fragment,d),Q(A.$$.fragment,d),Y=!0)},o(d){V(S.$$.fragment,d),V(j.$$.fragment,d),V(p.$$.fragment,d),V(k.$$.fragment,d),V(A.$$.fragment,d),Y=!1},d(d){d&&c(e),d&&c(t),W(S),W(j),W(p),W(k),W(A)}}}class je extends F{constructor(e){super(),B(this,e,null,ye,G,{})}}export{je as default};
