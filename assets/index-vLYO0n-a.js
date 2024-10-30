(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const n={name:document.getElementById("ticketName"),imgUrl:document.getElementById("ticketImgUrl"),region:document.getElementById("ticketRegion"),description:document.getElementById("ticketDescription"),price:document.getElementById("ticketPrice"),num:document.getElementById("ticketNum"),rate:document.getElementById("ticketRate")};function b(c,t){const i=n.name.value,o=n.imgUrl.value,e=n.region.value,r=n.description.value,a=n.price.value,l=n.num.value,m=n.rate.value;if(!i||!o||!e||!r||!a||!l||!m){alert("請填寫所有欄位！");return}const f={id:Date.now(),name:i,imgUrl:o,area:e,description:r,group:Number(l),price:Number(a),rate:Number(m)};c.push(f),t(c),Object.values(n).forEach(g=>g.value="")}function x(c,t,i){const o=c.filter(e=>e.area===t||t==="");i(o)}const p=document.getElementById("regionSearch");let s=[{id:0,name:"肥宅心碎賞櫻3日",imgUrl:"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",area:"高雄",description:"賞櫻花最佳去處。肥宅不得不去的超讚景點！",group:87,price:1400,rate:10},{id:1,name:"貓空纜車雙程票",imgUrl:"https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台北",description:"乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",group:99,price:240,rate:2},{id:2,name:"台中谷關溫泉會1日",imgUrl:"https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台中",description:"全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",group:20,price:1765,rate:7}];const u=document.getElementById("ticketCardArea"),h=document.getElementById("searchResultNum"),v=document.getElementById("addTicketBtn");function d(c){u.innerHTML="",c.forEach(t=>{const i=document.createElement("li");i.className="mx-[5%] mb-[30px] w-[90%] rounded-[5px] border border-[#dee2e6] bg-white shadow-md sm:mx-[2%] sm:mb-[40px] sm:w-[46%] md:mb-[38px] md:ml-0 md:w-[31.3333%]",i.innerHTML=`
      <div class="ticketCardImg relative">
        <a class="block overflow-hidden" href="#">
          <img class="hover:scale-125 h-[180px] w-full object-cover transition-transform" src="${t.imgUrl}" alt="${t.name}">
        </a>
        <div class="ticketCardRegion -top-[13px] left-0 text-xl bg-[#64c3bf] p-[12px_20px]">${t.area}</div>
        <div class="ticketCardRank -bottom-[16px] left-0 min-w-10 bg-[#00807e] p-[5px_8px]">${t.rate}</div>
      </div>
      <div class="ticketCardContent">
        <div>
          <h3>
            <a href="#" class="border-b-5 mb-[20px] block border-b-2 border-primary pb-[5px] font-bold text-primary decoration-0 hover:text-[#64c3bf]">${t.name}</a>
          </h3>
          <p class="text-[#818a91] mb-8">${t.description}</p>
        </div>
        <div class="ticketCardInfo">
          <p class="font-bold">
            <span><i class="fas fa-exclamation-circle"></i></span>
            剩下最後 <span id="ticketCardNum">${t.group}</span> 組
          </p>
          <p class="flex items-center">
            TWD <span class="text-[2rem]" id="ticketCardPrice">$${t.price}</span>
          </p>
        </div>
      </div>
    `,u.appendChild(i)}),h.textContent=` ${c.length} `}d(s);p.addEventListener("change",()=>{x(s,p.value,d)});v.addEventListener("click",()=>{b(s,d)});
