import React, { useState } from 'react'
import "./App.css";

function App( ) {
  const [family, setfamily] = useState([
    {firstname:"latifa" ,  profession: "student" , image: "https://m.media-amazon.com/images/I/511JmCjJogL._AC_.jpg", age: "20"},
    {firstname:"maryem" ,  profession: "student" , image: "https://cdn.shopify.com/s/files/1/0516/8968/5154/products/quicksand-cream-rose-flowers-online_pri_90_4359_l_8a1a5cce-8042-445f-b05d-34a8e3ecd78d_2048x2048.jpg?v=1662667153",  age: "20"},
  { firstname: "naziha" ,  profession: "teacher" , image: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg" , age: "24"} ]);
  const [show, setshow] = useState(false);
return(
    <div >

      <div className='box'>
      <button  className='btn' onClick={()=>setshow(!show)}>Click to show</button>
      </div>
      <div className='bg'></div>
   { show?<div className='body'>
      {family.map((el)=> <figure className="image-block">
        <h1>{el.firstname}</h1>
        <img src={el.image} />
        <figcaption>
          <h3>
           { el.profession}
           <br/>
           { el.age}
          </h3>
          
          
        </figcaption>
      </figure>
)}
    </div>:null}
      
    </div>
  )
}

export default App