/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{o as N,k as b,r as F,D as $,U as d,a0 as h,a3 as f,f as t,W as n,u as o,F as O,a1 as M,a6 as L,a7 as S,E as i,V as R,a2 as B}from"./vue-00c40460.js";import{_ as D,a as j,u as W,b as A}from"./index-26070284.js";import{_ as G}from"./repeatcard-4b10691f.js";import{_ as J}from"./loading-36b8aaa3.js";import{k as Q}from"./api-c9fafc5b.js";import{F as X,I as Y,o as Z,p as ee,B as te,q as oe,t as ne}from"./antDesignVue-51b926d5.js";import{T as ae}from"./TagOutlined-bdc20c53.js";import{S as le}from"./SendOutlined-00e2115c.js";import"./index-02c0cd83.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./axios-4a70c6fc.js";const re={key:0,style:{"column-count":"5","column-gap":"15px"}},se={style:{margin:"10px 0 10px 10px"}},ce={style:{margin:"10px 0 10px 10px"}},ue={style:{"text-align":"right"},id:"bottomDom"},De={__name:"ddys",setup(pe){const{throttle:K}=W();N(()=>{window.addEventListener("scroll",()=>{K(V(),1e4)})});let w=b(0);const V=()=>{let a=document.documentElement.scrollTop||document.body.scrollTop,l=document.documentElement.clientHeight||document.body.clientHeight,p=document.documentElement.scrollHeight||document.body.scrollHeight;a>=w.value&&a+l>=p&&P(e.currentPage+1),w.value=a},k=b(),e=F({category:"",name:"",type:"",currentPage:1,pageSizes:50}),s=F({data:[],total:0});let y=b("1");const c=()=>{y.value="1",s.total=0,s.data=[]},E=()=>{c(),k.value.resetFields(),e.currentPage=1,e.pageSizes=50,u()},m=a=>{c(),e.category=e.category.replace(/\s*/g,""),e.name=e.name.replace(/\s*/g,""),e.type=e.type.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,u()};$(()=>{u()});const u=()=>{Q(e).then(a=>{s.data=a.data.data,s.total=a.data.total,y.value="0"})},z=({page:a,pageSize:l})=>{c(),e.currentPage=a,e.pageSizes=l,u()},x=({current:a,size:l})=>{c(),e.currentPage=a,e.pageSizes=l},P=a=>{c(),e.currentPage=a,u()},H=a=>{switch(a){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},C=a=>{window.open(a,"_blank")};return(a,l)=>{const p=Y,_=Z,g=ee,v=te,U=oe,q=X,T=ne;return d(),h(O,null,[f("div",null,[t(q,{id:"submitDom",model:o(e),ref_key:"formRef",ref:k,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:m},{default:n(()=>[t(U,null,{default:n(()=>[t(g,{span:6},{default:n(()=>[t(_,{label:"标 题",name:"name"},{default:n(()=>[t(p,{value:o(e).name,"onUpdate:value":l[0]||(l[0]=r=>o(e).name=r),onKeydown:S(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(g,{span:6},{default:n(()=>[t(_,{label:"类 型",name:"category"},{default:n(()=>[t(p,{value:o(e).category,"onUpdate:value":l[1]||(l[1]=r=>o(e).category=r),onKeydown:S(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(g,{span:6},{default:n(()=>[t(_,{label:"地 区",name:"type"},{default:n(()=>[t(p,{value:o(e).type,"onUpdate:value":l[2]||(l[2]=r=>o(e).type=r),onKeydown:S(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(g,{span:6},{default:n(()=>[t(_,{"wrapper-col":{offset:4,span:20}},{default:n(()=>[t(v,{type:"primary","html-type":"submit"},{default:n(()=>[i("提交")]),_:1}),t(v,{style:{"margin-left":"10px"},onClick:E},{default:n(()=>[i("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(D,{total:o(s).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:z,onOnsizechange:x},null,8,["total","currentPage","pageSizes"]),o(s).data.length!==0?(d(),h("div",re,[(d(!0),h(O,null,M(o(s).data,(r,I)=>(d(),R(G,{key:I,item:{...r,bj:r.cover,title:r.name}},{type:n(()=>[f("p",se,[t(T,{color:"green"},{icon:n(()=>[t(o(ae))]),default:n(()=>[i(" "+B(r.category),1)]),_:2},1024)])]),diqu:n(()=>[f("p",ce,[t(T,{color:"orange"},{icon:n(()=>[t(o(le))]),default:n(()=>[i(" "+B(r.type),1)]),_:2},1024)])]),button:n(()=>[t(v,{type:"dashed",style:{margin:"10px 0 10px 10px"},onClick:ie=>C(r.url)},{default:n(()=>[i("跳转详情")]),_:2},1032,["onClick"])]),_:2},1032,["item"]))),128))])):L("",!0),t(J,{state:o(y)},null,8,["state"]),f("div",ue,[t(D,{total:o(s).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:z,onOnsizechange:x},null,8,["total","currentPage","pageSizes"])]),t(j,{total:o(s).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpageturning:P},null,8,["total","currentPage","pageSizes"]),t(A,{onOnTo:H})],64)}}};export{De as default};
