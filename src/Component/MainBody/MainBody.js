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
    const HandleCart=(SelectedCart)=>{
        if(SelectedCart){
            const newCArt=[...cart,SelectedCart]
            setCart(newCArt)
        }
        
        
    }
    const DeleteCart=()=>{
        
        const newCart=[]
        setCart(newCart)
        
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
                    
                    addedPerson={addedPerson}
                   ></AddCart>)
               }
               
                <button onClick={ cart.sort(
        () => Math.random() - Math.random()
      )} className='randomBtn'><b>Choose 1 Randomly</b></button>
                <button onClick={()=>DeleteCart()} className='clearBtn'><b>Delete All</b></button>
            </div>
        </div>
        </div>
    );
};

export default MainBody;