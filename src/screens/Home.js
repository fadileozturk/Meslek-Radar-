import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  return (
    <ImageBackground
    source={require('../../assets/yaprak4.png')} // Büyük arkaplan resmi
    style={{
      flex: 1,
      width: '100%',
      justifyContent: 'center',
    }}>

    <View style={styles.container}>
      <Image
        source={require("../../assets/meslek.png")}
        style={{
          width: "45%",
          height: "35%",
          alignSelf: "center",
          marginTop: 30,
        }}/>


      <View style={styles.buttonRow}>
      <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate("Meslek")}>
          <View style={styles.signInButton}>
            <View style={styles.buttonContent}>
              <Icon name="leaf" size={40} color="white" style={styles.icon} />
            </View>
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Meslekler</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate("Konum")}>
          <View style={styles.signInButton}>
            <View style={styles.buttonContent}>
              <Icon name="map-marker" size={40} color="white" style={styles.icon} />
            </View>
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Bize Ulaşın</Text>
          </View>
        </TouchableOpacity>

  
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate("Galeri")}>
          <View style={styles.signInButton}>
            <View style={styles.buttonContent}>
              <Icon name="photo" size={40} color="white" style={styles.icon} />
            </View>
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Galeri</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate("BizKimiz")}>
          <View style={styles.signInButton}>
            <View style={styles.buttonContent}>
              <Icon name="star" size={40} color="white" style={styles.icon} />
            </View>
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Biz Kimiz</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate("SosyalMedya")}>
          <View style={styles.signInButton}>
            <View style={styles.buttonContent}>
              <Icon name="facebook" size={40} color="white" style={styles.icon} />
            </View>
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Sosyal Medya</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate("Ayarlar")}>
          <View style={styles.signInButton}>
            <View style={styles.buttonContent}>
              <Icon name="cog" size={40} color="white" style={styles.icon} />
            </View>
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Ayarlar</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
    </ImageBackground>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  signInButton: {
   backgroundColor: "#4f69a0",
    padding: 25,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 30,
    width: "95%",
    alignSelf: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    marginBottom: 0,
  },
  buttonColumn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
});































































































/*
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/tr.png")}
        style={{
          width: "95%",
          height: "20%",
          borderRadius: 16,
          alignSelf: "center",
          marginTop: 40,
        }}
      />
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate("Konum")}
        >
          <View style={styles.buttonContent}>
            <Icon name="map-marker" size={20} color="white" style={styles.icon} />
            <Text style={{ color: "white", fontWeight: "bold" }}>Konum</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate("Urun")}
        >
          <View style={styles.buttonContent}>
            <Icon name="leaf" size={20} color="white" style={styles.icon} />
            <Text style={{ color: "white", fontWeight: "bold" }}>Meslekler</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate("Sulama")}
        >
          <View style={styles.buttonContent}>
            <Icon name="tint" size={20} color="white" style={styles.icon} />
            <Text style={{ color: "white", fontWeight: "bold" }}>Biz Kimiz ?</Text>
          </View>
        </TouchableOpacity>

     
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate("Galeri")}
        >
          <View style={styles.buttonContent}>
            <Icon name="photo" size={20} color="white" style={styles.icon} />
            <Text style={{ color: "white", fontWeight: "bold" }}> Galeri</Text>
          </View>
        </TouchableOpacity>

    

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate("GirisYap")}
        >
          <Text style={{ color: "#000000", fontWeight: "bold" }}>Giriş Sayfasına Dön</Text>
        </TouchableOpacity>
      </ScrollView>
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
  signInButton: {
    backgroundColor: "#749EC8",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 20,
    width: "30%",
    alignSelf: "center",
  },
  buttonContainer: {
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
});

*/








/*
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  return (
    <ImageBackground
    source={require('../../assets/yaprak.png')} // Büyük arkaplan resmini buraya ekleyin
    style={{
      flex: 1,
      width: '100%',
      justifyContent: 'center',
     // alignItems: 'center',
    }}
  >



    
    <View style={styles.container}>
      <Image
        source={require("../../assets/job.png")}
        style={{
          width: "90%",
          height: "25%",
          borderRadius: 76, //buraya tekrar bak
          alignSelf: "center",
          marginTop: 20,
        }}
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate("Konum")}
        >
          <View style={styles.signInButton}>
            <View style={styles.buttonContent}>
              <Icon name="map-marker" size={40} color="white" style={styles.icon} />
            </View>
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Konum</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate("SosyalMedya")}
        >
          <View style={styles.signInButton}>
            <View style={styles.buttonContent}>
              <Icon name="leaf" size={40} color="white" style={styles.icon} />
            </View>
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Meslekler</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate("Galeri")}
        >
          <View style={styles.signInButton}>
            <View style={styles.buttonContent}>
              <Icon name="photo" size={40} color="white" style={styles.icon} />
            </View>
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Galeri</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate("Bizkimiz")}
        >
          <View style={styles.signInButton}>
            <View style={styles.buttonContent}>
              <Icon name="star" size={40} color="white" style={styles.icon} />
            </View>
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Biz Kimiz</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate("SosyalMedya")}
        >
          <View style={styles.signInButton}>
            <View style={styles.buttonContent}>
              <Icon name="facebook" size={40} color="white" style={styles.icon} />
            </View>
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Sosyal Medya</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate("SosyalMedya")}
        >
          <View style={styles.signInButton}>
            <View style={styles.buttonContent}>
              <Icon name="cog" size={40} color="white" style={styles.icon} />
            </View>
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Ayarlar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>


  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  signInButton: {
   // backgroundColor: "#749EC8",
   backgroundColor: "#4f69a0",
    padding: 25,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 30,
    width: "95%",
    alignSelf: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    marginBottom: 0,
  },
  buttonColumn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
});

*/





