if(!self.define){let e,s={};const r=(r,c)=>(r=new URL(r+".js",c).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let n={};const a=e=>r(e,o),d={module:{uri:o},exports:n,require:a};s[o]=Promise.all(c.map((e=>d[e]||a(e)))).then((e=>(i(...e),n)))}}define(["./workbox-8366b1fe"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"html/encuestadora.html",revision:"e11c97ff05090443d96ea59a58e3d5bc"},{url:"html/reportes.html",revision:"60d520b53e59a07090881fd8686635a4"},{url:"html/supervisora.html",revision:"b67694d894b47d29b89abb0d8c4cba2b"},{url:"index.html",revision:"0a47a3e0bbf144474976959e72f388a0"},{url:"index.js",revision:"3446aaca46e1c183e9f82e2fd439a6bb"},{url:"manifest.json",revision:"9449b20f064ca2f644972894ab11ccfb"},{url:"recursos/128.png",revision:"d98d4823341a7582e0cbcd50d82ce6e8"},{url:"recursos/256.png",revision:"6f81100e16f158b6906546a550820e61"},{url:"recursos/css/bootstrap.min.css",revision:"abe91756d18b7cd60871a2f47c1e8192"},{url:"recursos/css/style.css",revision:"5e61e4d33af1e32a9143321b6e1fdcc0"},{url:"recursos/endes.png",revision:"2b936a4fa3406fcdd5d9f3694d9e263e"},{url:"recursos/girl.png",revision:"790956428d6e81d03cb1e0cd3f703a04"},{url:"recursos/girlold.png",revision:"8ae30e24587f4cfa7aecc5ad721a41b9"},{url:"recursos/js/bootstrap.min.js",revision:"a08792f518b51f0f1422b5c96df9eb8a"},{url:"recursos/js/filesaver.js",revision:"455ef724a4d67a67ceb581df80e5490c"},{url:"recursos/js/jszip.js",revision:"64b377caf1ef6a0cd7dcc3391dea1d74"},{url:"recursos/js/script.js",revision:"98ec49532cfeb518efb9f825615c9b05"},{url:"recursos/js/xml.js",revision:"774feaabc29bca33c60ebc7d5bcb8ab7"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map