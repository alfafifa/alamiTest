/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useState } from 'react';
import type {Node} from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
// import Cart from './src/component/Cart';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};


const Cart = ({value}) => {

  console.log("jashudhiquw", value);

  return (
    <View style={{backgroundColor:"red"}}>
      <Text style={{backgroundColor:"white"}}>nuss {value}</Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const progressBar = useRef(new Animated.Value(0)).current;
  const [deviceID, setDeviceId] = useState("");
  const [totalValue, setTotal] = useState(0)
  const {DeviceID, ReactOneCustomMethod} = NativeModules;

  // const cart = useMemo( () => <Cart/>, [] );

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const total = (value, type)=> {
    let totalTemp = totalValue
    if(type == "sum"){
      totalTemp = totalTemp + value
    } else if(type == "remove"){
      totalTemp = totalTemp - value
    }

    setTotal(totalTemp)
  }

  if(Platform.OS == 'android'){
    ReactOneCustomMethod.getPhoneID()
      .then((res) => {
        setDeviceId(res)
      })
      .catch((err) => {
        console.log("ini error", err);
      });
  } else if(Platform.OS == 'ios'){
    DeviceID.getPhoneID()
      .then((res) => {
        setDeviceId(res);
      })
      .catch((err) => {
        console.log("ini error", err);
      });
  }


  Animated.timing(progressBar, {
    toValue: 300,
    duration: 5000,
  }).start();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Soal 1">
            Ambil device id dari mobile device menggunakan bridging native
            Android dan di IOS
          </Section>
          <View style={{backgroundColor:"grey", padding:10}}>
            <Text style={styles.sectionDescription, {color: "white"}}>{deviceID}</Text>
          </View>
          <Section title="Soal 2">
            Buatlah suatu component keranjang dengan menggunakan react hook dan
            harus 1 render ketika berganti value (misal menambah atau mengurang
            item)
          </Section>
          <Cart 
            value={totalValue}
          />
          <View style={{backgroundColor:"yellow", flexDirection:"column", width:200}}>
              <Text>Yellow</Text>
              <View style={{flexDirection:"row"}}>
              <TouchableOpacity 
                style={{backgroundColor:"blue", width:100, height:100}}
                onPress={() => total(1, "sum")}
              >
                <View>
                  <Text>Add</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{backgroundColor:"lightblue", width:100, height:100}}
                onPress={() => total(1, "remove")}
              >
                <View>
                  <Text>Remove</Text>
                </View>
              </TouchableOpacity>
              </View>
          </View>
          <Section title="Soal 3">
            Buatlah sebuah progress bar yang akan otomatis berjalan hingga 100%
            tetapi jika di tekan (hold) animasi progress bar tersebut akan
            berhenti dan ketika di lepas holdnya akan jalan kembali
          </Section>
        </View>
        <View style={{width:300, height:100, backgroundColor:"transparent", borderColor:"red", borderWidth:1,}} 
          onTouchStart={(e) => {
            Animated.timing(progressBar).stop()
          }}
          onTouchEnd={(e)=> {
            progressBar.removeListener();
            Animated.timing(progressBar, {
              toValue: 300,
              duration: 5000,
            }).start();
          }}
        >
          <Animated.View style={{width:progressBar, height: 100, backgroundColor:"red"}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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

export default App;
