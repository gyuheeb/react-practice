ex05: Component - Lifecycle

01. Class Component
   01) LifecycleI : Mount
       - 1. constructor
       - 2. getDerivedStateFromProps
       - 3. render***
       - 4. componentDidMount***
   02) LifecycleII : update
       - 1. getDerivedStateFromProps
       - 2. shouldComponentUpdate*
       - 3. render***
       - 4. getSnapshotBeforeUpdate
       - 5. componentDidUpdate***

   03) LifecycleII : Unmount
       componentWillUnmount***

02. Functional Component : Alternative(대체) - useEffect
   - getDerivedStateFromProps 대체
   - After Rendering(componentDidMount, componentDidUpdate) 대체
   - 바낀 상태에 의존적으로 코드 실행 가능
   - componentWillUnmount 대체

==============================================================================================

1. 설치
    1) 개발툴
       $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin
    2) react library
       $ npm i react react-dom prop-types styled-components react-addons-update

2. webpack.config.js 설정
3. babel.config.json 설정
4. npm 스크립팅
5. 테스트 서버 실행
   $ npm run debug src=(01|02|03|04)
