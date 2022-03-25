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
    const HandleCart=(SelectedPerson)=>{
        const newCArt=[...cart,SelectedPerson]
        setCart(newCArt)
    }
    
    return (
        

        <div >
            <h1> HIRE HERE</h1>
            <div className='container'>
            
            <div className="person-part">
                 {
                     parsons.map(person=><Person
                        person={person}
                       
                        key={person.id}
                     ></Person> )
                 }   
            </div>
            <div className="cart-part">
                <AddCart
               ></AddCart>
            </div>
        </div>
        </div>
    );
};

export default MainBody;