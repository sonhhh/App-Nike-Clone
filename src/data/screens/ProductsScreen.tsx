import {View, FlatList, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import products from '../products';
import {useSelector, useDispatch} from 'react-redux';
import {productsSlice} from '../../store/productsSlice';
const ProductsScreen = ({navigation}) => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>{ 
              dispatch(productsSlice.actions.setSelectedProducts(item.id));
              navigation.navigate('ProductsDetai')}}
            style={styles.itemcontainer}>
            <Image source={{uri: item.image}} style={styles.imagehome} />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemcontainer: {
    padding: 1,
    width: '50%',
  },
  imagehome: {
    width: '100%',
    aspectRatio: 1.5,
  },
});
export default ProductsScreen;
