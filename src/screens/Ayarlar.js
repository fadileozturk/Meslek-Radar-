
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { collection, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config'; 
import Icon from 'react-native-vector-icons/FontAwesome';

const Ayarlar = ({ navigation }) => {
  const [editedName, setEditedName] = useState("");
  const [editedSurname, setEditedSurname] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const handleSaveChanges = async () => {
    if (editedName && editedSurname && editedEmail) {
      try {
        const userRef = collection(db, "Data");
        const userSnapshot = await getDocs(userRef);
        if (!userSnapshot.empty) {
          const firstUserDoc = userSnapshot.docs[0];
          await updateDoc(firstUserDoc.ref, {
            email: editedEmail,
            name: editedName,
            surname: editedSurname,
          });
          setEditedName("");
          setEditedSurname("");
          setEditedEmail("");
          Alert.alert("Başarılı", "Bilgiler başarıyla güncellendi.");
        } else {
          console.log("Kullanıcı belgesi bulunamadı.");
        }
      } catch (error) {
        Alert.alert("Hata", "Bilgiler güncellenirken bir hata oluştu.");
      }
    } else {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
    }
  };


  return (
    <ImageBackground
      source={require('../../assets/mavi.png')} // Arka plan resmi 
      style={styles.backgroundImage}
    >

      <View style={styles.container}>

        <View style={styles.header}>
          <Ionicons name="settings-outline" size={100} color="#00688b" />
          <Text style={styles.title}>Ayarlar</Text>
        </View>


        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <Ionicons name="person" size={24} color="#00688b" />
            <TextInput
              style={styles.input}
              placeholder="İsim..."
              onChangeText={setEditedName}
              value={editedName}
              placeholderTextColor="#000"
            />
          </View>
          <View style={styles.inputIcon}>
            <Ionicons name="person" size={24} color="#00688b" />
            <TextInput
              style={styles.input}
              placeholder="Soyisim..."
              onChangeText={setEditedSurname}
              value={editedSurname}
              placeholderTextColor="#000"
            />
          </View>
          <View style={styles.inputIcon}>
            <Ionicons name="mail" size={24} color="#00688b" />
            <TextInput
              style={styles.input}
              placeholder="E-mail..."
              onChangeText={setEditedEmail}
              value={editedEmail}
              placeholderTextColor="#000"
            />
          </View>

        </View>


        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Değişiklikleri Kaydet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.roundButton, styles.wideButton]}
          onPress={() => navigation.navigate("Home")}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="home" size={30} color="black" />
            <Text style={{ color: "black", fontWeight: "bold", marginLeft: 20 }}>Ana Sayfaya Dön</Text>
          </View>
        </TouchableOpacity>




      </View>
    </ImageBackground>

    
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 50,
    paddingTop: 180,
    justifyContent: "flex-start",
  
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00688b",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    borderColor: '#000', // Çerçeve rengini siyah yapar
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: "#00688b",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 40,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  roundButton: {
    borderRadius: 50,
    alignItems: "center",
  
  },
  wideButton: {
    backgroundColor: "#00688b",
    width: "100%",
    marginTop: 30,
    padding: 20,
  },
  
});

export default Ayarlar;

























































































/*

import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // IonicIcons'ı import ediyoruz
import Icon from 'react-native-vector-icons/FontAwesome';

const Ayarlar = () => {
  const [editedName, setEditedName] = useState("");
  const [editedSurname, setEditedSurname] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  const handleSaveChanges = () => {
    // Düzenlenmiş bilgileri güncelleme işlemi burada yapılabilir.
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="settings-outline" size={100} color="#00688b" />
        <Text style={styles.title}>Ayarlar</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="İsim..."
        onChangeText={setEditedName}
        value={editedName}
      />
      <TextInput
        style={styles.input}
        placeholder="Soyisim..."
        onChangeText={setEditedSurname}
        value={editedSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail..."
        onChangeText={setEditedEmail}
        value={editedEmail}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Değişiklikleri Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 50,
    paddingTop: 180, // Üst kısmındaki boşluğu ayarlar
    justifyContent: "flex-start", // İçeriği yukarıdan başlatır
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00688b",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#00688b",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 40, // Araya boşluk eklemek için
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Ayarlar;


*/
















