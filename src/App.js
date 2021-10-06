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