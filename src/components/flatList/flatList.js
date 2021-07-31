import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import ListItem from './flatListItem';

const SPACING = 20;

const EventList = ({ data, type }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {data.length === 0 ? (
        <Text style={styles.nothingText}>Nothing here.</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.fullName}
          contentContainerStyle={styles.container}
          initialNumToRender={7}
          renderItem={({ item }) => <ListItem item={item} type={type} />}
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
    alignSelf: 'center',
  },
});

export default EventList;
