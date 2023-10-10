/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useColorScheme,
} from 'react-native';
import {CustomButton, CustomInput, CustomText, Header} from './components';
import {AddTodoForm} from './views';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [state, setState] = useState({
    listData: [],
  });

  const {listData} = state;

  const pressHandler = id => {
    setState(prev => ({
      ...prev,
      listData: prev.listData.filter(item => item.id != id),
    }));
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setState(prev => ({
        ...prev,
        listData: [
          {
            item: text,
            id: Math.random().toFixed(2).toString(),
          },
          ...prev.listData,
        ],
      }));
    } else {
      Alert.alert('ERROR!', 'Todos must be 3 chars long', [
        {text: 'ok', onPress: () => console.log('Validation Error!')},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.sectionContainer}>
        <Header title={'My Todos'} />
        <View style={styles.content}>
          <AddTodoForm submitHandler={submitHandler} />
          <View style={listData.length != 0 ? null : styles.list}>
            {listData.length != 0 ? (
              <FlatList
                data={listData}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <CustomText
                    title={item.item}
                    data={item}
                    textStyles={styles.listText}
                    pressTextHandler={pressHandler}
                  />
                )}
              />
            ) : (
              <Text style={styles.emptyListText}>
                {'No Todos For Today...'}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 0,
    marginHorizontal: 0,
    paddingHorizontal: 0,
    flex: 1,
  },

  listText: {
    marginTop: 10,
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: 'green',
    color: '#fff',
    fontWeight: 700,
    fontSize: 24,
  },

  list: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 30,
  },

  emptyListText: {
    fontSize: 18,
    fontWeight: '600',
  },

  formBtn: {
    color: '#000',
    // backgroundColor: '#000',
    marginHorizontal: 5,
  },

  content: {
    paddingTop: 20,
  },

  inputStyle: {
    marginHorizontal: 10,
  },
});

export default App;
