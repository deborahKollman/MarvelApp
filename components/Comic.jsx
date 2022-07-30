import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default function Comic({ name, image }) {
  
  const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor:'lightgrey',
        borderRadius:10,
        width:300,
        alignItems:'center',
        alignContent:'center',
        padding:20,
        marginRight: (Dimensions.get("window").width-300)/2,
        marginLeft: (Dimensions.get("window").width-300)/2,
    },
    image:{
        width:200,
        height:200,
        display:'flex',
        margin:15,
    },
    text:{
      fontWeight:'bold',
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