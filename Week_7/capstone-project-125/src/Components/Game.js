import { useState } from "react"

export default function Game({games, deleteItem, editItem}) {

    const [edit, setEdit] = useState(false)

    // creates objects and passes it into object array
    function handleEvent(){ 
        let newGame = {
            name: document.getElementById('name').value,
            platform: document.getElementById('platform').value,
            four_player: document.getElementById('fourPlayer').checked,
            new_enemies: document.getElementById('enemies').value,
            levels: document.getElementById('levels').value
        }

        editItem(games._id, newGame)

    }

    //switches between edit mode
    if (edit === false) {

        return (
            <div className='listItem'>
                <div style={{color: 'red'}}>End Point Key :{games._id}</div>
                <div>{games.name}</div>
                <div>Platform: {games.platform}</div>
                Four Player? <input checked={games.four_player} type='checkbox' readOnly uncontrolled='true'></input>
                <div>New Enemies:{games.new_enemies}</div>
                <div>Levels: {games.levels}</div>
                <button onClick={() => setEdit(!edit)}>Edit</button>
                <button onClick={() => deleteItem(games._id)}>Delete</button>
                
            </div>   
        )
    } else {

        return (
            <div className='listItem'>
                <input id='name' placeholder={games.name} uncontrolled="false"></input> <br/>
                <input id='platform' placeholder={games.platform} uncontrolled="false"></input> <br/>
                Four-Player? <input id='fourPlayer' type='checkbox' uncontrolled="false"></input> <br/>
                <input id='enemies' placeholder={games.new_enemies} uncontrolled="false"></input> <br/>
                <input id='levels' type='number' placeholder={games.levels} uncontrolled="false"></input> <br/>
                <button onClick={() => {handleEvent(); setEdit(!edit)}}>Accept</button>
                <button onClick={() => setEdit(!edit)}>Cancel</button>
            </div>  
        )
    }  
}