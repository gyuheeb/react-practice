ex01: js 모듈만 번들링

1. 설치 패키지
[ex01]$npm i -D webpack webpack-cli express
      
2. 스크립팅
"scripts": {
    "start": "node dev-server",
    "build": "npx webpack ./src/index.js -o ./public"
  } 

3. 빌드
[ex01]$ npm run build

4. 실행
[ex01]$ npm start










