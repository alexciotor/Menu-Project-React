 const Buttons = ({categories,buttonEffect })=>{
     return(
    <div className="button-container">
     {categories.map((button,index)=>{
         return <button className='btn' key={index} onClick={()=>{
             buttonEffect(button)
         }} >{button} </button>
     })}
    </div>
     )
 }


export default Buttons