import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/Dashboard';
import Services from '../Screens/Services';
import Alerts from '../Screens/Alerts';
import Profile from '../Screens/Profile';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') iconName = 'home-outline';
          else if (route.name === 'Services') iconName = 'construct-outline';
          else if (route.name === 'Alerts') iconName = 'alert-circle-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1E88E5',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Services" component={Services} />
      <Tab.Screen name="Alerts" component={Alerts} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
