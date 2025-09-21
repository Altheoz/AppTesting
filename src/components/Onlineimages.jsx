import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

function Onlineimages (){
    return(
        <View>
            <Image style={style.img}
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
            />
        </View>
    );
}

const style = StyleSheet.create({
    img: {
        borderRadius: 100,
    },
});
export default Onlineimages;