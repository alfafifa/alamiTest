import React, {useRef} from 'react';
import {Animated, View, StyleSheet} from 'react-native';

const AnimationScreen = () => {
  const progressBar = useRef(new Animated.Value(0)).current;

  Animated.timing(progressBar, {
    toValue: 300,
    duration: 5000,
  }).start();

  return (
    <View style={styles.container}>
      <View
        style={styles.containerBar}
        onTouchStart={e => {
          Animated.timing(progressBar).stop();
        }}
        onTouchEnd={e => {
          progressBar.removeListener();
          Animated.timing(progressBar, {
            toValue: 300,
            duration: 5000,
          }).start();
        }}>
        <Animated.View style={[styles.fillin, {width: progressBar}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBar: {
    width: 300,
    height: 100,
    backgroundColor: 'transparent',
    borderColor: 'red',
    borderWidth: 1,
  },
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  fillin: {
    height: 100,
    backgroundColor: 'red',
    marginBottom: 50,
  },
});

export default AnimationScreen;