/*
mükemmellll

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { collection, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config'; 

const Ayarlar = () => {
  const [editedName, setEditedName] = useState("");
  const [editedSurname, setEditedSurname] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const userRef = collection(db, "Data");
      const userSnapshot = await getDocs(userRef);

      if (!userSnapshot.empty) {
        const userData = userSnapshot.docs[0].data();
        setEditedName(userData.name);
        setEditedSurname(userData.surname);
        setEditedEmail(userData.email);
      } else {
        console.log("Kullanıcı bulunamadı.");
      }
    } catch (error) {
      console.error("Bilgiler alınırken bir hata oluştu:", error);
    }
  };

  const handleSaveChanges = async () => {
    if (editedName && editedSurname && editedEmail) {
      try {
        const userRef = collection(db, "Data");
        const userSnapshot = await getDocs(userRef);

        if (!userSnapshot.empty) {
          const firstUserDoc = userSnapshot.docs[0];
          await updateDoc(firstUserDoc.ref, {
            email: editedEmail,
            name: editedName,
            surname: editedSurname,
          });

          setEditedName("");
          setEditedSurname("");
          setEditedEmail("");

          Alert.alert("Başarılı", "Bilgiler başarıyla güncellendi.");
        } else {
          console.log("Kullanıcı belgesi bulunamadı.");
        }
      } catch (error) {
        Alert.alert("Hata", "Bilgiler güncellenirken bir hata oluştu.");
      }
    } else {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="settings-outline" size={100} color="#00688b" />
        <Text style={styles.title}>Ayarlar</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
          <Ionicons name="person" size={24} color="#00688b" />
          <TextInput
            style={styles.input}
            placeholder="İsim..."
            onChangeText={setEditedName}
            value={editedName}
          />
        </View>
        <View style={styles.inputIcon}>
          <Ionicons name="person" size={24} color="#00688b" />
          <TextInput
            style={styles.input}
            placeholder="Soyisim..."
            onChangeText={setEditedSurname}
            value={editedSurname}
          />
        </View>
        <View style={styles.inputIcon}>
          <Ionicons name="mail" size={24} color="#00688b" />
          <TextInput
            style={styles.input}
            placeholder="E-mail..."
            onChangeText={setEditedEmail}
            value={editedEmail}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Değişiklikleri Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 50,
    paddingTop: 180,
    justifyContent: "flex-start",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00688b",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: "#00688b",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 40,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Ayarlar;



*/




/*
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { collection, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config'; 
import { Ionicons } from '@expo/vector-icons'; // İconlar için kullanılacak paket

const Ayarlar = () => {
  const [editedName, setEditedName] = useState("");
  const [editedSurname, setEditedSurname] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const userRef = collection(db, "Data");
      const userSnapshot = await getDocs(userRef);

      if (!userSnapshot.empty) {
        const userData = userSnapshot.docs[0].data();
        setEditedName(userData.name);
        setEditedSurname(userData.surname);
        setEditedEmail(userData.email);
      } else {
        console.log("Kullanıcı bulunamadı.");
      }
    } catch (error) {
      console.error("Bilgiler alınırken bir hata oluştu:", error);
    }
  };

  const handleSaveChanges = async () => {
    if (editedName && editedSurname && editedEmail) {
      try {
        const userRef = collection(db, "Data");
        const userSnapshot = await getDocs(userRef);

        if (!userSnapshot.empty) {
          const firstUserDoc = userSnapshot.docs[0];
          await updateDoc(firstUserDoc.ref, {
            email: editedEmail,
            name: editedName,
            surname: editedSurname,
          });

          setEditedName("");
          setEditedSurname("");
          setEditedEmail("");

          Alert.alert("Başarılı", "Bilgiler başarıyla güncellendi.");
        } else {
          console.log("Kullanıcı belgesi bulunamadı.");
        }
      } catch (error) {
        Alert.alert("Hata", "Bilgiler güncellenirken bir hata oluştu.");
      }
    } else {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="settings-outline" size={100} color="#00688b" />
        <Text style={styles.title}>Ayarlar</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="İsim..."
        onChangeText={setEditedName}
        value={editedName}
      />
      <TextInput
        style={styles.input}
        placeholder="Soyisim..."
        onChangeText={setEditedSurname}
        value={editedSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail..."
        onChangeText={setEditedEmail}
        value={editedEmail}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Değişiklikleri Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 50,
    paddingTop: 180,
    justifyContent: "flex-start",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00688b",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#00688b",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 40,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Ayarlar;

*/









































/*

//bu mükemmel çalıştı şuan zaten bunu kulnıcam en son 

import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { collection, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config'; 

const Ayarlar = () => {
  const [editedName, setEditedName] = useState("");
  const [editedSurname, setEditedSurname] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  const handleSaveChanges = async () => {
    if (editedName && editedSurname && editedEmail) {
      try {
        const userRef = collection(db, "Data");
        const userSnapshot = await getDocs(userRef);

        if (!userSnapshot.empty) {
          const firstUserDoc = userSnapshot.docs[0];
          await updateDoc(firstUserDoc.ref, {
            email: editedEmail,
            name: editedName,
            surname: editedSurname,
          });

          setEditedName("");
          setEditedSurname("");
          setEditedEmail("");

          Alert.alert("Başarılı", "Bilgiler başarıyla güncellendi.");
        } else {
          console.log("Kullanıcı belgesi bulunamadı.");
        }
      } catch (error) {
        Alert.alert("Hata", "Bilgiler güncellenirken bir hata oluştu.");
      }
    } else {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="settings-outline" size={100} color="#00688b" />
        <Text style={styles.title}>Ayarlar</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
          <Ionicons name="person" size={24} color="#00688b" />
          <TextInput
            style={styles.input}
            placeholder="İsim..."
            onChangeText={setEditedName}
            value={editedName}
          />
        </View>
        <View style={styles.inputIcon}>
          <Ionicons name="person" size={24} color="#00688b" />
          <TextInput
            style={styles.input}
            placeholder="Soyisim..."
            onChangeText={setEditedSurname}
            value={editedSurname}
          />
        </View>
        <View style={styles.inputIcon}>
          <Ionicons name="mail" size={24} color="#00688b" />
          <TextInput
            style={styles.input}
            placeholder="E-mail..."
            onChangeText={setEditedEmail}
            value={editedEmail}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Değişiklikleri Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 50,
    paddingTop: 180,
    justifyContent: "flex-start",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00688b",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: "#00688b",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 40,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Ayarlar;


*/
