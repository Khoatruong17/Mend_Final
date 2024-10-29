import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="việc cần làm" />
        <Button title="thêm việc" />
      </View>
      <View>
        <Text style={styles.header1}>Việc cần làm hôm nay</Text>
      </View>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 100

  },
  inputContainer: {
    flexDirection: 'row'
  },
  header1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'blue',
    padding: 8,
    marginRight: 10,
    width: '70%',

  }
});
