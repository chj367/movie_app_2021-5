import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,      // <App /><Potato /> 이렇게 여러개 렌더링은 불가능함.
                // 따라서 Potato는 App에다가 렌더링하고, App을 여기서 렌더링하면됨.
  document.getElementById('root')  // Id가 root인 곳에다가 렌더링
);