import React from 'react';
import {
  FlatList,
  Dimensions,
  View,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import FlatListItem from './flatListItem';
import excelData from '../../assets/data/data';

const { width, height } = Dimensions.get('screen');
const BG_IMG =
  'https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/';

export default () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image
        source={{ uri: BG_IMG }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      <FlatList
        data={excelData}
        keyExtractor={item => item.timestamp}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: StatusBar.currentHeight || 42,
  },
});
