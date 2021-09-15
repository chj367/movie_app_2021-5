
// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <Food fav="kimchi" />
//       {/* <Food fav="kimchi" something={true} papapa={['hello',1,2,true]} /> */}
//     </div>
//   )
// }

// function Food(foo){     // 괄호 안에는 어떤 변수명을 넣어도 상관없음 
//   // console.log(foo);     // App()안의 Food에 있는 값들을 받아서 콘솔창에 출력함
//   // return <h1>I like potato</h1>

//   return <h1>I like {foo.fav}</h1>  // Food에 있는 값들 중 fav값만 리턴받아서 출력했음.
// }


// /* 여러번 호출하기 */
// function App(){
//   return(
//     <div>
//       <h1>Hello</h1>
//       <Food fav="kimchi" />
//       <Food fav="a" />
//       <Food fav="b" />
//     </div>
//   )
// }

// function Food(foo){
//   const { fav } = foo
//   return<h1>I like {fav}</h1>
// }

// --------------------------------------------------------
/* [4장 - 하다가 말았음] */
// const foodLik = [
//   {
//     name: "pizza",
//     image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25ED%2594%25BC%25EC%259E%2590&psig=AOvVaw3PW35f7mx_OqOEn8GQm4uc&ust=1631770792425000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJj5z4eigPMCFQAAAAAdAAAAABAD"
//   },
//   {
//     name: "jogbal",
//     image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hankookilbo.com%2FNews%2FRead%2F202005211435033018&psig=AOvVaw09XA6dn_EbfBcSdZxAIVoK&ust=1631770847124000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOD90Z-igPMCFQAAAAAdAAAAABAE"
//   }
// ]

// function App(){
//   return(
//     <div>
//       <h1>Hello</h1>
//       <Food fav="kimchi" />
//     </div>
//   )
// }
  
// function Food(foo){
//   const { fav } = foo
//   return<h1>I like {fav}</h1>
// }


// ---------------------------------<2교시 시작>------------------------------------------
// /* [3-2.JSX] */
// import Potato from "./Potato"  // 

// function App(){
//   return(
//     <div>
//       <h1>Hello</h1>
//       <Potato bar="you" />
//     </div>
//   )
// }

// function Food(foo){
//   const { fav } = foo
//   return<h1>I like {fav}</h1>
// }

// --------------------------------<3교시 시작>------------------------------------
const foodLike = [
  {
    id: 1,     // id 키 값 추가!
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

const renderFood = dish => <Food key={dish.id} name={dish.name} picture={dish.image} />   // 변수 사용

function App() {
  console.log(foodLike.map(renderFood));  // map()을 이용해서 콘솔창에 위에서 넣었던 정보를 볼수있음.

  return(
    <div>
      {
        foodLike.map(renderFood)
      }
    </div>
  )
}
  
function Food({name, picture}) {
  return (      // return 값이 어디부분인지 잡기위해 괄호로 묶었음.
    <div>
      <h1>I like {name}</h1>    {/* 중괄호 넣어서 위의 값 불러오게 하기. */}
      <img src={picture} alt={name} />   {/* alt를 넣어서 이미지 오류뜨면 나타나는 내용 추가. */}
    </div>
  )
}

export default App


/* The End */