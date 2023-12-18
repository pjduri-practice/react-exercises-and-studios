import { useState } from 'react'

export default function BoardAssignment () {
   const boards = [
      {
         label: '-select one-',
         value: 'no boards yet!'
      },
      {
         label: 'Appetizers',
         value: 'appetizers'
      },
      {
         label: 'Entrees',
         value: 'entrees'
      },
      {
         label: 'Desserts',
         value: 'desserts'
      }
   ]
   const [boardName, setBoardName] = useState('no boards yet!')

   const handleChange = (event) => {
      setBoardName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map(b => <option value={b.value}>{b.label}</option>)}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   )
}
