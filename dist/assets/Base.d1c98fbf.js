var y=Object.defineProperty;var w=(o,t,e)=>t in o?y(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var n=(o,t,e)=>(w(o,typeof t!="symbol"?t+"":t,e),e);import{f as p,r as _,o as r,c as l,b as c,w as a,a as s,t as i,d as B,F as h,p as u,e as m}from"./index.e6f4ac28.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";const $={class:"title fontsz36 font-bold"},Y=p({__name:"header",props:{header:null},setup(o){return(t,e)=>{const d=_("el-col"),f=_("el-row");return r(),l(h,null,[c(f,null,{default:a(()=>[c(d,{span:18,offset:3},{default:a(()=>[s("div",$,i(o.header.name),1)]),_:1})]),_:1}),c(f,null,{default:a(()=>[c(d,{span:18,offset:3,class:"introduce fontsz24 font-bold"},{default:a(()=>[B(i(o.header.description),1)]),_:1})]),_:1})],64)}}});const v=o=>(u("data-v-3fc65829"),o=o(),m(),o),I=v(()=>s("a",{class:"iconfont icon-github",href:"https://github.com/Portgas-D-Asce"},null,-1)),b=v(()=>s("a",{class:"iconfont icon-codeforces",href:"https://codeforces.com/profile/Portgas-D-Ace"},null,-1)),D={class:"copyright fontsz24"},F=p({__name:"footer",setup(o){return(t,e)=>(r(),l(h,null,[I,b,s("div",D," Copyright \xA9 "+i(new Date().getFullYear())+" Portgas\xB7D\xB7Asce ",1)],64))}});const j=g(F,[["__scopeId","data-v-3fc65829"]]);const S={},x=o=>(u("data-v-4c5a96e6"),o=o(),m(),o),k={id:"tools",class:"tools"},z=x(()=>s("div",{class:"tool"},[s("a",{class:"iconfont icon-zhiding",href:"#top"})],-1)),A={class:"tool"},C={class:"tool"},N=x(()=>s("div",{class:"tool"},[s("a",{class:"iconfont icon-home3",href:"/"})],-1));function P(o,t){const e=_("router-link");return r(),l("div",k,[z,s("div",A,[c(e,{to:"/categories",class:"iconfont icon-sort",href:"/category"})]),s("div",C,[c(e,{to:"/tags",class:"iconfont icon-tag",href:"/tag"})]),N])}const q=g(S,[["render",P],["__scopeId","data-v-4c5a96e6"]]);class G{constructor(){n(this,"id");n(this,"name");n(this,"description")}set_name(t){this.name=t}set_description(t){this.description=t}}export{G as B,j as F,q as T,Y as _};