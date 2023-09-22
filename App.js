/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { Header } from './components';


function App(){
  const isDarkMode = useColorScheme() === 'dark';

  const [state , setState] = useState({
    listData: [
      { item: 'buy milk', id: 1 },
      { item: 'go to a hair saloon', id: 2 },
      { item: 'buy some chocolates', id: 3 },
    ]
  })

  const {listData} = state;

  const pressHandler = (id) => {
    setState((prev) => ({...prev , listData: prev.listData.filter(person => person.age != id)
    }))
  }

  return (
    <View style={styles.sectionContainer}>
      <Header/>
      <View style={styles.sectionContainer}>
          <FlatList
            data={listData}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <Text style={styles.listText}>
                {item.item}
              </Text>
            )}
          />
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
  }
});

export default App;
