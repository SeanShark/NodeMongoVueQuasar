import{D as x,H as B,r as p,q as L,w as P,J as f,am as I,N as l,L as s,M as U,aX as $,Q as H,K as g,S as v,O as y,al as h,R as c,P as _,T as j}from"./index.f8654bd3.js";import{Q as z,a as F,b as k,c as V}from"./QStepper.f052765b.js";import{Q as J}from"./QSpace.8f2f988f.js";import{u as K}from"./store.db1f7155.js";import"./QSlideTransition.c284fa19.js";import"./use-panel.d2326324.js";import"./touch.3df10340.js";import"./axios.7331a07d.js";const O={class:"q-pa-md row"},X={class:"q-py-md"},A={class:"row justify-center items-center"},G=["innerHTML"],W={class:"q-py-md"},Y={class:"q-pt-md"},Z={class:"q-pb-md"},de={__name:"ForgotPage",setup(ee){const d=K(),o=x({email:"",code:"",password:"",repeat_password:""}),E=B(),u=p(1),m=p(!0),M=p(!1),n=p(!1),D=p(null),S=p(null),q=p(null),R=p(null),t=x({hasError:!1,errorMsg:""}),w=p(null),T=i=>i.length>=8||"\u5BC6\u7801\u957F\u5EA6\u5E94\u8BE5\u81F3\u5C11\u4E3A8\u4F4D\u6570",C=[i=>i==o.password||"\u4E0E\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"],N=async()=>{var i,r;if(u.value===1){if(t.hasError=!1,e.hasError=!1,!o.email){t.errorMsg="\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740",t.hasError=!0;return}e.state?e.Data.length===0?(e.hasError=!0,e.errorMsg="\u8BF7\u5148\u5B8C\u6210\u56FE\u5F62\u9A8C\u8BC1\u7801"):e.Data.length===4?(e.hasError=!0,e.errorMsg="\u56FE\u5F62\u9A8C\u8BC1\u7801\u9519\u8BEF"):(e.hasError=!0,e.errorMsg="\u56FE\u5F62\u9A8C\u8BC1\u7801\u957F\u5EA6\u4E3A4\u4F4D\u5B57\u7B26"):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)?(t.hasError=!1,n.value=!0,await d.axios.post("/user/forgot",{email:o.email}).then(async()=>(n.value=!1,d.successTip("\u9A8C\u8BC1\u7801\u5DF2\u53D1\u81F3\u60A8\u90AE\u7BB1\uFF0C\u8BF7\u67E5\u6536"),w.value.next())).catch(b=>{t.errorMsg=b.response.data&&b.response.data.msg?b.response.data.msg:"\u672A\u77E5\u9519\u8BEF, \u8BF7\u91CD\u8BD5.",t.hasError=!0,n.value=!1})):(t.hasError=!0,t.errorMsg="\u975E\u6CD5\u90AE\u7BB1\u5730\u5740")}else u.value===2?o.code.length===6?(t.hasError=!1,n.value=!0,await d.axios.post("/user/verifyforgotcode",{email:o.email,code:o.code}).then(async a=>{a.data.status==="success"&&(d.successTip(a.data.msg),n.value=!1,w.value.next())}).catch(a=>{n.value=!1,t.hasError=!0,t.errorMsg=a.response.data.msg})):(n.value=!1,t.hasError=!0,t.errorMsg="\u9A8C\u8BC1\u7801\u4E3A6\u4F4D\u6570\u5B57"):(t.hasError=!1,await((i=q.value)==null?void 0:i.validate())&&await((r=R.value)==null?void 0:r.validate())&&(n.value=!0,await d.axios.post("/user/resetpassword",{email:o.email,code:o.code,password:o.password}).then(async a=>{a.data.status==="success"&&(n.value=!1,M.value=!0,setTimeout(()=>{E.push("/index")},3e3),d.successTip(a.data.msg))}).catch(a=>{n.value=!1,t.hasError=!0,t.errorMsg=a.response.data.msg})))},e=x({Url:"",Data:"",hasError:!1,errorMsg:"",text:"",state:!0});L(async()=>{Q(),localStorage.getItem("token")!==null&&await d.verifyUser().then(()=>{d.user&&E.push("/")})});const Q=()=>{e.state=!0,d.axios.get(`/user/captcha?${Math.random()}`).then(i=>{e.Url=i.data.data,e.text=i.headers.captcha.toLowerCase()})};return P(()=>e.Data,i=>{i.toLowerCase()===e.text?(e.state=!1,e.hasError=!1):e.state=!0}),(i,r)=>(f(),I("div",O,[l(z,{ref_key:"stepperRef",ref:w,modelValue:u.value,"onUpdate:modelValue":r[7]||(r[7]=a=>u.value=a),class:"fixed-center",color:"primary",animated:"","transition-next":"fade",contracted:U(d).isMobile,style:$(U(d).isMobile?"width: 100%;":"width: 600px;")},{navigation:s(()=>[l(F,{class:"row",on:""},{default:s(()=>[l(J),l(H,{color:"primary",label:u.value===3?"\u63D0  \u4EA4":"\u4E0B\u4E00\u6B65",disable:M.value,onClick:N},null,8,["label","disable"])]),_:1})]),message:s(()=>[u.value===1?(f(),g(k,{key:0,class:"bg-blue-grey-6 text-white q-px-lg"},{default:s(()=>[v(" \u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740\uFF1A ")]),_:1})):u.value===2?(f(),g(k,{key:1,class:"bg-blue-grey-6 text-white q-px-lg"},{default:s(()=>[v(" \u8BF7\u67E5\u6536\u90AE\u7BB1\u65B0\u90AE\u4EF6\uFF0C\u5E76\u8F93\u51656\u4F4D\u91CD\u7F6E\u7801\uFF1A ")]),_:1})):(f(),g(k,{key:2,class:"bg-blue-grey-6 text-white q-px-lg"},{default:s(()=>[v(" \u8BF7\u8BBE\u7F6E\u65B0\u5BC6\u7801\uFF1A ")]),_:1}))]),default:s(()=>[l(V,{name:1,title:"\u90AE\u7BB1\u5730\u5740",icon:"email",done:u.value>1,style:{"min-height":"200px"}},{default:s(()=>[y("div",X,[l(h,{ref_key:"emailRef",ref:D,modelValue:o.email,"onUpdate:modelValue":r[0]||(r[0]=a=>o.email=a),filled:"",type:"email",label:"\u90AE\u7BB1\u5730\u5740",class:"q-py-md","bottom-slots":"","hide-bottom-space":"",error:t.hasError,loading:n.value},{before:s(()=>[l(c,{color:"teal",name:"mail"})]),error:s(()=>[v(_(t.errorMsg),1)]),_:1},8,["modelValue","error","loading"]),y("div",A,[l(h,{modelValue:e.Data,"onUpdate:modelValue":r[1]||(r[1]=a=>e.Data=a),class:"col-12",filled:"",error:e.hasError,label:"\u9A8C\u8BC1\u7801"},{before:s(()=>[e.state?(f(),g(c,{key:0,name:"lock",color:"grey"})):(f(),g(c,{key:1,name:"lock_open",color:"grey"}))]),after:s(()=>[y("div",{class:"q-pt-sm rounded-borders",onClick:Q,innerHTML:e.Url},null,8,G)]),error:s(()=>[v(_(e.errorMsg),1)]),append:s(()=>[e.state?j("",!0):(f(),g(c,{key:0,name:"done",color:"green"}))]),_:1},8,["modelValue","error"])])])]),_:1},8,["done"]),l(V,{name:2,title:"\u9A8C\u8BC1\u7801",icon:"key",done:u.value>2,style:{"min-height":"200px"}},{default:s(()=>[y("div",W,[l(h,{ref_key:"codeRef",ref:S,modelValue:o.code,"onUpdate:modelValue":r[2]||(r[2]=a=>o.code=a),filled:"",type:"text",label:"\u91CD\u7F6E\u7801",class:"q-py-md","bottom-slots":"","hide-bottom-space":"",error:t.hasError,loading:n.value},{before:s(()=>[l(c,{color:"red",name:"key"})]),error:s(()=>[v(_(t.errorMsg),1)]),_:1},8,["modelValue","error","loading"])])]),_:1},8,["done"]),l(V,{name:3,title:"\u91CD\u7F6E\u5BC6\u7801",icon:"password",style:{"min-height":"200px"}},{default:s(()=>[y("div",Y,[l(h,{ref_key:"passwordRef",ref:q,modelValue:o.password,"onUpdate:modelValue":r[4]||(r[4]=a=>o.password=a),filled:"",type:m.value?"password":"text",label:"\u5BC6\u7801",class:"q-py-md","bottom-slots":"","hide-bottom-space":"",rules:[T]},{before:s(()=>[l(c,{name:"lock"})]),append:s(()=>[l(c,{name:m.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:r[3]||(r[3]=a=>m.value=!m.value)},null,8,["name"])]),_:1},8,["modelValue","type","rules"])]),y("div",Z,[l(h,{ref_key:"repeatpwdRef",ref:R,modelValue:o.repeat_password,"onUpdate:modelValue":r[6]||(r[6]=a=>o.repeat_password=a),filled:"",type:m.value?"password":"text",label:"\u91CD\u590D\u5BC6\u7801",class:"q-py-md","bottom-slots":"","hide-bottom-space":"",rules:C},{before:s(()=>[l(c,{name:"lock"})]),append:s(()=>[l(c,{name:m.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:r[5]||(r[5]=a=>m.value=!m.value)},null,8,["name"])]),_:1},8,["modelValue","type"])])]),_:1})]),_:1},8,["modelValue","contracted","style"])]))}};export{de as default};
