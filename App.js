import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import { store } from './src/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store} >
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
