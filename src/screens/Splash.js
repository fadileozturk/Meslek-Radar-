
import * as React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity ,ImageBackground} from 'react-native';

const Splash = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/oy.jpg')}
      style={{
      flex: 1,
      width: '100%',
      height: '100%', // Resmin tam ekranı kaplamasını sağlamak için yüksekliği '100%' olarak ayarlanır
      justifyContent: 'center',
      resizeMode: 'contain',
      alignItems: 'center',
    }}>

    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize:20 ,fontWeight: "bold", margin:250 }}> </Text>
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("GirisYap")}>
        <Text style={{ fontSize:20 ,color: "white", fontWeight: "bold", textAlign: "center" }}>Hadi Başlayalım !</Text>
      </TouchableOpacity>
        </View>
    </View>
  </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    margin:40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 24,
  },
  signInButton: {
    backgroundColor: "#2E94B5",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    marginVertical: 20,
    width:"400%",
    height:"28%",
    alignSelf:"center",
  },
});
export default Splash;
