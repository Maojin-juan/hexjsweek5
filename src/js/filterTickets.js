export function filterTickets(data, regionFilter, displayData) {
  // 檢查 data 和 regionFilter 的有效性
  if (!Array.isArray(data)) {
    console.error("Data must be an array.");
    return;
  }

  if (typeof regionFilter !== "string") {
    console.error("Region filter must be a string.");
    return;
  }

  // 使用 filter 方法篩選數據
  const filteredData = data.filter(
    (item) => item.area === regionFilter || regionFilter === "",
  );

  const noResultsDiv = document.getElementById("noResults");

  // 根據篩選結果顯示或隱藏查無資料的 div
  noResultsDiv.classList.toggle("hidden", filteredData.length > 0);

  // 顯示篩選後的數據
  displayData(filteredData);
}
