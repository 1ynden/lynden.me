import{S as A,P as S,W as g,G as C,A as l,a as y,b as T,T as E,c as H,M as k,d as z,e as F,C as G}from"./vendor.286170f7.js";const O=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const P of i.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&c(P)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}};O();var h,m,p,f,M,r;const o=360/(document.documentElement.scrollHeight-document.documentElement.clientHeight);var R=new G;const a=new A,d=new S(75,window.innerWidth/window.innerHeight,.1,1e3),w=new g({canvas:document.querySelector("#bg"),precision:"mediump"}),u=new C;u.load("crtmonitor.glb",function(e){e.scene.rotation.set(.5,-1.15,.15),e.scene.scale.set(3,3,5),e.scene.position.set(17,80*Math.sin(-100*o*Math.PI/180),80*Math.cos(-100*o*Math.PI/180));const n=e.animations;h=new l(e.scene),h.clipAction(n[0]).play(),a.add(e.scene)},void 0,function(e){console.error(e)});u.load("grad.glb",function(e){e.scene.rotation.set(.75,1,0),e.scene.position.set(-14,80*Math.sin(-210*o*Math.PI/180),80*Math.cos(-210*o*Math.PI/180)),e.scene.scale.set(5,5,5);const n=e.animations;m=new l(e.scene),m.clipAction(n[3]).play(),a.add(e.scene)},void 0,function(e){console.error(e)});u.load("snake.glb",function(e){e.scene.rotation.set(0,0,1),e.scene.position.set(25,80*Math.sin(-350*o*Math.PI/180),80*Math.cos(-350*o*Math.PI/180)),e.scene.scale.set(1.5,1.5,1.5);const n=e.animations;p=new l(e.scene);for(let s=0;s<n.length;s++)p.clipAction(n[s]).play();a.add(e.scene)},void 0,function(e){console.error(e)});u.load("address.glb",function(e){e.scene.rotation.set(.85,.25,.15),e.scene.position.set(-11,80*Math.sin(-560*o*Math.PI/180),80*Math.cos(-560*o*Math.PI/180)),e.scene.scale.set(2,2,2);const n=e.animations;f=new l(e.scene),f.clipAction(n[0]).play(),a.add(e.scene)},void 0,function(e){console.error(e)});u.load("gitcoin.glb",function(e){e.scene.rotation.set(1,.5,.35),e.scene.position.set(-14,80*Math.sin(-458*o*Math.PI/180),80*Math.cos(-458*o*Math.PI/180)),e.scene.scale.set(2,2,2);const n=e.animations;M=new l(e.scene),M.clipAction(n[0]).play(),a.add(e.scene)},void 0,function(e){console.error(e)});w.setPixelRatio(window.devicePixelRatio);w.setSize(window.innerWidth,window.innerHeight);d.position.set(0,0,0);w.render(a,d);const I=new y(14483677);I.position.set(12,80*Math.sin(-75*o*Math.PI/180)-2,80*Math.cos(-75*o*Math.PI/180)+3);const b=new y(16777215);b.position.set(-9,80*Math.sin(-205*o*Math.PI/180)+2,80*Math.cos(-205*o*Math.PI/180)+3);const x=new y(2237030);x.position.set(-9,80*Math.sin(-458*o*Math.PI/180)+2,80*Math.cos(-458*o*Math.PI/180)+3);const W=new T(16777215);a.add(I,b,x,W);function q(){const e=new H(.25,24,24),n=new k({color:16777215}),s=new z(e,n),[c,t,i]=Array(3).fill().map(()=>F.randFloatSpread(200));s.position.set(c,t,i),a.add(s)}Array(200).fill().forEach(q);const N=new E().load("space.jpg");a.background=N;function j(){var e=document.documentElement,n=document.body,s="scrollTop",c="scrollHeight";return(e[s]||n[s])/((e[c]||n[c])-e.clientHeight)*100}function L(){const e=-j();d.position.y=100*Math.sin(e*Math.PI/180),d.rotation.x=-e*Math.PI/180,d.position.z=100*Math.cos(e*Math.PI/180)}document.body.onscroll=L;L();const v=function(){requestAnimationFrame(v),r=R.getDelta(),h&&h.update(r),m&&m.update(r),p&&p.update(r),f&&f.update(r),M&&M.update(r),w.render(a,d)};window.addEventListener("resize",function(e){this.location.reload()},!0);window.onbeforeunload=function(){window.scrollTo(0,0)};v();
