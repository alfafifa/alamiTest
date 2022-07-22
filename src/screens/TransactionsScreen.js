import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {convertToRupiah} from '../utils';

import Cart from '../component/Cart';

const windowHeight = Dimensions.get('window').height;

const dumbData = {
  id: 1,
  image: require('../../assets/images/dumbImage1.jpeg'),
  title: 'Benih-Bibit Paprika Blend mix Color (haira seed)',
  price: 12000,
};

const calculating = num => {
  num += 1;
  return num;
};

const TransactionsScreen = () => {
  const [count, setCount] = useState(0);

  const totalValue = useMemo(() => calculating(count), [count]);

  const increment = () => {
    setCount(c => c + 1);
  };
  const decrement = () => {
    setCount(c => c - 1);
  };

  const disableReduce = totalValue === 0 ? true : false;

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View>
          <Image source={dumbData.image} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text numberOfLines={2} style={styles.heading1}>
            {dumbData.title}
          </Text>
          <Text>{convertToRupiah(dumbData.price)}</Text>
          <View style={styles.containterItem}>
            <TouchableOpacity
              onPress={() => decrement()}
              disabled={disableReduce}>
              <View style={[styles.itemCount, {borderRightWidth: 0}]}>
                <Text> - </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.itemCount}>
              <Text> {totalValue} </Text>
            </View>
            <TouchableOpacity onPress={() => increment()}>
              <View style={[styles.itemCount, {borderLeftWidth: 0}]}>
                <Text> + </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Cart value={dumbData.price} totalCount={totalValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: windowHeight,
  },
  section: {
    backgroundColor: '#FFF',
    padding: 10,
    width: '100%',
    height: 150,
    flexDirection: 'row',
  },
  containterItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemCount: {
    borderColor: '000',
    borderWidth: 1,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 3,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  image: {
    height: 100,
    width: 100,
    flex: 1,
  },
  heading1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionsScreen;
