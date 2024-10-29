// import { fetchData } from "/src/js/axios";
import { addTicket } from "/src/js/addTicket";
import { filterTickets } from "/src/js/filterTickets";

const regionSearch = document.getElementById("regionSearch");

let data = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
];
// fetchData()
//   .then((fetchedData) => {
//     data = fetchedData;
//     displayData(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//     throw error;
//   });

const ticketCardArea = document.getElementById("ticketCardArea");
const searchResultNum = document.getElementById("searchResultNum");
const addTicketButton = document.getElementById("addTicketBtn");

// 顯示資料的函數
export function displayData(dataToDisplay) {
  ticketCardArea.innerHTML = ""; // 清空之前的資料
  dataToDisplay.forEach((item) => {
    const li = document.createElement("li");
    li.className =
      "mx-[5%] mb-[30px] w-[90%] rounded-[5px] border border-[#dee2e6] bg-white shadow-md sm:mx-[2%] sm:mb-[40px] sm:w-[46%] md:mb-[38px] md:ml-0 md:w-[31.3333%]";
    li.innerHTML = `
      <div class="ticketCardImg relative">
        <a class="block overflow-hidden" href="#">
          <img class="hover:scale-125 h-[180px] w-full object-cover transition-transform" src="${item.imgUrl}" alt="${item.name}">
        </a>
        <div class="ticketCardRegion -top-[13px] left-0 text-xl bg-[#64c3bf] p-[12px_20px]">${item.area}</div>
        <div class="ticketCardRank -bottom-[16px] left-0 min-w-10 bg-[#00807e] p-[5px_8px]">${item.rate}</div>
      </div>
      <div class="ticketCardContent">
        <div>
          <h3>
            <a href="#" class="border-b-5 mb-[20px] block border-b-2 border-primary pb-[5px] font-bold text-primary decoration-0 hover:text-[#64c3bf]">${item.name}</a>
          </h3>
          <p class="text-[#818a91] mb-8">${item.description}</p>
        </div>
        <div class="ticketCardInfo">
          <p class="font-bold">
            <span><i class="fas fa-exclamation-circle"></i></span>
            剩下最後 <span id="ticketCardNum">${item.group}</span> 組
          </p>
          <p class="flex items-center">
            TWD <span class="text-[2rem]" id="ticketCardPrice">$${item.price}</span>
          </p>
        </div>
      </div>
    `;
    ticketCardArea.appendChild(li);
  });
  searchResultNum.textContent = ` ${dataToDisplay.length} `;
}

displayData(data);

// 篩選功能
regionSearch.addEventListener("change", () => {
  filterTickets(data, regionSearch.value, displayData);
});

// 新增票券
addTicketButton.addEventListener("click", () => {
  addTicket(data, displayData);
});
