import Item from './Item';

export default function ItemList({item}) {
    const itemList = item.map((item) => {  
        return <Item key={item._id} item={item}/>
    });
    return (
        <div>
            {itemList}
        </div>
    );
}