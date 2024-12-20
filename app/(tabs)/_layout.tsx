import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from '@/FirebaseConfig';

export default function TabLayout() {
  const  [user, setUser] = React.useState<User | null>(null);

  React.useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH, (user=>{
      console.log('user',user)
      setUser(user)
    }))
  },[])
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home-outline' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen   
        name="HomeUserScreen"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />)}}/>

      {user?
        <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-outline' : 'person-outline'} color={color} />
          ),
        }}
      /> :
      <Tabs.Screen
      name="profile"
      options={{
        title: 'Perfil',
        tabBarIcon: () => null, 
        tabBarButton: () => null,
        tabBarStyle: { display: 'none' } 
      }}
    />
      } 
      
      <Tabs.Screen
        name="community"
        options={{
          title: 'Comunidade',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'list-outline' : 'list-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Register"
        options={{
          title: 'registro',
          tabBarIcon: () => null, 
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' } 
        }}
      />
      <Tabs.Screen
        name="EventDetailsScreen"
        options={{
          title: 'event',
          tabBarIcon: () => null, 
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' } 
        }}
      />
      <Tabs.Screen
        name="Login"
        options={{
          title: 'login',
          tabBarIcon: () => null, 
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' } 
        }}
      />
    </Tabs>
  );
}
