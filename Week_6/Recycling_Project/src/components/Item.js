import { v4 as uuidv4 } from 'uuid';
import './item.css'

export default function Item({item, deleteItem, editItem}) {

    let id1=uuidv4()
    let id2=uuidv4()
    let id3=uuidv4()
    let id4=uuidv4()
    let id5=uuidv4()

    let itemName
    let description
    let recyclable
    let quantity
    let pricePerUnit

    const change = () => {
        itemName = {
            name: document.getElementById(id1).value
        }

        description = {
            description: document.getElementById(id2).value
        }

        recyclable = {
            recyclable: document.getElementById(id3).value
        }

        quantity = {
            quantity: document.getElementById(id4).value
        }

        pricePerUnit = {
            pricePerUnit: document.getElementById(id5).value
        }

        const object = {
            ...itemName,
            ...description,
            ...recyclable,
            ...quantity,
            ...pricePerUnit
        }

        console.log(object)
        console.log(item._id)
        editItem(item._id, object)
    }

    return (
        <div id='itemBox'>
            <input className='setInput' placeholder={item.name} value={itemName} id={id1}></input>
            <input className='setInput' placeholder={item.description} value={description} id={id2}></input>
            <input className='setInput' placeholder={'Recyclable? ' + item.recyclable} value={recyclable} id={id3}></input>
            <input className='setInput' placeholder={item.quantity} value={quantity} id={id4}></input>
            <input className='setInput' placeholder={item.pricePerUnit} value={pricePerUnit} id={id5}></input>
            <button className="edit-btn" onClick={() => change(item._id)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteItem(item._id)}>Delete</button>
        </div>
    )
}