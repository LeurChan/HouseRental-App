import React from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const ImageGallery = ({ images }) => {
  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      {images.map((url, index) => (
        <Image key={index} source={{ uri: url }} style={{ width, height: 250 }} />
      ))}
    </ScrollView>
  );
};
export default ImageGallery;