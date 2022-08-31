import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default function Comic({ name, image }) {
  const media = (Dimensions.get('window').width<600)?(Dimensions.get("window").width-300)/2:30;

  const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        width:300,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        marginHorizontal: media,
    },
    image:{
      display:'flex',
      flex:3/4,
      width:Dimensions.get('window').width*3/4,
      resizeMode: 'contain',
      aspectRatio: 1,
    },
    text:{
      fontWeight:'bold',
      padding:30,
    }
})

  return (
    <View style={styles.container}>
			<Image
          style={styles.image}
				source={{uri: image}}
			/>
			<Text style={styles.text}>{name}</Text>
    </View>
  )
}