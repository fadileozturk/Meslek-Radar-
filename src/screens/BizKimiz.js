
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text,ScrollView,Image } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Icon from 'react-native-vector-icons/FontAwesome';



const BizKimiz = ({ navigation }) => {
  const [bizKimizData, setBizKimizData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'BizKimiz', 'Bilgi1');
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setBizKimizData(data); // Firestore'dan gelen veriyi state'e kaydet
          
        }
      } catch (error) {
        console.error('Belge alınırken hata oluştu:', error);
      }
    };

    fetchData();
  }, []);



return (
    <View style={styles.container1}>
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              {bizKimizData && (
                 <View>
                 <Image source={{ uri: bizKimizData.HakkimdaResim2}} style={[styles.image, { marginTop: -90 }]} />
                 <Text style={[styles.descriptionText, { fontSize: 18, fontWeight: 'bold' }]}>{bizKimizData.HakkimdaBaslik}</Text>
                 <Text style={styles.descriptionText}>{bizKimizData.Hakkimdayazi}</Text>
                 <Text style={[styles.descriptionText, { fontSize: 15, fontWeight: 'normal' }]}>{bizKimizData.HakkimdaNot}</Text>
               </View>
               )}
            </View>
          </View>
        </ScrollView>
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    width: 300,
    height: 350,
    marginBottom: 10, // veya marginBottom: 0
  },
});

export default BizKimiz;







































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
    navigation.navigate('BizKimiz'); 
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
              <Image source={require('../../assets/biz.png')} style={styles.image} />
              <Text style={[styles.descriptionText, { fontSize: 18, fontWeight: 'bold' }]}>Meslek Radarı Yöneticileri</Text>
              <Text style={styles.descriptionText}>Merhaba, biz Meslek Radarı yöneticileri! Meslek Radarı ekibi olarak, geleceğin şekillenmesine yardımcı olmak ve bireylerin kariyer yolculuklarını en iyi şekilde yönlendirmek amacıyla buradayız. Teknoloji ve eğitim alanındaki deneyimimizi birleştirerek, insanlara rehberlik etmeyi ve onların hedeflerine ulaşmalarını desteklemeyi hedefliyoruz. Amacımız, sizin için en uygun meslek seçeneklerini sunmak ve potansiyelinizi en yüksek seviyede değerlendirmenize yardımcı olmak. Her bireyin benzersiz yetenekleri ve tutkuları olduğunu biliyoruz ve bu doğrultuda kişiye özel çözümler sunarak geleceğe daha güvenli adımlarla ilerlemenizi sağlamak istiyoruz. Ekip olarak, en son kariyer trendlerini takip ediyor, güncel bilgileri sunuyor ve meslekler hakkında detaylı rehberlik sağlıyoruz.
              Sizler için en iyi çözümleri sunmak için çabalıyor ve her adımda sizin yanınızda olduğumuzu hatırlatmak istiyoruz. Hedefimiz, her bireyin potansiyelini gerçekleştirmesine yardımcı olmak ve gelecekte daha mutlu ve tatmin edici bir kariyere sahip olmalarını sağlamaktır. Meslek Radarı ekibi olarak, sizleri en iyi şekilde desteklemek için buradayız.
              İyi bir gelecek inşa etmek için birlikte çalışmayı dört gözle bekliyoruz!</Text>
               <Text style={[styles.descriptionText, { fontSize: 15, fontWeight: 'lighter' }]}>Sevgiler, Meslek Radarı Yöneticileri</Text>
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
   //flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
   // width: '90%',
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
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default Home;



*/










































































/*

bu  veriyi çok iyi çekti hiçbirşey olmadan 
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handlePlantSelection = (plantName) => {
    setSelectedPlant(plantName);
    navigation.navigate('BizKimiz'); 
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
            <View style={styles.button}>
              <Image source={require('../../assets/biz.png')} style={styles.image} />
              <Text style={[styles.descriptionText, { fontSize: 18, fontWeight: 'bold' }]}>Meslek Radarı Yöneticileri</Text>
              <Text style={styles.descriptionText}>
                Merhaba, biz Meslek Radarı yöneticileri! Meslek Radarı ekibi olarak, geleceğin şekillenmesine yardımcı olmak ve bireylerin kariyer yolculuklarını en iyi şekilde yönlendirmek amacıyla buradayız. Teknoloji ve eğitim alanındaki deneyimimizi birleştirerek, insanlara rehberlik etmeyi ve onların hedeflerine ulaşmalarını desteklemeyi hedefliyoruz. Amacımız, sizin için en uygun meslek seçeneklerini sunmak ve potansiyelinizi en yüksek seviyede değerlendirmenize yardımcı olmak. Her bireyin benzersiz yetenekleri ve tutkuları olduğunu biliyoruz ve bu doğrultuda kişiye özel çözümler sunarak geleceğe daha güvenli adımlarla ilerlemenizi sağlamak istiyoruz. Ekip olarak, en son kariyer trendlerini takip ediyor, güncel bilgileri sunuyor ve meslekler hakkında detaylı rehberlik sağlıyoruz.
                Sizler için en iyi çözümleri sunmak için çabalıyor ve her adımda sizin yanınızda olduğumuzu hatırlatmak istiyoruz. Hedefimiz, her bireyin potansiyelini gerçekleştirmesine yardımcı olmak ve gelecekte daha mutlu ve tatmin edici bir kariyere sahip olmalarını sağlamaktır. Meslek Radarı ekibi olarak, sizleri en iyi şekilde desteklemek için buradayız.
              </Text>
              <Text style={[styles.descriptionText, { fontSize: 15, fontWeight: 'normal' }]}>Sevgiler, Meslek Radarı Yöneticileri</Text>
            </View>
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default Home;



*/