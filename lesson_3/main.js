// 透過 id 取得元素 "load-image"，並加入事件監聽器，當點擊事件發生時，執行 loadImage 函式
document.getElementById('load-image').addEventListener('click', loadImage);

// 宣告一個 async 函式，名稱為 loadImage
async function loadImage() {
    // 指定圖片 URL
    const imageUrl = 'https://picsum.photos/300/300';
    // 取得 id 為 "image" 的元素
    const imageElement = document.getElementById('image');
    try {
        // 等待圖片載入完成
        await loadImageAsync(imageUrl);
        // 將圖片元素的 src 設定為圖片 URL
        imageElement.src = imageUrl;
    } catch (error) {
        // 如果載入失敗，顯示錯誤訊息
        console.error('Error:', error);
    }

}

// 宣告一個 Promise 函式，名稱為 loadImageAsync，參數為圖片 URL
function loadImageAsync(url) {
    // 回傳一個 Promise 物件
    return new Promise((resolve, reject) => {
        // 建立一個圖片元素
        const image = new Image();
        // 將圖片元素的 src 設定為圖片 URL
        image.src = url;
        // 當圖片載入完成時，執行 resolve
        image.onload = () => resolve(image);
        // 當圖片載入失敗時，執行 reject，並回傳一個錯誤訊息
        image.onerror = () => reject(new Error(`Failed to load image at ${url}`));
    });
}