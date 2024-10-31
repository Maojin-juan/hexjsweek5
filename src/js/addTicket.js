const ticketInputs = {
  name: document.getElementById("ticketName"),
  imgUrl: document.getElementById("ticketImgUrl"),
  region: document.getElementById("ticketRegion"),
  description: document.getElementById("ticketDescription"),
  price: document.getElementById("ticketPrice"),
  num: document.getElementById("ticketNum"),
  rate: document.getElementById("ticketRate"),
};

// 清空輸入框的函數
function clearInputs() {
  Object.values(ticketInputs).forEach((input) => (input.value = ""));
}

// 新增票券的函數
export function addTicket(data, displayData) {
  const ticketName = ticketInputs.name.value.trim();
  const ticketImgUrl = ticketInputs.imgUrl.value.trim();
  const ticketRegion = ticketInputs.region.value.trim();
  const ticketDescription = ticketInputs.description.value.trim();
  const ticketPrice = ticketInputs.price.value.trim();
  const ticketNum = ticketInputs.num.value.trim();
  const ticketRate = ticketInputs.rate.value.trim();

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

  // 檢查數字欄位是否為有效數字
  if (isNaN(ticketPrice) || isNaN(ticketNum) || isNaN(ticketRate)) {
    alert("價格、數量和評分必須是有效的數字！");
    return;
  }

  const newTicket = {
    id: Date.now(),
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
  clearInputs(); // 清空輸入框
}
