import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import CustomTextstyles from './textStyles';

function CustomText(props) {
  const {data, title, textStyles, pressTextHandler} = props;
  return (
    <TouchableOpacity onPress={() => pressTextHandler(data.id)}>
      <Text style={{...CustomTextstyles.TextStyle, ...textStyles}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomText;
