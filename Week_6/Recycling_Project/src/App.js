import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 
import ItemList from './components/ItemList';
import AddForm from './components/AddForm';

function App() {
  const [recycledItems, setItems] = useState([]);
  const [flag, setFlag] = useState(true);

  const deleteItem = (recycled_id) => {
    axios.delete(`/recycled/${recycled_id}`)
      .catch(err => console.log(err))
      setFlag(!flag)
  }

  const addItem = (object) => {
    axios.post(`/recycled`, object)
      .catch(err => console.log(err))
      console.log()
      setFlag(!flag)
  }

  const editItem = (recycled_id, object) => {
    axios.put(`/recycled/${recycled_id}`, object)
    .catch(err => console.log(err))
    console.log()
    setFlag(!flag)
  }

  useEffect(() => {
    axios.get('/recycled')
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
      setItems(recycledItems)
  }, [flag]);

  return (
    <div className="App">
      <AddForm addItem={addItem}/>
      <ItemList item = {recycledItems} deleteItem = {deleteItem} editItem={editItem}/>
    </div>
  );
}

export default App;
