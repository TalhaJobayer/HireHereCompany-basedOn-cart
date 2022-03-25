import React, { useEffect, useState } from 'react';
import AddCart from '../AddCart/AddCart';
import Person from '../Person/Person';
import './MainBody.css'

const MainBody = () => {
    const [parsons,setPersons]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setPersons(data))
    },[])
    const HandleCart=(persons)=>{
        console.log(persons);
        const newCArt=[...cart,persons]
        setCart(newCArt)
        console.log(newCArt);
    }
    
    return (
        

        <div >
            <h1> HIRE HERE</h1>
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
               
                
            </div>
        </div>
        </div>
    );
};

export default MainBody;