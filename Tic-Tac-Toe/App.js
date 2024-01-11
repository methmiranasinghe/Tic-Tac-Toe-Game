import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Board from './components/Board';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Play Tic-Tac Toe and Have Fun!</Text>
      <StatusBar style="auto" />
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
