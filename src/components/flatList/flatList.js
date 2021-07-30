import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import ListItem from './flatListItem';

const BG_IMG =
  'https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/';

const SPACING = 20;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const EventList = ({ data }) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {data.length === 0 ? (
        <Text style={styles.nothingText}>Nothing here.</Text>
      ) : (
        <AnimatedFlatList
          data={data}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
          )}
          keyExtractor={item => item.fullName}
          contentContainerStyle={styles.container}
          initialNumToRender={7}
          renderItem={({ item, index }) => (
            <ListItem item={item} index={index} scrollY={scrollY} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING,
  },
  nothingText: {
    padding: SPACING * 2,
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default EventList;
