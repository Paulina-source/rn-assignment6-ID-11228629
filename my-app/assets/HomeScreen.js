import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, Text , StyleSheet, Animated} from 'react-native';
import { Dimensions } from 'react-native';
import { useRef,useEffect } from 'react';

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

const HomeScreen = ({ handleAddToCart, navigation }) => {
  const [searchQuery, setSearchQuery]= useState('');
  const[filteredProducts, setFilteredProducts]= useState(products);
  const handleSearch =(query)=>{
    setSearchQuery(query);
    const filtered= products.filter((products) =>{
      const productName=products.name1.toLowerCase()+''+products.name2.toLowerCase();
      return productName.includes(query.toLowerCase());
    });
    setFilteredProducts(filtered);
  };

  const handleMenuPress = () => {
    navigation.navigate('MenuScreen');
  };

  const handleShoppingBagPress = () => {
    navigation.navigate('CartScreen');
  };
  
 
  return (
    <View>
      <View style={styles.header}>
        <Image source={require('../assets/Menu.png')} style={styles.headerImage} />
        <Image source={require('../assets/Logo.png')} style={[styles.headerImage, { marginLeft: width / 4.5 - 40 }]} />
        <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen', { handleSearch })}>
            <Image source={require('../assets/Search.png')} style={styles.search} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen',{handleShoppingBagPress})}>
            <Image source={require('../assets/shoppingBag.png')} style={styles.shoppingbag} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subheader}>
      <Text style={styles.text}>OUR STORY</Text>
        <View style={{ flexDirection: 'row' , justifyContent:'flex-end', alignItems:'center'}}>
        <Image source={require('../assets/Listview.png')} style={styles.listview
          } /> 
          <Image source={require('../assets/Filter.png')} style={styles.filter} />
        <View>
        </View>
        </View>
       
        <FlatList
  data={filteredProducts}
  renderItem={({ item }) => (
    <View style={{ width: width / 2 - SPACING, margin: SPACING , }}>
      <View style={{ position: 'elative' }}>
        <Image
          source={item.image}
          style={{
            width: 180, 
            height: 250,
           
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}
        >
          <TouchableOpacity onPress={() => handleAddToCart(item)}>
            <Image
              source={require('../assets/add_circle.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.name1}>{item.name1}</Text>
        <Text style={styles.name2}>{item.name2}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  )}
  numColumns={2}
/>
      </View>
      </View>
      
      )}
  
  



const styles =StyleSheet.create({
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding: 10,
  },
  search:{
    marginRight: 20
  },
  shoppingbag:{
    marginRight: 10,
    
  },
  subheader:{
    justifyContent:'space-between',
    alignItems:'stretch',
    
  },

  listview:{
    marginRight:20,
    height:20,
    width:20
  },

  filter:{
    marginRight:10,
    height:30,
    width:20
    
  },
  text:{
    paddingTop:10,
    fontSize:20,
    fontFamily:'Serif'
   

  },
  name1:{
    fontSize: 16,
    fontWeight:'bold'
  },
  name2:{
    color:'grey'
  },
  price:{
    color:'#dc6601',
    
    
  }
})

export default HomeScreen;






































