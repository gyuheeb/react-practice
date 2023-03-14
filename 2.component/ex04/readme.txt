ex04: Component - State


01. 기본개념
   - 컴포넌트 내부의 상태를 나타내는 쓰기 가능한 데이터
   - 컴포넌트 this.state 안에 여러 데이터(상태)를 가질 수 있다.
   - "상태가 변경되면 컴포넌트의 반응형(Reactive) 렌더링이 트리거가 되고 컴포넌트와 자식 컴포넌트가 다시 렌더링이 된다."
   - 클래스 컴포넌트에서는 constructor 안에서 초기화 한다.
   - 클래스 컴포넌트에서는 반드시 상태 변경을 위해서 setState함수를 사용한다.
   - 함수 컴포넌트에서는  useState 훅(hook) 함수를 사용해서 초기화 한다.
   - 함수 컴포넌트에서는 상태변경을 위해 userState 훅 함수에서 반환된 배열의 두번째 요소를 함수로 사용한다.

02. 제어 컴포넌트
   1) input, textarea , select , ... 같은 폼(form) 컴포넌트에서 사용자 입력에 따라 state 값이 변경되고 렌더링 컴포넌트
   
   2) 제어 컴포넌트
      - "컴포넌트 UI를 외부에서 변경할 수 없고 내부의 상태 변경으로 가능하다." : ㄹㅣ액트 작성 원칙을 준수 할 수 있다.
      - 사용자 입력 값을 제어(제한, 다양한 Validation)이 가능하다.

   3) 비제어 컴포넌트
      - 폼 컨포넌트를 반드시 제어 컴포넌트로 작성해야 하는 것은 아니다.
      - 상태를 제어하지 않는 비 제어 컴포넌트를 작성할 수 있다.

03. 상태 컴포넌트 vs 순수(Pure, Dumb)컴포넌트
   1) 상태 컴포넌트
      - 상태를 관리하는 컴포넌트
      - 보통 상태 컴포넌트는 컴포넌트 계층의 상위에 있다.
      - 보통 상태 컴포넌트는 순수 컴포넌트를 하나 이상 래핑 할 수 있다.
   
   2) 순수 컴포넌트 
      - 상태 없이 속성(props)로 화면을 렌더링 하는 컴포넌트
      - 재사용성이 좋고 테스트 하기도 좋다.
   
   3) 애플리케이션의 컴포넌트는 상태 컴포넌트와 순수 컴포넌트로 분리해서 개발하는 것이 좋다.

04. Data Flow (Bottom -> Top)

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
   $ npm run debug src=(01|02|03|04)
