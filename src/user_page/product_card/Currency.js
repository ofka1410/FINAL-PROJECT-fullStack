import React from 'react'
import './card.css'
export default function Currency({setCurrency}) {
    return (
        <div className='currency-warper'>
            <div>
          <h3 className='h-currency'>Choose the currency you want to pay</h3>
            </div>
            <div>
            <select onChange={(e)=>{setCurrency(e.target.value)}} className='currency-select'>
               <option value='Dollar'>Dollar $</option>
               <option value='Euro'>Euro &#8364;</option>
               <option value='Shekel'>Shekel &#8362;</option>
          </select> 
            </div>
        </div>
    )
}
