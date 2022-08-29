import { useState } from "react"

export default function AddGame({addItem}){

    const [edit, setEdit] = useState(false)

    function handleEvent(){ 
        let newGame = {
            name: document.getElementById('name').value,
            platform: document.getElementById('platform').value,
            four_player: document.getElementById('fourPlayer').checked,
            new_enemies: document.getElementById('enemies').value,
            levels: document.getElementById('levels').value
        }

        addItem(newGame)

        return
    }

    if (edit === false) {
        return(
            <div className="listItem">
                <button onClick={() => setEdit(true)}>Add New Game</button>
            </div>
        )
    } else {
        return(
            <div className="listItem">
                Name: <input id='name'></input> <br/>
                Platform: <input id='platform'></input> <br/>
                Four Player? <input id='fourPlayer' type='checkbox'></input> <br/>
                New Enemies: <input id='enemies'></input> <br/>
                Levels: <input id='levels' type='number'></input> <br/>
                <button onClick={() => {handleEvent(); setEdit(false)}}>Accept</button>
                <button onClick={() => setEdit(false)}>Cancel</button>
            </div>
        )
    }
}