/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{o as M,k as b,r as m,D as R,$ as L,U as k,a0 as x,a3 as F,f as o,W as l,u as a,a6 as W,F as j,a7 as O,E as T}from"./vue-00c40460.js";import{_ as B,a as A,u as G,b as J}from"./index-3a912928.js";import{_ as Q}from"./loading-36b8aaa3.js";import{_ as X}from"./repeattable-a7533255.js";import{a6 as Y}from"./api-c9fafc5b.js";import{x as Z}from"./xiaoshuo-ce270a98.js";import{F as ee,I as te,o as oe,p as ae,B as ne,q as le}from"./antDesignVue-51b926d5.js";import"./index-fe2c9608.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./xijs-654632ec.js";import"./axios-4a70c6fc.js";const se={key:0},re={style:{"text-align":"right"},id:"bottomDom"},De={__name:"dpmwbs",setup(ie){const{throttle:D}=G();M(()=>{window.addEventListener("scroll",()=>{D(E(),1e4)})});let h=b(0);const E=()=>{let t=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,u=document.documentElement.scrollHeight||document.body.scrollHeight;t>=h.value&&t+n>=u&&z(e.currentPage+1),h.value=t},w=b(),e=m({name:"",title:"",currentPage:1,pageSizes:50}),s=m({data:[],total:0});let p=b("1");const r=()=>{p.value="1",s.total=0,s.data=[]},H=()=>{r(),w.value.resetFields(),e.currentPage=1,e.pageSizes=50,i()},d=t=>{r(),e.name=e.name.replace(/\s*/g,""),e.title=e.title.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,i()};R(()=>{e.title=c.dpmwbs_parameter,i()});let y=m([]),I=m([{title:"小说",dataIndex:"title",key:"title"},{title:"分类",dataIndex:"name",key:"name"},{title:"操作",width:220,key:"sisexiaoshuos"}]);const i=()=>{Y(e).then(t=>{s.data=t.data.data,s.total=t.data.total,p.value="0",y=s.data})},V=t=>{$(t)},K=L(),c=Z(),N=t=>{c.title=t.title,c.frompath="/dpmwbs",c.content=t.content,c.dpmwbs_parameter=e.title.replace(/\s*/g,""),K.push("/yuedu")},S=({page:t,pageSize:n})=>{r(),e.currentPage=t,e.pageSizes=n,i()},v=({current:t,size:n})=>{r(),e.currentPage=t,e.pageSizes=n},z=t=>{r(),e.currentPage=t,i()},U=t=>{switch(t){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},$=t=>{window.open(t,"_blank")};return(t,n)=>{const u=te,_=oe,g=ae,P=ne,q=le,C=ee;return k(),x(j,null,[F("div",null,[o(C,{id:"submitDom",model:a(e),ref_key:"formRef",ref:w,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:d},{default:l(()=>[o(q,null,{default:l(()=>[o(g,{span:6},{default:l(()=>[o(_,{label:"分 类",name:"name"},{default:l(()=>[o(u,{value:a(e).name,"onUpdate:value":n[0]||(n[0]=f=>a(e).name=f),onKeydown:O(d,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),o(g,{span:6},{default:l(()=>[o(_,{label:"标 题",name:"title"},{default:l(()=>[o(u,{value:a(e).title,"onUpdate:value":n[1]||(n[1]=f=>a(e).title=f),onKeydown:O(d,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),o(g,{span:6},{default:l(()=>[o(_,{"wrapper-col":{offset:4,span:20}},{default:l(()=>[o(P,{type:"primary","html-type":"submit"},{default:l(()=>[T("提交")]),_:1}),o(P,{style:{"margin-left":"10px"},onClick:H},{default:l(()=>[T("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),o(B,{total:a(s).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:S,onOnsizechange:v},null,8,["total","currentPage","pageSizes"]),a(s).data.length!==0?(k(),x("div",se,[o(X,{dataSource:a(y),columns:a(I),onOntablecolumn:V,onOntableyuedu:N},null,8,["dataSource","columns"])])):W("",!0),o(Q,{state:a(p)},null,8,["state"]),F("div",re,[o(B,{total:a(s).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:S,onOnsizechange:v},null,8,["total","currentPage","pageSizes"])]),o(A,{total:a(s).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpageturning:z},null,8,["total","currentPage","pageSizes"]),o(J,{onOnTo:U})],64)}}};export{De as default};