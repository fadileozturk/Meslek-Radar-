

/*


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';

const Konum = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Konuma erişim izni reddedildi');
        setIsLoading(false);
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      if (!currentLocation || !currentLocation.coords) {
        setErrorMsg('Konum bilgisi alınamadı');
        setIsLoading(false);
        return;
      }
      setLocation(currentLocation);

      let geocodeRes = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
      if (geocodeRes && geocodeRes.length > 0) {
        setAddress(geocodeRes[0].city || geocodeRes[0].district || geocodeRes[0].region);
        setProvince(geocodeRes[0].region);
      }

      setIsLoading(false);
    })();
  }, []);

  let buttonText = 'Konum Göster';
  if (address && province) {
    buttonText = `${province}, ${address}`;
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Yükleniyor Lütfen Bekleyiniz...</Text>
        </View>
      ) : (
        <React.Fragment>
          <MapView
  style={styles.mapStyle}
  initialRegion={{
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
>
  <Marker
    coordinate={{
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    }}
    title={address}
  />
</MapView>

          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </View>
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80C7F2',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.8,
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Konum;





*/












import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const SabitKonum = () => {
  const initialRegion = {
    latitude: 37.144815, // Şanlıurfa Eyüpkent koordinatları
    longitude: 38.732773,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const province = 'Türkiye';
  const address = 'Şanlıurfa, Eyüpkent';
 

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={initialRegion}
          title={address}
        />
      </MapView>

      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{`${province}, ${address}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80C7F2',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.8,
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default SabitKonum;















