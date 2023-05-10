/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  FlatList,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
// import products from '../products';
import {useSelector, useDispatch} from 'react-redux';
import {cartSlice} from '../../store/cartSlice';

const ProductsDetailScreem = () => {
  const product = useSelector((state: any) => state.products.selectedProducts);
  const {width} = useWindowDimensions();
  const dispatch = useDispatch(cartSlice.actions.addCartItem({product}));
  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({product}));
  };
  return (
    <>
      <ScrollView>
        <View>
          <View>
            <FlatList
              data={product.images}
              renderItem={({item}) => (
                <Image
                  source={{uri: item}}
                  style={{width: width, aspectRatio: 1}}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
            />
          </View>

          <View style={{padding: 15}}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 2,
  },
  description: {
    fontWeight: '300',
    fontSize: 18,
    marginVertical: 10,
    lineHeight: 30,
  },
  button: {
    width: '90%',
    backgroundColor: '#006340',
    bottom: 30,
    alignSelf: 'center',
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '400',
  },
});
export default ProductsDetailScreem;
