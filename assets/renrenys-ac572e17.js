/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{o as R,k as z,r as S,D as W,U as _,a0 as b,a3 as c,f as t,W as n,u as a,F as k,a1 as U,a6 as A,a7 as y,V as D,E as u,a2 as g,a8 as G}from"./vue-00c40460.js";import{_ as T,a as J,u as Q,b as X}from"./index-3a912928.js";import{_ as Y}from"./repeatcard-5cb001b2.js";import{_ as Z}from"./loading-36b8aaa3.js";import{r as ee}from"./api-c9fafc5b.js";import{F as te}from"./FieldTimeOutlined-2b16bf16.js";import{S as ne}from"./SendOutlined-00e2115c.js";import{P as ae}from"./PartitionOutlined-8591e5fd.js";import{U as oe}from"./UserOutlined-788707b9.js";import{F as le,I as ie,o as re,p as ue,q as se,r as pe,s as de,B as ce,t as me}from"./antDesignVue-51b926d5.js";import"./index-fe2c9608.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./axios-4a70c6fc.js";const _e={key:0,style:{"column-count":"5","column-gap":"15px"}},ge={style:{margin:"10px 0 10px 10px"}},fe={style:{margin:"10px 0 10px 10px"}},ve={style:{margin:"10px 0 10px 10px"}},ye={style:{width:"100%","margin-bottom":"10px","margin-left":"10px","padding-right":"10px","line-height":"25px"}},he={style:{width:"100%","margin-bottom":"10px","margin-left":"10px","padding-right":"10px","line-height":"25px"}},be={style:{"text-align":"right"},id:"bottomDom"},Re={__name:"renrenys",setup(xe){const{throttle:B}=Q();R(()=>{window.addEventListener("scroll",()=>{B(V(),1e4)})});let P=z(0);const V=()=>{let l=document.documentElement.scrollTop||document.body.scrollTop,i=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;l>=P.value&&l+i>=s&&F(e.currentPage+1),P.value=l},j=z(),e=S({title:"",diqu:"",jianjie:"",time:"",zhuyan:"",dalei:"",currentPage:1,pageSizes:50}),E=S([{value:"",title:"全部"},{value:"动漫",title:"动漫"},{value:"电影",title:"电影"},{value:"电视剧",title:"电视剧"},{value:"福利",title:"福利"},{value:"综艺",title:"综艺"},{value:"记录片",title:"记录片"},{value:"音乐",title:"音乐"}]),r=S({data:[],total:0});let x=z("1");const f=()=>{x.value="1",r.total=0,r.data=[]},H=()=>{f(),j.value.resetFields(),e.currentPage=1,e.pageSizes=50,v()},m=l=>{f(),e.title=e.title.replace(/\s*/g,""),e.diqu=e.diqu.replace(/\s*/g,""),e.jianjie=e.jianjie.replace(/\s*/g,""),e.time=e.time.replace(/\s*/g,""),e.zhuyan=e.zhuyan.replace(/\s*/g,""),e.dalei=e.dalei.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,v()};W(()=>{v()});const v=()=>{ee(e).then(l=>{r.data=l.data.data,r.total=l.data.total,x.value="0"})},q=({page:l,pageSize:i})=>{f(),e.currentPage=l,e.pageSizes=i,v()},K=({current:l,size:i})=>{f(),e.currentPage=l,e.pageSizes=i},F=l=>{f(),e.currentPage=l,v()},C=l=>{switch(l){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},I=l=>{window.open(l,"_blank")};return(l,i)=>{const s=ie,p=re,d=ue,O=se,N=pe,$=de,w=ce,M=le,h=me;return _(),b(k,null,[c("div",null,[t(M,{id:"submitDom",model:a(e),ref_key:"formRef",ref:j,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:m},{default:n(()=>[t(O,null,{default:n(()=>[t(d,{span:6},{default:n(()=>[t(p,{label:"标 题",name:"title"},{default:n(()=>[t(s,{value:a(e).title,"onUpdate:value":i[0]||(i[0]=o=>a(e).title=o),onKeydown:y(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(d,{span:6},{default:n(()=>[t(p,{label:"地 区",name:"diqu"},{default:n(()=>[t(s,{value:a(e).diqu,"onUpdate:value":i[1]||(i[1]=o=>a(e).diqu=o),onKeydown:y(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(d,{span:6},{default:n(()=>[t(p,{label:"简 介",name:"jianjie"},{default:n(()=>[t(s,{value:a(e).jianjie,"onUpdate:value":i[2]||(i[2]=o=>a(e).jianjie=o),onKeydown:y(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(d,{span:6},{default:n(()=>[t(p,{label:"时 间",name:"time"},{default:n(()=>[t(s,{value:a(e).time,"onUpdate:value":i[3]||(i[3]=o=>a(e).time=o),onKeydown:y(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1})]),_:1}),t(O,null,{default:n(()=>[t(d,{span:6},{default:n(()=>[t(p,{label:"主 演",name:"zhuyan"},{default:n(()=>[t(s,{value:a(e).zhuyan,"onUpdate:value":i[4]||(i[4]=o=>a(e).zhuyan=o),onKeydown:y(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(d,{span:12},{default:n(()=>[t(p,{label:"分 类",name:"dalei","label-col":{span:2},"wrapper-col":{span:20}},{default:n(()=>[t($,{value:a(e).dalei,"onUpdate:value":i[5]||(i[5]=o=>a(e).dalei=o),"button-style":"solid"},{default:n(()=>[(_(!0),b(k,null,U(a(E),o=>(_(),D(N,{key:o.title,value:o.value},{default:n(()=>[u(g(o.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1}),t(d,{span:6},{default:n(()=>[t(p,{"wrapper-col":{offset:4,span:20}},{default:n(()=>[t(w,{type:"primary","html-type":"submit"},{default:n(()=>[u("提交")]),_:1}),t(w,{style:{"margin-left":"10px"},onClick:H},{default:n(()=>[u("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(T,{total:a(r).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:q,onOnsizechange:K},null,8,["total","currentPage","pageSizes"]),a(r).data.length!==0?(_(),b("div",_e,[(_(!0),b(k,null,U(a(r).data,(o,L)=>(_(),D(Y,{key:L,item:o},G({dalei:n(()=>[c("p",fe,[t(h,{color:"orange"},{icon:n(()=>[t(a(ae))]),default:n(()=>[u(" "+g(o.dalei),1)]),_:2},1024)])]),zhuyan:n(()=>[c("div",ye,[t(h,{color:"purple"},{icon:n(()=>[t(a(oe))]),default:n(()=>[u(" "+g(o.zhuyan),1)]),_:2},1024)])]),jianjie:n(()=>[c("div",he,g(o.jianjie),1)]),button:n(()=>[t(w,{type:"dashed",style:{margin:"10px 0 10px 10px"},onClick:we=>I(o.url)},{default:n(()=>[u("跳转详情")]),_:2},1032,["onClick"])]),_:2},[o.time!=="0"?{name:"time",fn:n(()=>[c("p",ge,[t(h,{color:"green"},{icon:n(()=>[t(a(te))]),default:n(()=>[u(" "+g(o.time),1)]),_:2},1024)])]),key:"0"}:void 0,o.diqu!==""?{name:"diqu",fn:n(()=>[c("p",ve,[t(h,{color:"blue"},{icon:n(()=>[t(a(ne))]),default:n(()=>[u(" "+g(o.diqu),1)]),_:2},1024)])]),key:"1"}:void 0]),1032,["item"]))),128))])):A("",!0),t(Z,{state:a(x)},null,8,["state"]),c("div",be,[t(T,{total:a(r).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:q,onOnsizechange:K},null,8,["total","currentPage","pageSizes"])]),t(J,{total:a(r).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpageturning:F},null,8,["total","currentPage","pageSizes"]),t(X,{onOnTo:C})],64)}}};export{Re as default};
