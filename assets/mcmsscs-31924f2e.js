/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{o as q,k as f,r as g,D as C,U as P,a0 as x,a3 as F,f as t,W as l,u as o,a6 as M,F as $,a7 as h,E as I}from"./vue-00c40460.js";import{_ as K,a as R,u as L,b as W}from"./index-3a912928.js";import{_ as j}from"./loading-36b8aaa3.js";import{_ as A}from"./repeattable-a7533255.js";import{a4 as G}from"./api-c9fafc5b.js";import{F as J,I as Q,o as X,p as Y,B as Z,q as ee}from"./antDesignVue-51b926d5.js";import"./index-fe2c9608.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./xijs-654632ec.js";import"./axios-4a70c6fc.js";const te={key:0},ae={style:{"text-align":"right"},id:"bottomDom"},Pe={__name:"mcmsscs",setup(oe){const{throttle:O}=L();q(()=>{window.addEventListener("scroll",()=>{O(T(),1e4)})});let y=f(0);const T=()=>{let a=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,u=document.documentElement.scrollHeight||document.body.scrollHeight;a>=y.value&&a+n>=u&&k(e.currentPage+1),y.value=a},b=f(),e=g({category:"",name:"",author:"",currentPage:1,pageSizes:50}),r=g({data:[],total:0});let _=f("1");const s=()=>{_.value="1",r.total=0,r.data=[]},B=()=>{s(),b.value.resetFields(),e.currentPage=1,e.pageSizes=50,c()},i=a=>{s(),e.category=e.category.replace(/\s*/g,""),e.name=e.name.replace(/\s*/g,""),e.author=e.author.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,c()};C(()=>{c()});let v=g([]),D=g([{title:"小说",dataIndex:"name",key:"name"},{title:"分类",dataIndex:"category",key:"category"},{title:"作者",dataIndex:"author",key:"author"},{title:"评分",dataIndex:"score",key:"score"},{title:"操作",width:220,key:"mcmsscs"}]);const c=()=>{G(e).then(a=>{r.data=a.data.data,r.total=a.data.total,_.value="0",v=r.data})},E=a=>{V(a)},S=({page:a,pageSize:n})=>{s(),e.currentPage=a,e.pageSizes=n,c()},w=({current:a,size:n})=>{s(),e.currentPage=a,e.pageSizes=n},k=a=>{s(),e.currentPage=a,c()},H=a=>{switch(a){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},V=a=>{window.open(a,"_blank")};return(a,n)=>{const u=Q,p=X,d=Y,z=Z,U=ee,N=J;return P(),x($,null,[F("div",null,[t(N,{id:"submitDom",model:o(e),ref_key:"formRef",ref:b,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:i},{default:l(()=>[t(U,null,{default:l(()=>[t(d,{span:6},{default:l(()=>[t(p,{label:"分 类",name:"category"},{default:l(()=>[t(u,{value:o(e).category,"onUpdate:value":n[0]||(n[0]=m=>o(e).category=m),onKeydown:h(i,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(d,{span:6},{default:l(()=>[t(p,{label:"标 题",name:"name"},{default:l(()=>[t(u,{value:o(e).name,"onUpdate:value":n[1]||(n[1]=m=>o(e).name=m),onKeydown:h(i,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(d,{span:6},{default:l(()=>[t(p,{label:"作 者",name:"author"},{default:l(()=>[t(u,{value:o(e).author,"onUpdate:value":n[2]||(n[2]=m=>o(e).author=m),onKeydown:h(i,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(d,{span:6},{default:l(()=>[t(p,{"wrapper-col":{offset:4,span:20}},{default:l(()=>[t(z,{type:"primary","html-type":"submit"},{default:l(()=>[I("提交")]),_:1}),t(z,{style:{"margin-left":"10px"},onClick:B},{default:l(()=>[I("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(K,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:S,onOnsizechange:w},null,8,["total","currentPage","pageSizes"]),o(r).data.length!==0?(P(),x("div",te,[t(A,{dataSource:o(v),columns:o(D),onOntablecolumnurl:E},null,8,["dataSource","columns"])])):M("",!0),t(j,{state:o(_)},null,8,["state"]),F("div",ae,[t(K,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:S,onOnsizechange:w},null,8,["total","currentPage","pageSizes"])]),t(R,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpageturning:k},null,8,["total","currentPage","pageSizes"]),t(W,{onOnTo:H})],64)}}};export{Pe as default};
