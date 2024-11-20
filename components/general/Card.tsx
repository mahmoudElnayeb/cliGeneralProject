import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from './AppText';
import customStyle from '../../config/styles';
export default function Card({
  title,
  subTitle,
  image,
  onPress,
}: {
  image: string;
  title: string;
  subTitle: string;
  onPress?: () => any;
}) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: customStyle.color.white,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  infoContainer: {
    gap: 2,
    marginTop: 10,
    paddingHorizontal: 20,
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
