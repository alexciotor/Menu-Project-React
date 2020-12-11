 import {useState,useEffect} from 'react'
 import Buttons from './buttons'
import data from './data'
import Menus from './menus'

function App() {
const [menu, setMenu] =useState(data)

  return (

    <section className="main-section">
    <h1 className='title'>Our Menu</h1>
    <div className="underline"></div>
    <div className="buttons">
    {menu.map(item=>{
      return(
        
      <Buttons {...item} />
   
      )
    })}
    </div>
    </section>
  )
 
}

export default App;
