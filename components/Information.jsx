import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

export default function Information({ image, name, description }) {
    
    const styles = StyleSheet.create({
      container_movil:{
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
      },
      container_pc:{
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around',
      },
      image:{
        display:'flex',
        width:Dimensions.get('window').width/3,
        height:Dimensions.get('window').width/3,
        margin:30,
      },
      title:{
        fontSize:17,
        fontWeight:'bold',
      },
      description:{
        display:'flex',
      },
      info:{
        display: 'flex',
        flexDirection: 'column',
        width:Dimensions.get('window').width/2,
      }
    })

    const media = (Dimensions.get('window').width<600)?true:false;
    
    return (
      <View>
        {media?<View style={styles.container_movil}>
        <Text style={styles.title}>{name}</Text>  
        <Image 
          style={styles.image}
          source={{uri: image}}
        />
        {description?
        <Text style={styles.description}>{description}</Text>:
        <Text style={styles.description}>No description found</Text>}
      </View>:
      <View style={styles.container_pc}>
        <Image 
          style={styles.image}
          source={{uri: image}}
        />
        <View style={styles.info}>
        <Text style={styles.title}>{name}</Text> 
        {description?
        <Text style={styles.description}>{description}</Text>:
        <Text style={styles.description}>No description found</Text>} 
        </View>
        </View>}
      </View>
    )
  }