import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native';



export default function Information({ image, name, description }) {
    
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
        title:{
            padding:2,
        },
        description:{
            padding:2,
            backgroundColor:'grey'
        }
    })
    
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{uri: image}}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    )
  }