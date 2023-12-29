// src/screens/ProductScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = ({ addToCart }) => {
  const [product, setProduct] = useState({
    id: 1,
    name: 'Fresh Apples',
    price: 2.99,
    image: require('../assets/images.png'),
  });

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} />
        <Text style={styles.quantityText}>{quantity}</Text>
        <Button title="+" onPress={() => setQuantity(quantity + 1)} />
      </View>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductScreen);
