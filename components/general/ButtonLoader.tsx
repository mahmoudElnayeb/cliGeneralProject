import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native'
import colors from '../../config/colors';

export default function ButtonLoader({visible , style}:{visible:boolean , style?:any}) {

    const animation = React.useRef<LottieView>(null);

    useEffect(() => {        
        if (visible) {
          animation.current?.reset();
          animation.current?.play();
        }
      }, [visible]);

  return (
    <View style={[styles.container , style]}>
      <LottieView
      loop
      autoPlay
      source={require('../../assets/lottie/buttonLoader.json')}
      ref={animation}
      style={{
        width: '100%',  
        height: 110, 
        backgroundColor: colors.dark,
        opacity: .7,
        transform: [{ scale: 1.3 }]
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        alignItems:'center',
        justifyContent:'center'
    }
})