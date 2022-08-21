import Item from './Item';

export default function ItemList({item, deleteItem, editItem}) {
    const itemList = item.map((item) => {  
        return <Item key={item._id} item={item} deleteItem = {deleteItem} editItem = {editItem}/>
    });
    return (
        <div>
            {itemList}
        </div>
    );
}