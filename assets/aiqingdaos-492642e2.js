/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{o as N,k as x,r as K,D as $,U as v,a0 as S,a3 as c,f as t,W as a,u as o,F as V,a1 as M,a6 as L,a7 as y,E as i,V as R,a2 as b}from"./vue-00c40460.js";import{_ as E,a as j,u as W,b as A}from"./index-26070284.js";import{_ as G}from"./repeatcard-4b10691f.js";import{_ as J}from"./loading-36b8aaa3.js";import{o as Q}from"./api-c9fafc5b.js";import{F as X,E as Y,I as Z,o as ee,p as te,q as ae,B as oe,t as ne}from"./antDesignVue-51b926d5.js";import{F as le}from"./FieldTimeOutlined-2b16bf16.js";import{V as se}from"./VideoCameraOutlined-040ddfb4.js";import{T as re}from"./TagOutlined-bdc20c53.js";import"./index-02c0cd83.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./axios-4a70c6fc.js";const ie={key:0,style:{"column-count":"5","column-gap":"15px"}},ue={style:{margin:"10px 0 10px 10px"}},ce={style:{margin:"10px 0 10px 10px"}},pe={style:{margin:"10px 0 10px 10px"}},me={style:{margin:"10px 0 10px 10px"}},_e={style:{"text-align":"right"},id:"bottomDom"},Ce={__name:"aiqingdaos",setup(de){const{throttle:B}=W();N(()=>{window.addEventListener("scroll",()=>{B(D(),1e4)})});let z=x(0);const D=()=>{let n=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.clientHeight||document.body.clientHeight,u=document.documentElement.scrollHeight||document.body.scrollHeight;n>=z.value&&n+s>=u&&O(e.currentPage+1),z.value=n},k=x(),e=K({title:"",class:"",metadata_view:"",release_time:"",currentPage:1,pageSizes:50}),r=K({data:[],total:0});let w=x("1");const p=()=>{w.value="1",r.total=0,r.data=[]},q=()=>{p(),k.value.resetFields(),e.currentPage=1,e.pageSizes=50,_()},m=n=>{p(),e.title=e.title.replace(/\s*/g,""),e.class=e.class.replace(/\s*/g,""),e.metadata_view=e.metadata_view.replace(/\s*/g,""),e.release_time=e.release_time.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,_()};$(()=>{_()});const _=()=>{Q(e).then(n=>{r.data=n.data.data,r.total=n.data.total,w.value="0"})},P=({page:n,pageSize:s})=>{p(),e.currentPage=n,e.pageSizes=s,_()},F=({current:n,size:s})=>{p(),e.currentPage=n,e.pageSizes=s},O=n=>{p(),e.currentPage=n,_()},C=n=>{switch(n){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},H=n=>{window.open(n,"_blank")};return(n,s)=>{const u=Z,d=ee,g=te,T=ae,h=oe,U=X,f=ne;return v(),S(V,null,[c("div",null,[t(U,{id:"submitDom",model:o(e),ref_key:"formRef",ref:k,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:m},{default:a(()=>[t(T,null,{default:a(()=>[t(g,{span:6},{default:a(()=>[t(d,{label:"标 题",name:"title"},{default:a(()=>[t(u,{value:o(e).title,"onUpdate:value":s[0]||(s[0]=l=>o(e).title=l),onKeydown:y(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(g,{span:6},{default:a(()=>[t(d,{label:"地 区",name:"class"},{default:a(()=>[t(u,{value:o(e).class,"onUpdate:value":s[1]||(s[1]=l=>o(e).class=l),onKeydown:y(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(g,{span:6},{default:a(()=>[t(d,{label:"观看量",name:"metadata_view"},{default:a(()=>[t(u,{value:o(e).metadata_view,"onUpdate:value":s[2]||(s[2]=l=>o(e).metadata_view=l),onKeydown:y(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(g,{span:6},{default:a(()=>[t(d,{label:"时 长",name:"release_time"},{default:a(()=>[t(u,{value:o(e).release_time,"onUpdate:value":s[3]||(s[3]=l=>o(e).release_time=l),onKeydown:y(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1})]),_:1}),t(T,null,{default:a(()=>[t(g,{span:6},{default:a(()=>[t(d,{"wrapper-col":{offset:4,span:20}},{default:a(()=>[t(h,{type:"primary","html-type":"submit"},{default:a(()=>[i("提交")]),_:1}),t(h,{style:{"margin-left":"10px"},onClick:q},{default:a(()=>[i("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(E,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:P,onOnsizechange:F},null,8,["total","currentPage","pageSizes"]),o(r).data.length!==0?(v(),S("div",ie,[(v(!0),S(V,null,M(o(r).data,(l,I)=>(v(),R(G,{key:I,item:{...l,bj:l.video_img}},{time:a(()=>[c("p",ue,[t(f,{color:"green"},{icon:a(()=>[t(o(le))]),default:a(()=>[i(" "+b(l.release_time),1)]),_:2},1024)])]),watch:a(()=>[c("p",ce,[t(f,{color:"orange"},{icon:a(()=>[t(o(Y))]),default:a(()=>[i(" "+b(l.metadata_view),1)]),_:2},1024)])]),videotime:a(()=>[c("p",pe,[t(f,{color:"blue"},{icon:a(()=>[t(o(se))]),default:a(()=>[i(" "+b(l.video_time),1)]),_:2},1024)])]),tag:a(()=>[c("p",me,[t(f,{color:"purple"},{icon:a(()=>[t(o(re))]),default:a(()=>[i(" "+b(l.class),1)]),_:2},1024)])]),button:a(()=>[t(h,{type:"dashed",style:{margin:"10px 0 10px 10px"},onClick:ge=>H(l.url)},{default:a(()=>[i("跳转详情")]),_:2},1032,["onClick"])]),_:2},1032,["item"]))),128))])):L("",!0),t(J,{state:o(w)},null,8,["state"]),c("div",_e,[t(E,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:P,onOnsizechange:F},null,8,["total","currentPage","pageSizes"])]),t(j,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpageturning:O},null,8,["total","currentPage","pageSizes"]),t(A,{onOnTo:C})],64)}}};export{Ce as default};
