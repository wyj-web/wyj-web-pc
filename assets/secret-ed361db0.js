/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{o as C,k as p,r as i,D as K,U as w,a0 as P,a3 as k,f as n,W as r,u as o,a6 as M,F as U,a7 as $,E as x}from"./vue-00c40460.js";import{_ as F,a as R,u as L,b as Q}from"./index-3a912928.js";import{_ as W}from"./loading-36b8aaa3.js";import{_ as j}from"./repeattable-a7533255.js";import{aQ as A}from"./api-c9fafc5b.js";import{F as G,I as J,o as X,p as Y,B as Z,q as ee}from"./antDesignVue-51b926d5.js";import"./index-fe2c9608.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./xijs-654632ec.js";import"./axios-4a70c6fc.js";const te={key:0},oe={style:{"text-align":"right"},id:"bottomDom"},ke={__name:"secret",setup(ne){const{throttle:O}=L();C(()=>{window.addEventListener("scroll",()=>{O(T(),1e4)})});let _=p(0);const T=()=>{let t=document.documentElement.scrollTop||document.body.scrollTop,l=document.documentElement.clientHeight||document.body.clientHeight,m=document.documentElement.scrollHeight||document.body.scrollHeight;t>=_.value&&t+l>=m&&S(e.currentPage+1),_.value=t},g=p(),e=i({title:"",currentPage:1,pageSizes:50}),a=i({data:[],total:0});let u=p("1");const s=()=>{u.value="1",a.total=0,a.data=[]},B=()=>{s(),g.value.resetFields(),e.currentPage=1,e.pageSizes=50,c()},d=t=>{s(),e.title=e.title.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,c()};K(()=>{c()});let f=i([]),D=i([{title:"标题",dataIndex:"title",key:"title"},{title:"时间",dataIndex:"time",key:"times"},{title:"操作",width:200,key:"xianmanwang"}]);const c=()=>{A(e).then(t=>{a.data=t.data.data,a.total=t.data.total,u.value="0",f=a.data})},E=t=>{I(t)},h=({page:t,pageSize:l})=>{s(),e.currentPage=t,e.pageSizes=l,c()},b=({current:t,size:l})=>{s(),e.currentPage=t,e.pageSizes=l},S=t=>{s(),e.currentPage=t,c()},H=t=>{switch(t){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},I=t=>{window.open(t,"_blank")};return(t,l)=>{const m=J,y=X,v=Y,z=Z,V=ee,N=G;return w(),P(U,null,[k("div",null,[n(N,{id:"submitDom",model:o(e),ref_key:"formRef",ref:g,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:d},{default:r(()=>[n(V,null,{default:r(()=>[n(v,{span:6},{default:r(()=>[n(y,{label:"标 题",name:"title"},{default:r(()=>[n(m,{value:o(e).title,"onUpdate:value":l[0]||(l[0]=q=>o(e).title=q),onKeydown:$(d,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),n(v,{span:6},{default:r(()=>[n(y,{"wrapper-col":{offset:4,span:20}},{default:r(()=>[n(z,{type:"primary","html-type":"submit"},{default:r(()=>[x("提交")]),_:1}),n(z,{style:{"margin-left":"10px"},onClick:B},{default:r(()=>[x("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),n(F,{total:o(a).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:h,onOnsizechange:b},null,8,["total","currentPage","pageSizes"]),o(a).data.length!==0?(w(),P("div",te,[n(j,{dataSource:o(f),columns:o(D),onOntablecolumnurl:E},null,8,["dataSource","columns"])])):M("",!0),n(W,{state:o(u)},null,8,["state"]),k("div",oe,[n(F,{total:o(a).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:h,onOnsizechange:b},null,8,["total","currentPage","pageSizes"])]),n(R,{total:o(a).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpageturning:S},null,8,["total","currentPage","pageSizes"]),n(Q,{onOnTo:H})],64)}}};export{ke as default};