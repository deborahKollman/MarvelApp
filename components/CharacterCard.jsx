import * as React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default function CharacterCard({id, image, name, navigation,onChange}) {
  
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

    const [isFavorite,setFavorite] = useState(false);

    useEffect(async() => {
        try {
            let key = await AsyncStorage.getItem(id);
            setFavorite(key!==null);
        } catch (error) {
            console.error(error)
        }
    }, []);

    const handleAddFavorite = async ()=>{
        try {
            let value={id, image, name}
            await AsyncStorage.setItem(id, JSON.stringify(value))
            setFavorite(true);
            onChange();
        } catch (error) {
            console.log(error)
        }
    }

    const handleRemoveFavorite = async () => {
        try {
            await AsyncStorage.removeItem(id)
            setFavorite(false);
            onChange();
        } catch (error) {
            console.log(error)
        }
    }

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
            {!isFavorite?<Icon.Button name='star-plus-outline' onPress={handleAddFavorite}/>:<Icon.Button name='star-remove-outline' onPress={handleRemoveFavorite}/>}
        </TouchableOpacity>
    );
}