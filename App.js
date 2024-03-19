import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView>
      <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1637775297458-7443ffd545b2?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",}} style={styles.backgroundImage}>
          <View style={styles.header}>
            <Text style={styles.heading}>
              Kolkata
            </Text>
            <Ionicons name="settings-outline" size={24} color="black"/>
          </View>
      </ImageBackground>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: 300,
    backgroundColor: 'red'
  },
  header :{
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  
  },
  heading: {
    color: '#FFFF',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
