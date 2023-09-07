import{W as O,X as b,Y as R,Z as j,$ as T,a0 as k,a3 as M,a5 as E,a4 as V,r as I,a as m,w as Z,g as G,s as H,d as C,aL as J,aT as Q,x as Y,aU as ee}from"./index.64fbb36d.js";import{g as L,s as W,c as te}from"./store.c7c05c6b.js";function ne(t){const i=[.06,6,50];return typeof t=="string"&&t.length&&t.split(":").forEach((u,d)=>{const a=parseFloat(u);a&&(i[d]=a)}),i}var ie=O({name:"touch-swipe",beforeMount(t,{value:i,arg:u,modifiers:d}){if(d.mouse!==!0&&b.has.touch!==!0)return;const a=d.mouseCapture===!0?"Capture":"",e={handler:i,sensitivity:ne(u),direction:L(d),noop:R,mouseStart(o){W(o,e)&&j(o)&&(T(e,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),e.start(o,!0))},touchStart(o){if(W(o,e)){const c=o.target;T(e,"temp",[[c,"touchmove","move","notPassiveCapture"],[c,"touchcancel","end","notPassiveCapture"],[c,"touchend","end","notPassiveCapture"]]),e.start(o)}},start(o,c){b.is.firefox===!0&&k(t,!0);const f=M(o);e.event={x:f.left,y:f.top,time:Date.now(),mouse:c===!0,dir:!1}},move(o){if(e.event===void 0)return;if(e.event.dir!==!1){E(o);return}const c=Date.now()-e.event.time;if(c===0)return;const f=M(o),h=f.left-e.event.x,l=Math.abs(h),g=f.top-e.event.y,s=Math.abs(g);if(e.event.mouse!==!0){if(l<e.sensitivity[1]&&s<e.sensitivity[1]){e.end(o);return}}else if(window.getSelection().toString()!==""){e.end(o);return}else if(l<e.sensitivity[2]&&s<e.sensitivity[2])return;const v=l/c,y=s/c;e.direction.vertical===!0&&l<s&&l<100&&y>e.sensitivity[0]&&(e.event.dir=g<0?"up":"down"),e.direction.horizontal===!0&&l>s&&s<100&&v>e.sensitivity[0]&&(e.event.dir=h<0?"left":"right"),e.direction.up===!0&&l<s&&g<0&&l<100&&y>e.sensitivity[0]&&(e.event.dir="up"),e.direction.down===!0&&l<s&&g>0&&l<100&&y>e.sensitivity[0]&&(e.event.dir="down"),e.direction.left===!0&&l>s&&h<0&&s<100&&v>e.sensitivity[0]&&(e.event.dir="left"),e.direction.right===!0&&l>s&&h>0&&s<100&&v>e.sensitivity[0]&&(e.event.dir="right"),e.event.dir!==!1?(E(o),e.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),te(),e.styleCleanup=w=>{e.styleCleanup=void 0,document.body.classList.remove("non-selectable");const x=()=>{document.body.classList.remove("no-pointer-events--children")};w===!0?setTimeout(x,50):x()}),e.handler({evt:o,touch:e.event.mouse!==!0,mouse:e.event.mouse,direction:e.event.dir,duration:c,distance:{x:l,y:s}})):e.end(o)},end(o){e.event!==void 0&&(V(e,"temp"),b.is.firefox===!0&&k(t,!1),e.styleCleanup!==void 0&&e.styleCleanup(!0),o!==void 0&&e.event.dir!==!1&&E(o),e.event=void 0)}};if(t.__qtouchswipe=e,d.mouse===!0){const o=d.mouseCapture===!0||d.mousecapture===!0?"Capture":"";T(e,"main",[[t,"mousedown","mouseStart",`passive${o}`]])}b.has.touch===!0&&T(e,"main",[[t,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,i){const u=t.__qtouchswipe;u!==void 0&&(i.oldValue!==i.value&&(typeof i.value!="function"&&u.end(),u.handler=i.value),u.direction=L(i.modifiers))},beforeUnmount(t){const i=t.__qtouchswipe;i!==void 0&&(V(i,"main"),V(i,"temp"),b.is.firefox===!0&&k(t,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete t.__qtouchswipe)}});function oe(){const t=new Map;return{getCache:function(i,u){return t[i]===void 0?t[i]=u:t[i]},getCacheWithFn:function(i,u){return t[i]===void 0?t[i]=u():t[i]}}}const se={name:{required:!0},disable:Boolean},X={setup(t,{slots:i}){return()=>C("div",{class:"q-panel scroll",role:"tabpanel"},Y(i.default))}},ue={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},le=["update:modelValue","beforeTransition","transition"];function ce(){const{props:t,emit:i,proxy:u}=G(),{getCacheWithFn:d}=oe();let a,e;const o=I(null),c=I(null);function f(n){const r=t.vertical===!0?"up":"left";P((u.$q.lang.rtl===!0?-1:1)*(n.direction===r?1:-1))}const h=m(()=>[[ie,f,void 0,{horizontal:t.vertical!==!0,vertical:t.vertical,mouse:!0}]]),l=m(()=>t.transitionPrev||`slide-${t.vertical===!0?"down":"right"}`),g=m(()=>t.transitionNext||`slide-${t.vertical===!0?"up":"left"}`),s=m(()=>`--q-transition-duration: ${t.transitionDuration}ms`),v=m(()=>typeof t.modelValue=="string"||typeof t.modelValue=="number"?t.modelValue:String(t.modelValue)),y=m(()=>({include:t.keepAliveInclude,exclude:t.keepAliveExclude,max:t.keepAliveMax})),w=m(()=>t.keepAliveInclude!==void 0||t.keepAliveExclude!==void 0);Z(()=>t.modelValue,(n,r)=>{const p=S(n)===!0?q(n):-1;e!==!0&&N(p===-1?0:p<q(r)?-1:1),o.value!==p&&(o.value=p,i("beforeTransition",n,r),H(()=>{i("transition",n,r)}))});function x(){P(1)}function _(){P(-1)}function D(n){i("update:modelValue",n)}function S(n){return n!=null&&n!==""}function q(n){return a.findIndex(r=>r.props.name===n&&r.props.disable!==""&&r.props.disable!==!0)}function z(){return a.filter(n=>n.props.disable!==""&&n.props.disable!==!0)}function N(n){const r=n!==0&&t.animated===!0&&o.value!==-1?"q-transition--"+(n===-1?l.value:g.value):null;c.value!==r&&(c.value=r)}function P(n,r=o.value){let p=r+n;for(;p>-1&&p<a.length;){const A=a[p];if(A!==void 0&&A.props.disable!==""&&A.props.disable!==!0){N(n),e=!0,i("update:modelValue",A.props.name),setTimeout(()=>{e=!1});return}p+=n}t.infinite===!0&&a.length!==0&&r!==-1&&r!==a.length&&P(n,n===-1?a.length:-1)}function $(){const n=q(t.modelValue);return o.value!==n&&(o.value=n),!0}function B(){const n=S(t.modelValue)===!0&&$()&&a[o.value];return t.keepAlive===!0?[C(ee,y.value,[C(w.value===!0?d(v.value,()=>({...X,name:v.value})):X,{key:v.value,style:s.value},()=>n)])]:[C("div",{class:"q-panel scroll",style:s.value,key:v.value,role:"tabpanel"},[n])]}function F(){if(a.length!==0)return t.animated===!0?[C(J,{name:c.value},B)]:B()}function K(n){return a=Q(Y(n.default,[])).filter(r=>r.props!==null&&r.props.slot===void 0&&S(r.props.name)===!0),a.length}function U(){return a}return Object.assign(u,{next:x,previous:_,goTo:D}),{panelIndex:o,panelDirectives:h,updatePanelsList:K,updatePanelIndex:$,getPanelContent:F,getEnabledPanels:z,getPanels:U,isValidPanelName:S,keepAliveProps:y,needsUniqueKeepAliveWrapper:w,goToPanelByOffset:P,goToPanel:D,nextPanel:x,previousPanel:_}}export{ue as a,le as b,ce as c,oe as d,se as u};
