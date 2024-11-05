import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from '@/FirebaseConfig';

type RootStackParamList = {
  Cadastro: any;
  HomeUser: undefined;
  Home: undefined;
  index:any;
  HomeUserScreen: any;
  Register: any;
  Login: any;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const  [user, setUser] = React.useState<User | null>(null);

  React.useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH, (user=>{
      console.log('user',user)
      setUser(user)
    }))
  },[])
  const navigation = useNavigation<NavigationProp>();

  const handleButtonPress = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: '#ffffff', light: '#ffffff' }}
        headerImage={
          <View style={styles.logoContainer}>
            <Image
              source={require('@/assets/images/logo-black.png')}
              style={styles.LogoDamaGO}
            />
          </View>
        }
      >
        <ThemedView style={styles.buttonContainer}>
          {user? 
          <Button title="Fazer Logout" onPress={()=> FIREBASE_AUTH.signOut()} />:
          <>
          <Button title="Fazer login" onPress={() => navigation.navigate('Login', { screen: 'Login' })} />
          <Button title="Continuar sem login" onPress={() => navigation.navigate('HomeUserScreen', { screen: 'HomeUserScreen' })}/>
          </>
           }
          
        </ThemedView>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f2873',
  },
  logoContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    width: '100%',
    height: 'auto',
  },
  LogoDamaGO: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
