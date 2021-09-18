// /* 3-2. JSX */
// import Potato from "./Potato"   // 이렇게 Potato.js 값을 가져올수 있음.

// function App() {
// 	return (
// 		<div>
// 			<h1>Hello</h1>
// 			<Food fav="kimchi" />
// 			<Potato foofoo="you" />       {/* 이렇게 추가하면 Potato.js 사용 가능! */}
// 																    {/* foofoo="you"라는 값을 Potato.js에 전달했음 */}
// 		</div>
// 	)
// }

// function Food(foo) {
// 	const { fav } = foo
// 	return <h1>I like {fav}</h1>
// }

// export default App

// ---------------------------------------------------------------
// /* 3-3-1. 컴포넌트 여러개 사용하기 */
// function App() {     // 메인 컴포넌트
// 	return (
// 		<div>
// 			<h1>Hello</h1>
// 			<Movie />
// 		</div>
// 	)
// }

// function Movie() {    // 서브 컴포넌트
// 	return <h1>I like potato</h1>
// }

// export default App    // 이게 있어야 다른곳에서도 사용 가능

// ---------------------------------------------------------------
// /* 3-3-2. props로 컴포넌트에 데이터 전달하기 */
// function App() {
// 	return (
// 		<div>
// 			<h1>Hello</h1>
// 			<Food fav="kimchi" />    {/* Food컴포넌트에다가 fav는 kimchi라는 값을 전달함. */}  
//                                {/* 여기서 fav="kimchi"가 props. */}             
// 		</div>                     
// 	)
// }

// function Food(foo) {     // 위에서 전달된 값을 받아옴. 받는 변수이름은 아무렇게 상관X
// 	console.log(foo)       // 이렇게 콘솔창에 전달된 값을 확인 가능
// 	return <h1>I like potato</h1>
// }

// export default App

// ---------------------------------------------------------------
// /* 3-3-3. props로 컴포넌트에 데이터 전달하기2 */
// function App() {
// 	return (
// 		<div>
// 			<h1>Hello</h1>
// 			<Food fav="kimchi" />   
// 		</div>                   
// 	)
// }

// function Food(foo) {       // 전달된 값을 foo로 받아왔음.
// 	return <h1>I like {foo.fav}</h1>  // foo의 값중 fav값만 리턴함. 화면에 출력확인가능!
// }                             // 이렇게 객체의 특정 값을 사용할때는 점(.)연산자를 사용!

// export default App

// ---------------------------------------------------------------
// /* 3-3-4. 구조 분해 할당으로 props 사용하기 */
// function App() {
// 	return (
// 		<div>
// 			<h1>Hello</h1>
// 			<Food fav="kimchi" />   
// 		</div>                   
// 	)
// }

// function Food(foo) {    
// 	const { fav } = foo       // 이렇게 const 상수를 쓰면 오류 안남!
// 	return <h1>I like {fav}</h1>   // 이렇게 점 연산자말고 구조분해할당으로 fav값만 리턴가능!
// }                      

// export default App

// ---------------------------------------------------------------
// /* 3-3-5. 여러 개의 컴포넌트에 props 사용하기(구조 분해 할당 사용) */
// function App() {
// 	return (
// 		<div>
// 			<h1>Hello</h1>
// 			<Food fav="kimchi" />   
// 			<Food fav="a" />  
// 			<Food fav="b" />  
// 		</div>                   
// 	)
// }

// function Food(foo) {    
// 	const { fav } = foo     
// 	return <h1>I like {fav}</h1>  
// }                      

// export default App

// // 실행 과정) 1. Food fav="kimchi"가 호출되서 값을 foo로 전달해서 리턴해서 렌더링
// // 2. Food fav="a"가 호출되서 값을 foo로 전달해서 리턴해서 렌더링 
// // 3. Food fav="b"가 호출되서 값을 foo로 전달해서 리턴해서 렌더링
// // 이렇게 하나씩 전달되는 것을 확인 가능!

