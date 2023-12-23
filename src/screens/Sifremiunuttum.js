import React, { useState } from "react";
import { auth } from '../../firebase/config';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Image } from "react-native";
import { sendPasswordResetEmail } from 'firebase/auth';


const SifremiUnuttum = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const handlePasswordReset = () => {
    const trimmedEmail = email.trim();
    if (trimmedEmail === "") {
      Alert.alert("Hata", "Lütfen e-posta adresinizi girin.", [{ text: "Tamam" }]);
      return;
    }
    sendPasswordResetEmail(auth, trimmedEmail)
      .then(() => {
        Alert.alert("Başarılı", "Şifre sıfırlama e-postası gönderildi. Lütfen e-posta adresinizi kontrol edin.", [{ text: "Tamam" }]);
      })
      .catch((error) => {
        Alert.alert("Hata", "Şifre sıfırlama e-postası gönderilirken bir hata oluştu.", [{ text: "Tamam" }]);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/password.jpg")}
        style={{
          width: "95%",
          height: "25%",
          borderRadius: 16,
          alignSelf: "center",
        }}/> 

      <View style={styles.emailContainer}>
        <Text style={{ color: "#000000", fontWeight: "bold" }}>E-posta Adresi:</Text>
        <TextInput
          style={styles.input}
          placeholder="Lütfen E-posta giriniz !!!"
          onChangeText={(value) => setEmail(value)}
          value={email}
          autoCapitalize="none"/>
      </View>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={handlePasswordReset}>
        <Text style={styles.resetButtonText}>Şifreyi Sıfırla  </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Giriş Sayfasına Geri Dön</Text>
      </TouchableOpacity>

    </View>
  );
};

export default SifremiUnuttum;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#80C7F2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  emailContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    width: "90%",
  },
  label: {
    color: "black",
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
    width: "100%",
  },
  resetButton: {
    backgroundColor: "#749EC8",
    paddingVertical: 20,
    paddingHorizontal: 85,
    borderRadius: 30,
    marginVertical: 10,
    
  },
  resetButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  backButton: {
    backgroundColor: "#005d8e",
    paddingVertical: 15,
    paddingHorizontal: 75,
    borderRadius: 25,
    marginVertical: 20,
  },
  backButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});






































































/*
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";

const Home = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/password.jpg")}
        style={{
          width: "95%",
          height: "25%",
          borderRadius: 16,
          alignSelf: "center",
        }}
      /> 
      
      <View style={styles.emailContainer}>
        <Text style={{ color: "#000000", fontWeight: "bold" }}>E-posta Adresi:</Text>
        <TextInput
          style={styles.input}
          placeholder="Lütfen E-posta giriniz !!!"
          onChangeText={(value) => setEmail(value)}
          value={email}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("SifremiUnuttum", { email })}>
        <Text style={{ color: "#000000", fontWeight: "bold" }}>Şifremi Unuttum</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("GirisYap")}>
        <Text style={{ color: "#000000", fontWeight: "bold" }}>Giriş Sayfasına Dön</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //backgroundColor: "#ee82ee",
    backgroundColor: "#80C7F2",
    
  },
  emailContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: "#749EC8",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 20,
    width: "90%",
    alignSelf: "center",
  },
});

*/















/*
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/password.jpg")}
        style={{
          width: "95%",
          height: "20%",
          borderRadius: 16,
          alignSelf: "center",
        }}
      /> 
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("GirisYap")}>
        <Text style={{ color: "#000000", fontWeight: "bold" }}>Giriş Sayfasına Dön</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //backgroundColor: "#ee82ee",
    backgroundColor: "#80C7F2",
    
  },
  signInButton: {
    backgroundColor: "#749EC8",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 20,
    width: "90%",
    alignSelf: "center",
  },
});

*/
