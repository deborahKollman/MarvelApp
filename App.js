import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Detail from './components/Detail';
import Favorites from './components/Favorites';
import { Button, SafeAreaView } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} 
        options={({navigation,route})=>({
          headerRight:()=>(
            <Button
            title="Fav >" 
            onPress={() => navigation.navigate("Favorites")}
            />
          )
        })} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}
