import React from 'react';
import './Person.css'

const Person = (props) => {
         const {gender,first_name,email,expected_salery,image}=props.person
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
            <button className='Hire-Me'>Hire Me</button>
        </div>
    );
};

export default Person;