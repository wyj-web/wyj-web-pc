/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_ as D,a as j,u as W,b as A}from"./index-26070284.js";import{_ as G}from"./repeatcard-4b10691f.js";import{_ as J}from"./loading-36b8aaa3.js";import"./index-02c0cd83.js";/* empty css              */import{$ as K,a0 as Q}from"./api-c9fafc5b.js";import{o as X,k as _,r as F,D as Y,U as c,a0 as m,a3 as b,f as a,W as n,u as o,F as v,a1 as B,a6 as Z,V as O,E as p,a2 as V}from"./vue-00c40460.js";import{F as ee,r as te,s as ae,o as oe,p as ne,q as le,B as re,t as se}from"./antDesignVue-51b926d5.js";import{T as ce}from"./TagOutlined-bdc20c53.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./axios-4a70c6fc.js";const ie={key:0,style:{"column-count":"5","column-gap":"15px"}},ue={style:{margin:"10px 0 10px 10px"}},pe={style:{"text-align":"right"},id:"bottomDom"},Ve={__name:"gallerix",setup(_e){const{throttle:E}=W();X(()=>{window.addEventListener("scroll",()=>{E(H(),1e4)})});let y=_(0);const H=()=>{let t=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.clientHeight||document.body.clientHeight,f=document.documentElement.scrollHeight||document.body.scrollHeight;t>=y.value&&t+s>=f&&z(e.currentPage+1),y.value=t},S=_(),e=F({dalei:"",currentPage:1,pageSizes:50}),r=F({data:[],total:0});let g=_("1");const i=()=>{g.value="1",r.total=0,r.data=[]},C=()=>{i(),S.value.resetFields(),e.currentPage=1,e.pageSizes=50,u()},$=t=>{i(),e.dalei=e.dalei.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,u()};Y(()=>{u(),N()});const u=()=>{K(e).then(t=>{r.data=t.data.data,r.total=t.data.total,g.value="0"})};let d=_([]);const N=()=>{Q().then(t=>{d.value=t.data.data,d.value.unshift({title:"全部"})})},x=({page:t,pageSize:s})=>{i(),e.currentPage=t,e.pageSizes=s,u()},k=({current:t,size:s})=>{i(),e.currentPage=t,e.pageSizes=s},z=t=>{i(),e.currentPage=t,u()},q=t=>{switch(t){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},M=t=>{window.open(t,"_blank")};return(t,s)=>{const f=te,U=ae,P=oe,w=ne,T=le,h=re,I=ee,L=se;return c(),m(v,null,[b("div",null,[a(I,{id:"submitDom",model:o(e),ref_key:"formRef",ref:S,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:$},{default:n(()=>[a(T,null,{default:n(()=>[a(w,{span:24},{default:n(()=>[a(P,{"label-col":{span:1},"wrapper-col":{span:22},label:"分 类",name:"dalei"},{default:n(()=>[a(U,{value:o(e).dalei,"onUpdate:value":s[0]||(s[0]=l=>o(e).dalei=l),"button-style":"solid"},{default:n(()=>[(c(!0),m(v,null,B(o(d),l=>(c(),O(f,{style:{margin:"0 10px 10px 0"},key:l.title,value:l.title==="全部"?"":l.title},{default:n(()=>[p(V(l.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),a(T,null,{default:n(()=>[a(w,{span:6},{default:n(()=>[a(P,{"wrapper-col":{offset:2,span:22}},{default:n(()=>[a(h,{type:"primary","html-type":"submit"},{default:n(()=>[p("提交")]),_:1}),a(h,{style:{"margin-left":"10px"},onClick:C},{default:n(()=>[p("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),a(D,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:x,onOnsizechange:k},null,8,["total","currentPage","pageSizes"]),o(r).data.length!==0?(c(),m("div",ie,[(c(!0),m(v,null,B(o(r).data,(l,R)=>(c(),O(G,{key:R,item:{...l,bj:l.fengmianurl}},{tag:n(()=>[b("p",ue,[a(L,{color:"orange"},{icon:n(()=>[a(o(ce))]),default:n(()=>[p(" "+V(l.dalei),1)]),_:2},1024)])]),button:n(()=>[a(h,{type:"dashed",style:{margin:"0 0 10px 10px"},onClick:me=>M(l.contenturl)},{default:n(()=>[p("跳转详情 ")]),_:2},1032,["onClick"])]),_:2},1032,["item"]))),128))])):Z("",!0),a(J,{state:o(g)},null,8,["state"]),b("div",pe,[a(D,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:x,onOnsizechange:k},null,8,["total","currentPage","pageSizes"])]),a(j,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpageturning:z},null,8,["total","currentPage","pageSizes"]),a(A,{onOnTo:q})],64)}}};export{Ve as default};
