# 조항재 201840229
***
## [참고 내용]
### [Main branch로 변경]
- 예전에는 Master branch라고 불렸음.
- 최근에는 인종차별적 요소때문에 Main branch로 변경됨.
- 해당 내용은 git 2.28버젼부터 적용.
- git flow: branch 관련 흐름

```jsx
git config --global init.defaultBranch main  // 이거 입력하면 Main Branch로 생성!

git branch -m master main  // 이거 입력하면 기존꺼를 main 브랜치로 바뀜
```
### [React Project 클론 과정]
1. github에서 Code 눌러서 Clone-https에 있는 url 복사하기
2. 클론해올(=붙여넣을) 폴더를 VS코드로 열고 터미널에서 "git clone 복사했던 URL" 입력하기
3. 일단 github에 올렸던 코드 그대로 복제 성공!
4. 예전에 모듈 설치했던거 설치하면 수업 준비 완료! (package.json에 모듈 설치 뭐했는지 확인가능)
***
## [MENU] <a id="menu"></a>
- [1027-9주차](#1027) : 영화 앱 다듬기 + 영화 앱에 여러기능 추가하기
- [1020-8주차](#1020) : 중간고사라서 내용 X 
- [1013-7주차](#1013) : 영화 앱 만들기 + 영화 앱 다듬기
- [1006-6주차](#1006) : 영화 앱 만들기 
- [0929-5주차](#0929) : prop-types + State와 클래스형 컴포넌트
- 0922-4주차 : 휴강(추석연휴)이라서 내용 X
- [0915-3주차](#0915) : 리액트 기초개념 + 컴포넌트 만들기
- [0908-2주차](#0908) : 리액트로 클론 코딩 시작하기
***

## [10월 27일] <a id="1027"></a>
### 오늘 배운 내용 요약
> 1. 영화 앱 다듬기
> 2. 영화 앱에 여러 기능 추가하기

### [7장. 영화 앱 다듬기]
- 영화 장르 출력하기
```jsx
<ul className="movie-genres">
  {
    genres.map((genre) => {
      return (
        <li className="movie-genre">{genre}</li>
      )
    })
  }
</ul>
```

- li tag에 key props 추가하기
```jsx
<ul className="movie-genres">
 {
    genres.map((genre, index) => {
      return (
        <li key={index} className="movie-genre">{genre}</li>
      )
    })
  }
</ul>

// map() 함수에는 2번째 매개변수를 지정할 경우, 배열의 index 값을 반환해주는 기능이 있다.
// 배열의 인덱스를 key props로 활용할 수 있음!
```

- 시놉시스 180자로 제한하기 (자바스크립트의 slice 함수 이용)
```jsx
<p className="movie-summary">{summary.slice(0,180)}...</p>

// 인덱스 0이 시작이고, 인덱스 180전(=179)까지 자르라는 뜻.
// 총 180자.
```

### [8장. 영화 앱에 여러 기능 추가하기]
- 라우터: 메뉴를 클릭하면 화면이 이동하는데 필요한 기능.

- react-router-dom 패키지 설치
```jsx
npm install react-router-dom
```

- 라우터 만들기
```jsx
import "./App.css"
import { HashRouter, Route } from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'

function App() {
  return(
    <HashRouter>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
    </HashRouter>
  )
}

export default App
```


### [9주차 끝-MENU로 돌아가기](#menu)

***
## [10월 13일] <a id="1013"></a>
### 오늘 배운 내용 요약
> 1. 영화 앱 만들기
> 2. 영화 앱 다듬기

### [6장. 영화 앱 만들기]
- movie state에 영화 데이터 저장하기
```jsx
getMovies = async () => {
  const {
    data: {
      data: {movies}
    }
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  this.setState({movies: movies})
}

// 이렇게해서 movies 배열 안으로 값이 들어감.
// 앞의 movies는 영화 데이터를 저장할 movies 배열을 가리킴
// 뒤의 movies는 data.data.movies를 가리킴

// 이렇게 키와 키 값의 이름이 같으면 this.setState({movies}) 이렇게 생략 가능!
```  

- isLoading state를 true에서 false로 업데이트 하기
```jsx
getMovies = async () => {
 const {
    data: {
      data: {movies}
    }
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  this.setState({movies, isLoading: false})
}

// 로딩이 된 다음에 false인 "영화 데이터 출력"으로 바뀜
```  

- Movie 컴포넌트 만들기 및 propTypes 작성하기
```jsx
import PropTypes from 'prop-types'

function Movie(){
  return(
    <h1>Hello</h1>   
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,  // id는 number 타입이고, 반드시 들어와야함(isRequired)
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

export default Movie
```  

- axios.get() 수정하기
```jsx
getMovies = async () => {
  const {
    data: {
      data: {movies}
    }
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
  console.log(movies);
  this.setState({movies, isLoading: false})
}

// 이렇게하면 rating 높->낮은거 순으로 정렬되있는거 확인가능!
```  

- Movie 컴포넌트에 props 추가하기
```jsx
function Movie({id, title, year, summary, poster}){
  return(
    <h1>{title}</h1>  
  )
}
```  

- isLoading의 false값 수정 및 Movie 컴포넌트 import하기
```jsx
render() {
  const { isLoading, movies } = this.state
  return (
    <div>
      { isLoading 
        ? 'Loading...' 
        : movies.map((movie)=> {
            console.log(movie);
            return <Movie />
          }) 
      }
     </div>
   )
}
```

- return에 Movie.js의 값 추가 및 key props 추가하기
```jsx
render() {
  const { isLoading, movies } = this.state
  return (
    <div>
      { isLoading 
        ? 'Loading...' 
        : movies.map((movie)=> {
            console.log(movie);
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.poster}
              />
            )})}
    </div>
  )
}

// 이제 화면에 Movie.js에서 가져온 값들 확인 가능
```

### [7장. 영화 앱 다듬기]
- 장르 추가하기
```jsx
// <Movie.js>
function Movie({title, year, summary, poster, genres}) { ... }

Movie.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}    // 여러 내용 들어가서 타입을 배열로 설정!


// <App.js>
return ( 
  <Movie
    genres = {movie.genres}
  />
```

- 포스터 값 변경
```jsx
return (
  <Movie
    poster = {movie.medium_cover_image}
  />
)
```

- class를 className으로 변경해서 오류 없애기 완료!

### [7주차 끝-MENU로 돌아가기](#menu)

***
## [10월 06일] <a id="1006"></a>
### 오늘 배운 내용 요약
> 1. 영화 앱 만들기

### [5장. State와 클래스형 컴포넌트]
#### <3. 영화 앱 만들기 워밍업>
- 영화 데이터 로딩 상태 표시 및 출력
```jsx
// 기본형태 + isLoading 추가(구조분해할당) + 삼항연산자
import React from "react"

class App extends React.Component {
  state = {
    isLoading: true  // 여기가 true이니 밑에 Loading이 출력됨!
		     // false하면 밑에 영화 데이터 출력이 뜸!
  }
    
  render() {
    const { isLoading } = this.state
      return (
        <div>
          { isLoading ? 'Loading...' : '영화 데이터 출력' }
        </div>
      )
  }
}

export default App
```  

- 로딩 현상 추가
```jsx
componentDidMount(){
  setTimeout( () => {
    this.setState({ isLoading: false })
    }, 6000)    // setTimeout(함수, 초)
               // 6000ms(=6초)가 지나면 true에서 false로 바뀜
 }
```  

- 영화 데이터 저장할 공간 추가
```jsx
  movies: []
```  

### [6장. 영화 앱 만들기] 
- axios 설치
```jsx
npm install axios
```  

- YTS 영화 데이터 API 사이트: https://yts.mx/api 
- 노마드 코더 영화 API 관련: https://github.com/serranoarevalo/yts-proxy  

- 노마드 코더 영화 API 호출하기
```jsx
import axios from "axios"

componentDidMount(){
  axios.get("https://yts-proxy.now.sh/list_movies.json")
}

// 잘 로딩되었나 확인은 F12-Network 들어가서 새로고침 후 확인했음!
```  

- getMovies() 함수 추가
```jsx
getMovies = () => {
  const movies = axios.get("https://yts-proxy.now.sh/list_movies.json")
}
    
componentDidMount(){
  this.getMovies()
}

// 데이터를 받아왔는데 저장을 못한 상태
```  

- async, await 키워드 추가
```jsx
getMovies = async () => {
  const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  console.log(movies); // 잘되었나 확인하기 위해 console.log 추가
}

// 시간이 필요하다는 것을 알리기 위해.
```  

- 일부 내용만 볼수있게 하기(구조분해할당)
```jsx
getMovies = async () => {
  const {
    data: {
      data: {movies}
    }
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  // const movies 
  console.log(movies);
}

// 이렇게 하면 굳이 console.log(movies.data.data.movies) 안해도 됨!
```  

### [6주차 끝-MENU로 돌아가기](#menu)

***
## [09월 29일] <a id="0929"></a>
### 오늘 배운 내용 요약
> 1. prop-types
> 2. State로 숫자 증감 기능 만들기
> 3. 클래스형 컴포넌트의 일생-Life Cycle
### [4장. 컴포넌트 만들기]
#### <저번 수업(3주차-9.15) 이어서>
- 이미지를 절대경로가 아닌 상대경로로 바꿔서 사용 가능
- 상대경로 넣을때 원래는 ../public/images/aaa.jpg처럼 해야하는데, 
- 리액트는 ../public 생략가능

#### <4. prop-types 사용하기>
- prop-types는 컴포넌트가 전달받은 props가 원하는 값인지 확인해주는 역할을 함.<br><br>

- prop-types 설치
```jsx
npm install prop-types 

// 설치하고 나서 package.json에서 "prop-types" 버젼이 있으면 정상 설치 완료!
```
- prop-types 사용하기
```jsx
import PropTypes from 'prop-types' 
   // prop-types 모듈을 PropTypes라는 이름으로 import하겠다라는 뜻.
```
- prop-types에서 isRequired는 생략해도 상관없음.<br><br>

### [5장. State와 클래스형 컴포넌트]
#### <1. State로 숫자 증감 기능 만들어보기>
- props는 정적인 데이터만 다를 수 있다면,
- state는 동적인 데이터를 다루기 위해 사용된다. class형 컴포넌트만 사용가능.<br><br>

- class형 컴포넌트를 사용할때는 React.Component를 상속받아서 사용함.
- React.Component에 여러가지 기능이 이미 구현되어 있기 때문.<br><br>
- 함수형 컴포넌트는 return을 사용해서 값을 리턴했다면,
- 클래스형 컴포넌트에서는 바로 리턴을 못하기 때문에, render()함수 안에 return을 넣어서 리턴함.

```jsx
import React from 'react'

class App extends React.Component {    			 
  render() {        // render함수에다가 return값 집어넣어서 사용.
    return ( 
      <h1>Hello</h1>
    )
  }
}

export default App

// React.Component를 사용해야해서 import React 추가했음!
// 저번 4장할때는 이런거 사용안해서 생략했었음.

// 만약 import부분에 {Component}를 추가하면: import React, {Component} from 'react'
// 밑에 있는 React.Component부분에서 Component만 써도 됨: class App extends Component { }
// 위의 import부분에 이미 선언했기 때문에.

// 그래서 아예 처음부터 import {Component} from 'react' 이렇게 간단하게 써도 상관없음.
// import에서 React는 원래 생략 가능하기 때문에.
```  

- State 추가하기
```jsx
class App extends Component {
  state = {      // state는 동적인 데이터를 다룸. state는 객체형태의 데이터.
    count: 0     
  }

  render() {  
    return {
      <h1>The number is: {this.state.count}</h1>  // 위의 state의 count의 값을 가져옴.
    }  
  }
}

// 결과) The number is 0 이라고 화면에 뜸!
```  

- 버튼 추가하기
```jsx
render() {
  return ( 
     <div>
        <h1>The number is: {this.state.count}</h1>
        <button>Add</button>
        <button>Minus</button>
     </div>
  )
}

// return에 태그가 여러개 있으면 오류나기 때문에 div태그로 묶었음!

// 결과) Add와 Minus라는 버튼이 생겼음. 동작은 안함.
```  

- 버튼 동작하게 만들기
```jsx
class App extends Component {
  state = {
      count: 0
  }

  add = () => {            // 함수 정의. 이것만 있으면 사용못함. 밑에서 사용하게 만들기.
      console.log('add')
  }

  minus = () => {          // 함수 정의. 이것만 있으면 사용못함. 밑에서 사용하게 만들기.
      console.log('minus')
  }

  render() {
    return ( 
      <div>
         <h1>The number is: {this.state.count}</h1>
         <button onClick={this.add}>Add</button>       
            {/* 함수 사용. 이 버튼을 누르면 add함수가 호출됨. */}
         <button onClick={this.minus}>Minus</button>   
            {/* 함수 사용. 이 버튼을 누르면 minus함수가 호출됨. */}
      </div>
    )
  }
}

// 결과) 버튼 누를때마다 해당 값(add 아니면 minus)가 콘솔창에 출력됨

```  

- 버튼을 누르면 상태가 바뀌게 만들기
```jsx
class App extends Component {
  state = {
      count: 0
  }

  add = () => {               
      this.setState({count: 1})  // count에다가 1을 넣겠다. 그냥 1을 넣는 것임.
  }

  minus = () => {              
      this.setState({count: -1})  // count에다가 -1을 넣겠다. 그냥 -1을 넣는 것임.
  }

  render() {
    return ( 
      <div>
         <h1>The number is: {this.state.count}</h1>
         <button onClick={this.add}>Add</button>      
         <button onClick={this.minus}>Minus</button>   
      </div>
    )
  }
}

// 결과) Add 버튼 누르면 1이 되고, Minus 버튼 누르면 -1이 됨.
```  

- 버튼을 누르면 증가 or 감소하게 만들기
```jsx
class App extends Component {
  state = {
      count: 0
  }

  add = () => {               
      this.setState({count: this.state.count + 1})  // add함수 호출하면 count에 1을 증가
  }

  minus = () => {              
      this.setState({count: this.state.count - 1})  // minus함수 호출하면 count에 1을 감소
  }

  render() {
    return ( 
      <div>
         <h1>The number is: {this.state.count}</h1>
         <button onClick={this.add}>Add</button>      
         <button onClick={this.minus}>Minus</button>   
      </div>
    )
  }
}

// 결과) add 버튼 누를때마다 1씩 증가, minus 버튼 누를때마다 1씩 감소함.
```  

#### <2.클래스형 컴포넌트의 일생-LifeCycle>
- 생명 주기 함수
  - 컴포넌트의 생성: constructor, render
  - 생성 직후: componentDitMount
  - update의 처리: shouldComponentUpdate, render
  - 처리 직후: componentDitUpdate
  - 컴포넌트 제거: componentWillUnmount<br><br>

- 참고(리액트 공식 사이트): https://ko.reactjs.org/docs/react-component.html<br><br>

- 생성자 관련
  - constructor함수는 Component를 생성할 때 state값을 초기화하거나 메서드를 바인딩할때 사용.
  - React.Component를 상속해서 만들어진 컴포넌트의 생성자를 구현할 때는 super(props) 선언을 권고하는 이유는 this.props 사용시 생성자 내에서 정의되지 않아 버그 발생 가능성이 있기 때문.
  - 자바스크립트에서 super는 부모클래스 생성자의 참조한다는 의미.
  - 자바스크립트는 언어적 제약사항으로 생성자에서 super를 호출하기 전에 this를 사용할 수 없다. 그래서 반드시 super를 먼저 호출해야 this를 사용할 수 있음.
  - 생성자 내에서는 외부API를 직접 호출할 수 없다. 필요하다면 componentDidMount()를 사용한다.  

- constructor와 render 함수 추가하기
```jsx
import {Component} from 'react'

class App extends Component {
   constructor(props){
      super(props)
      console.log("Constructor");
    }

   state = {
      count: 0
    }

   add = () => { this.setState({count: this.state.count + 1}) }

   minus = () => { this.setState({count: this.state.count - 1}) }

   render() {
     console.log("render");
     return ( 
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>      
        <button onClick={this.minus}>Minus</button>   
      </div>
    )
  }
}

export default App

// 콘솔창에 보면 Constructor가 먼저 나오고, render가 나옴.
// 버튼 누를때마다 render가 계속 콘솔창에 찍히는거 확인가능!
// Constructor는 처음 한번 나오면 다시는 안 나옴.
```  

- componentDidMount 함수 추가
```jsx
componentDidMount(){
  console.log("componentDidMount");
}
 
// 콘솔창에 보면 Constructor가 먼저 나오고, render가 나오고... 
// 마지막으로 componentDidMount가 나오는거 확인 가능!
```  

- componentDidUpdate 함수 추가
```jsx
componentDidUpdate(){
   console.log("componentDidUpdate");
}

// 일단 Constructor - render - componentDidMount 순으로 나오고...
// 버튼을 누를때마다 render - componentDidUpdate 순으로 계속 나오는거 확인 가능!
```  

### [5주차 끝-MENU로 돌아가기](#menu)
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