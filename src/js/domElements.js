// getElementById domElements
const $ = (elements) => {
  return document.getElementById(elements);
};

// ticketInputs
const ticketInputs = {
  name: $("ticketName"),
  imgUrl: $("ticketImgUrl"),
  region: $("ticketRegion"),
  description: $("ticketDescription"),
  price: $("ticketPrice"),
  num: $("ticketNum"),
  rate: $("ticketRate"),
};

// listRender domElements
const ticketCardArea = $("ticketCardArea");
const searchResultNum = $("searchResultNum");
const addTicketButton = $("addTicketBtn");

// export
export { ticketInputs, ticketCardArea, searchResultNum, addTicketButton };
