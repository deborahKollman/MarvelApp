import * as React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, ActivityIndicator, Text, Dimensions, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CharacterCard from './CharacterCard';

export default function Favorites(props){
    const styles=StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'black',
        },
        text:{
            display:'flex',
            justifyContent:'center',
            color:'white',
            fontSize:20,
        }
    })

    const [isLoading,setLoading] = useState(true);
    const [data,setData] = useState([]);    
    
    const columns = (Dimensions.get('window').width<600)?1:2;

    useEffect(async() => {
        try {
            let keys = await AsyncStorage.getAllKeys();
            let values = await AsyncStorage.multiGet(keys);
            for(let i=0;i<values.length;i++){
                values[i]=JSON.parse(values[i][1])
            }
            setData(values)
        } catch (error) {
            console.error(error)
        }
        setLoading(false);
    }, []);

    const handleChange = async () => {
        setLoading(true);
        try {
            let keys = await AsyncStorage.getAllKeys();
            let values = await AsyncStorage.multiGet(keys);
            for(let i=0;i<values.length;i++){
                values[i]=JSON.parse(values[i][1])
            }
            setData(values)
        } catch (error) {
            console.error(error)
        }
        setLoading(false);
    }

    return(
        <SafeAreaView style={styles.container}>
            {isLoading?<ActivityIndicator size="large" color="#00ff00" /> :
            <View>
                {data.length===0 && <Text style={styles.text}>No items found</Text>}
                <FlatList
                data={data}
                keyExtractor={({ id }) => id.toString()}
                numColumns={columns}
                renderItem={({ item }) => (
                    <CharacterCard 
                      {...props} 
                      id={item.id}
                      image={item.image} 
                      name={item.name} 
                      onChange={handleChange}
                    />
                )}
                />
            </View>}
        </SafeAreaView>
    )
}