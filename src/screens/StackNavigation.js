import { Text, View } from "react-native";
import React, { Component,useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Splash from "../screens/Splash";
import Home from "../screens/Home";
import Konum from "../screens/Konum";
import Meslek from "../screens/Meslek";
import GirisYap from "../screens/GirisYap";
import KayitOl from "./KayitOl";
import Sifremiunuttum from "../screens/Sifremiunuttum";
import Galeri from "../screens/Galeri";
import SosyalMedya from "../screens/SosyalMedya";
import GaleriDetay from "../screens/GaleriDetay";
import BizKimiz from "../screens/BizKimiz";
import Ayarlar from "../screens/Ayarlar";
import MeslekDetay from "../screens/MeslekDetay";

const Stack = createStackNavigator();
//Ekranlar arası geçiş 
export class StackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          initialRouteName: "Splash",
        }}>
        <Stack.Screen name="Splash" component={Splash} /> 
        <Stack.Screen name="GirisYap" component={GirisYap} /> 
        <Stack.Screen name="KayitOl" component={KayitOl} /> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Konum" component={Konum}/>
        <Stack.Screen name="Meslek" component={Meslek}/>
        <Stack.Screen name="Sifremiunuttum" component={Sifremiunuttum}/>
        <Stack.Screen name="Galeri" component={Galeri}/>
        <Stack.Screen name="SosyalMedya" component={SosyalMedya}/>
        <Stack.Screen name="GaleriDetay" component={GaleriDetay}/>
        <Stack.Screen name="BizKimiz" component={BizKimiz}/>
        <Stack.Screen name="Ayarlar" component={Ayarlar}/>
        <Stack.Screen name="MeslekDetay" component={MeslekDetay}/>
      </Stack.Navigator>
    );}}
export default StackNavigation;


