import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import CartListItem from '../../component/cartListItem';
import {useSelector} from 'react-redux';
import {
  selectDeliveryPrice,
  selectSubtotal,
  selectTotal,
} from '../../store/cartSlice';
const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  );
};
const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({item}) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>CheckOut</Text>
      </Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  totalsContainer: {
    margin: 10,
    paddingTop: 0,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textBold: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  button: {
    width: '90%',
    backgroundColor: '#006340',
    bottom: 30,
    alignSelf: 'center',
    padding: 10,
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
export default ShoppingCart;
