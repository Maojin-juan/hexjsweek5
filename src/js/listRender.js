import { fetchData } from "/src/js/axios";
import { addTicket } from "/src/js/addTicket";
import { filterTickets } from "/src/js/filterTickets";
import { createTicketCard } from "/src/js/createTicketCard";
import {
  ticketCardArea,
  searchResultNum,
  addTicketButton,
} from "./domElements.js";
import { generateChart } from "./chart";

const regionSearch = document.getElementById("regionSearch");

let data = []; // 將 data 定義為全局變數，並初始化為空陣列

// 使用 async 函式來獲取數據
const loadData = async () => {
  try {
    const responseData = await fetchData();
    data = responseData.data; // 假設這裡獲取的數據是物件陣列
    displayData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

loadData(); // 調用 loadData 函式以加載數據

// 顯示資料的函數
export function displayData(dataToDisplay) {
  ticketCardArea.innerHTML = ""; // 清空之前的資料
  const fragment = document.createDocumentFragment();

  dataToDisplay.forEach((item) => {
    const li = createTicketCard(item);
    fragment.appendChild(li); // 將每個票券卡片添加到文檔片段中
  });

  ticketCardArea.appendChild(fragment); // 一次性將所有票券卡片添加到 DOM
  searchResultNum.textContent = ` ${dataToDisplay.length} `;
  generateChart(data);
}

// 篩選功能
regionSearch.addEventListener("change", () => {
  filterTickets(data, regionSearch.value, displayData);
});

// 新增票券
addTicketButton.addEventListener("click", () => {
  addTicket(data, displayData);
});
