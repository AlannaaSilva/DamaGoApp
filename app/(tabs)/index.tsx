import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ProfileSection  from '@/components/ProfileSection/index';

export default function HomeScreen() {
  return (
    <View>
      <ProfileSection/>
    </View>
  );
}