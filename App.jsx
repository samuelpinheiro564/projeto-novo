import { Text, View,StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
	return (
		<View>
      <Text>Hello, World!</Text>
      <StatusBar style="auto" />
    </View>
	);
}
const styles = StyleSheet.create({
    container: {
        
    },
    inputLine: {
        borderBottomWidth:1,
        borderBottomColor:'black',
    },
    });