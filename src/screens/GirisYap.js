import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Icon from '@expo/vector-icons/AntDesign';

const GirisYap = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
  
      if (trimmedEmail === "" || trimmedPassword === "") {
        Alert.alert("Hata", "Lütfen e-posta ve şifre alanlarını doldurun.", [{ text: "Tamam" }]);
        return;
      }
      const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      const user = userCredential.user;
      setEmail("");
      setPassword("");
      navigation.navigate("Home");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        Alert.alert("Hata", "E-posta veya şifre yanlış!", [{ text: "Tamam" }]);
      } else {
        Alert.alert("Hata", "Bir hata oluştu!", [{ text: "Tamam" }]);
      }
      // console.error(error); 
    }
  };
  
  
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/giriss.png")}
        style={{
          width: "65%",
          height: "25%",
          borderRadius: 16,
          alignSelf: "center",
        }}
      />
      <Text style={styles.logo}>Giriş Yap</Text>


      <View style={styles.inputView}>
        <Icon name="mail" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="E-mail..."
          placeholderTextColor="white"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <Icon name="lock" size={20} color="white" style={styles.icon} />
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Şifre..."
          placeholderTextColor="white"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Sifremiunuttum")}>
      <Text style={{ textDecorationLine: 'underline' }}>Şifremi Unuttum</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("KayitOl")}>
        <Text style={styles.loginText}>Üye Ol</Text>
      </TouchableOpacity>


    </View>
  );
}


export default GirisYap;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80C7F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#00688b",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#00688b",
    borderRadius: 25,
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    height: 20,
    color: "white",
    marginLeft: 10,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#749EC8",
    borderRadius: 25,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
    fontWeight: "bold",
  },
});









































/*
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Icon from '@expo/vector-icons/AntDesign';

const GirisYap = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
  
      if (trimmedEmail === "" || trimmedPassword === "") {
        Alert.alert("Hata", "Lütfen e-posta ve şifre alanlarını doldurun.", [{ text: "Tamam" }]);
        return;
      }
  
      const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      const user = userCredential.user;
  
      setEmail("");
      setPassword("");
      navigation.navigate("Home");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        Alert.alert("Hata", "E-posta veya şifre yanlış!", [{ text: "Tamam" }]);
      } else {
        Alert.alert("Hata", "Bir hata oluştu!", [{ text: "Tamam" }]);
      }
      // console.error(error); 
    }
  };
  
  
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/meslek.png")}
        style={{
          width: "65%",
          height: "25%",
          borderRadius: 16,
          alignSelf: "center",
        }}
      />
      <Text style={styles.logo}>Giriş Yap</Text>
      <View style={styles.inputView}>
        <Icon name="mail" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="E-mail..."
          placeholderTextColor="white"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <Icon name="lock" size={20} color="white" style={styles.icon} />
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Şifre..."
          placeholderTextColor="white"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Sifremiunuttum")}>
      <Text style={{ textDecorationLine: 'underline' }}>Şifremi Unuttum</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("KayitOl")}>
        <Text style={styles.loginText}>Üye Ol</Text>
      </TouchableOpacity>
    </View>
  );
}


export default GirisYap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80C7F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "green",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "green",
    borderRadius: 25,
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    height: 20,
    color: "white",
    marginLeft: 10,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "green",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
    fontWeight: "bold",
  },
});
*/



