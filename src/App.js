import logo from './logo.svg';
import './App.css';
import axios from './axios'

function App() {
  function handleClick() {
      axios.post('/', { helloMessage: 'Hello from React' })
      .then(response => alert(response.data.helloMessage), error => alert(error))
  }

  return (
    <div className="App">
        <button type="button" onClick={handleClick}>Post Hello World</button>
    </div>
  );
}

export default App;
