import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Comic({ name, image }) {
  
  const styles = StyleSheet.create({
    container:{
        padding: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    image:{
        width:100,
        height:100,
        display:'flex',
        justifyContent: 'center',
    },
})

  return (
    <View style={styles.container}>
			<Image
          style={styles.image}
				source={{uri: image}}
			/>
			<Text>{name}</Text>
    </View>
  )
}