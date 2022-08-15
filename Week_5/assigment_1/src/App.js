import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [recycledItems, setItems] = useState([]);

  useEffect(() => {
    axios.get('/recycled')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, []);

  console.log(recycledItems)
  const recycledList = recycledItems.map(item => <item {...name} key={item._id}/>)

  return (
    <div className="App">
      {recycledList}
    </div>
  );
}

export default App;
