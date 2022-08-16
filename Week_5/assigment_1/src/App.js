import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ItemList from './components/ItemList';

function App() {
  const [recycledItems, setItems] = useState([]);
  let flag = true

  useEffect(() => {
    axios.get('/recycled')
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
      setItems(recycledItems)
  }, [!flag]);

  return (
    <div className="App">
      <ItemList item = {recycledItems}/>
    </div>
  );
}

export default App;
