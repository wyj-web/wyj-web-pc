/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{o as j,k as g,r as D,D as J,U as u,a0 as d,a3 as f,f as t,W as a,u as n,F as k,a1 as O,a6 as W,V as A,E as c,a2 as w,a7 as B}from"./vue-00c40460.js";import{_ as V,a as G,u as Q,b as X}from"./index-26070284.js";import{_ as Y}from"./repeatcard-4b10691f.js";import{_ as Z}from"./loading-36b8aaa3.js";import"./index-02c0cd83.js";/* empty css              */import{I as ee,J as te}from"./api-c9fafc5b.js";import{F as ae,r as ne,s as oe,o as le,p as se,q as re,I as ue,B as ce,t as ie}from"./antDesignVue-51b926d5.js";import{F as pe}from"./FieldTimeOutlined-2b16bf16.js";import{T as me}from"./TagOutlined-bdc20c53.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./axios-4a70c6fc.js";const _e={key:0,style:{"column-count":"5","column-gap":"15px"}},ge={style:{margin:"10px 0 10px 10px"}},de={style:{margin:"10px 0 10px 10px"}},fe={style:{"text-align":"right"},id:"bottomDom"},Ue={__name:"shanghailist",setup(he){const{throttle:E}=Q();j(()=>{window.addEventListener("scroll",()=>{E(H(),1e4)})});let x=g(0);const H=()=>{let o=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.clientHeight||document.body.clientHeight,v=document.documentElement.scrollHeight||document.body.scrollHeight;o>=x.value&&o+s>=v&&F(e.currentPage+1),x.value=o},z=g(),e=D({class:"",intraAgeCode:"",name:"",currentPage:1,pageSizes:50}),r=D({data:[],total:0});let h=g("1");const i=()=>{h.value="1",r.total=0,r.data=[]},U=()=>{i(),z.value.resetFields(),e.currentPage=1,e.pageSizes=50,p()},y=o=>{i(),e.name=e.name.replace(/\s*/g,""),e.class=e.class.replace(/\s*/g,""),e.intraAgeCode=e.intraAgeCode.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,p()};let b=g([]);J(()=>{p(),K()});const p=()=>{ee(e).then(o=>{r.data=o.data.data,r.total=o.data.total,h.value="0"})},K=()=>{te().then(o=>{b.value=o.data.data,b.value.unshift({entryItemName:"全部"})})},P=({page:o,pageSize:s})=>{i(),e.currentPage=o,e.pageSizes=s,p()},C=({current:o,size:s})=>{i(),e.currentPage=o,e.pageSizes=s},F=o=>{i(),e.currentPage=o,p()},$=o=>{switch(o){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},q=o=>{window.open(o,"_blank")};return(o,s)=>{const v=ne,M=oe,m=le,_=se,I=re,T=ue,S=ce,L=ae,N=ie;return u(),d(k,null,[f("div",null,[t(L,{id:"submitDom",model:n(e),ref_key:"formRef",ref:z,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:y},{default:a(()=>[t(I,null,{default:a(()=>[t(_,{span:24},{default:a(()=>[t(m,{"label-col":{span:1},"wrapper-col":{span:20},label:"分 类",name:"class"},{default:a(()=>[t(M,{value:n(e).class,"onUpdate:value":s[0]||(s[0]=l=>n(e).class=l),"button-style":"solid"},{default:a(()=>[(u(!0),d(k,null,O(n(b),l=>(u(),A(v,{style:{margin:"0 10px 10px 0"},key:l.entryItemName,value:l.entryItemName==="全部"?"":l.entryItemName},{default:a(()=>[c(w(l.entryItemName),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),t(I,null,{default:a(()=>[t(_,{span:6},{default:a(()=>[t(m,{label:"标 题",name:"name"},{default:a(()=>[t(T,{value:n(e).name,"onUpdate:value":s[1]||(s[1]=l=>n(e).name=l),onKeydown:B(y,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(_,{span:6},{default:a(()=>[t(m,{label:"年 代",name:"intraAgeCode"},{default:a(()=>[t(T,{value:n(e).intraAgeCode,"onUpdate:value":s[2]||(s[2]=l=>n(e).intraAgeCode=l),onKeydown:B(y,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(_,{span:6},{default:a(()=>[t(m,{"wrapper-col":{offset:2,span:22}},{default:a(()=>[t(S,{type:"primary","html-type":"submit"},{default:a(()=>[c("提交")]),_:1}),t(S,{style:{"margin-left":"10px"},onClick:U},{default:a(()=>[c("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(V,{total:n(r).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:P,onOnsizechange:C},null,8,["total","currentPage","pageSizes"]),n(r).data.length!==0?(u(),d("div",_e,[(u(!0),d(k,null,O(n(r).data,(l,R)=>(u(),A(Y,{key:R,item:{...l,bj:l.picPath,title:l.name}},{time:a(()=>[f("p",ge,[t(N,{color:"green"},{icon:a(()=>[t(n(pe))]),default:a(()=>[c(" "+w(l.intraAgeCode),1)]),_:2},1024)])]),type:a(()=>[f("p",de,[t(N,{color:"purple"},{icon:a(()=>[t(n(me))]),default:a(()=>[c(" "+w(l.class),1)]),_:2},1024)])]),button:a(()=>[t(S,{type:"dashed",style:{margin:"0 0 10px 10px"},onClick:ye=>q(l.yuantuUrl)},{default:a(()=>[c("查看原图")]),_:2},1032,["onClick"])]),_:2},1032,["item"]))),128))])):W("",!0),t(Z,{state:n(h)},null,8,["state"]),f("div",fe,[t(V,{total:n(r).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:P,onOnsizechange:C},null,8,["total","currentPage","pageSizes"])]),t(G,{total:n(r).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpageturning:F},null,8,["total","currentPage","pageSizes"]),t(X,{onOnTo:$})],64)}}};export{Ue as default};