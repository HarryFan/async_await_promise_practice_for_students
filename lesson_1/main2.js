// 透過 id 取得元素 "load-data"，並加入事件監聽器，當點擊事件發生時，執行 loadData 函式
document.getElementById('load-data').addEventListener('click', loadData);
// 設定 API 的網址：取得隨機狗狗圖片的 API
const api = "https://dog.ceo/api/breeds/image/random"

// 宣告一個 async 函式，名稱為 loadData
async function loadData() {
    try {
        // 透過 fetch 發送請求取得 API 回傳的 response
        const response = await fetch(api);
        // 將 response 的內容轉換成 JSON 格式的資料
        const data = await response.json();

        // 將網址儲存在一個變數中
        const imageUrl = data.message;

        // 透過 id 取得元素 "output"，並將圖片的 src 設定為圖片 URL
        document.getElementById('output').src = imageUrl;
    } catch (error) {
        // 如果請求失敗，顯示錯誤訊息
        console.error('Error:', error);
    }
}