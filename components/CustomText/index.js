import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomTextstyles from './textStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function CustomText(props) {
  const {data, title, textStyles, pressTextHandler, icon} = props;
  return (
    <View>
      <TouchableOpacity
        onPress={() => pressTextHandler(data.id)}
        style={{...CustomTextstyles.TextStyle, ...textStyles}}>
        <Text style={{...CustomTextstyles.Content}}>{title}</Text>
        {icon ? <Icon name="delete" size={30} color="#900" /> : null}
      </TouchableOpacity>
    </View>
  );
}

export default CustomText;
