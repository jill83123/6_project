## 課前二 問題點
1. .navbar .menu li 不需將高度寫死
2. 由於瀏覽器預設文字大小就是 16px，所以 .navbar .menu li a 不用另外設定 font-size: 16px 唷
3. 承上，a 標籤可加上 border-bottom: 3px solid transparent 隱形下底線，避免 hover 時產生區塊跳動問題
4. img 可加上 display: block 轉為區塊元素，用於移除底部多餘空隙，具體可參考文章
5. 「甜點類別」是標題，建議拉到 ul 外使用標題標籤設計
6. 「所有甜點」的底色需依設計稿調整
7. 加入購物車按鈕不需多包一層 div，可直接用 a 標籤設計
8. 「訂閱你我的甜蜜郵件」也可改為標題標籤
9. .info, .link 皆可改為 ul > li 結構，另外電話與信箱可使用 Emmet 語法 a:tel, a:mail，增進使用者體驗