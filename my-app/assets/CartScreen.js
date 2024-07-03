import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CartScreen = (navigation, handleAddToCart) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const handleRemoveFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id!== item.id));
    setTotalPrice(totalPrice - item.price);
  };

  return (
    <View>
      <View style={styles.header}>
        <Image source={require('../assets/Logo.png')} style={styles.headerImage} />
        <TouchableOpacity>
          <Image source={require('../assets/Search.png')} style={styles.search} />
        </TouchableOpacity>
      </View>
      <View style={styles.subheader}>
        <Text style={styles.subheaderText}>Checkout</Text>
        <View style={styles.subheaderLine}>
          <View style={styles.diamond} />
        </View>
      </View>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.cartItemImage} />
            <View style={styles.cartItemInfo}>
              <Text style={styles.cartItemName1}>{item.name1}</Text>
              <Text style={styles.cartItemName2}>{item.name2}</Text>
              <Text style={styles.cartItemPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
              <Image source={require('../assets/remove.png')} style={styles.removeImage} />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerImage: {
    width: 30,
    height: 30,
  },
  search: {
    marginRight: 10,
  },
  subheader: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  subheaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subheaderLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  diamond: {
    width: 20,
    height: 20,
    backgroundColor: '#ccc',
    transform: [{ rotate: '45deg' }],
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cartItemImage: {
    width: 50,
    height: 50,
  },
  cartItemInfo: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cartItemName1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemName2: {
    fontSize: 14,
    color: 'grey',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#dc6601',
  },
  removeImage: {
    width: 20,
    height: 20,
  },
  totalContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;