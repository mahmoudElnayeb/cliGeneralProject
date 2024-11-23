import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import customStyle from '../config/styles';
import AppText from '../components/general/AppText';
import Button from '../components/general/Button';
import GradientBackground from '../components/general/GradientBackground';
export default function ProductDetails({route, navigation}: any) {
  return (
    <GradientBackground style={{paddingHorizontal: 10}}>
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
