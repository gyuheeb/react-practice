ex04: 애플리케이션의 번들링(bundling)

1. webpack은 작게 분리된 많은 애플리케이션 모듈(js,css,scss/sass,images,font)들을 '의존성 분석'을 하여 하나의 js로 묶는 도구
2. 최종 결과물인 하나의 js파일을 번들(bundle)이라 하고 묶는 작업을 번들링(bundling)이라 한다.
3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업을 의미 하지 않는다.
4. 빌드 작업 (js 모듈)
    1) linting(ESLint, 문법체크) 작업
    2) document(JSDoc) 작업
    3) test(Mocha, jest) 작업
    4) 난독화/압축(uglify) 작업
    5) 번들링
5. js 모듈뿐만 아니라 다양한 에셋(images, css ,sass/scss, font)들도 모듈로 취급한다.
6. 설치
   $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass
7. 설치 확인
    $npx webpack --version 
 
8. webpack 설정 (webpack.config.js)
9. 스크립팅(package.json)
10. 애플리케이션 실행(테스트 서버 실행)
    $npm start
11.애플리케이션 빌드
    $npm run build























    