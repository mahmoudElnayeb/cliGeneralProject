import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import customStyle from '../config/styles';
import AppText from '../components/general/AppText';
import Button from '../components/general/Button';
import GradientBackground from '../components/general/GradientBackground';
import useHeader from '../hooks/useHeader';
export default function ProductDetails({route, navigation}: any) {
  useHeader({headerRightFunc:()=>( (
           
    <Button
    type="default"
    onPress={()=>console.log("xxxx")}
    icon='close'
    style={{ width: 50, height: 50 , justifyContent:'center',
      alignItems:'center' }} 
    title={""} 
    iconSize={50}
    />
  )
)
  });
  return (
    <GradientBackground style={{paddingHorizontal: 10  }} hasHeader>
      <View style={styles.container}>
        <Image
          source={{uri: route.params?.item?.images[0].url}}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.infoContainer}>
          <AppText style={styles.title}>{route.params?.item?.title}</AppText>
          <AppText style={styles.subTitle}>
            {route.params?.item?.price} $
          </AppText>
        </View>
      </View>
      <Button
        title="add new"
        type="primary"
        onPress={() => navigation.navigate('addProduct')}
      />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: customStyle.color.white,
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  infoContainer: {
    gap: 2,
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    color: customStyle.color.primary,
    fontWeight: 700,
  },
  subTitle: {
    fontSize: 20,
    color: customStyle.color.medium,
  },
});
