import React from 'react'

const GroceryListNew=({groceryitemsdata})=>{
    
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
            {groceryitemsdata.map((items)=>
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

export default GroceryListNew