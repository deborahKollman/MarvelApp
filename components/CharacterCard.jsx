import * as React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CharacterCard({id, image, name, navigation}) {
  
    const styles = StyleSheet.create({
        container:{
            margin: 7,
            padding:10,
            display: 'flex',
            flexDirection: 'row',
            alignItems:'center',
            backgroundColor:'lightgrey',
            borderRadius:10,
        },
        tinyLogo:{
            width:50,
            height:50,
            borderRadius:5,
            marginRight:15,
        },
        text:{
        }
    })

    return (
        <TouchableOpacity 
                style={styles.container}
                onPress={() => navigation.navigate('Detail',{id:id})}
        >
                <Image 
                    style={styles.tinyLogo}
                    source={image}
                />
          <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
      );
}