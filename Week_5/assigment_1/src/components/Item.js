import './item.css'

export default function Item({item}) {
    return (
        <div id='itemBox'>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.quantity}</p>
            <p>{item.pricePerUnit}</p>
            <button>Delete</button>
        </div>
    )
}