import{b as t}from"./index.64fbb36d.js";import{a}from"./axios.7331a07d.js";a.defaults.baseURL="http://10.168.3.3:81/api";a.defaults.timeout=1e4;const e=a.create({baseURL:"https://api.example.com"});var r=t(({app:o})=>{o.config.globalProperties.$axios=a,o.config.globalProperties.$api=e});export{e as api,r as default};
