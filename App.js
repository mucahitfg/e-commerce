import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ProductScreen from './src/screens/ProductScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ShoppingCart from './src/screens/ShoppingCart';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ProductScreen /> */}
      {/* <ProductDetailsScreen /> */}
      <ShoppingCart />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});
