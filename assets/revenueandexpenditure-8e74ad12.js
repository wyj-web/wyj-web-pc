/* empty css                *//* empty css              *//* empty css              *//* empty css              */import{u as ce,_ as _e,a as fe,b as ye}from"./index-3a912928.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{o as ge,k as g,r as f,D as ve,U as p,a0 as w,a3 as x,f as e,W as t,u as a,V as y,a6 as h,F as z,a1 as A,E as u,a2 as J,a7 as q}from"./vue-00c40460.js";import{b1 as be,b5 as ke,b6 as we,b7 as xe,b8 as Se}from"./api-c9fafc5b.js";/* empty css              */import{B as he,F as ze,z as Pe,n as Ce,N as B,r as Ue,s as De,o as Ie,p as Fe,J as qe,I as Be,q as Me,y as Oe,t as Ye,P as Ke}from"./antDesignVue-51b926d5.js";import"./index-fe2c9608.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./axios-4a70c6fc.js";const Re=""+new URL("账单-bf89c9df.png",import.meta.url).href,Te={style:{"margin-bottom":"10px"}},Ve={style:{"margin-top":"10px"}},Ee={style:{"text-align":"right","margin-top":"10px"},id:"bottomDom"},mt={__name:"revenueandexpenditure",setup(He){const{throttle:W}=ce();ge(()=>{window.addEventListener("scroll",()=>{W(j(),1e4)})});let M=g(0);const j=()=>{let l=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,_=document.documentElement.scrollHeight||document.body.scrollHeight;l>=M.value&&l+n>=_&&E(i.currentPage+1),M.value=l};let P=f([]),G=f([{title:"ICO",dataIndex:"ico",key:"ico"},{title:"类型(收入/支出)",dataIndex:"type",key:"type"},{title:"账单时间",dataIndex:"time",key:"time"},{title:"储蓄卡",dataIndex:"position",key:"position"},{title:"金额(￥)",dataIndex:"money",key:"money"},{title:"消费名目",dataIndex:"title",key:"title"},{title:"备注",dataIndex:"notes",key:"notes"},{title:"操作",width:220,key:"debitcard"}]),m=f({state:!1,title:""}),C=g(!0),O=f([]),U=f([]);ve(()=>{d(),Q()});let s=f({type:"",time:"",position:"",title:"",currentPage:1,pageSizes:50}),v=g(0),D=g(!0);const Q=async()=>{D.value=!1;let l=await be();O=l.data,U=l.data,U.unshift({name:"全部"}),D.value=!0},d=async()=>{C.value=!1;let l=await ke(s);v.value=l.data.total,P=l.data.data.map(n=>({...n,ico:Re})),C.value=!0},X=l=>{i.type=l.type,i.time=l.time,i.position=l.position,i.money=l.money,i.title=l.title,i.notes=l.notes,i._id=l._id,m.title="编辑账单",m.state=!0},Z=async l=>{let n=await we({_id:l});B.success(n.msg),d()},ee=()=>{i.type="支出",i.time="",i.position="工商银行",i.money="",i.title="",i.notes="",i._id="",m.title="创建账单",m.state=!0},te=()=>{},i=f({type:"支出",time:"",position:"工商银行",money:"",title:"",notes:"",_id:""}),ae=async l=>{if(l.money=l.money*1,m.title==="创建账单"){let n=await xe(l);B.success(n.msg)}else if(m.title==="编辑账单"){let n=await Se({_id:i._id,parameter:l});B.success(n.msg)}R(),m.state=!1,m.title="",d()},Y=g(),K=g(),R=()=>{Y.value.resetFields()},ne=()=>{K.value.resetFields(),d()},I=()=>{v.value=0,P=[]},T=({page:l,pageSize:n})=>{I(),s.currentPage=l,s.pageSizes=n,d()},V=({current:l,size:n})=>{I(),s.currentPage=l,s.pageSizes=n},E=l=>{I(),s.currentPage=l,d()},oe=l=>{switch(l){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}};return(l,n)=>{const _=Ue,S=De,r=Ie,b=Fe,H=qe,F=Be,c=he,le=Me,N=ze,L=_e,ie=Oe,$=Ye,se=Pe,ue=fe,re=ye,pe=Ke,me=Ce;return p(),w("div",null,[x("div",null,[e(N,{id:"submitDom",model:a(s),ref_key:"formRefinit",ref:K,name:"basicinit","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:d},{default:t(()=>[e(le,null,{default:t(()=>[e(b,{span:24},{default:t(()=>[e(r,{label:"储蓄卡",name:"position","label-col":{span:1},"wrapper-col":{span:23}},{default:t(()=>[a(D)?(p(),y(S,{key:0,value:a(s).position,"onUpdate:value":n[0]||(n[0]=o=>a(s).position=o),"button-style":"solid"},{default:t(()=>[(p(!0),w(z,null,A(a(U),o=>(p(),y(_,{style:{margin:"0 10px 10px 0"},key:o.name,value:o.name==="全部"?"":o.name},{default:t(()=>[u(J(o.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])):h("",!0)]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(r,{label:"时 间",name:"time"},{default:t(()=>[e(H,{value:a(s).time,"onUpdate:value":n[1]||(n[1]=o=>a(s).time=o),"value-format":"YYYY-MM-DD",onKeydown:q(d,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(r,{label:"类 型",name:"type"},{default:t(()=>[e(S,{value:a(s).type,"onUpdate:value":n[2]||(n[2]=o=>a(s).type=o),"button-style":"solid",onKeydown:q(d,["enter","native"])},{default:t(()=>[e(_,{value:""},{default:t(()=>[u("全部")]),_:1}),e(_,{value:"收入"},{default:t(()=>[u("收入")]),_:1}),e(_,{value:"支出"},{default:t(()=>[u("支出")]),_:1})]),_:1},8,["value","onKeydown"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(r,{label:"名 目",name:"title"},{default:t(()=>[e(F,{value:a(s).title,"onUpdate:value":n[3]||(n[3]=o=>a(s).title=o),placeholder:"请输入名目",onKeydown:q(d,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),e(b,{span:6},{default:t(()=>[e(r,{"wrapper-col":{offset:4,span:20}},{default:t(()=>[e(c,{type:"primary","html-type":"submit"},{default:t(()=>[u("提交")]),_:1}),e(c,{style:{"margin-left":"10px"},onClick:ne},{default:t(()=>[u("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),x("div",Te,[e(c,{type:"primary",onClick:ee},{default:t(()=>[u("创建账单")]),_:1}),e(c,{type:"primary",style:{"margin-left":"10px"}},{default:t(()=>[u("工资收入汇总")]),_:1}),e(c,{type:"primary",style:{"margin-left":"10px"}},{default:t(()=>[u("月支出汇总")]),_:1}),e(c,{type:"primary",style:{"margin-left":"10px"}},{default:t(()=>[u("卡余额汇总")]),_:1})]),e(L,{total:a(v),currentPage:a(s).currentPage,pageSizes:a(s).pageSizes,onOnpagechange:T,onOnsizechange:V},null,8,["total","currentPage","pageSizes"]),x("div",Ve,[a(C)?(p(),y(se,{key:0,dataSource:a(P),columns:a(G),pagination:!1},{bodyCell:t(({column:o,record:k,index:Ne})=>[o.key==="ico"?(p(),y(ie,{key:0,width:100,preview:!1,src:k.ico},null,8,["src"])):o.key==="type"?(p(),w(z,{key:1},[k.type==="收入"?(p(),y($,{key:0,color:"green"},{default:t(()=>[u("收入")]),_:1})):k.type==="支出"?(p(),y($,{key:1,color:"red"},{default:t(()=>[u("支出")]),_:1})):h("",!0)],64)):o.key==="debitcard"?(p(),w(z,{key:2},[e(c,{type:"dashed",onClick:de=>X(k)},{default:t(()=>[u("修改")]),_:2},1032,["onClick"]),e(c,{type:"dashed",danger:"",onClick:de=>Z(k._id),style:{"margin-left":"10px"}},{default:t(()=>[u("删除")]),_:2},1032,["onClick"])],64)):h("",!0)]),_:1},8,["dataSource","columns"])):h("",!0)]),x("div",Ee,[e(L,{total:a(v),currentPage:a(s).currentPage,pageSizes:a(s).pageSizes,onOnpagechange:T,onOnsizechange:V},null,8,["total","currentPage","pageSizes"])]),e(ue,{total:a(v),currentPage:a(s).currentPage,pageSizes:a(s).pageSizes,onOnpageturning:E},null,8,["total","currentPage","pageSizes"]),e(re,{onOnTo:oe}),e(me,{visible:a(m).state,"onUpdate:visible":n[10]||(n[10]=o=>a(m).state=o),footer:null,width:"30%",maskClosable:!1,destroyOnClose:!0,onCancel:te,title:a(m).title},{default:t(()=>[x("div",null,[e(N,{ref_key:"formRef",ref:Y,model:a(i),name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:ae},{default:t(()=>[e(r,{label:"类型",name:"type"},{default:t(()=>[e(S,{value:a(i).type,"onUpdate:value":n[4]||(n[4]=o=>a(i).type=o),"button-style":"solid"},{default:t(()=>[e(_,{value:"收入"},{default:t(()=>[u("收入")]),_:1}),e(_,{value:"支出"},{default:t(()=>[u("支出")]),_:1})]),_:1},8,["value"])]),_:1}),e(r,{label:"时间",name:"time",rules:[{required:!0,message:"请选择时间!"}]},{default:t(()=>[e(H,{value:a(i).time,"onUpdate:value":n[5]||(n[5]=o=>a(i).time=o),"value-format":"YYYY-MM-DD"},null,8,["value"])]),_:1}),e(r,{label:"储蓄卡",name:"position",rules:[{required:!0,message:"请选择储蓄卡!"}]},{default:t(()=>[e(S,{value:a(i).position,"onUpdate:value":n[6]||(n[6]=o=>a(i).position=o),"button-style":"solid"},{default:t(()=>[(p(!0),w(z,null,A(a(O),o=>(p(),y(_,{key:o.name,style:{"margin-left":"5px","margin-bottom":"5px"},value:o.name},{default:t(()=>[u(J(o.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),e(r,{label:"金额",name:"money",rules:[{required:!0,message:"请输入金额!"}]},{default:t(()=>[e(F,{value:a(i).money,"onUpdate:value":n[7]||(n[7]=o=>a(i).money=o),placeholder:"请输入金额","allow-clear":"",suffix:"￥"},null,8,["value"])]),_:1}),e(r,{label:"名目",name:"title",rules:[{required:!0,message:"请输入名目!"}]},{default:t(()=>[e(F,{value:a(i).title,"onUpdate:value":n[8]||(n[8]=o=>a(i).title=o),placeholder:"请输入名目","allow-clear":""},null,8,["value"])]),_:1}),e(r,{label:"备注",name:"notes"},{default:t(()=>[e(pe,{value:a(i).notes,"onUpdate:value":n[9]||(n[9]=o=>a(i).notes=o),placeholder:"请输入备注","allow-clear":"","auto-size":{minRows:3,maxRows:5},"show-count":"",maxlength:100},null,8,["value"])]),_:1}),e(r,{"wrapper-col":{offset:15,span:9}},{default:t(()=>[e(c,{onClick:R},{default:t(()=>[u("重置")]),_:1}),e(c,{style:{"margin-left":"10px"},type:"primary","html-type":"submit"},{default:t(()=>[u("提交")]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1},8,["visible","title"])])}}};export{mt as default};
