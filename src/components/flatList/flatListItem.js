import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { Divider } from 'react-native-paper';

const SPACING = 20;
const ITEM_SIZE = 30 + SPACING * 3;

const FlatListItem = ({ item, index, scrollY }) => {
  const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
  const opacityInputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)];
  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });
  const opacity = scrollY.interpolate({
    inputRange: opacityInputRange,
    outputRange: [1, 1, 1, 0],
  });

  return (
    <Animated.View
      style={{ ...styles.listItemContainer, transform: [{ scale }], opacity }}
    >
      <View style={styles.itemName}>
        <Text style={styles.nameText}>{item.fullName}</Text>
      </View>
      <Divider />
      <View style={styles.itemData}>
        <Text style={styles.itemUnit}>{item.unitNumber}</Text>
        <Text style={styles.itemGender}>{item.Gender}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    padding: SPACING,
    marginBottom: SPACING,
    backgroundColor: '#fffef7',
    borderRadius: 12,
    // Works only for IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    // Works for android
    elevation: 20,
  },
  itemName: {
    flex: 1,
    paddingBottom: SPACING / 4,
  },
  nameText: {
    fontSize: 22,
    fontWeight: '700',
  },
  itemData: {
    flex: 2,
    flexDirection: 'row',
    paddingBottom: SPACING / 4,
    paddingTop: SPACING / 4,
  },
  itemUnit: {
    opacity: 0.7,
    fontSize: 18,
    width: '70%',
  },
  itemGender: {
    opacity: 0.8,
    fontSize: 18,
    fontStyle: 'italic',
    color: '#2d8cff',
  },
});

export default FlatListItem;
