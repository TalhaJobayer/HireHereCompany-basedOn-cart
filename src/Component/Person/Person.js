import React from 'react';
import './Person.css'
import {BsFillCartCheckFill} from 'react-icons/bs'

const Person = ({person,HandleCart}) => {
    
         const {gender,first_name,email,expected_salery,image,id}=person
    return (
        <div className='person-container'>
            <div className="image-part">
                <img src={image} alt="" />
            </div>
            <div className='text-part'>
            <h1><b>Name:</b> {first_name} </h1>
            <p><b>Email:</b> {email}</p>
            <p><b>Expected salery: $</b>{expected_salery}</p>
            <p><b>Gender</b>: {gender}</p>
            
            </div>
            <button onClick={()=>HandleCart(person)} className='Hire-Me'><b>Hire Me </b><BsFillCartCheckFill size="20"></BsFillCartCheckFill> </button>
        </div>
    );
};

export default Person;