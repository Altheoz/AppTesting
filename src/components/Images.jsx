import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


function Images() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./img/Hi.png')} 
        style={img.size}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,  
    height: 200,
  },
});

const img = StyleSheet.create({
  size: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

export default Images;
