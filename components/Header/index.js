import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'

 function Header() {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
            My Todos
        </Text>
    </View>

  )
}

const styles = StyleSheet.create({

headerContainer:{
    backgroundColor: '#000',
    opacity: 0.85,
    color: '#fff',
    height: 60,
  },
  
  headerText:{
    color: "#fff",
    fontWeight: 600,
    fontSize: 17,
    textAlign: 'center',
    padding: 15,
}
});


export default Header;