# URL Shortener 短網址產生器

## 專案畫面

![image](https://github.com/AlanChiangg/short-url-generator/public/image/img1.jpg)

![image](https://github.com/AlanChiangg/short-url-generator/public/image/img2.jpg)

## 介紹

將長長的網址縮成短短的「短網址產生器」

## 功能

- 輸入網址轉換成短網址
- 點擊按鈕複製網址
- 透過短網址轉址到原本網址

## 開始使用

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/AlanChiangg/short-url-generator.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd short-url-generator
```

3. 安裝 npm 套件

```
npm install
```

4. 安裝 nodemon 套件

```
npm i nodemon 
```

5. 安裝完畢後，設定環境變數連線 MongoDB

```   
MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
```

6. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

7. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
Express is running on http://localhost:3000
```

## 開發工具

- Node.js 18.16.0
- Express 4.18.2
- Express-Handlebars 3.0.0
- MongoDB
- mongoose 7.3.0