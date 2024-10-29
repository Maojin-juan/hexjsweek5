// 篩選票券的函數
export function filterTickets(data, selectedRegion, displayData) {
  const filteredData = data.filter(
    (item) => item.area === selectedRegion || selectedRegion === ""
  );
  displayData(filteredData);
} 