import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ProductsScreen from './data/screens/ProductsScreen';
import ProductsDetailScreem from './data/screens/ProductsDetailScreem';
import ShoppingCart from './data/screens/ShoppingCart';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pressable, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {selectNumberOfItems} from './store/cartSlice';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();
const Navigator = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center', // align header title to center
          headerStyle: {backgroundColor: '#fff'}, // customize header style
        }}>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                style={{flexDirection: 'row'}}>
                <FontAwesome5 name="shopping-cart" size={30} color="gray" />
                <Text style={{margin: 5, fontWeight: '500'}}>
                  {numberOfItems}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ProductsDetai"
          component={ProductsDetailScreem}
          options={{presentation: 'modal'}}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
