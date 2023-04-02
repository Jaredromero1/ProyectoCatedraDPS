import React from 'react';
import { View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function ImageCarousel() {
  const images = [
    { source: require('../../../../assets/chinawokpubli.jpg') },
    { source: require('../../../../assets/burguer1.jpg') },
    { source: require('../../../../assets/china.png') },
  ];

  const renderImage = ({ item }) => (
    <View style={{ width: '50%', height: 130, paddingHorizontal:7,}}>
      <Image source={item.source} style={{ flex: 1, borderRadius: 10 }}/>
    </View>
  );

  return (
    <Carousel
      layout={'default'}
      data={images}
      renderItem={renderImage}
      sliderWidth={410}
      itemWidth={400}
    />
  );
}