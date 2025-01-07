import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function AddTodoForm(props) {
  const {submitHandler, inputText, changeHandler} = props;

  return (
    <View style={styles.formContianer}>
      <TextInput
        placeholder="New Todos..."
        value={inputText}
        onChangeText={changeHandler}
        onSubmitEditing={() => submitHandler(inputText)}
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => submitHandler(inputText)}>
        <Text style={styles.buttonTitle}>{'Add Todos'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContianer: {
    marginHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#000',
    opacity: '0.85',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: '#fff',
    textAlign: 'center',
  },
});

export default AddTodoForm;
