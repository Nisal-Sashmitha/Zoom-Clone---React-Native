
import { SafeAreaView, StyleSheet,View,  Platform, StatusBar } from 'react-native';
import Home from './screens/Home';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight :0
  },
});
