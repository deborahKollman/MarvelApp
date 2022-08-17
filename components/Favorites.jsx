import * as React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, ActivityIndicator, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CharacterCard from './CharacterCard';

export default function Favorites(props){
    const [isLoading,setLoading] = useState(true);
    const [data,setData] = useState([]);    
    

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
        <SafeAreaView style={{flex:1}}>
            {isLoading?<ActivityIndicator size="large" color="#00ff00" /> :
            <View>
                {data.length===0 && <Text>No items found</Text>}
                <FlatList
                data={data}
                keyExtractor={({ id }) => id.toString()}
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