/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{o as M,k as _,r as u,D as R,$ as U,U as k,a0 as z,a3 as P,f as a,W as s,u as o,a6 as L,F as W,a7 as j,E as F}from"./vue-00c40460.js";import{_ as I,a as A,u as G,b as J}from"./index-26070284.js";import{_ as Q}from"./loading-36b8aaa3.js";import{_ as X}from"./repeattable-7b6036d6.js";import{a3 as Y}from"./api-c9fafc5b.js";import{x as Z}from"./xiaoshuo-ce270a98.js";import{F as ee,I as te,o as oe,p as ae,B as ne,q as le}from"./antDesignVue-51b926d5.js";import"./index-02c0cd83.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./xijs-654632ec.js";import"./axios-4a70c6fc.js";const se={key:0},re={style:{"text-align":"right"},id:"bottomDom"},Be={__name:"beiwotvxiaoshuo",setup(ie){const{throttle:O}=G();M(()=>{window.addEventListener("scroll",()=>{O(T(),1e4)})});let g=_(0);const T=()=>{let t=document.documentElement.scrollTop||document.body.scrollTop,l=document.documentElement.clientHeight||document.body.clientHeight,p=document.documentElement.scrollHeight||document.body.scrollHeight;t>=g.value&&t+l>=p&&y(e.currentPage+1),g.value=t},d=_(),e=u({title:"",currentPage:1,pageSizes:50}),n=u({data:[],total:0});let m=_("1");const r=()=>{m.value="1",n.total=0,n.data=[]},B=()=>{r(),d.value.resetFields(),e.currentPage=1,e.pageSizes=50,i()},f=t=>{r(),e.title=e.title.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,i()};R(()=>{e.title=c.beiwotvxiaoshuo_parameter,i()});let h=u([]),D=u([{title:"小说",dataIndex:"title",key:"title"},{title:"分类",dataIndex:"tag",key:"tags"},{title:"观看",dataIndex:"guankan",key:"guankan"},{title:"时间",dataIndex:"time",key:"times"},{title:"操作",width:220,key:"sisexiaoshuos"}]);const i=()=>{Y(e).then(t=>{n.data=t.data.data,n.total=t.data.total,m.value="0",h=n.data})},E=t=>{$(t)},H=U(),c=Z(),V=t=>{c.title=t.title,c.frompath="/beiwotvxiaoshuo",c.content=t.html,c.beiwotvxiaoshuo_parameter=e.title.replace(/\s*/g,""),H.push("/yuedu")},b=({page:t,pageSize:l})=>{r(),e.currentPage=t,e.pageSizes=l,i()},v=({current:t,size:l})=>{r(),e.currentPage=t,e.pageSizes=l},y=t=>{r(),e.currentPage=t,i()},N=t=>{switch(t){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},$=t=>{window.open(t,"_blank")};return(t,l)=>{const p=te,S=oe,w=ae,x=ne,q=le,C=ee;return k(),z(W,null,[P("div",null,[a(C,{id:"submitDom",model:o(e),ref_key:"formRef",ref:d,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:f},{default:s(()=>[a(q,null,{default:s(()=>[a(w,{span:6},{default:s(()=>[a(S,{label:"标 题",name:"title"},{default:s(()=>[a(p,{value:o(e).title,"onUpdate:value":l[0]||(l[0]=K=>o(e).title=K),onKeydown:j(f,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),a(w,{span:6},{default:s(()=>[a(S,{"wrapper-col":{offset:4,span:20}},{default:s(()=>[a(x,{type:"primary","html-type":"submit"},{default:s(()=>[F("提交")]),_:1}),a(x,{style:{"margin-left":"10px"},onClick:B},{default:s(()=>[F("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),a(I,{total:o(n).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:b,onOnsizechange:v},null,8,["total","currentPage","pageSizes"]),o(n).data.length!==0?(k(),z("div",se,[a(X,{dataSource:o(h),columns:o(D),onOntablecolumn:E,onOntableyuedu:V},null,8,["dataSource","columns"])])):L("",!0),a(Q,{state:o(m)},null,8,["state"]),P("div",re,[a(I,{total:o(n).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:b,onOnsizechange:v},null,8,["total","currentPage","pageSizes"])]),a(A,{total:o(n).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpageturning:y},null,8,["total","currentPage","pageSizes"]),a(J,{onOnTo:N})],64)}}};export{Be as default};
