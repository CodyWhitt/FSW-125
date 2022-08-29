import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GameList from './Components/GameList'
import AddGame from './Components/AddGame';
import GetOneComp from './Components/GetOneComp';

function App() {

  const [filtered, setFiltered] = useState(false)
  const [games, setGames] = useState([]);
  const [keyedGame, setKeyedGame] = useState([])
  const [flag, setFlag] = useState(true);

  const deleteItem = (id) => {
    axios.delete(`/gameData/${id}`)
      .catch(err => console.log(err))
      setFlag(!flag)
  }

  const addItem = (object) => {
    axios.post(`/gameData`, object)
      .catch(err => console.log(err))
      console.log()
      setFlag(!flag)
  }

  const editItem = (recycled_id, object) => {
    axios.put(`/gameData/${recycled_id}`, object)
    .catch(err => console.log(err))
    console.log()
    setFlag(!flag)
  }

  const filterItems = (searchValue) => {
    axios.get(`/gameData/search/${searchValue}`)
    .then(res => setGames(res.data))
    .catch(err => console.log(err))
  }

  const getOne = (key) => {
    axios.get(`/gameData/${key}`)
    .then(res => setKeyedGame((res.data)))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get('/gameData')
      .then(res => setGames(res.data))
      .catch(err => console.log(err))
  }, [flag]); 

  if (filtered === false) {
    return (
      <div className="App">
        <div className='header'>
          <input id='filter' placeholder='Filter Items'></input>
          <button onClick={() => {setFiltered(true); filterItems(document.getElementById('filter').value)}}>Search</button>
        </div>
        <GetOneComp getOne={getOne} keyedGame={keyedGame}/>
        <AddGame addItem={addItem}/>
        <GameList games={games} deleteItem={deleteItem} editItem={editItem}/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className='header'>
          <input id='filter' placeholder='Filter Items'></input>
          <button onClick={() => filterItems(document.getElementById('filter').value)}>Search</button>
          <button onClick={() => setFiltered(false)}>Cancel</button>
        </div>
        <GetOneComp/>
        <AddGame addItem={addItem}/>
        <GameList games={games} deleteItem={deleteItem} editItem={editItem}/>
      </div>
    )
  }
}

export default App;
