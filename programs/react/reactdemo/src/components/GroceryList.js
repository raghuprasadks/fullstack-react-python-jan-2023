import React from 'react'

const GroceryList=()=>{

    const groceryitems=[
        {
            'slno':1,
            'item':'Rice',
            'rate':60,
            'qty':10,
            'amount':600
        },
        {
            'slno':2,
            'item':'Dal',
            'rate':90,
            'qty':2,
            'amount':180
        },
        {
            'slno':3,
            'item':'Oil',
            'rate':100,
            'qty':2,
            'amount':200
        },
]
    
    return(
        <div>
        <table>
            <tr>
            <th>Sl No</th>
            <th>Item</th>
            <th>Rate</th>
            <th>Quantity</th>
            <th>Amount</th>            
            </tr>
            {groceryitems.map((items)=>
         <tr key={items.slno}>
             <td>{items.item}</td>
             <td>{items.rate}</td>
             <td>{items.qty}</td>
             <td>{items.amount}</td>
             
         </tr>
         )}
        
        </table>
        </div>
    )
}

export default GroceryList