/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableOpacity,
  Platform,
} from 'react-native';

const Section = ({children, title, nav, navigation}) => (
  <TouchableOpacity
    onPress={() =>
      navigation == null ? console.log('stay here') : navigation.navigate(nav)
    }>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  </TouchableOpacity>
);

const HomeScreen = ({navigation}) => {
  const [deviceID, setDeviceId] = useState('');
  const [totalValue, setTotal] = useState(0);
  const {DeviceID, ReactOneCustomMethod} = NativeModules;

  if (Platform.OS == 'android') {
    ReactOneCustomMethod.getPhoneID()
      .then(res => {
        setDeviceId(res);
      })
      .catch(err => {
        console.log('ini error', err);
      });
  } else if (Platform.OS == 'ios') {
    DeviceID.getPhoneID()
      .then(res => {
        setDeviceId(res);
      })
      .catch(err => {
        console.log('ini error', err);
      });
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{backgroundColor:"white", padding:16}}>
          <Section title="Soal 1" nav="" navigation={null}>
            Ambil device id dari mobile device menggunakan bridging native
            Android dan di IOS
          </Section>
          <View style={styles.styleContainerDevice}>
            <Text style={styles.sectionDescription}>{deviceID}</Text>
          </View>
          <Section
            title="Soal 2"
            nav="TransactionsScreen"
            navigation={navigation}>
            Buatlah suatu component keranjang dengan menggunakan react hook dan
            harus 1 render ketika berganti value (misal menambah atau mengurang
            item)
            <Text style={{color:"blue"}}> Click Me &#62;</Text>
          </Section>
          <Section title="Soal 3" nav="AnimationScreen" navigation={navigation}>
            Buatlah sebuah progress bar yang akan otomatis berjalan hingga 100%
            tetapi jika di tekan (hold) animasi progress bar tersebut akan
            berhenti dan ketika di lepas holdnya akan jalan kembali
            <Text style={{color:"blue"}}> Click Me &#62;</Text>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  styleContainerDevice: {
    backgroundColor: '#E0E0E0',
    padding: 10,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#FFF',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