// ---------------------------------------------------------------
// /* 4-1. 비슷한 컴포넌트 여러개 만들기 */
// const foodLike = [
//   {
//      name: "pizza",
//      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25ED%2594%25BC%25EC%259E%2590&psig=AOvVaw3PW35f7mx_OqOEn8GQm4uc&ust=1631770792425000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJj5z4eigPMCFQAAAAAdAAAAABAD"
//    },
//    {
//      name: "jogbal",
//      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hankookilbo.com%2FNews%2FRead%2F202005211435033018&psig=AOvVaw09XA6dn_EbfBcSdZxAIVoK&ust=1631770847124000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOD90Z-igPMCFQAAAAAdAAAAABAE"
//    }
//  ]
 
//  function App() {
//    return (
//      <div>
//        <h1>Hello</h1>
//        <Food fav="kimchi" />   
//      </div>                   
//    )
//  }
 
//  function Food(foo) {    
//    const { fav } = foo     
//    return <h1>I like {fav}</h1>  
//  }                      
 
//  export default App

// ---------------------------------------------------------------
// /* 4-2-1.map()함수로 Food컴포넌트 여러개 만들기 */ 
// const foodLike = [
//   {
//     name: "pizza",
//     image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25ED%2594%25BC%25EC%259E%2590&psig=AOvVaw3PW35f7mx_OqOEn8GQm4uc&ust=1631770792425000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJj5z4eigPMCFQAAAAAdAAAAABAD"
//   },
//   {
//     name: "jogbal",
//     image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hankookilbo.com%2FNews%2FRead%2F202005211435033018&psig=AOvVaw09XA6dn_EbfBcSdZxAIVoK&ust=1631770847124000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOD90Z-igPMCFQAAAAAdAAAAABAE"
//   }
// ]

// function App() {
//   return(
//     <div>
//       {
//         foodLike.map(dish => (<Food name={dish.name} />))
// 					/* foodLike의 값들을 map()이용해서 구조분할하고, dish변수에 넣고, *//* dish변수값중 name의 값들을 name변수에 넣음 */
//       }
//     </div>
//   )
// }
  
// function Food({name}) {    // 위에서 전달받은 name값을 가져옴 + 중괄호 {}를 넣어줘야 함. 
//   return <h1>I like {name}</h1>
// }

// export default App

// ---------------------------------------------------------------
// /* 4-2-2.이미지도 출력하게 만들기 */ 
// const foodLike = [
//   {
//     name: "pizza",
//     image: "https://w.namu.la/s/015965f5dfb5fe31da575f4854d36b4aa29cce64e24d27b9f51b76490dddbf7457190f6f77b5fc69dd65eeee8a8e1cd0bc5ad39e6cfa16efdbc7909eef3305cd910dffbcc49d1b4875fabf2312e0cbf11d5d758b69a243f7bd61b26641645673"
//   },
//   {
//     name: "jogbal",
//     image: "https://newsimg.hankookilbo.com/cms/articlerelease/2020/05/21/202005211435033018_5.jpg"
//   }
// ]

// function App() {
//   return(
//     <div>
//       {
//         foodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))
// 						/* 이번엔 name과 image 둘다 전달했음 */
//       }
//     </div>
//   )
// }
  
// function Food({name, picture}) {   // 위에서 전달한 값들을 받아왔음.
//   return (                         // return 값이 어디부분인지 잡기위해 소괄호로 묶었음.
//     <div>
//       <h1>I like {name}</h1>    {/* 이렇게 중괄호 넣어서 위의 값 불러오게 하기. */}
//       <img src={picture} />     {/* img태그로 이미지를 반환하기 */}
//     </div>
//   )
// }

// export default App

// ---------------------------------------------------------------
// /* 4-3-1.렌더링 이용해서 좀더 간단하게 만들기 */
// // 바로 위의 코드에서 renderFood()와 App()만 다름
// function renderFood(dish){     
//   return (
//     <Food name={dish.name} picture={dish.image} />
//   )
// }

// function App() {
//   return(
//     <div>
//       {
//         foodLike.map(renderFood)
//       }
//     </div>
//   )
// }

// // renderFood()는 소문자로 시작해서 함수, App()은 대문자로 시작해서 컴포넌트!

// // 결과화면은 위의 코드와 동일.

// // 이렇게 위처럼 함수를 이용해서 해도 되고, 아니면 아래처럼 변수에 넣어도 가능함.
// const renderFood = dish => <Food name={dish.name} picture={dish.image} />

// ---------------------------------------------------------------
/* 4-3-1.간단하게 만들기 + 2.key props 추가하기 */
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


/* The End */