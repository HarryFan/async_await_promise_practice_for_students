// 透過 id 取得元素 "calculate"，並加入事件監聽器，當點擊事件發生時，執行 async 函式
document.getElementById('calculate').addEventListener('click', async () => {
    // 呼叫 calculateSquareRoot 函式，傳入參數 16，並等待函式回傳值
    const result = await calculateSquareRoot(16);
    // 將 id 為 "output" 的元素的內容設定為計算結果
    document.getElementById('output').textContent = `平方根: ${result}`;
});

// 宣告一個 Promise 函式，名稱為 calculateSquareRoot，參數為數字 number
function calculateSquareRoot(number) {
    // 回傳一個 Promise 物件
    return new Promise((resolve) => {
        // 設定一個延遲 1 秒的計時器
        setTimeout(() => {
            // 執行 Math.sqrt 計算平方根，並回傳結果
            resolve(Math.sqrt(number));
        }, 1000);
    });
}