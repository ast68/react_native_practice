/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';


function App(){
  const isDarkMode = useColorScheme() === 'dark';

  const [state , setState] = useState({
    name : "Ayush Thunder14",
    person : {
      name : "chun-li",
      age : 35,
    },
    listData: [
      {
        name: 'chun-li', age: 24
      },
      {
        name: 'luigi', age: 28
      },
      {
        name: 'shadow', age: 22
      },
      {
        name: 'matter', age: 30
      },
      {
        name: 'sara', age: 29
      },
      {
        name: 'brad', age: 33
      },
      {
        name: 'chelse', age: 32
      },
      {
        name: 'ron', age: 38
      },
      {
        name: 'ayush', age: 25
      },
      {
        name: 'goku', age: 34
      },
      {
        name: 'gohan', age: 53
      },
      {
        name: 'luffy', age: 21
      },
      {
        name: 'zoro', age: 26
      },
      {
        name: 'itachi', age: 27
      },
      {
        name: 'sasuke', age: 37
      },
    ]
  })

  const {name , person, listData} = state;

  const pressHandler = (id) => {
    setState((prev) => ({...prev , listData: prev.listData.filter(person => person.age != id)
    }))
  }

  return (
    <View style={styles.sectionContainer}>
      {/* <ScrollView>
        {listData.map((item, index) => (
          <View key={index}>
            <Text  style={styles.listText}>{item.name} is of Age : {item.age}</Text>
            </View>
            ))}
          </ScrollView> */}
      <FlatList
        // numColumns={2}
        keyExtractor={(item) => item.age}
        showsVerticalScrollIndicator={false}
        data={listData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.age)}>
            <Text  style={styles.listText}>{item.name} is of Age : {item.age}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    marginHorizontal: 0,
    paddingHorizontal: 5,
    display: "flex",
    alignItems: "center",
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
