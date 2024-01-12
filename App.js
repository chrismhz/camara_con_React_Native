import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import Analisis from './MyScreens/Analisis';
import PhotoCam from './MyScreens/PhotoCam';
import PhotoCamSec from './MyScreens/PhotoCamSec';

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Analisis} />
        <Drawer.Screen name="Camara" component={PhotoCam} options={({ route }) => ({drawerLabel: () => null,drawerItemStyle: { display: 'none' },})} />
        <Drawer.Screen name="CamaraS" component={PhotoCamSec} options={({ route }) => ({drawerLabel: () => null,drawerItemStyle: { display: 'none' },})} />
      </Drawer.Navigator>
    </NavigationContainer>

  )
}