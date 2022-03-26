import React from 'react';
import './AddCart.css'
import{ AiTwotoneDelete} from 'react-icons/ai'

const AddCart = ({addedPerson,removeCart}) => {
   const {first_name,email,expected_salery,image}=addedPerson
   
    return (
        
           
        <div className='Cart-container'>
            <div className="img-part">
                <img src={image} width="100px" 
     height="100px"  alt="" />
            </div>
            <div className="text-part">
                <h3>Name:{first_name}</h3>
            <h4>salary:{expected_salery}</h4>
           
            </div>
        <button onClick={()=>removeCart(addedPerson.id)} className='removeBTn' ><AiTwotoneDelete size= "25" className='icon'></AiTwotoneDelete></button>
        </div>
    

       
    );
};

export default AddCart;