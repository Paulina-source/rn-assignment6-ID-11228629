import React from 'react';
import { View, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const SPACING = 5;

const IMAGES = {
  image1: require('../assets/dress1.png'),
  image2: require('../assets/dress2.png'),
  image3: require('../assets/dress3.png'),
  image4: require('../assets/dress4.png'),
  image5: require('../assets/dress5.png'),
  image6: require('../assets/dress6.png'),
  image7: require('../assets/dress7.png'),
  image8: require('../assets/dress3.png'),
  
  
};

const products = [
  { id: '1', image: IMAGES.image1, name1: 'Office Wear', name2:'reversible angora cardigan', price: 120 },
  { id: '2', image: IMAGES.image2, name1: 'Black', name2:'reversible angora cardigan', price: 120 },
  { id: '3', image: IMAGES.image3, name1: 'Church Wear', name2:'reversible angora cardigan', price: 120 },
  { id: '4', image: IMAGES.image4, name1: 'Lamerei', name2:'reversible angora cardigan', price: 120 },
  { id: '5', image: IMAGES.image5, name1: '21WN', name2:'reversible angora cardigan', price: 120 },
  { id: '6', image: IMAGES.image6, name1: 'Lopo',  name2:'reversible angora cardigan',price: 120 },
  { id: '7', image: IMAGES.image7, name1: 'l21WN',  name2:'reversible angora cardigan',price: 120 },
  { id: '8', image: IMAGES.image3, name1: 'lame', name2:'reversible angora cardigan', price: 120 },
  
];

const HomeScreen = ({ handleAddToCart }) => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={{ width: width / 2 - SPACING, margin: SPACING }}>
            <Image source={item.image} style={{ width: 170, height: 250 }} />
            <Text>{item.name1}</Text>
            <Text>{item.name2}</Text>
            <Text>${item.price}</Text>
            <TouchableOpacity onPress={() => handleAddToCart(item)}>
              <Image source={require('../assets/add_circle.png')} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;






































