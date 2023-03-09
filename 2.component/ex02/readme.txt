ex02: Component Styling

1) Inline Styling
2) Normal CSS
   - css-loader options: (modules:false)
   - $ npm run debug src=02 css-modules=false
3) CSS Module I
   - css-loader options: (modules:true)
   - $ npm run debug src=02 css-modules=true
4) CSS Module II
  - css-loader options: (modules:true)
   - $ npm run debug src=02 css-modules=true
5) SASS & SCSS
  - css-loader options: (modules:true)
  - $ npm run debug src=02 css-modules=true
6) CSS in JS : Styled Component*, Less & Styleable    - 03/09
   - $ npm i styled-components
   - css-loader options: (modules:true)
   - $ npm run debug src=02 css-modules=true
7) React Modal
8) Modal: Material UI

src/01: FoodList : 함수 컴포넌트
src/02: FoodList : Data Flow(Top -> Down): 함수 컴포넌트
src/03: FoodList : Data Flow(Top -> Down): 클래스 컴포넌트
src/04: Property Validation
===============================================

1. 설치
    1) 개발툴
       $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    2) react library
       $ npm i react react-dom prop-types styled-components

2. webpack.config.js 설정
3. babel.config.json 설정
4. npm 스크립팅
5. 테스트 서버 실행
   $ npm run debug src=(01|02|03|04) css-modules=(true|false)
