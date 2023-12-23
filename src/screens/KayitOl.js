

import React, { useState } from "react";
import Icon from '@expo/vector-icons/AntDesign';
import {StyleSheet,Text,View,TextInput,TouchableOpacity,Image,Alert} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/config';

const KayitOl = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleNameChange = (text) => {
    setName(text);
  };
  const handleSurnameChange = (text) => {
    setSurname(text);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };



  const handleKayit = async () => {
    if (name && surname && email && password) {
      // E-posta doğrulama
      const trimmedEmail = email.trim();
      if (!validateEmail(trimmedEmail)) {
        Alert.alert("Hata", "Lütfen geçerli bir e-posta adresi girin.", [{ text: "Tamam" }]);
        return;
      } else if (password.length < 6) {
        Alert.alert("Hata", "Şifre en az 6 karakter olmalıdır.", [{ text: "Tamam" }]);
        return;
      } else {
        try {
          const usersRef = collection(db, "Data");
          const q = query(usersRef, where("email", "==", trimmedEmail));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            Alert.alert("Hata", "Bu e-posta adresi zaten kayıtlı!", [{ text: "Tamam" }]);
            return;
          }
          
          await createUserWithEmailAndPassword(auth, trimmedEmail, password);
          const newUser = {
            name: name,
            surname: surname,
            email: trimmedEmail,
            password: password
          };
          await addDoc(usersRef, newUser);
          Alert.alert("Kayıt Başarılı", "Kullanıcı kaydı başarıyla oluşturuldu.");
          setName("");
          setSurname("");
          setEmail("");
          setPassword("");
          navigation.navigate("GirisYap");
        } catch (error) {
          Alert.alert("Hata", "Kayıt oluşturulurken bir hata oluştu.", [{ text: "Tamam" }]);
          //console.error(error);
        }
      }
    } else {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.", [{ text: "Tamam" }]);
    }};

  const handleGiris = () => {
    navigation.navigate("GirisYap");
  };















  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/uyeol.png")}
          style={{
          width: "60%",
          height: "25%",
          borderRadius: 65,
          alignSelf: "center",
        }}/>
      <Text style={styles.logo}>Kayıt Ol</Text>


      <View style={styles.inputView}>
        <Icon name="user" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="İsim..."
          placeholderTextColor="white"
          onChangeText={handleNameChange}
          value={name}/>
      </View>

      <View style={styles.inputView}>
        <Icon name="user" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Soyisim..."
          placeholderTextColor="white"
          onChangeText={handleSurnameChange}
          value={surname}/>
      </View>


      <View style={styles.inputView}>
        <Icon name="mail" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="E-mail..."
          placeholderTextColor="white"
          onChangeText={handleEmailChange}
          value={email}/>
      </View>


      <View style={styles.inputView}>
        <Icon name="lock" size={22} color="white" style={styles.icon} />
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Şifre..."
          placeholderTextColor="white"
          onChangeText={handlePasswordChange}
          value={password}/>
      </View>


      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleKayit}
      >
        <Text style={styles.loginText}>Üye Ol</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGiris}>
        <Text style={styles.loginText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KayitOl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#80C7F2",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#00688b",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#00688b",
    borderRadius: 25,
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    height: 60,
    color: "white",
    marginLeft: 15,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#749EC8",
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
  icon: {
    marginRight: 10,
  },
});













