import * as React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CharacterCard({id, image, name, navigation}) {
  
    const styles = StyleSheet.create({
        container:{
            padding: 20,
            display: 'flex',
            flexDirection: 'row'
        },
        tinyLogo:{
            width:50,
            height:50,
        }
    })

    return (
        <TouchableOpacity 
                style={styles.container}
                onPress={() => navigation.navigate('Detail',{id:id})}
        >
                <Image 
                    style={styles.image}
                    source={image}
                />
          <Text>{name}</Text>
        </TouchableOpacity>
      );
}