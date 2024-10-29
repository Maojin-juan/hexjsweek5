const ticketInputs = {
  name: document.getElementById("ticketName"),
  imgUrl: document.getElementById("ticketImgUrl"),
  region: document.getElementById("ticketRegion"),
  description: document.getElementById("ticketDescription"),
  price: document.getElementById("ticketPrice"),
  num: document.getElementById("ticketNum"),
  rate: document.getElementById("ticketRate"),
};

// 新增票券的函數
export function addTicket(data, displayData) {
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

  Object.values(ticketInputs).forEach(input => input.value = "");
}
