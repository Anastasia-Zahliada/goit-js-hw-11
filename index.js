import{a as m,S as f,i as a}from"./assets/vendor-DQiTczw4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",g="54662892-22b49ba42344424c4ee41a8ca";function y(t){return m.get(d,{params:{key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(t){const o=t.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:i,comments:u,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span>${r}</span></p>
          <p class="info-item"><b>Views</b><span>${i}</span></p>
          <p class="info-item"><b>Comments</b><span>${u}</span></p>
          <p class="info-item"><b>Downloads</b><span>${p}</span></p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){l.innerHTML=""}function S(){var t;(t=document.querySelector(".loader"))==null||t.classList.remove("is-hidden")}function q(){var t;(t=document.querySelector(".loader"))==null||t.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",P);function P(t){t.preventDefault();const o=t.target.elements["search-text"].value.trim();if(!o){a.error({message:"Please enter a search query.",position:"topRight"});return}L(),S(),y(o).then(s=>{if(!s.hits||s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q(),c.reset()})}
//# sourceMappingURL=index.js.map
