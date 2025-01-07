const {StyleSheet} = require('react-native');

const CustomTextstyles = StyleSheet.create({
  TextStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  Content: {
    color: '#fff',
    fontWeight: 700,
    fontSize: 24,
  },
});


export default CustomTextstyles;