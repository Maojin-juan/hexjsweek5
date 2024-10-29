import { fetchData } from "./axios";

const regionSearch = document.querySelector(".regionSearch");

let data = [];

fetchData()
  .then((fetchedData) => {
    data = fetchedData;
    displayData(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    throw error;
  });

const ticketCardArea = document.getElementById("ticketCardArea");
const searchResultNum = document.getElementById("searchResultNum");
const addTicketButton = document.querySelector(".addTicketBtn");

// 顯示資料的函數
export function displayData(dataToDisplay) {
  ticketCardArea.innerHTML = ""; // 清空之前的資料
  dataToDisplay.forEach((item) => {
    const li = document.createElement("li");
    li.className = "ticketCard";
    li.innerHTML = `
      <div class="ticketCard-img">
        <a href="#">
            <img src="${item.imgUrl}" alt="${item.name}">
        </a>
        <div class="ticketCard-region">${item.area}</div>
        <div class="ticketCard-rank">${item.rate}</div>
      </div>
      <div class="ticketCard-content">
        <div>
          <h3>
              <a href="#" class="ticketCard-name">${item.name}</a>
          </h3>
          <p class="ticketCard-description">${item.description}</p>
        </div>
        <div class="ticketCard-info">
          <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num">${item.group}</span> 組
          </p>
          <p class="ticketCard-price">
              TWD <span id="ticketCard-price">$${item.price}</span>
          </p>
        </div>
      </div>
    `;
    ticketCardArea.appendChild(li);
  });
  searchResultNum.textContent = ` ${dataToDisplay.length} `;
}

// 篩選功能
regionSearch.addEventListener("change", () => {
  const selectedRegion = regionSearch.value;
  const filteredData = data.filter(
    (item) => item.area === selectedRegion || selectedRegion === "",
  );
  displayData(filteredData);
});

const ticketInputs = {
  name: document.getElementById("ticketName"),
  imgUrl: document.getElementById("ticketImgUrl"),
  region: document.getElementById("ticketRegion"),
  description: document.getElementById("ticketDescription"),
  price: document.getElementById("ticketPrice"),
  num: document.getElementById("ticketNum"),
  rate: document.getElementById("ticketRate"),
};

addTicketButton.addEventListener("click", () => {
  const ticketName = ticketInputs.name.value;
  const ticketImgUrl = ticketInputs.imgUrl.value;
  const ticketRegion = ticketInputs.region.value;
  const ticketDescription = ticketInputs.description.value;
  const ticketPrice = ticketInputs.price.value;
  const ticketNum = ticketInputs.num.value;
  const ticketRate = ticketInputs.rate.value;

  // 檢查必填欄位是否填寫
  if (
    !ticketName ||
    !ticketImgUrl ||
    !ticketRegion ||
    !ticketDescription ||
    !ticketPrice ||
    !ticketNum ||
    !ticketRate
  ) {
    alert("請填寫所有欄位！");
    return;
  }

  const newTicket = {
    id: Date.now(), // 使用當前時間戳作為新 ID
    name: ticketName,
    imgUrl: ticketImgUrl,
    area: ticketRegion,
    description: ticketDescription,
    group: Number(ticketNum),
    price: Number(ticketPrice),
    rate: Number(ticketRate),
  };

  data.push(newTicket);

  displayData(data);

  document.getElementById("ticketName").value = "";
  document.getElementById("ticketImgUrl").value = "";
  document.getElementById("ticketRegion").value = "";
  document.getElementById("ticketDescription").value = "";
  document.getElementById("ticketPrice").value = "";
  document.getElementById("ticketNum").value = "";
  document.getElementById("ticketRate").value = "";
});
