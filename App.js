import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/Landing';
import Home from './components/Home';
import Detail from './components/Detail';
import Favorites from './components/Favorites';
import { Pressable, SafeAreaView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name='Landing' component={Landing}
        options={{headerShown:false,title:'Marvel App'}}
        />
        <Stack.Screen name="Home" component={Home} 
        options={({navigation,route})=>({
          headerRight:()=>(
            <Pressable
            onPress={() => navigation.navigate("Favorites")}
            style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}
            >
              <Text style={{marginRight:10,fontSize:18,fontWeight:'500',letterSpacing:0.25,color:'white',lineHeight:21}}>Fav</Text>
            <Icon name='arrow-right' color='white' size={25} style={{padding:12}}/>
            </Pressable>
          ),
          headerStyle:{
            backgroundColor:'#F0131E',
          },
          headerTintColor:'white'
        })} />
        <Stack.Screen name="Detail" component={Detail} 
        options={({navigation,route})=>({
          title:route.params.name,
          headerStyle:{
            backgroundColor:'blue',
          },
          headerTintColor:'white'
        })}/>
        <Stack.Screen name="Favorites" component={Favorites} 
        options={{headerStyle:{
          backgroundColor:'#F0131E',
        },
        headerTintColor:'white'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}
