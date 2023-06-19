import{o as d,f as y,g as e,B as k,C as D,v as h,d as T,i as M,a as B,D as S,x as v,E as P,_ as H,G as I,H as R,c as b,b as A,I as $,J as E,K as L,L as q,M as F,N as O,O as U,P as W,Q as Z,h as i,m as u,t as j,n as g,R as N,S as z,p as G,T as J,U as w,V as K,F as Q,W as X,X as Y,w as ee,Y as te,Z as se,q as V,$ as oe,a0 as le,a1 as ne,a2 as ae,a3 as ie,k as re,a4 as ce}from"./index-5a5064ab.js";import{N as ue}from"./NoteDisplay-8b333f37.js";import de from"./DrawingControls-10df7a7c.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[me];function ve(o,n){return d(),y("svg",_e,pe)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ge=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[xe,ge];function ke(o,n){return d(),y("svg",fe,we)}const Se={name:"carbon-time",render:ke},ye="/komplexe-zahlen/assets/logo-title-horizontal-96c3c915.png";function Ce(){const o=k(Date.now()),n=D({interval:1e3}),_=h(()=>{const t=(n.value-o.value)/1e3,l=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${l}`});function m(){o.value=n.value}return{timer:_,resetTimer:m}}const be=T({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const n=o;M(B);const _=h(()=>{var t,l,s;return(s=(l=(t=S.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.note}),m=h(()=>{var t,l,s;return(s=(l=(t=S.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.noteHTML});return(t,l)=>(d(),v(ue,{class:P(n.class),note:_.value,"note-html":m.value},null,8,["class","note","note-html"]))}}),$e=H(be,[["__file","/home/runner/work/komplexe-zahlen/komplexe-zahlen/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(X("data-v-574fd206"),o=o(),Y(),o),Ne={class:"bg-main h-full slidev-presenter"},ze={class:"grid-container"},Ve={class:"grid-section top flex"},Te=f(()=>e("img",{src:ye,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Me=f(()=>e("div",{class:"flex-auto"},null,-1)),Be={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Pe=f(()=>e("div",{class:"context"}," current ",-1)),He=f(()=>e("div",{class:"context"}," next ",-1)),De={class:"grid-section note overflow-auto"},Ie={class:"grid-section bottom"},Re={class:"progress-bar"},Ae=T({__name:"Presenter",setup(o){M(B);const n=k();I(),R(n);const _=b.titleTemplate.replace("%s",b.title||"Slidev");A({title:`Presenter - ${_}`});const{timer:m,resetTimer:t}=Ce(),l=k([]),s=h(()=>$.value<E.value?{route:S.value,clicks:$.value+1}:L.value?{route:q.value,clicks:0}:null);return F(()=>{const C=n.value.querySelector("#slide-content"),r=O(U()),x=W();Z(()=>{if(!x.value||te.value||!se.value)return;const c=C.getBoundingClientRect(),a=(r.x-c.left)/c.width*100,p=(r.y-c.top)/c.height*100;if(!(a<0||a>100||p<0||p>100))return{x:a,y:p}},c=>{ee.cursor=c})}),(C,r)=>{const x=Se,c=he;return d(),y(Q,null,[e("div",Ne,[e("div",ze,[e("div",Ve,[Te,Me,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...a)=>i(t)&&i(t)(...a))},[u(x,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Be,j(i(m)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:g(i(V))},[u(z,{key:"main",class:"h-full w-full"},{default:N(()=>[u(oe,{context:"presenter"})]),_:1}),Pe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:g(i(V))},[s.value?(d(),v(z,{key:"next",class:"h-full w-full"},{default:N(()=>{var a;return[u(i(ne),{is:(a=s.value.route)==null?void 0:a.component,"clicks-elements":l.value,"onUpdate:clicksElements":r[1]||(r[1]=p=>l.value=p),clicks:s.value.clicks,"clicks-disabled":!1,class:P(i(le)(s.value.route)),route:s.value.route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):G("v-if",!0),He],4),e("div",De,[(d(),v($e,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ie,[u(ae,{persist:!0})]),(d(),v(de,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:g({width:`${(i(ie)-1)/(i(re)-1)*100}%`})},null,4)])]),u(ce),u(K,{modelValue:i(w),"onUpdate:modelValue":r[2]||(r[2]=a=>J(w)?w.value=a:null)},null,8,["modelValue"])],64)}}});const Fe=H(Ae,[["__scopeId","data-v-574fd206"],["__file","/home/runner/work/komplexe-zahlen/komplexe-zahlen/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Fe as default};
