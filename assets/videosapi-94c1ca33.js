/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{o as q,k as d,r as u,D as K,U as k,a0 as F,a3 as x,f as a,W as s,u as t,a6 as U,F as R,a7 as L,E as O}from"./vue-00c40460.js";import{_ as T,a as W,u as j,b as A}from"./index-3a912928.js";import{_ as G}from"./loading-36b8aaa3.js";import{_ as J}from"./repeattable-a7533255.js";import{_ as Q}from"./previewvideo-13ecb223.js";import{v as X}from"./api-c9fafc5b.js";import{F as Y,n as Z,I as ee,o as te,p as oe,B as ae,q as ne}from"./antDesignVue-51b926d5.js";import"./index-fe2c9608.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./xijs-654632ec.js";import"./axios-4a70c6fc.js";const le={key:0},se={style:{"text-align":"right"},id:"bottomDom"},De={__name:"videosapi",setup(re){const{throttle:B}=j();q(()=>{window.addEventListener("scroll",()=>{B(D(),1e4)})});let g=d(0);const D=()=>{let o=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,p=document.documentElement.scrollHeight||document.body.scrollHeight;o>=g.value&&o+n>=p&&y(e.currentPage+1),g.value=o},f=d(),e=u({name:"",currentPage:1,pageSizes:50}),l=u({data:[],total:0});let m=d("1");const i=()=>{m.value="1",l.total=0,l.data=[]},E=()=>{i(),f.value.resetFields(),e.currentPage=1,e.pageSizes=50,c()},b=o=>{i(),e.name=e.name.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,c()};K(()=>{c()});let h=u([]),H=u([{title:"标题",dataIndex:"name",key:"name"},{title:"操作",width:100,key:"action"}]);const c=()=>{X(e).then(o=>{l.data=o.data.data,l.total=o.data.total,m.value="0",h=l.data})},V=o=>{r.state=!0,r.url=o,r.title="播放视频"},r=u({state:!1,title:"",url:""}),I=()=>{r.url=""},v=({page:o,pageSize:n})=>{i(),e.currentPage=o,e.pageSizes=n,c()},S=({current:o,size:n})=>{i(),e.currentPage=o,e.pageSizes=n},y=o=>{i(),e.currentPage=o,c()},C=o=>{switch(o){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}};return(o,n)=>{const p=ee,z=te,P=oe,w=ae,M=ne,N=Y,$=Z;return k(),F(R,null,[x("div",null,[a(N,{id:"submitDom",model:t(e),ref_key:"formRef",ref:f,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:b},{default:s(()=>[a(M,null,{default:s(()=>[a(P,{span:6},{default:s(()=>[a(z,{label:"标 题",name:"name"},{default:s(()=>[a(p,{value:t(e).name,"onUpdate:value":n[0]||(n[0]=_=>t(e).name=_),onKeydown:L(b,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),a(P,{span:6},{default:s(()=>[a(z,{"wrapper-col":{offset:4,span:20}},{default:s(()=>[a(w,{type:"primary","html-type":"submit"},{default:s(()=>[O("提交")]),_:1}),a(w,{style:{"margin-left":"10px"},onClick:E},{default:s(()=>[O("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),a(T,{total:t(l).total,currentPage:t(e).currentPage,pageSizes:t(e).pageSizes,onOnpagechange:v,onOnsizechange:S},null,8,["total","currentPage","pageSizes"]),t(l).data.length!==0?(k(),F("div",le,[a(J,{dataSource:t(h),columns:t(H),onOntablecolumn:V},null,8,["dataSource","columns"])])):U("",!0),a(G,{state:t(m)},null,8,["state"]),x("div",se,[a(T,{total:t(l).total,currentPage:t(e).currentPage,pageSizes:t(e).pageSizes,onOnpagechange:v,onOnsizechange:S},null,8,["total","currentPage","pageSizes"])]),a(W,{total:t(l).total,currentPage:t(e).currentPage,pageSizes:t(e).pageSizes,onOnpageturning:y},null,8,["total","currentPage","pageSizes"]),a(A,{onOnTo:C}),a($,{visible:t(r).state,"onUpdate:visible":n[1]||(n[1]=_=>t(r).state=_),footer:null,width:"60%",onCancel:I,title:t(r).title},{default:s(()=>[a(Q,{url:t(r).url},null,8,["url"])]),_:1},8,["visible","title"])],64)}}};export{De as default};