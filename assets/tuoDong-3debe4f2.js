import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{k as d,U as o,a0 as s,F as f,a1 as D,u as p,a2 as v}from"./vue-00c40460.js";const x=["draggable"],h={__name:"tuoDong",setup(b){let l=d([{name:1,dra:!0},{name:2,dra:!0},{name:3,dra:!0},{name:4,dra:!0},{name:5,dra:!0}]),a=d(null),r;const c=e=>{setTimeout(()=>{e.target.classList.add("moving")},0),r=e.target,e.dataTransfer.effectAllowed="move"},g=e=>{e.preventDefault()},u=e=>{if(e.preventDefault(),e.target===a.value||e.target===r)return;const n=Array.from(a.value.children),t=n.indexOf(r),_=n.indexOf(e.target);t<_?a.value.insertBefore(r,e.target.nextElementSibling):a.value.insertBefore(r,e.target)},i=e=>{e.target.classList.remove("moving")};return(e,n)=>(o(),s("div",{class:"box",ref_key:"draDom",ref:a,onDragstart:c,onDragenter:u,onDragover:g,onDragend:i},[(o(!0),s(f,null,D(p(l),t=>(o(),s("div",{draggable:t.dra,class:"list-item"},v(t.name),9,x))),256))],544))}},B=m(h,[["__scopeId","data-v-fb4d79d4"]]);export{B as default};
