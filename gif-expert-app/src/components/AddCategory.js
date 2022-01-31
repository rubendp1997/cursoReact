import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({setCategories}) => {

const [inputValue, setInputValue] = useState('');

const handleInputText = (e) =>{
    setInputValue(e.target.value);
}


const handleSubmit = (e) =>{
    e.preventDefault();
    
    if(inputValue.trim().length>2){
        setCategories(cat => [inputValue, ...cat]);
        handleTest()
    }

}
const handleTest = (e) =>{
    setInputValue('');
}

  return (
    <form onSubmit={handleSubmit}>

    <input type='text' 
        value={inputValue}
        onChange={handleInputText}
        onClick={handleTest}
        ></input>

    </form>);
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;
