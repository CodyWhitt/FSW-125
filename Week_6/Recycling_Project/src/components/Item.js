import { v4 as uuidv4 } from 'uuid';
import './item.css'
import { useState, createContext, useContext, Component } from "react";


export default function Item({item, deleteItem, editItem}) {

    const [flag, setFlag] = useState(true)

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
        editItem(item._id, object)
    }
    if (flag == true) {
    return (
        <div id='itemBox'>
            <div>{item.name}</div>
            <div>{item.description}</div>
            Recyclable?<input type={'checkbox'} checked={item.recyclable} readOnly></input>
            <div>{item.quantity}</div>
            <div>${item.pricePerUnit}</div>
            <button className="edit-btn" onClick={() => setFlag(!flag)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteItem(item._id)}>Delete</button>
        </div>
    ) } else {
        return (
        <div id='itemBox'>
        <input className='setInput' placeholder={item.name} value={itemName} id={id1}></input>
        <input className='setInput' placeholder={item.description} value={description} id={id2}></input> <br/>
        Recyclable?<input className='setInput' value={recyclable} id={id3} type='checkBox'></input> <br/>
        <input className='setInput' placeholder={item.quantity} value={quantity} id={id4} type='number'></input>
        <input className='setInput' placeholder={item.pricePerUnit} value={pricePerUnit} id={id5} type='number'></input>
        <button className="edit-btn" onClick={() => {change(item._id); setFlag(!flag)}}>Accept</button>
        <button className="delete-btn" onClick={() => setFlag(!flag)}>Cancel</button>
    </div>
    ) }
}