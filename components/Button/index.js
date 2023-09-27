import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import custombuttonstyles from './custombuttonstyles';

function CustomButton(props) {
  const {title, buttonStyles, buttonTitle, buttonPressHandler} = props;

  return (
    <TouchableOpacity
      onPress={() => buttonPressHandler}
      style={{...custombuttonstyles.buttonContainer, ...buttonStyles}}>
      <Text style={{...custombuttonstyles.buttonTitle, ...buttonTitle}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
