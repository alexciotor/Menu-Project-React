 import {useState,useEffect} from 'react'
 import Buttons from './buttons'
import data from './data'
import Menus from './menus'
  const allCategories = ['all', ...new Set (data.map(items=>{
   return items.category
  }))]
  function App() {
    
  const [items,setItems] = useState(data)
  const [categories,setCategories] =useState(allCategories)
  // Buttons Functionality function
 const buttonEffect = (category)=>{
   if(category ==='all'){
 setItems(data)
    
     return
   }
   const otherButtons = data.filter(item=>{
     if(item.category===category){
     return item.category
     }
 
   })
 
     setItems(otherButtons)
 }
 return(
   <section className="section-one">
<div className="main-title">our menu</div>
<div className="underline"></div>

<Buttons categories={categories} buttonEffect={buttonEffect} />
<Menus items={items}/>
</section>
 )
}

export default App;
