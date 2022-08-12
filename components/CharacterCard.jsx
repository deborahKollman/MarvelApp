import * as React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CharacterCard({id, image, name, navigation}) {
  
    const styles = StyleSheet.create({
        container:{
            margin: 7,
            padding:10,
            display: 'flex',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'space-between',
            backgroundColor:'lightgrey',
            borderRadius:10,
        },
        left:{
            display: 'flex',
            flexDirection: 'row',
            alignItems:'center',
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
            <View style={styles.left}>
                <Image 
                    style={styles.tinyLogo}
                    source={image}
                />
                <Text style={styles.text}>{name}</Text>
            </View>
            <Icon.Button name='star-plus-outline'/>
        </TouchableOpacity>
      );
}