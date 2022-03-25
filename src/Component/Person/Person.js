import React from 'react';

const Person = (props) => {
         const {gender}=props.person
    return (
        <div>
            <h1>gender:{gender}</h1>
        </div>
    );
};

export default Person;