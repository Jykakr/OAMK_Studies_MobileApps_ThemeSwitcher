import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainAppbar from './components/MainAppbar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import Home from './screens/Home';
import Settings from './screens/Settings';
import ThemeProvider from './context/ThemeProvider';


export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <PaperProvider>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar backgroundcolor="#666" barStyle="light-content"/>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{header: (props) =>
              <MainAppbar {...props} backgroundColor='#666' icon="cog" color='green' />
            }}
          >
            <Stack.Screen name="Home">
              {() => 
                <Home />
              }
            </Stack.Screen>
            <Stack.Screen name="Settings" component={Settings}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
