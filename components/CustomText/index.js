import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomTextstyles from './textStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function CustomText(props) {
  const {data, title, textStyles, pressTextHandler, icon} = props;
  return (
    <View>
      <View style={{...CustomTextstyles.TextStyle, ...textStyles}}>
        <Text style={{...CustomTextstyles.Content}}>{title}</Text>
        {icon ? (
          <TouchableOpacity onPress={() => pressTextHandler(data.id)}>
            <Icon name="delete" size={30} color="#900" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

export default CustomText;
