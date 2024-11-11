const generateChart = async (data) => {
  if (!Array.isArray(data) || data.length === 0) {
    console.error("提供的數據無效，請提供有效的數組。");
    return; // 如果數據無效，則返回
  }

  // 使用 reduce 計算每個地區的數量
  const areaCount = data.reduce((acc, item) => {
    acc[item.area] = (acc[item.area] || 0) + 1; // 計算每個地區的數量
    return acc;
  }, {});

  // 將 areaCount 轉換為 c3.js 所需的格式
  const columns = Object.entries(areaCount).map(([area, count]) => [
    area,
    count,
  ]);

  // 生成圖表
  const chart = c3.generate({
    bindto: "#chart", // 綁定到 HTML 中的元素
    data: {
      columns: columns,
      type: "donut",
      colors: {
        高雄: "#26C0C7",
        台北: "#5151D3",
        台中: "#E68618",
      },
    },
    donut: {
      label: {
        show: false,
      },
      title: "套票地區比重",
      width: 10,
      padAngle: 0.01,
    },
    size: {
      height: 186,
      width: 186,
    },
  });
};

export { generateChart };
