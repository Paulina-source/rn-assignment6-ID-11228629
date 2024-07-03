import React from 'react';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './assets/HomeScreen';
import CartScreen from '../assets/CartScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);

  useEffect(() => {
    AsyncStorage.getItem('cartItems').then((items) => {
      if (items) {
        setCartItems(JSON.parse(items));
      }
    });
  }, []);

  const handleAddToCart = (item) => {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
    AsyncStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const handleRemoveFromCart = (item) => {
    const newCartItems = cartItems.filter((i) => i.id!== item.id);
    setCartItems(newCartItems);
    AsyncStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={() => <HomeScreen handleAddToCart={handleAddToCart} />} />
        <Stack.Screen name="Cart" component={() => <CartScreen cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;