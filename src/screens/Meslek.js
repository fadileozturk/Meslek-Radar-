
import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [hoveredButton, setHoveredButton] = useState(null); //üzerine geldiği butonun durumunu tutan  değişken.
  const scrollViewRef = useRef(null);
  const handleCategorySelection = (categoryName) => {
    navigation.navigate('MeslekDetay', { selectedCategory: categoryName });
  };
  const isButtonActive = (categoryName) => {
    return searchText.toLowerCase() !== "" && categoryName.toLowerCase().startsWith(searchText.toLowerCase());
  };
  const scrollToCategory = (categoryName) => {
    if (scrollViewRef.current) {
      const categoryOffset = getCategoryOffset(categoryName);
      if (categoryOffset >= 0) {
        const scrollY = categoryOffset * 75; // Bu değeri ayarlayarak kaydırma mesafesini kontrol edildi.
        scrollViewRef.current.scrollTo({ y: scrollY, animated: true });
      }}};
  const getCategoryOffset = (categoryName) => {
    if (!categoryName) return -1;
    const categories = ["polis", "doktor", "mühendis", "diyetisyen", "mimar", "diş hekimi", "avukat", "att","bankacı","ressam","astronom","pilot","yazar","hemşire"]; // Eklediğiniz diğer meslekleri buraya ekleyin
    const index = categories.indexOf(categoryName.toLowerCase());
    return index;
  };
  useEffect(() => {
    scrollToCategory(searchText.toLowerCase());
  }, [searchText]);


  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/jobbb.png")}
        style={{
          width: "85%",
          height: "30%",
          alignSelf: "center",
          marginTop: 40,
          marginBottom: 10,
        }}/>

      {/* Arama Kutusu */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          placeholder="Arama..."
        />
      </View>

      <ScrollView ref={scrollViewRef}>
        {/* Meslek Butonları */}


        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('Polis') && styles.roundButtonActive,]}
              onPress={() => handleCategorySelection('Polis')}>
              <Icon name="user-secret" size={30} color="blue" />
              <Text style={{ color: "blue", fontWeight: "bold" }}>Polis</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('Doktor') && styles.roundButtonActive,]}
              onPress={() => handleCategorySelection('Doktor')}>
              <Icon name="user-md" size={30} color="blue" />
              <Text style={{ color: "blue", fontWeight: "bold" }}>Doktor</Text>
          </TouchableOpacity>
        </View>

 
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('Mühendis') && styles.roundButtonActive,
            ]}
            onPress={() => handleCategorySelection('Mühendis')}
          >
            <Icon name="cogs" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Mühendis</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('Diyetisyen') && styles.roundButtonActive,
            ]}
            onPress={() => handleCategorySelection('Diyetisyen')}
          >
            <Icon name="leaf" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Diyetisyen</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('Mimar') && styles.roundButtonActive,
            ]}
            onPress={() => handleCategorySelection('Mimar')}
          >
            <Icon name="building" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Mimar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('Diş Hekimi') && styles.roundButtonActive,
            ]}
            onPress={() => handleCategorySelection('Diş Hekimi')}
          >
            <Icon name="stethoscope" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Diş Hekimi</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('Avukat') && styles.roundButtonActive,
            ]}
            onPress={() => handleCategorySelection('Avukat')}
          >
            <Icon name="balance-scale" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Avukat</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('ATT') && styles.roundButtonActive,
            ]}
            onPress={() => handleCategorySelection('ATT')}
          >
            <Icon name="ambulance" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>ATT</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('Bankacı') && styles.roundButtonActive,
            ]}
            onPress={() => handleCategorySelection('Bankacı')}
          >
            <Icon name="money" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Bankacı</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('Ressam') && styles.roundButtonActive,
            ]}
            onPress={() => handleCategorySelection('Ressam')}
          >
            <Icon name="paint-brush" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Ressam</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('Astronom') && styles.roundButtonActive,
            ]}
            onPress={() => handleCategorySelection('Astronom')}
          >
            <Icon name="space-shuttle" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Astronom</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('Pilot') && styles.roundButtonActive,
            ]}
            onPress={() => handleCategorySelection('Pilot')}
          >
            <Icon name="plane" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Pilot</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('Yazar') && styles.roundButtonActive,
            ]}
            onPress={() => handleCategorySelection('Yazar')}
          >
            <Icon name="book" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Yazar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonActive('Hemşire') && styles.roundButtonActive,
            ]}
            onPress={() => handleCategorySelection('Hemşire')}
          >
            <Icon name="heartbeat" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Hemşire</Text>
          </TouchableOpacity>
        </View>






        {/* Diğer meslek butonları burada benzer şekilde eklenmeli */}
      </ScrollView>

      <TouchableOpacity
        style={[styles.roundButton, styles.wideButton]}
        onPress={() => navigation.navigate("Home")}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="home" size={30} color="black" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>
            Ana sayfaya Dön
          </Text>
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
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  roundButton: {
    backgroundColor: "#749EC8",
    padding: 40,
    borderRadius: 100,
    alignItems: "center",
    width: "45%",
  },
  roundButtonActive: {
    backgroundColor: "yellow", // Arama sonucu eşleşen butonların rengi
  },
  wideButton: {
    backgroundColor: "#2079d8",
    width: "100%",
    marginTop: 20,
    marginVertical: 10,
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  //  marginTop: 0, // Resmin hemen altına taşıdık
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});
export default Home;




























