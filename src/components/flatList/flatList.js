import React from 'react';
import { FlatList, View, StyleSheet, Image } from 'react-native';
import Animated from 'react-native-reanimated';
import ListItem from './flatListItem';
import excelData from '../../assets/data/data';

const BG_IMG =
  'https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/';

const SPACING = 20;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const EventList = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image
        source={{ uri: BG_IMG }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      <AnimatedFlatList
        data={excelData}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        keyExtractor={item => item.fullName}
        contentContainerStyle={styles.container}
        // initialNumToRender={7}
        renderItem={({ item, index }) => (
          <ListItem item={item} index={index} scrollY={scrollY} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING,
  },
});

export default EventList;
