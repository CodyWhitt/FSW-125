

export default function({addItem}) {
    
    let itemName
    let description
    let recyclable
    let quantity
    let pricePerUnit

    const pushArray = () => {
        itemName = {
            name: document.getElementById('name').value
        }

        description = {
            description: document.getElementById('description').value
        }

        recyclable = {
            recyclable: document.getElementById('recyclable').checked
        }

        quantity = {
            quantity: document.getElementById('quantity').value
        }

        pricePerUnit = {
            pricePerUnit: document.getElementById('pricePerUnit').value
        }

        const object = {
            ...itemName,
            ...description,
            ...recyclable,
            ...quantity,
            ...pricePerUnit
        }

        console.log(object)

        addItem(object)
    }

    return (
        <div id='itemBox'>
            <input placeholder="Name" value={itemName} id='name'></input>
            <input placeholder="Description" value={description} id='description'></input> <><br/></>
            Recyclable?<input type='checkBox' value={recyclable} id='recyclable'></input> <><br/></>
            <input placeholder="Quantity" value={quantity} id='quantity'></input>
            <input type='number' placeholder="Price Per Unit" value={pricePerUnit} id='pricePerUnit'></input>
            <button onClick={() => pushArray()}>Add New</button>
        </div>
    )
}