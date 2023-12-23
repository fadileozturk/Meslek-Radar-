import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const MeslekDetay = ({ route }) => {
  const navigation = useNavigation();
  const [meslekDetayData, setMeslekDetayData] = useState(null);

  // Madde madde ayırmak için diziler
  const [gorevleriDizisi, setGorevleriDizisi] = useState([]);
  const [nasilOlunurDizisi, setNasilOlunurDizisi] = useState([]);
  const [olmaSartiDizisi, setOlmaSartiDizisi] = useState([]);
  const [OkunanOkullarDizisi, setOkunanOkullarDizisi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (route.params && route.params.selectedCategory) {
          const docRef = doc(db, 'Meslek', route.params.selectedCategory);
          const docSnapshot = await getDoc(docRef);
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            setMeslekDetayData(data);
            // "Gorevleri" metnini ayır ve diziye dönüştür
            const gorevleriMetni = (data.Gorevleri || '').replace(/\\n/g, '\n');
            const gorevler = gorevleriMetni.split('\n');
            setGorevleriDizisi(gorevler);


            // "Nasıl Olunur" metnini ayır ve diziye dönüştür
            const nasilOlunurMetni = (data.NasilOlunur || '').replace(/\\n/g, '\n');
            const nasilOlunur = nasilOlunurMetni.split('\n');
            setNasilOlunurDizisi(nasilOlunur)
            // "Olma Şartı" metnini ayır ve diziye dönüştür
            const olmaSartiMetni = (data.OlmaŞarti || '').replace(/\\n/g, '\n');
            const olmaSarti = olmaSartiMetni.split('\n');
            setOlmaSartiDizisi(olmaSarti);
             // "Okunan Okullar" metnini ayır ve diziye dönüştür
            const okunanOkullarMetni = (data.OkunanOkullar || '').replace(/\\n/g, '\n');
            const okunanOkullar = okunanOkullarMetni.split('\n');
            setOkunanOkullarDizisi(okunanOkullar);
          }}} catch (error) {
        console.error('Veri çekilirken hata oluştu:', error);
      }};

    fetchData();
  }, [route.params]);




  return (
    <View style={styles.container}>
      <ScrollView>
        {meslekDetayData ? (
          <View style={styles.galeriContainer}>
            <Text style={styles.title}>{meslekDetayData.Baslik}</Text>

            <View style={styles.imageContainer}>
              <Image source={{ uri: meslekDetayData.Resim }} style={styles.image} />
            </View>

            <Text style={styles.description}>{meslekDetayData.Nedir}</Text>
            <Text style={[styles.description, { fontSize: 20, color: "yellow" }]}>{meslekDetayData.GorevBaslik}</Text>
            {gorevleriDizisi.map((gorev, index) => (
              <Text key={index} style={styles.description}>{gorev}</Text>
            ))}

            <Text style={styles.description}>{meslekDetayData.Aciklama}</Text>

            <Text style={[styles.description, { fontSize: 20, color: "yellow" }]}>{meslekDetayData.NasilOlunurBaslik}</Text>
            {nasilOlunurDizisi.map((nasıl, indx) => (
              <Text key={indx} style={styles.description}>{nasıl}</Text>
            ))}

            <Text style={[styles.description, { fontSize: 20, color: "yellow" }]}>{meslekDetayData.OlmaŞartiBaslik}</Text>
            {olmaSartiDizisi.map((sart, indeex) => (
              <Text key={indeex} style={styles.description}>{sart}</Text>
            ))}
 
            <View style={styles.imageContainer}>
              <Image source={{ uri: meslekDetayData.Resim2 }} style={styles.image} />
            </View>

            <Text style={[styles.description, { fontSize: 20, color: "yellow" }]}>{meslekDetayData.OkunanOkullarBaslik}</Text>
             {OkunanOkullarDizisi.map((okul, indeeex) => (
             <Text key={indeeex} style={styles.description}>{okul}</Text>
        ))}


          </View>
        ) : (
          <Text style={styles.errorText}>Veri bulunamadı!</Text>
        )}
      </ScrollView>

      <TouchableOpacity
        style={[styles.roundButton, styles.wideButton]}
        onPress={() => navigation.goBack()}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="arrow-left" size={30} color="black" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>
            Önceki Sayfaya Dön
          </Text>
        </View>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80C7F2',
    paddingTop: 120
  },
  galeriContainer: {
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#4f69a0',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    paddingVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
  },
  errorText: {
    fontSize: 20,
    color: '#d60118',
  },
  roundButton: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  wideButton: {
    backgroundColor: "#2079d8",
    width: "100%",
    marginTop: 40,
    marginVertical: 10,
    padding: 20,
    borderRadius: 35,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default MeslekDetay;








































/*

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const MeslekDetay = ({ route }) => {
  const navigation = useNavigation();
  const [meslekDetayData, setMeslekDetayData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (route.params && route.params.selectedCategory) {
          const docRef = doc(db, 'Meslek', route.params.selectedCategory);
          const docSnapshot = await getDoc(docRef);

          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            setMeslekDetayData(data);
          }
        }
      } catch (error) {
        console.error('Veri çekilirken hata oluştu:', error);
      }
    };

    fetchData();
  }, [route.params]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {meslekDetayData ? (
          <View style={styles.galeriContainer}>

             <Text style={styles.title}>{meslekDetayData.Baslik}</Text>

            <View style={styles.imageContainer}>
              <Image source={{ uri: meslekDetayData.Resim }} style={styles.image} />
            </View>
            <Text style={styles.description}>{meslekDetayData.Nedir}</Text>
            <Text style={styles.description}>{meslekDetayData.Gorevleri}</Text>
            <Text style={styles.description}>{meslekDetayData.Aciklama}</Text>
          </View>
        ) : (
          <Text style={styles.errorText}>Veri bulunamadı  !</Text>
        )}




      </ScrollView>

      <TouchableOpacity
        style={[styles.roundButton, styles.wideButton]}
        onPress={() => navigation.goBack()}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="arrow-left" size={30} color="black" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>
            Önceki Sayfaya Dön
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80C7F2',
    paddingTop: 120
  },
  galeriContainer: {
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#4f69a0',
    alignItems: 'center',
    marginBottom: 20,
    //marginTop: 10,
    //paddingRight: 20, // Sadece sağ tarafta boşluk
   
  },
  imageContainer: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    paddingVertical: 10,

  

  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
   //marginTop: 10,
    marginBottom: 10,

  },
  errorText: {
    fontSize: 20,
    color: '#d60118',
  },
  roundButton: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  wideButton: {
    backgroundColor: "#2079d8",
    width: "100%",
    marginTop: 40,
    marginVertical: 10,
    padding: 20,
    borderRadius: 35,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default MeslekDetay;

*/
