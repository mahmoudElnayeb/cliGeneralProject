/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import ImageInput from './ImageInput';

export default function ImageInputList({
  uris,
  onImageRemove,
  onImageAdd,
}: {
  uris?: [];
  onImageRemove?: (imageUri: any) => any;
  onImageAdd?: any;
}) {
  const imageRef = useRef(null);

  return (
    <ScrollView
      horizontal
      ref={imageRef}
      showsHorizontalScrollIndicator={false}
      onContentSizeChange={() => (imageRef as any).current.scrollToEnd({animated: true})}>
      {uris?.map((uri, index) => (
        <ImageInput
          key={index}
          uri={uri}
          style={{marginRight: 5}}
          onSelectImage={() => onImageRemove(uri)}
        />
      ))}
      <ImageInput onSelectImage={onImageAdd} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
