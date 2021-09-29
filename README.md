# 조항재 201840229
***
## [MENU] <a id="menu"></a>
- [0915-3주차](#0915) : 리액트 기초개념 + 컴포넌트 만들기
- [0908-2주차](#0908) : 리액트로 클론 코딩 시작하기

***
## [09월 15일] <a id="0915"></a>
### 오늘 배운 내용 요약
> 1. JSX
> 2. props (+구조분해할당)
> 3. map()함수
> 4. key props

### [3장. 리액트 기초개념]
#### <2. JSX>
- 컴포넌트는 자바스크립트와 HTML을 조합한 JSX라는 문법을 사용해서 만든다.
- 리액트는 1개의 컴포넌트만 렌더링 가능하다.
- 여러개의 컴포넌트 사용한다면 1개로 묶어주면 된다.

#### <3. props>
- 컴포넌트에서 컴포넌트로 전달하는 데이터. 함수의 매개변수 역할.
- props에는 불리언 값(true, false), 숫자, 배열과 같은 다양한 형태의 데이터 사용 가능
- 전달 데이터는 문자열을 제외하면 모두 중괄호 { } 로 감싸야 한다.
- 전달된 값을 받아올때 받아올 변수 이름은 상관없음
- 받아온 값 중 일부만 사용하고 있으면 점(.) 연산자 사용
``` jsx
// props로 전달할때의 예시
<Food fav="kimchi" something={true} papapa={['hello',1,2,3,4,true]} />
```

- 컴포넌트 여러개 사용하기
```jsx
function App() {     // 메인 컴포넌트
  return (
    <div>
      <h1>Hello</h1>
      <Movie />
    </div>
  )
}

function Movie() {    // 서브 컴포넌트
  return <h1>I like potato</h1>
}

export default App    // 이게 있어야 다른곳에서도 사용 가능
```

- props로 컴포넌트에 데이터 전달하기
```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />    {/* Food컴포넌트에다가 fav는 kimchi라는 값을 전달함. */}
    </div>                     {/* 여기서 fav="kimchi"가 props. */} 
  )
}

function Food(foo) {     // 위에서 전달된 값을 받아옴. 받는 변수이름은 아무렇게 상관X
  console.log(foo)       // 이렇게 콘솔창에 전달된 값을 확인 가능
  return <h1>I like potato</h1>
}

export default App
```

- props로 컴포넌트에 데이터 전달하기2
```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />   
    </div>                   
  )
}

function Food(foo) {       // 전달된 값을 foo로 받아왔음.
  return <h1>I like {foo.fav}</h1>  // foo의 값중 fav값만 리턴함. 화면에 출력확인가능!
}                                   // 이렇게 객체의 특정 값을 사용할때는 점(.)연산자를 사용!

export default App
```

- 구조 분해 할당으로 props 사용하기: 데이터의 개수가 많아지면 구조 분해 할당을 사용하는 것이 편리.
```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />   
    </div>                   
  )
}

function Food(foo) {    
  const { fav } = foo       // 이렇게 const 상수를 쓰면 오류 안남!
  return <h1>I like {fav}</h1>   // 이렇게 점 연산자말고 구조분해할당으로 fav값만 리턴가능!
}                      

export default App
```

- 여러 개의 컴포넌트에 props 사용하기(구조 분해 할당 사용)
```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />   
      <Food fav="a" />  
      <Food fav="b" />  
    </div>                  
  )
}

function Food(foo) {    
  const { fav } = foo     
  return <h1>I like {fav}</h1>  
}                      

export default App

// 실행 과정) 1. Food fav="kimchi"가 호출되서 값을 foo로 전달해서 리턴해서 렌더링
// 2. Food fav="a"가 호출되서 값을 foo로 전달해서 리턴해서 렌더링 
// 3. Food fav="b"가 호출되서 값을 foo로 전달해서 리턴해서 렌더링
// 이렇게 하나씩 전달되는 것을 확인 가능!
```
<br>

### [4장. 컴포넌트 만들기]
#### <1. map()함수로 컴포넌트 여러개 만들기>
- map()함수는 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고,
- 그 함수가 반환한 결과를 모아서 배열로 반환해주는 함수.
```jsx
const friends=["a", "b", "c"]  // 입력하고 엔터키하고..

friends   // 이거 입력하고 엔터키 누르면 입력했던 배열 값인 ['a', 'b', 'c'] 출력함
         // 콘솔창을 끄지 않는이상, 입력한 값을 기억하고 있어서 이렇게 값들을 불러올수있음.

friends.map(foo => {
  console.log(foo);
  return 0;
})

// 참고) 콘솔창에서 괄호 연채로 엔터키 누르면 닫을때까지 계속 입력가능

// 결과값은 a       >> console.log(foo)가 출력한 값 1번째. 반환값X. 특정작업하는 함수 적용.
//         b        >> console.log(foo)가 출력한 값 2번째. 반환값X. 특정작업하는 함수 적용. 
//         c        >> console.log(foo)가 출력한 값 3번째. 반환값X. 특정작업하는 함수 적용.
//         [0,0,0]  >> freinds.map()이 최종으로 반환한 값 0. 배열에 리턴값 저장된채로 반환.
```

- map()함수로 이름에 기호 추가한 배열 만들기
```jsx
// (위에 이어서)
friends.map (function(friends) {    // 무명함수를 통해서 배열의 원소를 하나씩 전달받음
  return friends + "★";
})

// 결과값은 a★ b★ c★ 세로로 한줄씩 나옴.  (friends 배열 값에다가 각각 ★이 추가됨!)
```

- map()함수로 Food 컴포넌트 여러개 만들기+이미지도 출력하기
```jsx
const foodLike = [
  {
    name: "pizza",
    image: "https://w.namu.la/s/015965f5dfb5fe31da575f4854d36b4aa29cce64e24d27b9f51b76490dddbf7457190f6f77b5fc69dd65eeee8a8e1cd0bc5ad39e6cfa16efdbc7909eef3305cd910dffbcc49d1b4875fabf2312e0cbf11d5d758b69a243f7bd61b26641645673"
  },
  {
    name: "jogbal",
    image: "https://newsimg.hankookilbo.com/cms/articlerelease/2020/05/21/202005211435033018_5.jpg"
  }
]

function App() {
  return(
    <div>
      {
        foodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))
        /* foodLike의 값들을 map()이용해서 구조분할하고, dish변수에 넣고, */
	/* dish변수값중 name의 값들을 name변수에 넣고, image값들을 pitcure변수에 넣었음. */
	/* name과 picture 둘다 전달했음 */
      }
    </div>
  )
}
  
function Food({name, picture}) {   // 위에서 전달한 값들을 받아왔음. + {}로 묶어주기!
  return (                         // return 값이 어디부분인지 잡기위해 소괄호로 묶었음.
    <div>
      <h1>I like {name}</h1>    {/* 이렇게 중괄호 넣어서 위의 값 불러오게 하기. */}
      <img src={picture} />     {/* img태그로 이미지를 반환하기 */}
    </div>
  )
}

export default App
```

- key props 추가하기
  - 리스트의 각 원소는 유일한 key prop을 가져야 한다.
  - 이거 하면 Warning 빨간색 메시지는 사라짐!
  - id를 추가하는 이유는 리액트에 컴포넌트가 서로 다르다는 것을 알려주기 위해서.
  - 노랑 메시지 떠있는건 이미지 없을때 대체 텍스트가 없다고 그냥 알려준것임.
```jsx
const foodLike = [
  {
    id: 1,     // id 키 값(key props) 추가!
    name: "pizza",
    image: "https://w.namu.la/s/015965f5dfb5fe31da575f4854d36b4aa29cce64e24d27b9f51b76490dddbf7457190f6f77b5fc69dd65eeee8a8e1cd0bc5ad39e6cfa16efdbc7909eef3305cd910dffbcc49d1b4875fabf2312e0cbf11d5d758b69a243f7bd61b26641645673"
  },
  {
    id: 2,
    name: "jogbal",
    image: "https://newsimg.hankookilbo.com/cms/articlerelease/2020/05/21/202005211435033018_5.jpg"
  }
]

// function renderFood(dish){   // 함수 사용
//   return (
//     <Food name={dish.name} picture={dish.image} />
//   )
// }

const renderFood = dish => <Food key={dish.id} name={dish.name} picture={dish.image} />   // 변수 사용 + id값도 추가했음!

function App() {
  console.log(foodLike.map(renderFood));  

  return(
    <div>
      {
        foodLike.map(renderFood)
      }
    </div>
  )
}
  
function Food({name, picture}) {
  return (      
    <div>
      <h1>I like {name}</h1>    
      <img src={picture} alt={name} />   {/* alt를 넣어서 이미지 대체텍스트 추가 */}
    </div>
  )
}

export default App
```

### [3주차 끝-MENU로 돌아가기](#menu)
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

### [2주차 끝-MENU로 돌아가기](#menu)