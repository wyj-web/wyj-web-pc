/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{o as U,k as b,r as x,D as $,U as p,a0 as v,a3 as y,f as t,W as a,u as o,F as B,a1 as q,a6 as M,a7 as F,E as m,V as L,a2 as R}from"./vue-00c40460.js";import{_ as D,a as j,u as W,b as A}from"./index-3a912928.js";import{_ as G}from"./repeatcard-5cb001b2.js";import{_ as J}from"./loading-36b8aaa3.js";import{s as Q}from"./api-c9fafc5b.js";import{F as X,u as Y,I as Z,o as ee,p as te,B as ne,q as oe,t as ae}from"./antDesignVue-51b926d5.js";import"./index-fe2c9608.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./axios-4a70c6fc.js";const le={key:0,style:{"column-count":"5","column-gap":"15px"}},se={style:{margin:"10px 0 10px 10px"}},re={style:{"text-align":"right"},id:"bottomDom"},Be={__name:"sisevideo",setup(ie){const{throttle:O}=W();U(()=>{window.addEventListener("scroll",()=>{O(T(),1e4)})});let S=b(0);const T=()=>{let n=document.documentElement.scrollTop||document.body.scrollTop,l=document.documentElement.clientHeight||document.body.clientHeight,u=document.documentElement.scrollHeight||document.body.scrollHeight;n>=S.value&&n+l>=u&&P(e.currentPage+1),S.value=n},z=b(),e=x({title:"",fenlei:"",currentPage:1,pageSizes:50}),s=x({data:[],total:0});let _=b("1");const i=()=>{_.value="1",s.total=0,s.data=[]},V=()=>{i(),z.value.resetFields(),e.currentPage=1,e.pageSizes=50,c()},g=n=>{i(),e.title=e.title.replace(/\s*/g,""),e.fenlei=e.fenlei.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,c()};$(()=>{c()});const c=()=>{Q(e).then(n=>{s.data=n.data.data,s.total=n.data.total,_.value="0"})},k=({page:n,pageSize:l})=>{i(),e.currentPage=n,e.pageSizes=l,c()},w=({current:n,size:l})=>{i(),e.currentPage=n,e.pageSizes=l},P=n=>{i(),e.currentPage=n,c()},E=n=>{switch(n){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},H=n=>{window.open(n,"_blank")};return(n,l)=>{const u=Z,d=ee,f=te,h=ne,C=oe,K=X,I=ae;return p(),v(B,null,[y("div",null,[t(K,{id:"submitDom",model:o(e),ref_key:"formRef",ref:z,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:g},{default:a(()=>[t(C,null,{default:a(()=>[t(f,{span:6},{default:a(()=>[t(d,{label:"标 题",name:"title"},{default:a(()=>[t(u,{value:o(e).title,"onUpdate:value":l[0]||(l[0]=r=>o(e).title=r),onKeydown:F(g,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(f,{span:6},{default:a(()=>[t(d,{label:"分 类",name:"fenlei"},{default:a(()=>[t(u,{value:o(e).fenlei,"onUpdate:value":l[1]||(l[1]=r=>o(e).fenlei=r),onKeydown:F(g,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(f,{span:6},{default:a(()=>[t(d,{"wrapper-col":{offset:4,span:20}},{default:a(()=>[t(h,{type:"primary","html-type":"submit"},{default:a(()=>[m("提交")]),_:1}),t(h,{style:{"margin-left":"10px"},onClick:V},{default:a(()=>[m("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(D,{total:o(s).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:k,onOnsizechange:w},null,8,["total","currentPage","pageSizes"]),o(s).data.length!==0?(p(),v("div",le,[(p(!0),v(B,null,q(o(s).data,(r,N)=>(p(),L(G,{key:N,item:{...r,bj:r.fengmian}},{dalei:a(()=>[y("p",se,[t(I,{color:"green"},{icon:a(()=>[t(o(Y))]),default:a(()=>[m(" "+R(r.fenlei),1)]),_:2},1024)])]),button:a(()=>[t(h,{type:"dashed",style:{margin:"10px 0 10px 10px"},onClick:ce=>H(r.url)},{default:a(()=>[m("跳转详情")]),_:2},1032,["onClick"])]),_:2},1032,["item"]))),128))])):M("",!0),t(J,{state:o(_)},null,8,["state"]),y("div",re,[t(D,{total:o(s).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:k,onOnsizechange:w},null,8,["total","currentPage","pageSizes"])]),t(j,{total:o(s).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpageturning:P},null,8,["total","currentPage","pageSizes"]),t(A,{onOnTo:E})],64)}}};export{Be as default};
