
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const handleCategorySelection = (categoryName) => {
    navigation.navigate('GaleriDetay', { selectedCategory: categoryName }); // Yönlendirme ve parametre iletimi
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/kamera.png")}
        style={{
          width: "80%",
          height: "15%",
          //borderRadius:10 ,
          alignSelf: "center",
          marginTop: 100,
        }}
      />

      <ScrollView contentContainerStyle={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleCategorySelection('Tıp')}>
          <Text style={styles.buttonText}>Tıp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleCategorySelection('Hukuk')}>
          <Text style={styles.buttonText}>Hukuk</Text>
        </TouchableOpacity>
         
        <TouchableOpacity style={styles.button} onPress={() => handleCategorySelection('Mühendislik')}>
          <Text style={styles.buttonText}>Mühendislik</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleCategorySelection('Mimarlık')}>
          <Text style={styles.buttonText}>Mimarlık</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleCategorySelection('Öğretmenlik')}>
          <Text style={styles.buttonText}>Öğretmenlik</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleCategorySelection('Yazarlık')}>
          <Text style={styles.buttonText}>Yazarlık</Text>
        </TouchableOpacity>
        
      </ScrollView>

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
    justifyContent: 'center',
    backgroundColor: '#80C7F2',
    alignItems: 'center',

  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  button: {
    backgroundColor: '#4f69a0',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 10,
    width: '48%',
    borderWidth: 10,
    borderColor: 'white',
  },
  buttonText: {
    color: '#7ec0ee',
    fontWeight: 'bold',
    fontSize: 16,
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
  }
});

export default Home;


















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
    navigation.navigate('GaleriDetay'); 
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePlantSelection('GaleriDetay')}>
          <Text style={styles.buttonText}>Tıp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePlantSelection('GaleriDetay')}>
          <Text style={styles.buttonText}>Hukuk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePlantSelection('GaleriDetay')}>
          <Text style={styles.buttonText}>Mühendislik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePlantSelection('GaleriDetay')}>
          <Text style={styles.buttonText}>Öğretmenlik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePlantSelection('GaleriDetay')}>
          <Text style={styles.buttonText}>Mimarlık</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePlantSelection('GaleriDetay')}>
          <Text style={styles.buttonText}>Askeriye</Text>
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
   
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#80C7F2',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  button: {
    backgroundColor: '#4f69a0',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 10,
    width: '48%',
    borderWidth: 10,
    borderColor: 'white',
  },
  buttonText: {
    color: '#7ec0ee',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: '95%',
    height: 200,
    borderRadius: 16,
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#008b8b',
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 40,
    width: '30%',
    alignSelf: 'center',
  },

  headingContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 35,
    alignItems: 'center',
    marginVertical: 10,
    width: '25%',
    alignSelf: 'center',
  },
  headingText: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 15,
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
  }
  
});

*/






