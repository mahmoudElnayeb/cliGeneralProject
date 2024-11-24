import { StyleSheet, View, Platform } from 'react-native'
import React, { useRef, useEffect } from 'react'
import LottieView from 'lottie-react-native';

export default function ActivityIndicator({visible = false}) {
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    if (visible) {
      animation.current?.reset();
      animation.current?.play();
    }
  }, [visible]);

  if(!visible) return null;
  
  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        autoPlay
        loop
        style={styles.animation}
        source={require('../../assets/lottie/loader.json')}
        renderMode={Platform.OS === 'android' ? 'HARDWARE' : 'AUTOMATIC'}
        enableMergePathsAndroidForKitKatAndAbove
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  animation: {
    width: 200,
    height: 200
  }
});
