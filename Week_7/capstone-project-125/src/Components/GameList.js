import Game from './Game'


export default function GameList({games, deleteItem, editItem}) {

  // populates data into a viewable list in HTML
  const divDisplay = games.map((games) => {  
    return <Game key = {games._id} games={games} deleteItem={deleteItem} editItem={editItem}/>
  });



  return (
    <div>
      {divDisplay}
    </div>
    );
}