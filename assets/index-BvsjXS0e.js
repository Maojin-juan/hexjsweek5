(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const o={name:document.getElementById("ticketName"),imgUrl:document.getElementById("ticketImgUrl"),region:document.getElementById("ticketRegion"),description:document.getElementById("ticketDescription"),price:document.getElementById("ticketPrice"),num:document.getElementById("ticketNum"),rate:document.getElementById("ticketRate")};function g(){Object.values(o).forEach(e=>e.value="")}function b(e,r){const n=o.name.value.trim(),c=o.imgUrl.value.trim(),t=o.region.value.trim(),i=o.description.value.trim(),a=o.price.value.trim(),s=o.num.value.trim(),d=o.rate.value.trim();if(!n||!c||!t||!i||!a||!s||!d){alert("請填寫所有欄位！");return}if(isNaN(a)||isNaN(s)||isNaN(d)){alert("價格、數量和評分必須是有效的數字！");return}const f={id:Date.now(),name:n,imgUrl:c,area:t,description:i,group:Number(s),price:Number(a),rate:Number(d)};e.push(f),r(e),g()}function h(e,r,n){if(!Array.isArray(e)){console.error("Data must be an array.");return}if(typeof r!="string"){console.error("Region filter must be a string.");return}const c=e.filter(i=>i.area===r||r==="");document.getElementById("noResults").classList.toggle("hidden",c.length>0),n(c)}function x(e){const r=document.createElement("li");r.className="mx-[5%] mb-[30px] w-[90%] rounded-[5px] border border-[#dee2e6] bg-white shadow-md sm:mx-[2%] sm:mb-[40px] sm:w-[46%] md:mb-[38px] md:ml-0 md:w-[31.3333%]",r.setAttribute("data-id",e.id);const n=e.imgUrl||"https://via.placeholder.com/150";return r.innerHTML=`
    <div class="ticketCardImg relative">
      <a class="block overflow-hidden" href="#">
          <img class="hover:scale-125 h-[180px] w-full object-cover transition-transform" src="${n}" alt="${e.name}">
      </a>
      <div class="ticketCardRegion -top-[13px] left-0 text-xl bg-[#64c3bf] p-[12px_20px]">${e.area}</div>
      <div class="ticketCardRank -bottom-[16px] left-0 min-w-10 bg-[#00807e] p-[5px_8px]">${e.rate}</div>
    </div>
    <div class="ticketCardContent">
      <div>
        <h3>
          <a href="#" class="border-b-5 mb-[20px] block border-b-2 border-primary pb-[5px] font-bold text-primary decoration-0 hover:text-[#64c3bf]">${e.name}</a>
        </h3>
        <p class="text-[#818a91] mb-8">${e.description}</p>
      </div>
      <div class="ticketCardInfo">
        <p class="font-bold">
          <span><i class="fas fa-exclamation-circle"></i></span>
          剩下最後 <span id="ticketCardNum">${e.group}</span> 組
        </p>
        <p class="flex items-center">
          TWD <span class="text-[2rem]" id="ticketCardPrice">$${e.price}</span>
        </p>
      </div>
    </div>
  `,r}const u=document.getElementById("regionSearch");let l=[{id:0,name:"肥宅心碎賞櫻3日",imgUrl:"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",area:"台中",description:"賞櫻花最佳去處。肥宅不得不去的超讚景點！",group:87,price:1400,rate:10},{id:1,name:"貓空纜車雙程票",imgUrl:"https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台北",description:"乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",group:99,price:240,rate:2},{id:2,name:"台中谷關溫泉會1日",imgUrl:"https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台中",description:"全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",group:20,price:1765,rate:7}];const p=document.getElementById("ticketCardArea"),v=document.getElementById("searchResultNum"),y=document.getElementById("addTicketBtn");function m(e){p.innerHTML="";const r=document.createDocumentFragment();e.forEach(n=>{const c=x(n);r.appendChild(c)}),p.appendChild(r),v.textContent=` ${e.length} `}m(l);u.addEventListener("change",()=>{h(l,u.value,m)});y.addEventListener("click",()=>{b(l,m)});
