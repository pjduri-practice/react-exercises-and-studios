import './styles.css'
import Button from './Button'
import oceans from './oceans.json'

const listItems = oceans.map(ocean =>
   <div className={ocean.fishCheck === 'true' ? 'isAFish' : 'profile'} key={ocean.id}>
      <img src={ocean.image} alt={ocean.name} className='img' />
      <h1>{ocean.name}</h1>
      <h2>Fun Facts:</h2>
      <ul>
         {[ocean.fact1, ocean.fact2, ocean.fact3].map(f => <li>{f}</li>)}
      </ul>
      <Button />
   </div>
)

function Profile() {
   return (
      <ul>
         {listItems}
      </ul>
   )
}

export default Profile