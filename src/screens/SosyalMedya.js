
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking,openLink } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const SocialMedia = ({ navigation }) => {
  const [sosyalMedyaData, setSosyalMedyaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'SosyalMedya', 'Bilgi2');
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setSosyalMedyaData(data);
        }
      } catch (error) {
        console.error('Veri çekilirken hata oluştu:', error);
      }
    };
    fetchData();
  }, []);



  const openWhatsApp = () => {
    if (sosyalMedyaData && sosyalMedyaData.Whatsapp) {
      const phoneNumber = sosyalMedyaData.Whatsapp;
      const url = `whatsapp://send?phone=${phoneNumber}`;

      Linking.canOpenURL(url)
        .then(supported => {
          if (!supported) {
            console.log("WhatsApp desteklenmiyor.");
          } else {
            return Linking.openURL(url);
          }
        })
        .catch(err => console.error("WhatsApp açılırken bir hata oluştu: ", err));
    }
  }; 

  return (
    <View style={styles.container}>
      {sosyalMedyaData && (
        <Image
          source={{ uri: sosyalMedyaData.SosyalMedyaResim }}style={styles.image} />
      )}
      <View style={styles.row}>
       <TouchableOpacity
          style={styles.roundButton}
          onPress={openWhatsApp}>
          <Icon name="whatsapp" size={30} color="green" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>WhatsApp</Text>
        </TouchableOpacity>

        {sosyalMedyaData && (
          <TouchableOpacity
            style={styles.roundButton}
            onPress={() => Linking.openURL(sosyalMedyaData.Linkedin)}>
            <Icon name="linkedin" size={30} color="blue" />
            <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>Linkedin</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.row}>
      <TouchableOpacity
      style={styles.roundButton}
      onPress={() => Linking.openURL(sosyalMedyaData.Facebook)}>
      <Icon name="facebook" size={30} color="blue" />
      <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>Facebook</Text>
      </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => Linking.openURL(sosyalMedyaData.Instagram)}>
          <Icon name="instagram" size={30} color="purple" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>İnstagram</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => Linking.openURL(sosyalMedyaData.Youtube)}>
          <Icon name="youtube" size={30} color="red" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>Youtube</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => Linking.openURL(sosyalMedyaData.Twitter)}>
          <Icon name="twitter" size={30} color="blue" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>Twitter</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.roundButton, styles.wideButton]}
        onPress={() => navigation.navigate("Home")}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="home" size={30} color="black" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>Ana Sayfaya Dön</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#80C7F2",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  roundButton: {
    backgroundColor: "#749EC8",
    padding: 40,
    borderRadius: 100,
    alignItems: "center",
    width: "45%",
  },
  wideButton: {
    backgroundColor: "#2079d8",
    width: "100%",
    marginTop: 20,
    marginVertical: 10,
    padding: 20,
  },
  image: {
    width: "95%",
    height: "30%",
    borderRadius: 16,
    alignSelf: "center",
    marginBottom: 0,
    marginVertical: 40,
  },
});
export default SocialMedia;









































