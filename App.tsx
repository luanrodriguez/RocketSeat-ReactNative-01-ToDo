import { StyleSheet, View, StatusBar} from 'react-native';

import { Home } from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='transparent' barStyle='light-content'/>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626'
  },
});
