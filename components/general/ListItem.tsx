import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from './AppText';
import customStyle from '../../config/styles';
import Icon from './Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function ListItem({
  title,
  subTitle,
  image,
  icon,
  backgroundcolor,
  color,
  size,
  titleColor,
  navigation,
}: {
  title?: string;
  subTitle?: string;
  image?: any;
  icon?: string;
  backgroundcolor?: string;
  titleColor?: string;
  color?: string;
  size?: number;
  navigation?: string;
}) {
  return (
    <View style={styles.container}>
      {image && <Image source={image} style={styles.image} />}
      {icon && (
        <Icon
          icon={icon}
          color={color}
          backgroundColor={backgroundcolor}
          size={size}
        />
      )}
      <View style={styles.infoConatiner}>
        <AppText style={[styles.title, {color: titleColor}]}> {title} </AppText>
        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
      </View>
      {navigation && (
        <MaterialCommunityIcons
          name="chevron-right"
          size={24}
          color={customStyle.color.medium}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: customStyle.color.white,
    padding: 20,
    alignItems: 'center',
    borderRadius: 20,
  },
  infoConatiner: {
    gap: 3,
    flex: 1,
  },
  title: {
    fontWeight: 700,
    fontSize: 20,
  },
  subTitle: {
    color: customStyle.color.medium,
    fontSize: 17,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
});