/*
import React, { useState } from "react";
import Icon from '@expo/vector-icons/AntDesign';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/config';

const KayitOl = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSurnameChange = (text) => {
    setSurname(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleKayit = async () => {
    if (name && surname && email && password) {
      // E-posta doğrulama
      const trimmedEmail = email.trim();
      if (!validateEmail(trimmedEmail)) {
        Alert.alert("Hata", "Lütfen geçerli bir e-posta adresi girin.", [{ text: "Tamam" }]);
        return;
      } else {
        try {
          const usersRef = collection(db, "Data");
          const q = query(usersRef, where("email", "==", trimmedEmail));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            Alert.alert("Hata", "Bu e-posta adresi zaten kayıtlı!", [{ text: "Tamam" }]);
            return;
          }

          await createUserWithEmailAndPassword(auth, trimmedEmail, password);
          const newUser = {
            name: name,
            surname: surname,
            email: trimmedEmail,
            password: password
          };
          await addDoc(usersRef, newUser);
          Alert.alert("Kayıt Başarılı", "Kullanıcı kaydı başarıyla oluşturuldu.");
          setName("");
          setSurname("");
          setEmail("");
          setPassword("");
          navigation.navigate("GirisYap");
        } catch (error) {
          Alert.alert("Hata", "Kayıt oluşturulurken bir hata oluştu.", [{ text: "Tamam" }]);
        }
      }
    } else {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.", [{ text: "Tamam" }]);
    }
  };

  const handleGiris = () => {
    navigation.navigate("GirisYap");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/kayitol.jpg")}
        style={{
          width: "60%",
          height: "25%",
          borderRadius: 65,
          alignSelf: "center",
        }}
      />

      <Text style={styles.logo}>Kayıt Ol</Text>
      <View style={styles.inputView}>
        <Icon name="user" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="İsim..."
          placeholderTextColor="white"
          onChangeText={handleNameChange}
          value={name}
        />
      </View>

      <View style={styles.inputView}>
        <Icon name="user" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Soyisim..."
          placeholderTextColor="white"
          onChangeText={handleSurnameChange}
          value={surname}
        />
      </View>
      <View style={styles.inputView}>
        <Icon name="mail" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="E-mail..."
          placeholderTextColor="white"
          onChangeText={handleEmailChange}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <Icon name="lock" size={22} color="white" style={styles.icon} />
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Şifre..."
          placeholderTextColor="white"
          onChangeText={handlePasswordChange}
          value={password}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleKayit}
      >
        <Text style={styles.loginText}>Üye Ol</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGiris}>
        <Text style={styles.loginText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KayitOl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#80C7F2",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "green",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "green",
    borderRadius: 25,
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    height: 60,
    color: "white",
    marginLeft: 15,
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
  icon: {
    marginRight: 10,
  },
});
*/











/*
bu en son
import React, { useState } from "react";
import Icon from '@expo/vector-icons/AntDesign';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';

const KayitOl = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSurnameChange = (text) => {
    setSurname(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleKayit = async () => {
    if (name && surname && email && password) {
      // E-posta kontrol koşulu
      if (email.indexOf('@') === -1) {
        Alert.alert("Hata", "Lütfen geçerli bir e-posta adresi girin.",[{ text: "Tamam" }]);
        return;
      } else {
        try {
          const usersRef = collection(db, "Data");
          const newUser = {
            name: name,
            surname: surname,
            email: email,
            password: password
          };
          await addDoc(usersRef, newUser);
          Alert.alert("Kayıt Başarılı", "Kullanıcı kaydı başarıyla oluşturuldu.");
          setEmail("");
          setPassword("");
          navigation.navigate("GirisYap");
        } catch (error) {
          Alert.alert("Hata", "Kayıt oluşturulurken bir hata oluştu.",[{ text: "Tamam" }]);
          console.error(error);
        }
      }
    } else {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.",[{ text: "Tamam" }]);
    }
  };
  

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/kayitol.jpg")}
        style={{
          width: "60%",
          height: "25%",
          borderRadius: 65,
          alignSelf: "center",
        }}
      />

      <Text style={styles.logo}>Kayıt Ol</Text>
      <View style={styles.inputView}>
        <Icon name="user" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="İsim..."
          placeholderTextColor="white"
          onChangeText={handleNameChange}
          value={name}
        />
      </View>

      <View style={styles.inputView}>
        <Icon name="user" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Soyisim..."
          placeholderTextColor="white"
          onChangeText={handleSurnameChange}
          value={surname}
        />
      </View>
      <View style={styles.inputView}>
        <Icon name="mail" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="E-mail..."
          placeholderTextColor="white"
          onChangeText={handleEmailChange}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <Icon name="lock" size={22} color="white" style={styles.icon} />
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Şifre..."
          placeholderTextColor="white"
          onChangeText={handlePasswordChange}
          value={password}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleKayit}
      >
        <Text style={styles.loginText}>Üye Ol</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("GirisYap")}>
        <Text style={styles.loginText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KayitOl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#80C7F2",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "green",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "green",
    borderRadius: 25,
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    height: 60,
    color: "white",
    marginLeft: 15,
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
  icon: {
    marginRight: 10,
  },
});
*/









