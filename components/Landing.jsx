import * as React from 'react';
import { TouchableHighlight, Image, Dimensions, StyleSheet } from 'react-native';

export default function Landing ({navigation}) {
    
    
    const styles = StyleSheet.create({
        container:{
            display:'flex',
            flex:1,
            backgroundColor:'black',
            alignItems:'center',
            justifyContent:'center',
            padding:100,
        },
        image:{
            display:'flex',
            flex:1,
            resizeMode: 'contain',
            aspectRatio: 1,
        }
    })
    
    return(
        <TouchableHighlight style={styles.container} onPress={() => navigation.navigate('Home')}>
            <Image 
            style={styles.image}
            source={require('../assets/logo_image.jpg')}
            />
        </TouchableHighlight>
    )
} 