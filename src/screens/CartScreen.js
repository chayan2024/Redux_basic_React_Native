// src/screens/CartScreen.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { removeFromCart, updateItemQuantity } from '../redux/actions/cartActions';

const CartScreen = ({ cartItems, removeFromCart, updateItemQuantity }) => {
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.name}</Text>
      <Text>${item.price.toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => updateItemQuantity(item.id, item.quantity - 1)} />
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <Button title="+" onPress={() => updateItemQuantity(item.id, item.quantity + 1)} />
      </View>
      <Button title="Remove" onPress={() => removeFromCart(item.id)} />
    </View>
  );

  const checkoutHandler = () => {
    // Implement your checkout logic here
    console.log('Checkout logic');
  };

  return (
    <View style={styles.container}>
      <Text>Shopping Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
      />
      <Button title="Checkout" onPress={checkoutHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  cartItem: {
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityText: {
    marginHorizontal: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
  };
};

const mapDispatchToProps = {
  removeFromCart,
  updateItemQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
