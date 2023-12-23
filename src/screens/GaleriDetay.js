

/*
bu da tek sayfada olan veriler bu da iyi çalıştı
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const Home = ({ navigation }) => {
  const [galeriData, setGaleriData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'Galeri', 'Tıp');
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setGaleriData(data);
        }
      } catch (error) {
        console.error('Veri çekilirken hata oluştu:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container1}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.contentContainer}>
          {galeriData && (
            <View style={styles.buttonContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: galeriData.Resim }} style={styles.image} />
                <Text style={[styles.descriptionText, { fontSize: 18, fontWeight: 'bold' }]}>
                  {galeriData.Baslik}
                </Text>
              </View>
            </View>
          )}

          {galeriData && (
            <View style={styles.buttonContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: galeriData.Resim2 }} style={styles.image} />
                <Text style={[styles.descriptionText, { fontSize: 18, fontWeight: 'bold' }]}>
                  {galeriData.Baslik2}
                </Text>
              </View>
            </View>
          )}

          {galeriData && (
            <View style={styles.buttonContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: galeriData.Resim3 }} style={styles.image} />
                <Text style={[styles.descriptionText, { fontSize: 18, fontWeight: 'bold' }]}>
                  {galeriData.Baslik3}
                </Text>
              </View>
            </View>
          )}


          {galeriData && (
            <View style={styles.buttonContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: galeriData.Resim4 }} style={styles.image} />
                <Text style={[styles.descriptionText, { fontSize: 18, fontWeight: 'bold' }]}>
                  {galeriData.Baslik4}
                </Text>
              </View>
            </View>
          )}


        

        </View>
      </ScrollView>

      <TouchableOpacity
        style={[styles.roundButton, styles.wideButton]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="arrow-left" size={30} color="black" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>
            Ana Sayfaya Dön
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#80C7F2",
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
  
  scrollViewContainer: {
    flexGrow: 1,
  },

  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 120,
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  
  descriptionText: {
    color: 'white',
    fontSize: 14,
    marginTop: 10,
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  imageContainer: {
    borderWidth: 5,
    borderColor: 'white',
    marginTop: 10,
    backgroundColor: '#4f69a0',
    padding: 25,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default Home;

*/















import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const GaleriDetay = ({ route }) => {
  const navigation = useNavigation();
  const [galeriDetayData, setGaleriDetayData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (route.params && route.params.selectedCategory) {
          const docRef = doc(db, 'Galeri', route.params.selectedCategory);
          const docSnapshot = await getDoc(docRef);

          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            setGaleriDetayData(data);
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
        {galeriDetayData ? (
          <View style={styles.galeriContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: galeriDetayData.Resim }} style={styles.image} />
            </View>
            <Text style={styles.title}>{galeriDetayData.Baslik}</Text>
            <Text style={styles.description}>{galeriDetayData.Aciklama}</Text>
          </View>
        ) : (
          <Text style={styles.errorText}>Veri bulunamadı !</Text>
        )}


        {galeriDetayData ? (
          <View style={styles.galeriContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: galeriDetayData.Resim1 }} style={styles.image} />
            </View>
            <Text style={styles.title}>{galeriDetayData.Baslik1}</Text>
            <Text style={styles.description}>{galeriDetayData.Aciklama2}</Text>
          </View>
        ) : (
          <Text style={styles.errorText}>Veri bulunamadı !</Text>
        )}



        {galeriDetayData ? (
          <View style={styles.galeriContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: galeriDetayData.Resim2 }} style={styles.image} />
            </View>
            <Text style={styles.title}>{galeriDetayData.Baslik2}</Text>
            <Text style={styles.description}>{galeriDetayData.Aciklama3}</Text>
          </View>
        ) : (
          <Text style={styles.errorText}>Veri bulunamadı !</Text>
        )}

        {galeriDetayData ? (
          <View style={styles.galeriContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: galeriDetayData.Resim3 }} style={styles.image} />
            </View>
            <Text style={styles.title}>{galeriDetayData.Baslik3}</Text>
            <Text style={styles.description}>{galeriDetayData.Aciklama4}</Text>
          </View>
        ) : (
          <Text style={styles.errorText}>Veri bulunamadı !</Text>
        )}
      </ScrollView>

      <TouchableOpacity
        style={[styles.roundButton, styles.wideButton]}
        onPress={() => navigation.goBack()}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="arrow-left" size={30} color="black" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>Önceki Sayfaya Dön</Text>
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

export default GaleriDetay;



















/*

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const handlePlantSelection = (plantName) => {
    setSelectedPlant(plantName);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'Galeri', 'Resim');
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
        }
      } catch (error) {
        console.error('Belge alınırken hata oluştu:', error);
      }
    };

    if (selectedPlant) {
      fetchData();
    }
  }, [selectedPlant]);

  return (
    <View style={styles.container1}>
    

      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handlePlantSelection('Tıp')}>
              <Image source={require('../../assets/azizsancar.jpg')} style={styles.image} />
              <Text style={styles.descriptionText}> Dr.Aziz Sancar</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handlePlantSelection('Tıp')}>
              <Image source={require('../../assets/gazi.jpg')} style={styles.image} />
              <Text style={styles.descriptionText}>Dr. Gazi Yaşargil</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handlePlantSelection('Tıp')}>
              <Image source={require('../../assets/murat.jpg')} style={styles.image} />
              <Text style={styles.descriptionText}>Dr. Murat Tuncer</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handlePlantSelection('Tıp')}>
              <Image source={require('../../assets/munci.png')} style={styles.image} />
              <Text style={styles.descriptionText}>Dr. Münci  Kalayoğlu</Text>
            </TouchableOpacity>
          </View>

          
        </ScrollView>
      </View>
      
      <TouchableOpacity
        style={[styles.roundButton, styles.wideButton]}
        onPress={() => navigation.navigate("Home")}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="arrow-left" size={30} color="black" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>
            Ana Sayfaya Dön
          </Text>
        </View>
      </TouchableOpacity>




    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#80C7F2",
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
  
  contentContainer: {
    marginTop: 70,
    flex: 1,
  },

  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
  },

  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '48%',
    marginBottom: 60,
  },
  
  button: {
    backgroundColor: '#4f69a0',
    padding: 35,
    borderRadius: 15,
    alignItems: 'center',
    width: '110%',
    borderWidth: 10,
    borderColor: 'white',
  },

  descriptionText: {
    color: 'white',
    fontSize: 14,
    marginTop: 10,
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default Home;


*/