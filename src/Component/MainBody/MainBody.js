import React, { useEffect, useState } from 'react';
import AddCart from '../AddCart/AddCart';
import Person from '../Person/Person';
import logo from '../../logo/hh-logo.png'
import './MainBody.css'


const MainBody = () => {
    const [parsons,setPersons]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setPersons(data))
    },[])
    const HandleCart=(SelectedCartId)=>{
         const newCArt=[...cart,SelectedCartId]
         cart.map(singleCart=>singleCart.id)
        //  const d=cart.filter(dCArt=>!dCArt.id===SelectedCartId.id)

           if(cart.length<4  )
            setCart(newCArt)
             
    }
    const DeleteCart=()=>{
        const newCart=[]
        setCart(newCart)   
    }
    const removeCart=(itemId)=>{
        const items = cart.filter(item => item.id !== itemId)
        setCart(items)   
    }
   
    const[random,setrandom]=useState(0)

    const randomHandle=()=>{

       
        const getRandom=cart[Math.floor(Math.random() * cart.length)]
      
        setrandom(getRandom)
        
        
    }
   
  
    return (
        

        <div >
            <img src={logo} alt="" />
            <h1>HIRE HERE</h1>
            <div className='container'>
            
            <div className="person-part">
                 {
                     parsons.map(person=><Person
                        person={person}
                        HandleCart={HandleCart}
                       
                        key={person.id}
                     ></Person> )
                 }   
            </div>
            <div className="cart-part">

               {
                   cart.map(addedPerson=><AddCart
                    key={addedPerson.id}
                    removeCart={ removeCart}
                    
                    addedPerson={addedPerson}
                   ></AddCart>)
                
                  
               }
               {
                <div className='Cart-container'>
                  <div className="img-part">
                      <img src={random.image} width="100px" 
           height="100px"  alt="" />
                  </div>
                  <div className="text-part">
                      <h3>Name:{random.first_name}</h3>
                      
                  <h4>salary:{random.expected_salery}</h4>
                  
                 
                  </div>
              </div>



               }
               
               
                <button onClick={()=>randomHandle()}   className='randomBtn'><b>Choose 1 Randomly</b></button>
                <button onClick={()=>DeleteCart()} className='clearBtn'><b>Delete All</b></button>
            </div>
        </div>
        </div>
    );
};

export default MainBody;