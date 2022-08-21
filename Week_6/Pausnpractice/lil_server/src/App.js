import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState ([''])
  const [itemsList, setItems] = useState([]);
  const [flag, setFlag] = useState(true);

  const handleEvent = event => {
    setUserInput(event.target.value)
    console.log(userInput)
  }

  useEffect(() => {
    axios.get('./items')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [flag]);

  const findItems = (i) => {
    console.log(i)
  }

  return (
    <div className="App">
      <input onChange={handleEvent} value={userInput}></input>
      <button onClick={() => findItems(itemsList)}>Search</button>
    </div>
  );
}

export default App;
