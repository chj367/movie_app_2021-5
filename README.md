# 조항재 201840229
***
## [MENU]
- [0908-2주차](#0908) : 리액트로 클론 코딩 시작하기

***
## [09월 08일] <a id="0908"></a>
### 오늘 배운 내용 요약
> 1. create-react-app 개념
> 2. 개발환경확인 및 리액트 앱 폴더 생성
> 3. 리액트 앱 시작
> 4. 리액트 동작 과정 확인
> 5. 컴포넌트

### [2장. 리액트로 클론 코딩 시작하기]
#### <1. create-react-app 개념>
- 웹팩(Webpack)은 자바스크립트 앱을 위한 정적 모듈들을 하나로 묶어주는 번들러.
- 바벨(Bavel)은 최신 자바스크립트 문법을 사용할 수 있게 해주는 트랜스파일러.<br><br>

- React로 개발하는 경우 웹팩이나 바벨은 신경 X <br><br>

- create-react-app은 react를 위한 보일러 플레이트. 이 한 줄을 입력해서 리액트 개발을 바로 시작 가능.

#### <2. 개발환경확인 및 리액트앱 폴더 생성>
- VS코드에서 터미널 키는 방법: Ctrl+Shift+백틱<br><br>
- 개발환경확인: 버젼이 나오면 설치완료 상태.
```jsx
git --version   // git 
node -v     // node.js
npm -v     // npm
npx -v     // npx
```
- 리액트 앱 폴더 만들기
```jsx
npx create-react-app 폴더 이름
```

#### <3. 리액트 앱 시작>
- 터미널에서 npm start 입력하면 리액트 앱 시작함.
- 종료하는 방법은 터미널에서 Ctrl+C 누르면 종료함. <br><br>

- React 공식 홈페이지: https://ko.reactjs.org/

#### <4. 리액트 동작 과정 확인>
1. index.js에서 App 컴포넌트를 콜하면, App.js에 작성한 내용이 return이 됨.
2. index.js에 있는 document.getElementById('root')를 통해  index.html에서 id값이 root인 곳을 찾아서 App.js에서 return한 값을 넣어줌
3. 그래서 웹 브라우저에서 App.js에 작성한 내용을 볼 수 있음!

### [3장. 리액트 기초개념 알아보기]
#### <1. 컴포넌트>
- 컴포넌트(component)는 function으로 정의 내린 곳을 가리킴.
- 컴포넌트는 대문자로 시작함: ex) function App() { ... }

```jsx
import React from 'react'; // 리액트 16버젼까지는 필수작성인데, 17버젼부터는 생략가능

function App() {   // App이라는 컴포넌트.
  return (
    <div>Hello React!!!!</div>
  );
}

export default App;  // 이 코드가 없으면 다른곳에서 사용할 수 없음.

// 이번 17버젼부터는 모든곳에 세미콜론(;) 생략 가능!

// 다른곳에서 사용할려면 사용할려는 곳에서 import App from './App'; 이렇게 쓰면됨
// 상대경로로 작성함. 같은 경로에 있는 App이라는 파일에서 App() 내용을 갖고온다는 뜻.
```