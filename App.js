/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
  };

  return (
    <View style={styles.sectionContainer}>
      <Header title={'My Todos'} />
      <View style={styles.content}>
        <AddTodoForm submitHandler={submitHandler} />

        <View style={styles.list}>
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
        </View>
      </View>
    </View>
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

  list: {},

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