/*

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const [isButtonFocused, setIsButtonFocused] = useState(false);

  const handleCategorySelection = (categoryName) => {
    navigation.navigate('MeslekDetay', { selectedCategory: categoryName });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/jobbb.png")}
        style={{
          width: "85%",
          height: "30%",
          alignSelf: "center",
          marginTop: 40,
          marginBottom: 10,
        }}
      />
      <ScrollView>
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('Polis')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="user-secret" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Polis</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('Doktor')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="user-md" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Doktor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('Mühendis')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="cogs" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Mühendis</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('Diyetisyen')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="leaf" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Diyetisyen</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('Mimar')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="building" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Mimar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('Diş Hekimi')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="stethoscope" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Diş Hekimi</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('Avukat')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="balance-scale" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Avukat</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('ATT')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="ambulance" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>ATT</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('Bankacı')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="money" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Bankacı</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('Ressam')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="paint-brush" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Ressam</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('Astronom')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="space-shuttle" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Astronom</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('Pilot')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="plane" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Pilot</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('Hemşire')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="heartbeat" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Hemşire</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roundButton,
              isButtonFocused && styles.roundButtonFocused,
            ]}
            onPress={() => handleCategorySelection('Yazar')}
            onPressIn={() => setIsButtonFocused(true)}
            onPressOut={() => setIsButtonFocused(false)}
          >
            <Icon name="book" size={30} color="blue" />
            <Text style={{ color: "blue", fontWeight: "bold" }}>Yazar</Text>
          </TouchableOpacity>
        </View>

        
      </ScrollView>

      <TouchableOpacity
        style={[styles.roundButton, styles.wideButton]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="home" size={30} color="black" />
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>
            Ana sayfaya Dön
          </Text>
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
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  roundButton: {
    backgroundColor: "#749EC8",
    padding: 40,
    borderRadius: 100,
    alignItems: "center",
    width: "45%",
  },
  roundButtonFocused: {
    transform: [{ scale: 1.1 }],
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






































































































/*
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const handleCategorySelection = (categoryName) => {
    navigation.navigate('MeslekDetay', { selectedCategory: categoryName }); // Yönlendirme ve parametre iletimi
  };


  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/jobbb.png")}
        style={{
          width: "85%",
          height: "30%",
          //borderRadius:40,
          alignSelf: "center",
          marginTop: 40, // Resmin üstünde boşluk bırak
          marginBottom: 10, // Resmin altında boşluk bırak
        }}
      />
<ScrollView>
      <View style={styles.row}>


      <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('Polis')}>
          <Icon name="user-secret" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>Polis</Text>
        </TouchableOpacity>  
   

        <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('Doktor')}>
           <Icon name="user-md" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>Doktor</Text>
        </TouchableOpacity>
      </View>

      

      <View style={styles.row}>
      <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('Mühendis')}>
           <Icon name="cogs" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>Mühendis</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('Diyetisyen')}>
           <Icon name="leaf" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>Diyetisyen</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
      <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('Mimar')}>
           <Icon name="building" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>Mimar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('Diş Hekimi')}>
           <Icon name="stethoscope" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>Diş Hekimi</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
      <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('Avukat')}>
           <Icon name="balance-scale" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>Avukat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('ATT')}>
           <Icon name="ambulance" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>ATT</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.row}>
      <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('Bankacı')}>
           <Icon name="money" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>Bankacı</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('Ressam')}>
           <Icon name="paint-brush" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>Ressam</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.row}>
      <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('Astronom')}>
           <Icon name="space-shuttle" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>Astronom</Text>
        </TouchableOpacity>

   
         <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('Pilot')}>
           <Icon name="plane" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>Pilot</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.row}>
      <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('Hemşire')}>
           <Icon name="heartbeat" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>Hemşire </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundButton} onPress={() => handleCategorySelection('Yazar')}>
           <Icon name="book" size={30} color="blue" />
          <Text style={{ color: "blue", fontWeight: "bold" }}>Yazar</Text>
        </TouchableOpacity>
      </View>



      </ScrollView>

      <TouchableOpacity
      style={[styles.roundButton, styles.wideButton]}
      onPress={() => navigation.navigate("Home")}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Icon name="home" size={30} color="black" />
      <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>
      Ana sayfaya Dön
      </Text>
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
    paddingHorizontal: 30,
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
    backgroundColor: "#20c3d8",
    width: "100%",
    marginTop: 20,
    marginVertical: 10,
    padding: 20,
  },
});

export default Home;


*/