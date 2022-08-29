import { useState } from "react";

export default function GetOneComp({getOne, keyedGame}) {

    const [keyed, setKeyed] = useState(false)

    function handleClick() {
        getOne(document.getElementById('key').value)
    }

    //switches between keyed get on request 
    if (keyed === false){
        return (
            <div className="listItem"> 
                <div>Wasn't sure how to incorporate a get one into this project so i made this extra piece as proof of knowledge. 
                    The endpoint goes off of the key. 
                    I've included it in the list comp to make it easier to copy and paste.
                </div> <br/>
                Item Key: <input id='key'></input> 
                <button onClick={() => {handleClick(); setKeyed(true)}}>Submit</button>

            </div>
        )
    } else {
        return (
            <div className="listItem">
                <div>{keyedGame.name}</div>
                <div>Platform: {keyedGame.platform}</div>
                Four Player? <input checked={keyedGame.four_player} type='checkbox' readOnly uncontrolled='true'></input>
                <div>New Enemies:{keyedGame.new_enemies}</div>
                <div>Levels: {keyedGame.levels}</div>
                <button onClick={() => {setKeyed(false)}}>Cancel</button>
            </div> 
        )
    }
}