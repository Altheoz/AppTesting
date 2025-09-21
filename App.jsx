import React from 'react';
import { RefreshControl, View, StatusBar, Text, ScrollView, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import CustomButton from './src/components/CustomButton';
import Images from './src/components/Images';
import Onlineimages from './src/components/Onlineimages';


const img = require('./src/components/img/Hi.png');

function App() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  
  return (
    <ScrollView style={{ flex: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> }>
      <SafeAreaView style={styles.safeArea}>

        <ImageBackground
          source={img}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
          <StatusBar barStyle="light-content" backgroundColor="white" />
            <CustomButton name="1" />
            <CustomButton name="2" />
            <CustomButton name="3" />
            <CustomButton name="4" />
            <CustomButton name="5" />
            <CustomButton name="6" />
            <Text selectable style={styles.heading}>Hello Application Android</Text>
            <CustomButton name="7" />
            <CustomButton name="8" />
            <CustomButton name="9" />
            <CustomButton name="10" />
            <CustomButton name="11" />
            <CustomButton name="12" />
            <CustomButton name="13" />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white' }}>Try editing me! 🎉</Text>
          </View>

          <View style={styles.container}>
            <Images />
          </View>

          <View style={styles.container}>
            <Onlineimages />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default App;
