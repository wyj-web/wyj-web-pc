import{a as o}from"./axios-4a70c6fc.js";const e=o.create({baseURL:"https://wyj-node-app.onrender.com",timeout:1e5});e.interceptors.request.use(t=>{if(t.data!==void 0){let i=JSON.parse(JSON.stringify(t.data)),a={};for(let n in i)i[n]!==""&&(a[n]=i[n]);t.data=a}return t},t=>{Promise.reject(t)});e.interceptors.response.use(t=>t.data,t=>Promise.reject(t));function u(t){return e({url:"/api/web/chiguaweb/list",method:"post",data:t})}function r(t){return e({url:"/api/web/renrenys/list",method:"post",data:t})}function p(t){return e({url:"/api/web/renren/list",method:"post",data:t})}function l(t){return e({url:"/api/web/cjoo/list",method:"post",data:t})}function d(t){return e({url:"/api/web/badvideo/list",method:"post",data:t})}function h(t){return e({url:"/api/web/xyybbsVideo/list",method:"post",data:t})}function m(t){return e({url:"/api/web/meijui/list",method:"post",data:t})}function b(t){return e({url:"/api/web/xiaoyakankan/list",method:"post",data:t})}function c(t){return e({url:"/api/web/jiujiure/list",method:"post",data:t})}function w(t){return e({url:"/api/web/tanhua/list",method:"post",data:t})}function f(t){return e({url:"/api/web/shisevideo/list",method:"post",data:t})}function g(t){return e({url:"/api/web/madoucunShipin/list",method:"post",data:t})}function y(t){return e({url:"/api/web/seselah/list",method:"post",data:t})}function x(t){return e({url:"/api/web/imomoe/list",method:"post",data:t})}function j(t){return e({url:"/api/web/jiuyi/list",method:"post",data:t})}function v(t){return e({url:"/api/web/nunuyys/list",method:"post",data:t})}function z(t){return e({url:"/api/web/heibobos/list",method:"post",data:t})}function k(t){return e({url:"/api/web/ddys/list",method:"post",data:t})}function q(t){return e({url:"/api/web/yingshi/list",method:"post",data:t})}function P(t){return e({url:"/api/web/beiwotv/shiping",method:"post",data:t})}function J(t){return e({url:"/api/web/aiqingdaos/list",method:"post",data:t})}function D(t){return e({url:"/api/web/tuweis/list",method:"post",data:t})}function S(t){return e({url:"/api/web/jiujiureImg/list",method:"post",data:t})}function B(t){return e({url:"/api/web/pixiv/list",method:"post",data:t})}function G(t){return e({url:"/api/web/everia/list",method:"post",data:t})}function N(t){return e({url:"/api/web/jbjk/list",method:"post",data:t})}function O(t){return e({url:"/api/web/ikanins/list",method:"post",data:t})}function Q(t){return e({url:"/api/web/shiseimgs/list",method:"post",data:t})}function T(t){return e({url:"/api/web/thotsbay/list",method:"post",data:t})}function X(t){return e({url:"/api/web/museum/list",method:"post",data:t})}function Y(t){return e({url:"/api/web/topimage/list",method:"post",data:t})}function Z(t){return e({url:"/api/web/shanghai/list",method:"post",data:t})}function I(t){return e({url:"/api/web/shanghai/tags",method:"post",data:t})}function L(t){return e({url:"/api/web/gugong/list",method:"post",data:t})}function M(t){return e({url:"/api/web/gugong/tags",method:"post",data:t})}function R(t){return e({url:"/api/web/sheyinxiezhen/list",method:"post",data:t})}function U(t){return e({url:"/api/web/beiwotv/yintu",method:"post",data:t})}function V(t){return e({url:"/api/web/yskhds/list",method:"post",data:t})}function A(t){return e({url:"/api/web/yimgs/list",method:"post",data:t})}function C(t){return e({url:"/api/web/xiurenbas/list",method:"post",data:t})}function E(t){return e({url:"/api/web/xiaohongshus/list",method:"post",data:t})}function F(t){return e({url:"/api/web/nsfwps/list",method:"post",data:t})}function H(t){return e({url:"/api/web/meet/list",method:"post",data:t})}function K(t){return e({url:"/api/web/footmm/list",method:"post",data:t})}function W(t){return e({url:"/api/web/footmm/taps",method:"post",data:t})}function _(t){return e({url:"/api/web/guangguangdaren/list",method:"post",data:t})}function $(t){return e({url:"/api/web/madous/list",method:"post",data:t})}function tt(t){return e({url:"/api/web/meinv/list",method:"post",data:t})}function et(t){return e({url:"/api/web/meinv/taps",method:"post",data:t})}function it(t){return e({url:"/api/web/jiepai/list",method:"post",data:t})}function nt(t){return e({url:"/api/web/gallerix/list",method:"post",data:t})}function at(t){return e({url:"/api/web/gallerix/type",method:"post",data:t})}function ot(t){return e({url:"/api/web/shisexiaoshuos/list",method:"post",data:t})}function st(t){return e({url:"/api/web/beiwotv/xiaoshuo",method:"post",data:t})}function ut(t){return e({url:"/api/web/mcmsscs/list",method:"post",data:t})}function rt(t){return e({url:"/api/web/jianpanxiaoshuo/list",method:"post",data:t})}function pt(t){return e({url:"/api/web/dpmwbs/list",method:"post",data:t})}function lt(t){return e({url:"/api/web/aiaixiaoshuos/list",method:"post",data:t})}function dt(t){return e({url:"/api/web/shiseluyin/list",method:"post",data:t})}function ht(t){return e({url:"/api/web/xiangsheng/list",method:"post",data:t})}function mt(t){return e({url:"/api/web/missevan/list",method:"post",data:t})}function bt(t){return e({url:"/api/web/asmr/list",method:"post",data:t})}function ct(t){return e({url:"/api/web/uniqlo/list",method:"post",data:t})}function wt(t){return e({url:"/api/web/muji/list",method:"post",data:t})}function ft(t){return e({url:"/api/web/muji/taps",method:"post",data:t})}function gt(t){return e({url:"/api/web/only/list",method:"post",data:t})}function yt(t){return e({url:"/api/web/only/taps",method:"post",data:t})}function xt(t){return e({url:"/api/web/goods/list",method:"post",data:t})}function jt(t){return e({url:"/api/web/goods/taps",method:"post",data:t})}function vt(t){return e({url:"/api/web/jplingerie/list",method:"post",data:t})}function zt(t){return e({url:"/api/web/jplingerie/taps",method:"post",data:t})}function kt(t){return e({url:"/api/web/hanguomanhua/list",method:"post",data:t})}function qt(t){return e({url:"/api/web/zhongguoliangqixiansheng/list",method:"post",data:t})}function Pt(t){return e({url:"/api/web/wodejiejieshidamingxing/list",method:"post",data:t})}function Jt(t){return e({url:"/api/web/xianmanwang/list",method:"post",data:t})}function Dt(t){return e({url:"/api/web/hanmanshe/list",method:"post",data:t})}function St(t){return e({url:"/api/web/fswenjianjia/tongzhizhe",method:"post",data:t})}function Bt(t){return e({url:"/api/web/fswenjianjia/manhua",method:"post",data:t})}function Gt(t){return e({url:"/api/web/jinpingmei1/list",method:"post",data:t})}function Nt(t){return e({url:"/api/web/jinpingmei2/list",method:"post",data:t})}function Ot(t){return e({url:"/api/web/pyMyJieJie/list",method:"post",data:t})}function Qt(t){return e({url:"/api/web/PyJingQiXianSheng/list",method:"post",data:t})}function Tt(t){return e({url:"/api/web/PyYaoguaimingdan/list",method:"post",data:t})}function Xt(t){return e({url:"/api/web/PyTongzhizhedierji/list",method:"post",data:t})}function Yt(t){return e({url:"/api/web/PyZhuxianmanhuaban/list",method:"post",data:t})}function Zt(t){return e({url:"/api/web/PyDoupocangkongdafanwaiyaolaochuanqi/list",method:"post",data:t})}function It(t){return e({url:"/api/web/PyDoupocangqiong/list",method:"post",data:t})}function Lt(t){return e({url:"/api/web/beiwotv/manhua",method:"post",data:t})}function Mt(t){return e({url:"/api/web/douban/list",method:"post",data:t})}function Rt(t){return e({url:"/api/web/xyybbs/list",method:"post",data:t})}function Ut(t){return e({url:"/api/web/javtext/list",method:"post",data:t})}function Vt(t){return e({url:"/api/web/madoucunBagua/list",method:"post",data:t})}function At(t){return e({url:"/api/web/madouqu/list",method:"post",data:t})}function Ct(t){return e({url:"/api/web/rebang/list",method:"post",data:t})}function Et(t){return e({url:"/api/web/rebang/tag",method:"post",data:t})}function Ft(t){return e({url:"/api/web/youziyuan/list",method:"post",data:t})}function Ht(t){return e({url:"/api/web/daohang/list",method:"post",data:t})}function Kt(t){return e({url:"/api/web/siba/list",method:"post",data:t})}function Wt(t){return e({url:"/api/web/secret/list",method:"post",data:t})}function _t(t){return e({url:"/api/web/xiaojie/list",method:"post",data:t})}function $t(t){return e({url:"/api/web/xiaojie/tags",method:"post",data:t})}function te(t){return e({url:"/api/web/supcast/list",method:"post",data:t})}function ee(t){return e({url:"/api/web/ahhhhfsdb/list",method:"post",data:t})}function ie(t){return e({url:"/api/web/javs/list",method:"post",data:t})}function ne(t){return e({url:"/api/web/shuge/list",method:"post",data:t})}function ae(t){return e({url:"/api/web/weibo/list",method:"post",data:t})}function oe(t){return e({url:"/api/web/weibo/detail",method:"post",data:t})}function se(t){return e({url:"/api/web/mshwc/list",method:"post",data:t})}function ue(t){return e({url:"/api/web/zhihuwenda/list",method:"post",data:t})}function re(t){return e({url:"/api/web/meinvbz/list",method:"post",data:t})}function pe(t){return e({url:"/api/web/yanxuanbook/list",method:"post",data:t})}function le(t){return e({url:"/api/web/fangsung/list",method:"post",data:t})}function de(t){return e({url:"/api/web/debitcard/add",method:"post",data:t})}function he(t){return e({url:"/api/web/debitcard/del",method:"post",data:t})}function me(t){return e({url:"/api/web/debitcard/update",method:"post",data:t})}function be(t){return e({url:"/api/web/debitcard/query",method:"post",data:t})}function ce(t){return e({url:"/api/web/revenueandexpenditure/add",method:"post",data:t})}function we(t){return e({url:"/api/web/revenueandexpenditure/del",method:"post",data:t})}function fe(t){return e({url:"/api/web/revenueandexpenditure/update",method:"post",data:t})}function ge(t){return e({url:"/api/web/revenueandexpenditure/query",method:"post",data:t})}function ye(t){return e({url:"/api/web/chengrenvideo/list",method:"post",data:t})}function xe(t){return e({url:"/api/web/xyxz/list",method:"post",data:t})}function je(t){return e({url:"/api/web/tusiaiimg/list",method:"post",data:t})}function ve(t){return e({url:"/api/web/Beitai/list",method:"post",data:t})}function ze(t){return e({url:"/api/web/Picyy/list",method:"post",data:t})}function ke(t){return e({url:"/api/web/Gddx/list",method:"post",data:t})}function qe(t){return e({url:"/api/web/ppyuxianwei/list",method:"post",data:t})}function Pe(t){return e({url:"/api/web/hongxiubook/list",method:"post",data:t})}export{nt as $,B as A,G as B,N as C,O as D,Q as E,T as F,X as G,Y as H,Z as I,I as J,L as K,M as L,R as M,U as N,V as O,A as P,C as Q,E as R,F as S,H as T,K as U,W as V,_ as W,$ as X,tt as Y,et as Z,it as _,p as a,pe as a$,at as a0,re as a1,ot as a2,st as a3,ut as a4,rt as a5,pt as a6,lt as a7,ve as a8,qe as a9,Lt as aA,Tt as aB,Xt as aC,Yt as aD,Zt as aE,It as aF,Mt as aG,Rt as aH,Ut as aI,Vt as aJ,At as aK,Et as aL,Ct as aM,Ft as aN,Ht as aO,Kt as aP,Wt as aQ,$t as aR,_t as aS,te as aT,ee as aU,ie as aV,ne as aW,ae as aX,oe as aY,se as aZ,ue as a_,Pe as aa,dt as ab,ht as ac,mt as ad,bt as ae,ct as af,wt as ag,ft as ah,gt as ai,yt as aj,xt as ak,jt as al,vt as am,zt as an,ze as ao,kt as ap,qt as aq,Pt as ar,Jt as as,Dt as at,St as au,Bt as av,Gt as aw,Nt as ax,Ot as ay,Qt as az,l as b,xe as b0,be as b1,he as b2,de as b3,me as b4,ge as b5,we as b6,ce as b7,fe as b8,ke as b9,u as c,d,b as e,g as f,y as g,j as h,z as i,c as j,k,P as l,m,v as n,J as o,le as p,q,r,f as s,w as t,ye as u,D as v,je as w,h as x,x as y,S as z};
