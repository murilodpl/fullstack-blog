var x=Object.defineProperty,b=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var v=(r,s,t)=>s in r?x(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t,o=(r,s)=>{for(var t in s||(s={}))C.call(s,t)&&v(r,t,s[t]);if(g)for(var t of g(s))k.call(s,t)&&v(r,t,s[t]);return r},d=(r,s)=>b(r,D(s));import{a as E,r as h,j as u,b as e,u as R,A as q,m as w,c as F,R as S,d as L,e as O,f as j,B as A}from"./vendor.cec0b354.js";const B=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}};B();const N=E.create({baseURL:"https://he4rtlabs-challenges-03.herokuapp.com/",validateStatus:!1});function T(r){const[s,t]=h.exports.useState({email:"",password:"",name:""}),[c,a]=h.exports.useState({email:!1,password:!1,isDuplicate:!1,err:!1,isLoading:!1,success:!1});function i(p){a({email:!1,password:!1,isDuplicate:!1,err:!1,isLoading:!1});let{name:l,value:n}=p.target;t(m=>d(o({},m),{[l]:n}))}function f(p){if(p.preventDefault(),s.email=="")return a(l=>d(o({},l),{email:!0}));if(a(l=>d(o({},l),{email:!1})),s.name=="")return a(l=>d(o({},l),{name:!0}));if(a(l=>d(o({},l),{name:!1})),s.password=="")return a(l=>d(o({},l),{password:!0}));a(l=>d(o({},l),{password:!1})),a(l=>d(o({},l),{isLoading:!0,err:!1})),N.post("/register",s).then(l=>{l.data.status===201?(t({email:"",password:"",name:""}),a(n=>d(o({},n),{isLoading:!1,success:!0})),setTimeout(()=>{r.handleTransition()},1e3)):a(n=>d(o({},n),{isLoading:!1,isDuplicate:!0,success:!1}))}).catch(l=>{a(n=>d(o({},n),{isLoading:!1,err:!0,success:!1}))})}return u("div",{className:"registerFrame",children:[e("h1",{className:"text-white",children:"Criar Conta"}),u("form",{name:"registerForm",id:"registerForm",children:[e("input",{className:`${(c.email||c.isDuplicate)&&"border-red-500"}`,type:"email",id:"email",name:"email",value:s.email,onChange:i,placeholder:"Digite o seu email...",required:!0}),e("input",{className:`${(c.name||c.isDuplicate)&&"border-red-500"}`,type:"text",id:"name",name:"name",value:s.name,onChange:i,placeholder:"Digite o seu nome...",required:!0}),e("input",{className:`${(c.password||c.isDuplicate)&&"border-red-500"}`,type:"password",id:"password",name:"password",value:s.password,onChange:i,placeholder:"Digite a sua senha...",required:!0}),c.isDuplicate&&e("p",{className:"text-red-500",children:"Email j\xE1 cadastrado..."}),c.err&&e("p",{className:"text-red-500",children:"Ocorreu algum erro, tente novamente mais tarde."}),c.isLoading&&e("div",{className:"flex justify-center",children:u("div",{className:"lds-roller",children:[e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{})]})}),c.success&&e("p",{className:"text-green-500",children:"Cadastrado com sucesso!"}),u("div",{className:"btnDiv text-white",children:[u("span",{children:["J\xE1 possui uma conta? Clique ",e("a",{onClick:r.handleTransition,children:"aqui"})]}),e("input",{className:"btnRegister",type:"submit",onClick:f,value:"Registrar"})]})]})]})}function $(r){const s=R(),[t,c]=h.exports.useState({email:"",password:""}),[a,i]=h.exports.useState({email:!1,password:!1,wrongLogin:!1,err:!1,isLoading:!1,success:!1});function f(l){i({email:!1,password:!1,wrongLogin:!1,err:!1,isLoading:!1});let{name:n,value:m}=l.target;c(y=>d(o({},y),{[n]:m}))}function p(l){if(l.preventDefault(),t.email=="")return i(n=>d(o({},n),{email:!0}));if(i(n=>d(o({},n),{email:!1})),t.password=="")return i(n=>d(o({},n),{password:!0}));i(n=>d(o({},n),{password:!1})),i(n=>d(o({},n),{isLoading:!0,err:!1})),N.post("/login",t).then(n=>{n.data.status===200?(i(m=>d(o({},m),{isLoading:!1,success:!0})),setTimeout(()=>{s("dashboard",{state:o({},n.data[0])})},1e3)):i(m=>d(o({},m),{success:!1,isLoading:!1,wrongLogin:!0}))}).catch(n=>{i(m=>d(o({},m),{success:!1,isLoading:!1,err:!0}))})}return u("div",{className:"loginFrame",children:[e("h1",{children:"Realizar Login"}),u("form",{name:"loginForm",id:"loginForm",children:[e("input",{className:`${(a.email||a.wrongLogin)&&"border-red-500"}`,type:"email",id:"email",name:"email",value:t.email,onChange:f,placeholder:"Digite o seu email...",required:!0}),e("input",{className:`${(a.password||a.wrongLogin)&&"border-red-500"}`,type:"password",id:"password",name:"password",value:t.password,onChange:f,placeholder:"Digite a sua senha...",required:!0}),a.wrongLogin&&e("p",{className:"text-red-500",children:"Email ou senha errado..."}),a.err&&e("p",{className:"text-red-500",children:"Ocorreu algum erro, tente novamente mais tarde."}),a.isLoading&&e("div",{className:"flex justify-center",children:u("div",{className:"lds-roller invert",children:[e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{})]})}),a.success&&e("p",{className:"text-green-500",children:"Logado com sucesso!"}),u("div",{className:"btnDiv",children:[u("span",{children:["Ainda n\xE3o possui uma conta? Clique ",e("a",{onClick:r.handleTransition,children:"aqui"})]}),e("input",{className:"btnLogin",type:"submit",onClick:p,value:"Entrar"})]})]})]})}function I(){const[r,s]=h.exports.useState(!0),t={login:{backgroundColor:"#f2f2f2",scaleY:1},register:{backgroundColor:"#1a1b1e",scaleY:1}};function c(){s(a=>!a)}return u("div",{className:"h-full w-full relative p-4",children:[e(q,{exitBeforeEnter:!0,children:e(w.div,{className:"home absolute top-0 left-0 -z-10",style:{transformOrigin:"top"},variants:t,initial:{scaleY:0},animate:r?"login":"register",transition:{type:"tween",stiffness:100,duration:.5}},r)}),e(w.div,{className:"home",initial:{opacity:0,delay:1},animate:{opacity:1},exit:{opacity:0},transition:{type:"Inertia",stiffness:100,duration:.75},children:r?e($,{handleTransition:c}):e(T,{handleTransition:c})},r)]})}function M(){const{state:r}=F();return u("div",{className:"h-full flex flex-col justify-center items-center p-4",children:[u("h1",{children:["Bem-vindo ",r.name]}),u("p",{children:["Email: ",r.email]}),u("p",{children:["Admin: ",r.admin?"Sim":"N\xE3o"]})]})}function P(){return e("div",{className:"App",children:u(S,{children:[e(L,{path:"/",element:e(I,{})}),e(L,{path:"/dashboard",element:e(M,{})})]})})}O.render(e(j.StrictMode,{children:e(A,{children:e(P,{})})}),document.getElementById("root"));