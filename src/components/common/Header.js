// Import libraries for making a component
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <SafeAreaView style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </SafeAreaView>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    zIndex: 1,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
  }
};

// Make the component available to other parts of the app
export { Header };
