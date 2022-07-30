import React from "react";
import { ScrollView, Image, Text, StyleSheet } from 'react-native';



export default function Information({ image, name, description }) {
    
    const styles = StyleSheet.create({
      container:{
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
      },
      image:{
        display:'flex',
        alignSelf:'center',
        width:200,
        height:200,
      },
      title:{
        margin:15,
        fontSize:17,
        fontWeight:'bold',
      },
      description:{
        padding:5,
        backgroundColor:'lightgrey',
        borderRadius:10,
      }
    })
    
    return (
      <ScrollView style={styles.container}>
        <Image 
          style={styles.image}
          source={{uri: image}}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    )
  }