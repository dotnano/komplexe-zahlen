import{d as _,i as d,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as a,h as s,F as g,r as v,n as x,j as y,o as l,k as b,l as k,m as N,p as w,q as P,_ as S}from"./index-5a5064ab.js";import{N as V}from"./NoteDisplay-8b333f37.js";const j={class:"m-4"},z={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(q){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=f(()=>y.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(l(),n("div",{id:"page-root",style:x(s(P))},[t("div",j,[t("div",z,[t("h1",L,a(s(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(s(i),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",D,a(e==null?void 0:e.no)+"/"+a(s(b)),1),k(" "+a(e==null?void 0:e.title)+" ",1),H])]),N(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(i).length-1?(l(),n("hr",F)):w("v-if",!0)]))),128))])],4))}}),R=S(M,[["__file","/home/runner/work/komplexe-zahlen/komplexe-zahlen/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
