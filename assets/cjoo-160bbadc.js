/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{o as q,k as b,r as F,D as M,U as _,a0 as x,a3 as d,f as t,W as n,u as a,F as B,a1 as L,a6 as R,a7 as D,E as i,V as W,a2 as O}from"./vue-00c40460.js";import{_ as T,a as A,u as G,b as J}from"./index-26070284.js";import{_ as Q}from"./repeatcard-4b10691f.js";import{_ as X}from"./loading-36b8aaa3.js";import{b as Y}from"./api-c9fafc5b.js";import{F as Z,I as ee,o as te,p as oe,B as ne,q as ae,t as le}from"./antDesignVue-51b926d5.js";import{F as se}from"./FieldTimeOutlined-2b16bf16.js";import{P as re}from"./PartitionOutlined-8591e5fd.js";import"./index-02c0cd83.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./axios-4a70c6fc.js";const ie={key:0,style:{"column-count":"5","column-gap":"15px"}},ce={style:{margin:"10px 0 10px 10px"}},pe={style:{margin:"10px 0 10px 10px"}},ue={style:{"text-align":"right"},id:"bottomDom"},Ce={__name:"cjoo",setup(me){const{throttle:C}=G();q(()=>{window.addEventListener("scroll",()=>{C(V(),1e4)})});let v=b(0);const V=()=>{let o=document.documentElement.scrollTop||document.body.scrollTop,l=document.documentElement.clientHeight||document.body.clientHeight,u=document.documentElement.scrollHeight||document.body.scrollHeight;o>=v.value&&o+l>=u&&k(e.currentPage+1),v.value=o},z=b(),e=F({title:"",dalei:"",currentPage:1,pageSizes:50}),r=F({data:[],total:0});let g=b("1");const c=()=>{g.value="1",r.total=0,r.data=[]},E=()=>{c(),z.value.resetFields(),e.currentPage=1,e.pageSizes=50,p()},f=o=>{c(),e.title=e.title.replace(/\s*/g,""),e.dalei=e.dalei.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,p()};M(()=>{p()});const p=()=>{Y(e).then(o=>{r.data=o.data.data,r.total=o.data.total,g.value="0"})},w=({page:o,pageSize:l})=>{c(),e.currentPage=o,e.pageSizes=l,p()},S=({current:o,size:l})=>{c(),e.currentPage=o,e.pageSizes=l},k=o=>{c(),e.currentPage=o,p()},H=o=>{switch(o){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},j=o=>{window.open(o,"_blank")},K=o=>{window.location.href=o};return(o,l)=>{const u=ee,h=te,y=oe,m=ne,$=ae,I=Z,P=le;return _(),x(B,null,[d("div",null,[t(I,{id:"submitDom",model:a(e),ref_key:"formRef",ref:z,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:f},{default:n(()=>[t($,null,{default:n(()=>[t(y,{span:6},{default:n(()=>[t(h,{label:"标 题",name:"title"},{default:n(()=>[t(u,{value:a(e).title,"onUpdate:value":l[0]||(l[0]=s=>a(e).title=s),onKeydown:D(f,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(y,{span:6},{default:n(()=>[t(h,{label:"类 型",name:"dalei"},{default:n(()=>[t(u,{value:a(e).dalei,"onUpdate:value":l[1]||(l[1]=s=>a(e).dalei=s),onKeydown:D(f,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(y,{span:6},{default:n(()=>[t(h,{"wrapper-col":{offset:4,span:20}},{default:n(()=>[t(m,{type:"primary","html-type":"submit"},{default:n(()=>[i("提交")]),_:1}),t(m,{style:{"margin-left":"10px"},onClick:E},{default:n(()=>[i("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(T,{total:a(r).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:w,onOnsizechange:S},null,8,["total","currentPage","pageSizes"]),a(r).data.length!==0?(_(),x("div",ie,[(_(!0),x(B,null,L(a(r).data,(s,N)=>(_(),W(Q,{key:N,item:{...s,bj:s.bj.replace(/\/a/,"https://staticzzzz.xyz/a")}},{time:n(()=>[d("p",ce,[t(P,{color:"green"},{icon:n(()=>[t(a(se))]),default:n(()=>[i(" "+O(s.time),1)]),_:2},1024)])]),dalei:n(()=>[d("p",pe,[t(P,{color:"orange"},{icon:n(()=>[t(a(re))]),default:n(()=>[i(" "+O(s.dalei),1)]),_:2},1024)])]),button:n(()=>[t(m,{type:"dashed",style:{margin:"10px 0 10px 10px"},onClick:U=>K(s.videodwurl.replace(/\/B/,"https://mp42.staticxxxx.xyz/B"))},{default:n(()=>[i("点击下载 ")]),_:2},1032,["onClick"]),t(m,{type:"dashed",style:{margin:"10px 0 10px 10px"},onClick:U=>j(s.url)},{default:n(()=>[i("跳转详情 ")]),_:2},1032,["onClick"])]),_:2},1032,["item"]))),128))])):R("",!0),t(X,{state:a(g)},null,8,["state"]),d("div",ue,[t(T,{total:a(r).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:w,onOnsizechange:S},null,8,["total","currentPage","pageSizes"])]),t(A,{total:a(r).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpageturning:k},null,8,["total","currentPage","pageSizes"]),t(J,{onOnTo:H})],64)}}};export{Ce as default};
