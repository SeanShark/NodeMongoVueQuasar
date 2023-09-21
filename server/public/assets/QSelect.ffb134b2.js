import{c as Ke,aC as je,aD as dt,aE as ft,aF as vt,f as _t,aG as Bt,k as Et,aH as Rt,a as m,v as Lt,g as Qe,d as b,R as Be,aI as Ht,a2 as Tt,af as ue,a7 as Pt,r as E,w as ge,s as G,aJ as Dt,aK as Nt,aL as $t,aM as Kt,o as mt,aN as jt,aO as Qt,aP as it,aQ as Ae,aR as Ut,aS as Wt,ab as De,aT as Xt,ac as Se,am as Yt,aU as Gt,Z as Jt,F as Zt}from"./index.5b4092ab.js";import{a as el,b as tl,Q as ll}from"./QItemLabel.b55d4483.js";import{Q as ul}from"./ClosePopup.75cca3ad.js";import{r as $e}from"./rtl.b51694b1.js";import{n as rt}from"./store.8badecaa.js";var nl=Ke({name:"QField",inheritAttrs:!1,props:je,emits:dt,setup(){return ft(vt())}});const al={xs:8,sm:10,md:14,lg:20,xl:24};var ol=Ke({name:"QChip",props:{..._t,...Bt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:s,emit:i}){const{proxy:{$q:C}}=Qe(),M=Et(e,C),o=Rt(e,al),O=m(()=>e.selected===!0||e.icon!==void 0),w=m(()=>e.selected===!0?e.iconSelected||C.iconSet.chip.selected:e.icon),h=m(()=>e.iconRemove||C.iconSet.chip.remove),p=m(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=m(()=>{const y=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(y?` text-${y} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(p.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(M.value===!0?" q-chip--dark q-dark":"")}),k=m(()=>{const y=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},K={...y,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||C.lang.label.remove};return{chip:y,remove:K}});function z(y){y.keyCode===13&&g(y)}function g(y){e.disable||(i("update:selected",!e.selected),i("click",y))}function H(y){(y.keyCode===void 0||y.keyCode===13)&&(ue(y),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function _(){const y=[];p.value===!0&&y.push(b("div",{class:"q-focus-helper"})),O.value===!0&&y.push(b(Be,{class:"q-chip__icon q-chip__icon--left",name:w.value}));const K=e.label!==void 0?[b("div",{class:"ellipsis"},[e.label])]:void 0;return y.push(b("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Ht(s.default,K))),e.iconRight&&y.push(b(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&y.push(b(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:h.value,...k.value.remove,onClick:H,onKeyup:H})),y}return()=>{if(e.modelValue===!1)return;const y={class:c.value,style:o.value};return p.value===!0&&Object.assign(y,k.value.chip,{onClick:g,onKeyup:z}),Lt("div",y,_(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Tt,e.ripple]])}}});const j=1e3,il=["start","center","end","start-force","center-force","end-force"],St=Array.prototype.filter,rl=window.getComputedStyle(document.body).overflowAnchor===void 0?Pt:function(e,s){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const i=e.children||[];St.call(i,M=>M.dataset&&M.dataset.qVsAnchor!==void 0).forEach(M=>{delete M.dataset.qVsAnchor});const C=i[s];C&&C.dataset&&(C.dataset.qVsAnchor="")}))};function he(e,s){return e+s}function Ne(e,s,i,C,M,o,O,w){const h=e===window?document.scrollingElement||document.documentElement:e,p=M===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-O-w,scrollMaxSize:0,offsetStart:-O,offsetEnd:-w};if(M===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=h.scrollLeft,c.scrollViewSize+=h.clientWidth),c.scrollMaxSize=h.scrollWidth,o===!0&&(c.scrollStart=($e===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=h.scrollTop,c.scrollViewSize+=h.clientHeight),c.scrollMaxSize=h.scrollHeight),i!==null)for(let k=i.previousElementSibling;k!==null;k=k.previousElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=k[p]);if(C!==null)for(let k=C.nextElementSibling;k!==null;k=k.nextElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=k[p]);if(s!==e){const k=h.getBoundingClientRect(),z=s.getBoundingClientRect();M===!0?(c.offsetStart+=z.left-k.left,c.offsetEnd-=z.width):(c.offsetStart+=z.top-k.top,c.offsetEnd-=z.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function ct(e,s,i,C){s==="end"&&(s=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(C===!0&&(s=($e===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-s),window.scrollTo(s,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s):i===!0?(C===!0&&(s=($e===!0?e.scrollWidth-e.offsetWidth:0)-s),e.scrollLeft=s):e.scrollTop=s}function ze(e,s,i,C){if(i>=C)return 0;const M=s.length,o=Math.floor(i/j),O=Math.floor((C-1)/j)+1;let w=e.slice(o,O).reduce(he,0);return i%j!==0&&(w-=s.slice(o*j,i).reduce(he,0)),C%j!==0&&C!==M&&(w-=s.slice(C,O*j).reduce(he,0)),w}const gt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},yl=Object.keys(gt),cl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...gt};function sl({virtualScrollLength:e,getVirtualScrollTarget:s,getVirtualScrollEl:i,virtualScrollItemSizeComputed:C}){const M=Qe(),{props:o,emit:O,proxy:w}=M,{$q:h}=w;let p,c,k,z=[],g;const H=E(0),_=E(0),y=E({}),K=E(null),P=E(null),W=E(null),B=E({from:0,to:0}),F=m(()=>o.tableColspan!==void 0?o.tableColspan:100);C===void 0&&(C=m(()=>o.virtualScrollItemSize));const X=m(()=>C.value+";"+o.virtualScrollHorizontal),ye=m(()=>X.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);ge(ye,()=>{Y()}),ge(X,ne);function ne(){Z(c,!0)}function be(n){Z(n===void 0?c:n)}function J(n,r){const f=s();if(f==null||f.nodeType===8)return;const A=Ne(f,i(),K.value,P.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);k!==A.scrollViewSize&&Y(A.scrollViewSize),ae(f,A,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,il.indexOf(r)>-1?r:c>-1&&n>c?"end":"start")}function Q(){const n=s();if(n==null||n.nodeType===8)return;const r=Ne(n,i(),K.value,P.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),f=e.value-1,A=r.scrollMaxSize-r.offsetStart-r.offsetEnd-_.value;if(p===r.scrollStart)return;if(r.scrollMaxSize<=0){ae(n,r,0,0);return}k!==r.scrollViewSize&&Y(r.scrollViewSize),we(B.value.from);const R=Math.floor(r.scrollMaxSize-Math.max(r.scrollViewSize,r.offsetEnd)-Math.min(g[f],r.scrollViewSize/2));if(R>0&&Math.ceil(r.scrollStart)>=R){ae(n,r,f,r.scrollMaxSize-r.offsetEnd-z.reduce(he,0));return}let V=0,v=r.scrollStart-r.offsetStart,L=v;if(v<=A&&v+r.scrollViewSize>=H.value)v-=H.value,V=B.value.from,L=v;else for(let S=0;v>=z[S]&&V<f;S++)v-=z[S],V+=j;for(;v>0&&V<f;)v-=g[V],v>-r.scrollViewSize?(V++,L=v):L=g[V]+v;ae(n,r,V,L)}function ae(n,r,f,A,R){const V=typeof R=="string"&&R.indexOf("-force")>-1,v=V===!0?R.replace("-force",""):R,L=v!==void 0?v:"start";let S=Math.max(0,f-y.value[L]),D=S+y.value.total;D>e.value&&(D=e.value,S=Math.max(0,D-y.value.total)),p=r.scrollStart;const ie=S!==B.value.from||D!==B.value.to;if(ie===!1&&v===void 0){Ce(f);return}const{activeElement:ke}=document,U=W.value;ie===!0&&U!==null&&U!==ke&&U.contains(ke)===!0&&(U.addEventListener("focusout",Ve),setTimeout(()=>{U!==null&&U.removeEventListener("focusout",Ve)})),rl(U,f-S);const Ie=v!==void 0?g.slice(S,f).reduce(he,0):0;if(ie===!0){const ee=D>=B.value.from&&S<=B.value.to?B.value.to:D;B.value={from:S,to:ee},H.value=ze(z,g,0,S),_.value=ze(z,g,D,e.value),requestAnimationFrame(()=>{B.value.to!==D&&p===r.scrollStart&&(B.value={from:B.value.from,to:D},_.value=ze(z,g,D,e.value))})}requestAnimationFrame(()=>{if(p!==r.scrollStart)return;ie===!0&&we(S);const ee=g.slice(S,f).reduce(he,0),re=ee+r.offsetStart+H.value,Me=re+g[f];let xe=re+A;if(v!==void 0){const Ee=ee-Ie,N=r.scrollStart+Ee;xe=V!==!0&&N<re&&Me<N+r.scrollViewSize?N:v==="end"?Me-r.scrollViewSize:re-(v==="start"?0:Math.round((r.scrollViewSize-g[f])/2))}p=xe,ct(n,xe,o.virtualScrollHorizontal,h.lang.rtl),Ce(f)})}function we(n){const r=W.value;if(r){const f=St.call(r.children,S=>S.classList&&S.classList.contains("q-virtual-scroll--skip")===!1),A=f.length,R=o.virtualScrollHorizontal===!0?S=>S.getBoundingClientRect().width:S=>S.offsetHeight;let V=n,v,L;for(let S=0;S<A;){for(v=R(f[S]),S++;S<A&&f[S].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=R(f[S]),S++;L=v-g[V],L!==0&&(g[V]+=L,z[Math.floor(V/j)]+=L),V++}}}function Ve(){W.value!==null&&W.value!==void 0&&W.value.focus()}function Z(n,r){const f=1*C.value;(r===!0||Array.isArray(g)===!1)&&(g=[]);const A=g.length;g.length=e.value;for(let V=e.value-1;V>=A;V--)g[V]=f;const R=Math.floor((e.value-1)/j);z=[];for(let V=0;V<=R;V++){let v=0;const L=Math.min((V+1)*j,e.value);for(let S=V*j;S<L;S++)v+=g[S];z.push(v)}c=-1,p=void 0,H.value=ze(z,g,0,B.value.from),_.value=ze(z,g,B.value.to,e.value),n>=0?(we(B.value.from),G(()=>{J(n)})):oe()}function Y(n){if(n===void 0&&typeof window!="undefined"){const v=s();v!=null&&v.nodeType!==8&&(n=Ne(v,i(),K.value,P.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}k=n;const r=parseFloat(o.virtualScrollSliceRatioBefore)||0,f=parseFloat(o.virtualScrollSliceRatioAfter)||0,A=1+r+f,R=n===void 0||n<=0?1:Math.ceil(n/C.value),V=Math.max(1,R,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/A));y.value={total:Math.ceil(V*A),start:Math.ceil(V*r),center:Math.ceil(V*(.5+r)),end:Math.ceil(V*(1+r)),view:R}}function pe(n,r){const f=o.virtualScrollHorizontal===!0?"width":"height",A={["--q-virtual-scroll-item-"+f]:C.value+"px"};return[n==="tbody"?b(n,{class:"q-virtual-scroll__padding",key:"before",ref:K},[b("tr",[b("td",{style:{[f]:`${H.value}px`,...A},colspan:F.value})])]):b(n,{class:"q-virtual-scroll__padding",key:"before",ref:K,style:{[f]:`${H.value}px`,...A}}),b(n,{class:"q-virtual-scroll__content",key:"content",ref:W,tabindex:-1},r.flat()),n==="tbody"?b(n,{class:"q-virtual-scroll__padding",key:"after",ref:P},[b("tr",[b("td",{style:{[f]:`${_.value}px`,...A},colspan:F.value})])]):b(n,{class:"q-virtual-scroll__padding",key:"after",ref:P,style:{[f]:`${_.value}px`,...A}})]}function Ce(n){c!==n&&(o.onVirtualScroll!==void 0&&O("virtualScroll",{index:n,from:B.value.from,to:B.value.to-1,direction:n<c?"decrease":"increase",ref:w}),c=n)}Y();const oe=Dt(Q,h.platform.is.ios===!0?120:35);Nt(()=>{Y()});let a=!1;return $t(()=>{a=!0}),Kt(()=>{if(a!==!0)return;const n=s();p!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?ct(n,p,o.virtualScrollHorizontal,h.lang.rtl):J(c)}),mt(()=>{oe.cancel()}),Object.assign(w,{scrollTo:J,reset:ne,refresh:be}),{virtualScrollSliceRange:B,virtualScrollSliceSizeComputed:y,setVirtualScrollSize:Y,onVirtualScrollEvt:oe,localResetVirtualScroll:Z,padVirtualScroll:pe,scrollTo:J,reset:ne,refresh:be}}const st=e=>["add","add-unique","toggle"].includes(e),dl=".*+?^${}()|[]\\",fl=Object.keys(je);var bl=Ke({name:"QSelect",inheritAttrs:!1,props:{...cl,...jt,...je,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:st},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...dt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:s,emit:i}){const{proxy:C}=Qe(),{$q:M}=C,o=E(!1),O=E(!1),w=E(-1),h=E(""),p=E(!1),c=E(!1);let k=null,z,g,H,_=null,y,K,P,W;const B=E(null),F=E(null),X=E(null),ye=E(null),ne=E(null),be=Qt(e),J=Xt(lt),Q=m(()=>Array.isArray(e.options)?e.options.length:0),ae=m(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:we,virtualScrollSliceSizeComputed:Ve,localResetVirtualScroll:Z,padVirtualScroll:Y,onVirtualScrollEvt:pe,scrollTo:Ce,setVirtualScrollSize:oe}=sl({virtualScrollLength:Q,getVirtualScrollTarget:wt,getVirtualScrollEl:et,virtualScrollItemSizeComputed:ae}),a=vt(),n=m(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&z!==void 0?z:[],d=u.map(q=>bt(q,l));return e.modelValue===null&&t===!0?d.filter(q=>q!==null):d}return u}),r=m(()=>{const t={};return fl.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),f=m(()=>e.optionsDark===null?a.isDark.value:e.optionsDark),A=m(()=>it(n.value)),R=m(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),V=m(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),v=m(()=>Q.value===0),L=m(()=>n.value.map(t=>$.value(t)).join(", ")),S=m(()=>e.displayValue!==void 0?e.displayValue:L.value),D=m(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ie=m(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(D.value))),ke=m(()=>a.focused.value===!0?e.tabindex:-1),U=m(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-controls":`${a.targetUid.value}_lb`};return w.value>=0&&(t["aria-activedescendant"]=`${a.targetUid.value}_${w.value}`),t}),Ie=m(()=>({id:`${a.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ee=m(()=>n.value.map((t,u)=>({index:u,opt:t,html:D.value(t),selected:!0,removeAtIndex:yt,toggleOption:te,tabindex:ke.value}))),re=m(()=>{if(Q.value===0)return[];const{from:t,to:u}=we.value;return e.options.slice(t,u).map((l,d)=>{const q=ce.value(l)===!0,x=t+d,I={clickable:!0,active:!1,activeClass:Ee.value,manualFocus:!0,focused:!1,disable:q,tabindex:-1,dense:e.optionsDense,dark:f.value,role:"option",id:`${a.targetUid.value}_${x}`,onClick:()=>{te(l)}};return q!==!0&&(He(l)===!0&&(I.active=!0),w.value===x&&(I.focused=!0),I["aria-selected"]=I.active===!0?"true":"false",M.platform.is.desktop===!0&&(I.onMousemove=()=>{o.value===!0&&se(x)})),{index:x,opt:l,html:D.value(l),label:$.value(l),selected:I.active,focused:I.focused,toggleOption:te,setOptionIndex:se,itemProps:I}})}),Me=m(()=>e.dropdownIcon!==void 0?e.dropdownIcon:M.iconSet.arrow.dropdown),xe=m(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ee=m(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),N=m(()=>Le(e.optionValue,"value")),$=m(()=>Le(e.optionLabel,"label")),ce=m(()=>Le(e.optionDisable,"disable")),Fe=m(()=>n.value.map(t=>N.value(t))),ht=m(()=>{const t={onInput:lt,onChange:J,onKeydown:Ze,onKeyup:Ge,onKeypress:Je,onFocus:Xe,onClick(u){g===!0&&Se(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=J,t});ge(n,t=>{z=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&a.innerLoading.value!==!0&&(O.value!==!0&&o.value!==!0||A.value!==!0)&&(H!==!0&&me(),(O.value===!0||o.value===!0)&&de(""))},{immediate:!0}),ge(()=>e.fillInput,me),ge(o,Te),ge(Q,Ot);function Ue(t){return e.emitValue===!0?N.value(t):t}function Re(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();i("remove",{index:t,value:u.splice(t,1)[0]}),i("update:modelValue",u)}else i("update:modelValue",null)}function yt(t){Re(t),a.focus()}function We(t,u){const l=Ue(t);if(e.multiple!==!0){e.fillInput===!0&&qe($.value(t),!0,!0),i("update:modelValue",l);return}if(n.value.length===0){i("add",{index:0,value:l}),i("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&He(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();i("add",{index:d.length,value:l}),d.push(l),i("update:modelValue",d)}function te(t,u){if(a.editable.value!==!0||t===void 0||ce.value(t)===!0)return;const l=N.value(t);if(e.multiple!==!0){u!==!0&&(qe(e.fillInput===!0?$.value(t):"",!0,!0),le()),F.value!==null&&F.value.focus(),(n.value.length===0||Ae(N.value(n.value[0]),l)!==!0)&&i("update:modelValue",e.emitValue===!0?l:t);return}if((g!==!0||p.value===!0)&&a.focus(),Xe(),n.value.length===0){const x=e.emitValue===!0?l:t;i("add",{index:0,value:x}),i("update:modelValue",e.multiple===!0?[x]:x);return}const d=e.modelValue.slice(),q=Fe.value.findIndex(x=>Ae(x,l));if(q>-1)i("remove",{index:q,value:d.splice(q,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const x=e.emitValue===!0?l:t;i("add",{index:d.length,value:x}),d.push(x)}i("update:modelValue",d)}function se(t){if(M.platform.is.desktop!==!0)return;const u=t>-1&&t<Q.value?t:-1;w.value!==u&&(w.value=u)}function Oe(t=1,u){if(o.value===!0){let l=w.value;do l=rt(l+t,-1,Q.value-1);while(l!==-1&&l!==w.value&&ce.value(e.options[l])===!0);w.value!==l&&(se(l),Ce(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&_e(l>=0?$.value(e.options[l]):y))}}function bt(t,u){const l=d=>Ae(N.value(d),t);return e.options.find(l)||u.find(l)||t}function Le(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:d=>d!==null&&typeof d=="object"&&l in d?d[l]:d}function He(t){const u=N.value(t);return Fe.value.find(l=>Ae(l,u))!==void 0}function Xe(t){e.useInput===!0&&F.value!==null&&(t===void 0||F.value===t.target&&t.target.value===L.value)&&F.value.select()}function Ye(t){Yt(t,27)===!0&&o.value===!0&&(Se(t),le(),me()),i("keyup",t)}function Ge(t){const{value:u}=t.target;if(t.keyCode!==void 0){Ye(t);return}if(t.target.value="",k!==null&&(clearTimeout(k),k=null),me(),typeof u=="string"&&u.length!==0){const l=u.toLocaleLowerCase(),d=x=>{const I=e.options.find(T=>x.value(T).toLocaleLowerCase()===l);return I===void 0?!1:(n.value.indexOf(I)===-1?te(I):le(),!0)},q=x=>{d(N)!==!0&&(d($)===!0||x===!0||de(u,!0,()=>q(!0)))};q()}else a.clearValue(t)}function Je(t){i("keypress",t)}function Ze(t){if(i("keydown",t),Gt(t)===!0)return;const u=h.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(w.value>-1||u===!0);if(t.keyCode===27){De(t);return}if(t.keyCode===9&&l===!1){fe();return}if(t.target===void 0||t.target.id!==a.targetUid.value)return;if(t.keyCode===40&&a.innerLoading.value!==!0&&o.value===!1){ue(t),ve();return}if(t.keyCode===8&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Re(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(ue(t),w.value=-1,Oe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&Ve.value!==void 0&&(ue(t),w.value=Math.max(-1,Math.min(Q.value,w.value+(t.keyCode===33?-1:1)*Ve.value.view)),Oe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ue(t),Oe(t.keyCode===38?-1:1,e.multiple));const d=Q.value;if((P===void 0||W<Date.now())&&(P=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||P.length!==0)){o.value!==!0&&ve(t);const q=t.key.toLocaleLowerCase(),x=P.length===1&&P[0]===q;W=Date.now()+1500,x===!1&&(ue(t),P+=q);const I=new RegExp("^"+P.split("").map(Pe=>dl.indexOf(Pe)>-1?"\\"+Pe:Pe).join(".*"),"i");let T=w.value;if(x===!0||T<0||I.test($.value(e.options[T]))!==!0)do T=rt(T+1,-1,d-1);while(T!==w.value&&(ce.value(e.options[T])===!0||I.test($.value(e.options[T]))!==!0));w.value!==T&&G(()=>{se(T),Ce(T),T>=0&&e.useInput===!0&&e.fillInput===!0&&_e($.value(e.options[T]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||P!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&ue(t),w.value>-1&&w.value<d){te(e.options[w.value]);return}if(u===!0){const q=(x,I)=>{if(I){if(st(I)!==!0)return}else I=e.newValueMode;if(x==null)return;qe("",e.multiple!==!0,!0),(I==="toggle"?te:We)(x,I==="add-unique"),e.multiple!==!0&&(F.value!==null&&F.value.focus(),le())};if(e.onNewValue!==void 0?i("newValue",h.value,q):q(h.value),e.multiple!==!0)return}o.value===!0?fe():a.innerLoading.value!==!0&&ve()}}function et(){return g===!0?ne.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function wt(){return et()}function Vt(){return e.hideSelected===!0?[]:s["selected-item"]!==void 0?ee.value.map(t=>s["selected-item"](t)).slice():s.selected!==void 0?[].concat(s.selected()):e.useChips===!0?ee.value.map((t,u)=>b(ol,{key:"option-"+u,removable:a.editable.value===!0&&ce.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ke.value,onRemove(){t.removeAtIndex(u)}},()=>b("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[b("span",{[ie.value===!0?"innerHTML":"textContent"]:S.value})]}function tt(){if(v.value===!0)return s["no-option"]!==void 0?s["no-option"]({inputValue:h.value}):void 0;const t=s.option!==void 0?s.option:l=>b(ll,{key:l.index,...l.itemProps},()=>b(el,()=>b(tl,()=>b("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=Y("div",re.value.map(t));return s["before-options"]!==void 0&&(u=s["before-options"]().concat(u)),Zt(s["after-options"],u)}function Ct(t,u){const l=u===!0?{...U.value,...a.splitAttrs.attributes.value}:void 0,d={ref:u===!0?F:void 0,key:"i_t",class:R.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...l,id:u===!0?a.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...ht.value};return t!==!0&&g===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),b("input",d)}function lt(t){k!==null&&(clearTimeout(k),k=null),!(t&&t.target&&t.target.qComposing===!0)&&(_e(t.target.value||""),H=!0,y=h.value,a.focused.value!==!0&&(g!==!0||p.value===!0)&&a.focus(),e.onFilter!==void 0&&(k=setTimeout(()=>{k=null,de(h.value)},e.inputDebounce)))}function _e(t){h.value!==t&&(h.value=t,i("inputValue",t))}function qe(t,u,l){H=l!==!0,e.useInput===!0&&(_e(t),(u===!0||l!==!0)&&(y=t),u!==!0&&de(t))}function de(t,u,l){if(e.onFilter===void 0||u!==!0&&a.focused.value!==!0)return;a.innerLoading.value===!0?i("filterAbort"):(a.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&n.value.length!==0&&H!==!0&&t===$.value(n.value[0])&&(t="");const d=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);_!==null&&clearTimeout(_),_=d,i("filter",t,(q,x)=>{(u===!0||a.focused.value===!0)&&_===d&&(clearTimeout(_),typeof q=="function"&&q(),c.value=!1,G(()=>{a.innerLoading.value=!1,a.editable.value===!0&&(u===!0?o.value===!0&&le():o.value===!0?Te(!0):o.value=!0),typeof x=="function"&&G(()=>{x(C)}),typeof l=="function"&&G(()=>{l(C)})}))},()=>{a.focused.value===!0&&_===d&&(clearTimeout(_),a.innerLoading.value=!1,c.value=!1),o.value===!0&&(o.value=!1)})}function kt(){return b(ul,{ref:X,class:V.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&v.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:xe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Ie.value,onScrollPassive:pe,onBeforeShow:nt,onBeforeHide:xt,onShow:qt},tt)}function xt(t){at(t),fe()}function qt(){oe()}function At(t){Se(t),F.value!==null&&F.value.focus(),p.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function zt(t){Se(t),G(()=>{p.value=!1})}function pt(){const t=[b(nl,{class:`col-auto ${a.fieldClass.value}`,...r.value,for:a.targetUid.value,dark:f.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:h.value.length!==0,...a.splitAttrs.listeners.value,onFocus:At,onBlur:zt},{...s,rawControl:()=>a.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(b("div",{ref:ne,class:V.value+" scroll",style:e.popupContentStyle,...Ie.value,onClick:De,onScrollPassive:pe},tt())),b(Jt,{ref:ye,modelValue:O.value,position:e.useInput===!0?"top":void 0,transitionShow:K,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:nt,onBeforeHide:It,onHide:Mt,onShow:Ft},()=>b("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(p.value===!0?" q-select__dialog--focused":"")},t))}function It(t){at(t),ye.value!==null&&ye.value.__updateRefocusTarget(a.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),a.focused.value=!1}function Mt(t){le(),a.focused.value===!1&&i("blur",t),me()}function Ft(){const t=document.activeElement;(t===null||t.id!==a.targetUid.value)&&F.value!==null&&F.value!==t&&F.value.focus(),oe()}function fe(){O.value!==!0&&(w.value=-1,o.value===!0&&(o.value=!1),a.focused.value===!1&&(_!==null&&(clearTimeout(_),_=null),a.innerLoading.value===!0&&(i("filterAbort"),a.innerLoading.value=!1,c.value=!1)))}function ve(t){a.editable.value===!0&&(g===!0?(a.onControlFocusin(t),O.value=!0,G(()=>{a.focus()})):a.focus(),e.onFilter!==void 0?de(h.value):(v.value!==!0||s["no-option"]!==void 0)&&(o.value=!0))}function le(){O.value=!1,fe()}function me(){e.useInput===!0&&qe(e.multiple!==!0&&e.fillInput===!0&&n.value.length!==0&&$.value(n.value[0])||"",!0,!0)}function Te(t){let u=-1;if(t===!0){if(n.value.length!==0){const l=N.value(n.value[0]);u=e.options.findIndex(d=>Ae(N.value(d),l))}Z(u)}se(u)}function Ot(t,u){o.value===!0&&a.innerLoading.value===!1&&(Z(-1,!0),G(()=>{o.value===!0&&a.innerLoading.value===!1&&(t>u?Z():Te(!0))}))}function ut(){O.value===!1&&X.value!==null&&X.value.updatePosition()}function nt(t){t!==void 0&&Se(t),i("popupShow",t),a.hasPopupOpen=!0,a.onControlFocusin(t)}function at(t){t!==void 0&&Se(t),i("popupHide",t),a.hasPopupOpen=!1,a.onControlFocusout(t)}function ot(){g=M.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?s["no-option"]!==void 0||e.onFilter!==void 0||v.value===!1:!0),K=M.platform.is.ios===!0&&g===!0&&e.useInput===!0?"fade":e.transitionShow}return Ut(ot),Wt(ut),ot(),mt(()=>{k!==null&&clearTimeout(k)}),Object.assign(C,{showPopup:ve,hidePopup:le,removeAtIndex:Re,add:We,toggleOption:te,getOptionIndex:()=>w.value,setOptionIndex:se,moveOptionSelection:Oe,filter:de,updateMenuPosition:ut,updateInputValue:qe,isOptionSelected:He,getEmittingOptionValue:Ue,isOptionDisabled:(...t)=>ce.value.apply(null,t)===!0,getOptionValue:(...t)=>N.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(a,{innerValue:n,fieldClass:m(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:B,targetRef:F,hasValue:A,showPopup:ve,floatingLabel:m(()=>e.hideSelected!==!0&&A.value===!0||typeof h.value=="number"||h.value.length!==0||it(e.displayValue)),getControlChild:()=>{if(a.editable.value!==!1&&(O.value===!0||v.value!==!0||s["no-option"]!==void 0))return g===!0?pt():kt();a.hasPopupOpen===!0&&(a.hasPopupOpen=!1)},controlEvents:{onFocusin(t){a.onControlFocusin(t)},onFocusout(t){a.onControlFocusout(t,()=>{me(),fe()})},onClick(t){if(De(t),g!==!0&&o.value===!0){fe(),F.value!==null&&F.value.focus();return}ve(t)}},getControl:t=>{const u=Vt(),l=t===!0||O.value!==!0||g!==!0;if(e.useInput===!0)u.push(Ct(t,l));else if(a.editable.value===!0){const q=l===!0?U.value:void 0;u.push(b("input",{ref:l===!0?F:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?a.targetUid.value:void 0,value:S.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...q,onKeydown:Ze,onKeyup:Ye,onKeypress:Je})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&u.push(b("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ge}))}if(be.value!==void 0&&e.disable!==!0&&Fe.value.length!==0){const q=Fe.value.map(x=>b("option",{value:x,selected:!0}));u.push(b("select",{class:"hidden",name:be.value,multiple:e.multiple},q))}const d=e.useInput===!0||l!==!0?void 0:a.splitAttrs.attributes.value;return b("div",{class:"q-field__native row items-center",...d,...a.splitAttrs.listeners.value},u)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[b(Be,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:Me.value})]:null}),ft(a)}});export{bl as Q,sl as a,yl as c,cl as u};