/*
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking ,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/sosyal.png")}
        style={{
          width: "95%",
          height: "30%",
          borderRadius: 16,
          alignSelf: "center",
          marginBottom:0,
          marginVertical:40,
        }}
      />

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.navigate("UrunDetay")}>
            <Icon name="whatsapp" size={30} color="green" />
          <Text style={{ color: "black", fontWeight: "bold",marginLeft: 10  }}>Whatsapp</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.navigate("UrunDetay")}
        >
             <Icon name="linkedin" size={30} color="blue" />
          <Text style={{ color: "black", fontWeight: "bold" ,marginLeft: 10 }}>Linkedin</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.navigate("UrunDetay")}
        >
            <Icon name="facebook" size={30} color="blue" />
          <Text style={{ color: "black", fontWeight: "bold",marginLeft: 10  }}>Facebook</Text>
        </TouchableOpacity>



        <TouchableOpacity
        style={styles.roundButton}
        onPress={() => {
        Linking.openURL('https://www.instagram.com/muhendis__adayi/').catch(err => console.error('Instagram link açılamadı', err));
      }}>
        <Icon name="instagram" size={30} color="purple" />
        <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>İnstagram</Text>
       </TouchableOpacity>
      </View>


      <View style={styles.row}>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.navigate("UrunDetay")}
        >
            <Icon name="youtube" size={30} color="red" />
          <Text style={{ color: "black", fontWeight: "bold",marginLeft: 10  }}>Youtube</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.navigate("UrunDetay")}
        >
           <Icon name="twitter" size={30} color="blue" />
          <Text style={{ color: "black", fontWeight: "bold",marginLeft: 10  }}>Twitter</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
       style={[styles.roundButton, styles.wideButton]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="home" size={30} color="black" />
        <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>Ana sayfaya Dön</Text>
       </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#80C7F2",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  roundButton: {
    backgroundColor: "#749EC8",
    padding: 40,
    borderRadius: 100, // Yuvarlak yapmak için yüksek bir değer
    alignItems: "center",
    width: "45%",
  },
  wideButton: {
    backgroundColor:"#2079d8",
    width: "100%",
    marginTop: 20,
    marginVertical: 10,
    padding: 20,
  },
});

*/





































































/*

 bu çalışıyor zaten veriler statik girilip 
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const openWhatsApp = () => {
    const phoneNumber = "+905434184476";
    const url = `whatsapp://send?phone=${phoneNumber}`;

    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("WhatsApp desteklenmiyor.");
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error("WhatsApp açılırken bir hata oluştu: ", err));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/sosyal.png")}
        style={{
          width: "95%",
          height: "30%",
          borderRadius: 16,
          alignSelf: "center",
          marginBottom: 0,
          marginVertical: 40,
        }}
      />

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => openWhatsApp()}>
          <Icon name="whatsapp" size={30} color="green" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.roundButton}
        onPress={() => {
        Linking.openURL('https://www.linkedin.com/in/fadile-%C3%B6zt%C3%BCrk-aa41aa222/').catch(err => console.error('LinkedIn link açılamadı', err));
        }}>
        <Icon name="linkedin" size={30} color="blue" />
        <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>Linkedin</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.row}>
       
      <TouchableOpacity
      style={styles.roundButton}
      onPress={() => {
      Linking.openURL('https://tr-tr.facebook.com/login/device-based/regular/login/?login_attempt=1').catch(err => console.error('Facebook link açılamadı', err));
      }}>
      <Icon name="facebook" size={30} color="blue" />
      <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>Facebook</Text>
      </TouchableOpacity>


        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            Linking.openURL('https://www.instagram.com/muhendis__adayi/').catch(err => console.error('Instagram link açılamadı', err));
          }}>
          <Icon name="instagram" size={30} color="purple" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>İnstagram</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/channel/UCr2_KWlz3tAZjW2MDiYorsQ').catch(err => console.error('Youtube link açılamadı', err));
          }}>
          <Icon name="youtube" size={30} color="red" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>Youtube</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            Linking.openURL('https://twitter.com/').catch(err => console.error('Twitter link açılamadı', err));
          }}>
          <Icon name="twitter" size={30} color="blue" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>Twitter</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.roundButton, styles.wideButton]}
        onPress={() => navigation.navigate("Home")}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="home" size={30} color="black" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>Ana sayfaya Dön</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#80C7F2",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  roundButton: {
    backgroundColor: "#749EC8",
    padding: 40,
    borderRadius: 100,
    alignItems: "center",
    width: "45%",
  },
  wideButton: {
    backgroundColor: "#2079d8",
    width: "100%",
    marginTop: 20,
    marginVertical: 10,
    padding: 20,
  },
});

export default Home;


*/