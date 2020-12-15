

const Menus=({items})=>{
      return <div className="menu-items">
      {items.map(item=>{
const {id,img,price,title,desc}=item
return(
    <article>
    <img src={img} alt="" className="image"/>
   <div className="item-info">
   <header className='header' >
   <h4>{title}</h4>
   <h4>${price}</h4>
   </header>
   <p  >{desc}</p>
   </div>
    </article>
)
      })}
      
      </div>
 
}

export default Menus