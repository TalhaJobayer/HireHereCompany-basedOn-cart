import React from 'react';
import './AddCart.css'

const AddCart = ({addedPerson}) => {
   const {first_name,email,expected_salery,image}=addedPerson
    return (
        <div className='Cart-container'>
            <div className="img-part">
                <img src={image} width="100px" 
     height="100px"  alt="" />
            </div>
            <div className="text-part">
                <h5>Name:{first_name}</h5>
            <h6>salary:{expected_salery}</h6>
            </div>
        <button>ijg</button>
        </div>
    );
};

export default AddCart;