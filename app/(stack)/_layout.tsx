import { Stack } from 'expo-router';
import EventDetailsScreen from './EventDetailsScreen';
import Register from './Register';

export default function StackLayout(){
  return(
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="EventDetailsScreen"/>
      <Stack.Screen name="Register"/>
    </Stack>
  )
}