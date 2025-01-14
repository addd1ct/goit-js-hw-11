import{S as m,i as y}from"./assets/vendor-D36Z4WAh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const h="48228691-89796883a04c0782a049fa841",g="https://pixabay.com/api/";async function b(r,s=1,n=40){const t=`${g}?key=${h}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${n}`;try{const e=await fetch(t);if(!e.ok)throw new Error("Failed to fetch data");return await e.json()}catch(e){throw console.error(e),e}}let i=null;function w(r,s){const n=r.map(t=>`
    <a href="${t.largeImageURL}" class="gallery-item">
      <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/>
      <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </a>
  `).join("");s.innerHTML=n,i?i.refresh():i=new m(".gallery-item")}function L(r){r.innerHTML=""}function c(r){y.error({title:"Error",message:r})}function $(r){y.success({title:"Success",message:r})}const l=document.querySelector("#search-form"),u=document.querySelector(".gallery"),f=document.querySelector(".loader");let d="",p=1;l.addEventListener("submit",async r=>{r.preventDefault();const s=l.elements.searchQuery.value.trim();if(!s){c("Please enter a search term.");return}d=s,p=1,L(u),f.style.display="block";try{const n=await b(d,p);n.hits.length===0?c("Sorry, there are no images matching your search query. Please try again."):(w(n.hits,u),$(`Found ${n.totalHits} images.`))}catch{c("Something went wrong. Please try again later.")}finally{f.style.display="none"}});
//# sourceMappingURL=index.js.map
