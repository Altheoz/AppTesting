import React from 'react';
import { Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const handleButtonPress = (name) => {
  Alert.alert(`Button ${name} Pressed`);
}

function CustomButton({ name }) {
  return (
    <TouchableOpacity onPress={() => handleButtonPress(name)} selectable style={styles.button}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'left',
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default CustomButton;
