import React from "react"

class App extends React.Component {
    state = {
        isLoading: true  
    }
    
    componentDidMount(){
        setTimeout( () => {
            this.setState({ isLoading: false })
        }, 6000)    // setTimeout(함수, 초)
                    // 6000ms(=6초)가 지나면 true에서 false로 바뀜
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