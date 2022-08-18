

export default function({addItem}) {
    
    let itemName
    let description
    let recyclable
    let quantity
    let pricePerUnit

    const pushArray = () => {
        itemName = {
            name: document.getElementById('one').value
        }

        description = {
            description: document.getElementById('two').value
        }

        recyclable = {
            recyclable: document.getElementById('three').checked
        }

        quantity = {
            quantity: document.getElementById('four').value
        }

        pricePerUnit = {
            pricePerUnit: document.getElementById('five').value
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
            <input placeholder="Name" value={itemName} id='one'></input>
            <input placeholder="Description" value={description} id='two'></input> <><br/></>
            Recyclable?<input type='radio' value={recyclable} id='three'></input> <><br/></>
            <input placeholder="Quantity" value={quantity} id='four'></input>
            <input type='number' placeholder="Price Per Unit" value={pricePerUnit} id='five'></input>
            <button onClick={() => pushArray()}>Add New</button>
        </div>
    )
}