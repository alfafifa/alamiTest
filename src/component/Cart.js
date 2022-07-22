import React, {memo, useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {convertToRupiah} from '../utils';

const calculating = (num, value) => {
  const total = num * value;
  return total;
};

const Cart = ({value, totalCount}) => {
  const totalValue = useMemo(
    () => calculating(totalCount, value),
    [totalCount, value],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>Total </Text>
      <Text style={styles.titleTotal}>{convertToRupiah(totalValue)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  titleHeader: {
    fontSize: 16,
  },
  titleTotal: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default memo(Cart);
