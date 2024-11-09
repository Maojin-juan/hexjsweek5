import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // 重新拋出錯誤以便在調用時處理
  }
};
