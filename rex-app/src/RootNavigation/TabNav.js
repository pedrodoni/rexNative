import { View, Text, Platform } from "react-native";
import React from "react";

// Icons
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import RootNavigation from "./RootNavigation";


import { colors } from "../global/colors";
import FinishCart from "../components/FinishCart";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ title: "", headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="shopping-store"
              size={focused ? 35 : 20}
              color={focused ? colors.pink : "black"}
            />
          ),
        }}
        name="rootNavigation"
        component={RootNavigation}
      />
    
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="shopping-bag"
              size={focused ? 35 : 20}
              color={focused ? colors.pink : "black"}
            />
          ),
        }}
        name="finishCart"
        component={FinishCart}
      />
    </Tab.Navigator>
  );
};

export default TabNav;