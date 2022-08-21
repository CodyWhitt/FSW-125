import { useState, useEffect } from 'react';
import {v4 as uuidv4} from "uuid"; //unique ID maker
import axios from 'axios';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState ([''])
  const [itemsList, setItems] = useState([]);
  const [itemsDisplay, setItemsDisplay] = useState('')
  const [flag, setFlag] = useState(true);

  const handleEvent = event => {
    setUserInput(event.target.value)
    console.log(userInput)
  }

  useEffect(() => {
    axios.get('./items')
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
  }, [flag]);

  const findItems = (itemsList) => {
    const displayItems = itemsList.map((itemsList) => {
      if (userInput === itemsList.type) {
        return <div key={uuidv4()}>{itemsList.name}, {itemsList.type}</div>
      }
    })
    setItemsDisplay(displayItems)
  }

  return (
    <div className="App">
      <input onChange={handleEvent} value={userInput} placeholder={'fruit/veggie'}></input>
      <button onClick={() => findItems(itemsList)}>Search</button>
      <div>
        {itemsDisplay}
      </div>
    </div>
  );
}

export default App;
