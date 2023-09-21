import{Q as N}from"./QSlideTransition.111ff2df.js";import{u as $,d as D,a as T,b as K,c as R}from"./use-panel.72e4e881.js";import{c as m,r as I,a as l,d as a,R as F,t as W,a2 as j,g as S,i as E,e as y,bg as k,bc as V,x as g,f as w,k as Q,z,F as L,v as U}from"./index.5b4092ab.js";var A=m({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:o}){const{proxy:{$q:i}}=S(),c=I(null),n=l(()=>e.stepper.modelValue===e.step.name),u=l(()=>{const t=e.step.disable;return t===!0||t===""}),v=l(()=>{const t=e.step.error;return t===!0||t===""}),s=l(()=>{const t=e.step.done;return u.value===!1&&(t===!0||t==="")}),_=l(()=>{const t=e.step.headerNav,r=t===!0||t===""||t===void 0;return u.value===!1&&e.stepper.headerNav&&r}),p=l(()=>e.step.prefix&&(n.value===!1||e.stepper.activeIcon==="none")&&(v.value===!1||e.stepper.errorIcon==="none")&&(s.value===!1||e.stepper.doneIcon==="none")),f=l(()=>{const t=e.step.icon||e.stepper.inactiveIcon;if(n.value===!0){const r=e.step.activeIcon||e.stepper.activeIcon;return r==="none"?t:r||i.iconSet.stepper.active}if(v.value===!0){const r=e.step.errorIcon||e.stepper.errorIcon;return r==="none"?t:r||i.iconSet.stepper.error}if(u.value===!1&&s.value===!0){const r=e.step.doneIcon||e.stepper.doneIcon;return r==="none"?t:r||i.iconSet.stepper.done}return t}),d=l(()=>{const t=v.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(n.value===!0){const r=e.step.activeColor||e.stepper.activeColor||e.step.color;return r!==void 0?r:t}return t!==void 0?t:u.value===!1&&s.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),q=l(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(d.value!==void 0?` text-${d.value}`:"")+(v.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(p.value===!0?"prefix":"icon"):"")+(n.value===!0?" q-stepper__tab--active":"")+(s.value===!0?" q-stepper__tab--done":"")+(_.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(u.value===!0?" q-stepper__tab--disabled":"")),h=l(()=>e.stepper.headerNav!==!0?!1:_.value);function C(){c.value!==null&&c.value.focus(),n.value===!1&&e.goToPanel(e.step.name)}function P(t){t.keyCode===13&&n.value===!1&&e.goToPanel(e.step.name)}return()=>{const t={class:q.value};_.value===!0&&(t.onClick=C,t.onKeyup=P,Object.assign(t,u.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:o.tabindex||0}));const r=[a("div",{class:"q-focus-helper",tabindex:-1,ref:c}),a("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[a("span",{class:"row flex-center"},[p.value===!0?e.step.prefix:a(F,{name:f.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const b=[a("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&b.push(a("div",{class:"q-stepper__caption"},e.step.caption)),r.push(a("div",{class:"q-stepper__label q-stepper__line relative-position"},b))}return W(a("div",t,r),[[j,h.value]])}}});function B(e){return a("div",{class:"q-stepper__step-content"},[a("div",{class:"q-stepper__step-inner"},g(e.default))])}const x={setup(e,{slots:o}){return()=>B(o)}};var X=m({name:"QStep",props:{...$,icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean,onScroll:[Function,Array]},setup(e,{slots:o,emit:i}){const{proxy:{$q:c}}=S(),n=E(k,y);if(n===y)return console.error("QStep needs to be a child of QStepper"),y;const{getCacheWithFn:u}=D(),v=I(null),s=l(()=>n.value.modelValue===e.name),_=l(()=>c.platform.is.ios!==!0&&c.platform.is.chrome===!0||s.value!==!0||n.value.vertical!==!0?{}:{onScroll(d){const{target:q}=d;q.scrollTop>0&&(q.scrollTop=0),e.onScroll!==void 0&&i("scroll",d)}}),p=l(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function f(){const d=n.value.vertical;return d===!0&&n.value.keepAlive===!0?a(V,n.value.keepAliveProps.value,s.value===!0?[a(n.value.needsUniqueKeepAliveWrapper.value===!0?u(p.value,()=>({...x,name:p.value})):x,{key:p.value},o.default)]:void 0):d!==!0||s.value===!0?B(o):void 0}return()=>a("div",{ref:v,class:"q-stepper__step",role:"tabpanel",..._.value},n.value.vertical===!0?[a(A,{stepper:n.value,step:e,goToPanel:n.value.goToPanel}),n.value.animated===!0?a(N,f):f()]:[f()])}}),Y=m({name:"QStepperNavigation",setup(e,{slots:o}){return()=>a("div",{class:"q-stepper__nav"},g(o.default))}}),Z=m({name:"QBanner",props:{...w,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:o}){const{proxy:{$q:i}}=S(),c=Q(e,i),n=l(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(c.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),u=l(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const v=[a("div",{class:"q-banner__avatar col-auto row items-center self-start"},g(o.avatar)),a("div",{class:"q-banner__content col text-body2"},g(o.default))],s=g(o.action);return s!==void 0&&v.push(a("div",{class:u.value},s)),a("div",{class:n.value+(e.inlineActions===!1&&s!==void 0?" q-banner--top-padding":""),role:"alert"},v)}}});const H=/(-\w)/g;function M(e){const o={};for(const i in e){const c=i.replace(H,n=>n[1].toUpperCase());o[c]=e[i]}return o}var ee=m({name:"QStepper",props:{...w,...T,flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String},emits:K,setup(e,{slots:o}){const i=S(),c=Q(e,i.proxy.$q),{updatePanelsList:n,isValidPanelName:u,updatePanelIndex:v,getPanelContent:s,getPanels:_,panelDirectives:p,goToPanel:f,keepAliveProps:d,needsUniqueKeepAliveWrapper:q}=R();z(k,l(()=>({goToPanel:f,keepAliveProps:d,needsUniqueKeepAliveWrapper:q,...e})));const h=l(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0?" q-stepper--flat":"")+(e.bordered===!0?" q-stepper--bordered":"")+(c.value===!0?" q-stepper--dark q-dark":"")),C=l(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function P(){const t=g(o.message,[]);if(e.vertical===!0){u(e.modelValue)&&v();const r=a("div",{class:"q-stepper__content"},g(o.default));return t===void 0?[r]:t.concat(r)}return[a("div",{class:C.value},_().map(r=>{const b=M(r.props);return a(A,{key:b.name,stepper:e,step:b,goToPanel:f})})),t,U("div",{class:"q-stepper__content q-panel-parent"},s(),"cont",e.swipeable,()=>p.value)]}return()=>(n(o),a("div",{class:h.value},L(o.navigation,P())))}});export{ee as Q,Y as a,Z as b,X as c};
