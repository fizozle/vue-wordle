import{d as A,o,c as a,F as w,r as k,a as p,b as T,n as N,t as h,p as B,e as O,f as m,g as q,h as U,i as $,w as W,T as Z,j as _,u as X,k as D,l as J}from"./vendor.b7083f46.js";const Q=function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}};Q();function Y(){const t=new Date,f=new Date(2022,0,0),c=Number(t)-Number(f);let l=Math.floor(c/(1e3*60*60*24));for(;l>I.length;)l-=I.length;return l}function ee(t){return I[t]}const I=["fionn","zoey","fishton","jerry","mrwaffle","pickles","polenta","chou","trashley","eggbert","manebow","cindy","pancakes","yamyam","goat","marbles","mibbles","brenda","stephen","speen","shimp","vtuber","lesbian","queer","trans","nonbinary","fizone","twitch","lemmy","wafflebucks","maply","grandprix","nice","meatball","parade","track","frittaflan"],te=[...I];var P=(t,f)=>{const c=t.__vccOpts||t;for(const[l,e]of f)c[l]=e;return c};const se=t=>(B("data-v-5e04d106"),t=t(),O(),t),re={id:"keyboard"},ne={class:"row"},oe={key:0,class:"spacer"},ae=["onClick"],le={key:0},ie={key:1,xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},ue=se(()=>p("path",{fill:"currentColor",d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"},null,-1)),ce=[ue],de={key:1,class:"spacer"},fe=A({props:{letterStates:null},emits:["key"],setup(t){const f=["qwertyuiop".split(""),"asdfghjkl".split(""),["Enter",..."zxcvbnm".split(""),"Backspace"]];return(c,l)=>(o(),a("div",re,[(o(),a(w,null,k(f,(e,s)=>p("div",ne,[s===1?(o(),a("div",oe)):T("",!0),(o(!0),a(w,null,k(e,i=>(o(),a("button",{class:N([i.length>1&&"big",t.letterStates[i]]),onClick:g=>c.$emit("key",i)},[i!=="Backspace"?(o(),a("span",le,h(i),1)):(o(),a("svg",ie,ce))],10,ae))),256)),s===1?(o(),a("div",de)):T("",!0)])),64))]))}});var pe=P(fe,[["__scopeId","data-v-5e04d106"]]),d;(function(t){t[t.INITIAL=0]="INITIAL",t.CORRECT="correct",t.PRESENT="present",t.ABSENT="absent"})(d||(d={}));const j=t=>(B("data-v-46e52414"),t=t(),O(),t),ve={key:0,class:"message"},he={key:0},me=j(()=>p("header",null,[p("h1",null,"FIZOZLE")],-1)),_e={id:"board"},ye=j(()=>p("div",null,[_(" Use only X-letter words (including names) "),p("br"),_("Built on "),p("a",{href:"https://github.com/yyx990803/vue-wordle",target:"_blank"},"vue-wordle"),_(" and based on "),p("a",{href:"https://www.powerlanguage.co.uk/wordle/",target:"_blank"},"WORDLE"),_(". ")],-1)),we=A({setup(t){const f=Y(),c=ee(f),l=m(Array.from({length:6},()=>Array.from({length:c.length},()=>({letter:"",state:d.INITIAL}))));let e=m(0);const s=q(()=>l.value[e.value]);let i=m(""),g=m(""),R=m(-1);const v=m({});let C=!0;const L=r=>S(r.key);window.addEventListener("keyup",L),U(()=>{window.removeEventListener("keyup",L)});function S(r){!C||(/^[a-zA-Z]$/.test(r)?G(r.toLowerCase()):r==="Backspace"?K():r==="Enter"&&M())}function G(r){for(const u of s.value)if(!u.letter){u.letter=r;break}}function K(){for(const r of[...s.value].reverse())if(r.letter){r.letter="";break}}function M(){if(s.value.every(r=>r.letter)){const r=s.value.map(n=>n.letter).join("");if(!te.includes(r)&&r!==c){x(),b("Not in word list");return}const u=c.split("");s.value.forEach((n,E)=>{u[E]===n.letter&&(n.state=v.value[n.letter]=d.CORRECT,u[E]=null)}),s.value.forEach(n=>{!n.state&&u.includes(n.letter)&&(n.state=d.PRESENT,u[u.indexOf(n.letter)]=null,v.value[n.letter]||(v.value[n.letter]=d.PRESENT))}),s.value.forEach(n=>{n.state||(n.state=d.ABSENT,v.value[n.letter]||(v.value[n.letter]=d.ABSENT))}),C=!1,s.value.every(n=>n.state===d.CORRECT)?setTimeout(()=>{g.value=H(),b(["Genius","Magnificent","Impressive","Splendid","Great","Phew"][e.value],-1)},1600):e.value<l.value.length-1?(e.value++,setTimeout(()=>{C=!0},1600)):setTimeout(()=>{b(c.toUpperCase(),-1)},1600)}else x(),b("Not enough letters")}function b(r,u=1e3){i.value=r,u>0&&setTimeout(()=>{i.value=""},u)}function x(){R.value=e.value,setTimeout(()=>{R.value=-1},1e3)}const V={[d.CORRECT]:"\u{1F7E9}",[d.PRESENT]:"\u{1F7E8}",[d.ABSENT]:"\u2B1C",[d.INITIAL]:null};function H(){return l.value.slice(0,e.value+1).map(r=>r.map(u=>V[u.state]).join("")).join(`
`)}return(r,u)=>(o(),a(w,null,[$(Z,null,{default:W(()=>[i.value?(o(),a("div",ve,[_(h(i.value)+" ",1),g.value?(o(),a("pre",he,h(g.value),1)):T("",!0),_(" Fizozle #"+h(X(f)),1)])):T("",!0)]),_:1}),me,p("div",_e,[(o(!0),a(w,null,k(l.value,(n,E)=>(o(),a("div",{class:N(["row",R.value===E&&"shake"])},[(o(!0),a(w,null,k(n,(y,z)=>(o(),a("div",{class:N(["tile",y.letter&&"filled",y.state&&"revealed"])},[p("div",{class:"front",style:D({transitionDelay:`${z*300}ms`})},h(y.letter),5),p("div",{class:N(["back",y.state]),style:D({transitionDelay:`${z*300}ms`})},h(y.letter),7)],2))),256))],2))),256))]),$(pe,{onKey:S,"letter-states":v.value},null,8,["letter-states"]),ye],64))}});var ge=P(we,[["__scopeId","data-v-46e52414"]]);window.addEventListener("resize",F);F();function F(){document.body.style.setProperty("--vh",window.innerHeight+"px")}J(ge).mount("#app");