import * as React from 'react';
import { TouchableHighlight, Image, Dimensions, StyleSheet } from 'react-native';

export default function Landing ({navigation}) {
    const styles = StyleSheet.create({
        image:{
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
        }
    })
    
    return(
        <TouchableHighlight onPress={() => navigation.navigate('Home')}>
            <Image 
            style={styles.image}
            source={{uri:'https://textpro.me/images/user_image/2022/08/62fe9e2864593.jpg'}}
            
            resizeMode='stretch'
            />
        </TouchableHighlight>
    )
} 