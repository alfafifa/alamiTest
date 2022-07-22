import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TransactionsScreen from '../screens/TransactionsScreen';
import AnimationScreen from '../screens/AnimationScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TransactionsScreen"
          component={TransactionsScreen}
          options={({route}) => ({
            headerShown: true,
            title: ' ',
            headerBackTitle: '',
            headerTitleAlign: 'left',
            headerBackTitleStyle: {
              fontWeight: 'bold',
              marginLeft: 10,
            },
            headerTintColor: '#000',
            headerLeftContainerStyle: {left: 10},
          })}
        />
        <Stack.Screen
          name="AnimationScreen"
          component={AnimationScreen}
          options={({route}) => ({
            headerShown: true,
            title: ' ',
            headerBackTitle: '',
            headerTitleAlign: 'left',
            headerBackTitleStyle: {
              fontWeight: 'bold',
              marginLeft: 10,
            },
            headerTintColor: '#000',
            headerLeftContainerStyle: {left: 10},
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
