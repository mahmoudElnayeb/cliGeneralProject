/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from './Icon';
import customStyle from '../../config/styles';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';
export default function ImageInput({
  style,
  uri,
  onSelectImage,
}: {
  style?: any;
  uri?: string;
  onSelectImage: any;
}) {
  useEffect(() => {
    requestImagePermission();
  }, []);

  const requestImagePermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return;
      } else {
        Alert.alert('Permission Need', ' You need to give access to images', [
          {
            text: 'Yes',
            onPress: () => {
              openSettings();
            },
          },
          {text: 'No'},
        ]);
      }
    } else if (Platform.OS === 'ios') {
      const granted = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);

      if (granted === RESULTS.GRANTED) {
        return;
      } else {
        Alert.alert('Permission Need', ' You need to give access to images', [
          {
            text: 'Yes',
            onPress: () => {
              openSettings();
            },
          },
          {text: 'No'},
        ]);
      }
    }
  };

  const selectImage = async () => {
    try {
      const {assets, didCancel, errorCode} = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.5,
        selectionLimit: 1,
      });
      if (didCancel) return;
      if (assets) {
        onSelectImage(assets[0].uri);
      }
    } catch (error) {
      console.log('error ----->', error);
    }
  };

  const handelImageSelect = () => {
    if (!uri) selectImage();
    else {
      Alert.alert('Delete Image', 'Are you sure you need to remove Image', [
        {
          text: 'Yes',
          onPress: () => onSelectImage(null),
        },
        {text: 'No'},
      ]);
    }
  };

  return (
    <Pressable style={[styles.container, style]} onPress={handelImageSelect}>
      {!uri ? (
        <Icon
          icon="camera"
          size={70}
          color={customStyle.color.medium}
          onPress={handelImageSelect}
        />
      ) : (
        <Image source={{uri}} style={styles.image} resizeMode="cover" />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    ...customStyle.inputContiner,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