/*
iyi bu 

import React, { useState } from "react";
import Icon from '@expo/vector-icons/AntDesign';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

const KayitOl = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSurnameChange = (text) => {
    setSurname(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleKayit = async () => {
    if (name && surname && email && password) {
      // E-posta kontrol koşulu
      if (email.indexOf('@') === -1) {
        Alert.alert("Hata", "Lütfen geçerli bir e-posta adresi girin.",[{ text: "Tamam" }]);
        return;
      } else {
        try {
          const usersRef = collection(db, "Data");
          const q = query(usersRef, where("email", "==", email));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            Alert.alert("Hata", "Bu e-posta adresi zaten kullanılıyor.",[{ text: "Tamam" }]);
            return;
          }

          const newUser = {
            name: name,
            surname: surname,
            email: email,
            password: password
          };
          await addDoc(usersRef, newUser);
          Alert.alert("Kayıt Başarılı", "Kullanıcı kaydı başarıyla oluşturuldu.");
          navigation.navigate("GirisYap");
        } catch (error) {
          Alert.alert("Hata", "Kayıt oluşturulurken bir hata oluştu.",[{ text: "Tamam" }]);
          console.error(error);
        }
      }
    } else {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.",[{ text: "Tamam" }]);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/kayitol.jpg")}
        style={{
          width: "60%",
          height: "25%",
          borderRadius: 65,
          alignSelf: "center",
        }}
      />

      <Text style={styles.logo}>Kayıt Ol</Text>
      <View style={styles.inputView}>
        <Icon name="user" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="İsim..."
          placeholderTextColor="white"
          onChangeText={handleNameChange}
          value={name}
        />
      </View>

      <View style={styles.inputView}>
        <Icon name="user" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Soyisim..."
          placeholderTextColor="white"
          onChangeText={handleSurnameChange}
          value={surname}
        />
      </View>

      <View style={styles.inputView}>
        <Icon name="mail" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="E-posta..."
          placeholderTextColor="white"
          onChangeText={handleEmailChange}
          value={email}
        />
      </View>

      <View style={styles.inputView}>
        <Icon name="lock" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Şifre..."
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={password}
        />
      </View>

      <TouchableOpacity style={styles.kayitBtn} onPress={handleKayit}>
        <Text style={styles.kayitText}>Üye Ol</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("GirisYap")}>
        <Text style={styles.loginText}>Zaten bir hesabınız var mı? Giriş yapın</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    height: 50,
    color: "white",
  },
  kayitBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  kayitText: {
    color: "white",
  },
  loginText: {
    color: "white",
  },
  icon: {
    marginRight: 10,
  },
});

export default KayitOl;
*/





















/*
import React, { useState } from "react";
import Icon from '@expo/vector-icons/AntDesign';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";

const KayitOl = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSurnameChange = (text) => {
    setSurname(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleKayit = () => {
    if(name && surname && email && password) {
      // E-posta kontrol koşulu
      if (email.indexOf('@') === -1) {
        Alert.alert("Hata", "Lütfen geçerli bir e-posta adresi girin.",[{ text: "Tamam" }]);
        return;
      } else {
        Alert.alert("Kayıt Başarılı", "Kullanıcı kaydı başarıyla oluşturuldu.");
        navigation.navigate("GirisYap");
      }
    } else {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.",[{ text: "Tamam" }]);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/kayitol.jpg")}
        style={{
          width: "60%",
          height: "25%",
          borderRadius: 65,
          alignSelf: "center",
        }}
      />

      <Text style={styles.logo}>Kayıt Ol</Text>
      <View style={styles.inputView}>
      <Icon name="user" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="İsim..."
          placeholderTextColor="white"
          onChangeText={handleNameChange}
          value={name}
        />
      </View>

      <View style={styles.inputView}>
      <Icon name="user" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Soyisim..."
          placeholderTextColor="white"
          onChangeText={handleSurnameChange}
          value={surname}
        />
      </View>
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
        <Icon name="lock" size={22} color="white" style={styles.icon} />
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Şifre..."
          placeholderTextColor="white"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleKayit}
      >
        <Text style={styles.loginText}>Üye Ol</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("GirisYap")}>
        <Text style={styles.loginText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KayitOl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#80C7F2",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "green",
    marginBottom: 40,
  },
  inputView:{
    width:"80%",
    backgroundColor:"green",
    borderRadius:25,
    height:60,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    flexDirection: 'row', // Yatayda hizalama için
    alignItems: 'center', // Yatayda hizalama için
  },
  inputText:{
    height:60,//text boyutu
    color:"white",
    marginLeft: 15, // İkon ile metin arasındaki boşluk için
  },
  forgot: {
    color: "purple",
    fontSize: 11,
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















