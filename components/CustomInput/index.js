import React, {useState} from 'react';
import {TextInput} from 'react-native';
import customInputStyles from './customInputStyles';

function CustomInput(props) {
  const {placeholder, inputText, inputStyles, changeHandler} = props;

  return (
    <TextInput
      style={{...customInputStyles.input, ...inputStyles}}
      placeholder={placeholder}
      value={inputText}
      onChangeText={changeHandler}
    />
  );
}

export default CustomInput;
