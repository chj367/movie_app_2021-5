// /* 5-1. State로 숫자 증감 기능 만들기 */
// import {Component} from 'react'

// class App extends Component {
//     state = {
//         count: 0
//     }
  
//     add = () => {     // 함수 정의.
//         // console.log('add')  // 버튼 누를때마다 add 출력
//         // this.setState({count: 1})  // 버튼 누르면 1로 바뀜         
//         this.setState({count: this.state.count + 1})  // 1씩 증가
//     }
  
//     minus = () => {   // 함수 정의.  
//         // console.log('minus')   // 버튼 누를때마다 minus 출력
//         // this.setState({count: -1})   // 버튼 누르면 -1로 바뀜         
//         this.setState({count: this.state.count - 1})  // 1씩 감소
//     }
  
//     render() {
//       return ( 
//         <div>
//            <h1>The number is: {this.state.count}</h1>
//            <button onClick={this.add}>Add</button>     {/* 함수 호출-add 버튼 동작 */} 
//            <button onClick={this.minus}>Minus</button> {/* 함수 호출-minus 버튼 동작 */}  
//         </div>
//         )
//       }
//   }

// export default App

/* 5-2. 클래스형 컴포넌트 일생-LifeCycle */
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

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
  
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