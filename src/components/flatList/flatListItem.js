import React from 'react';
import { View, StyleSheet, Text, Platform, Linking } from 'react-native';
import { Button } from 'react-native-paper';
import { Divider } from 'react-native-paper';
import { sendMsg, sendWhatsApp } from '../../utility/utilityfn';

const SPACING = 20;

const FlatListItem = ({ item, type }) => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.itemName}>
        <Text style={styles.nameText}>{item.fullName}</Text>
      </View>
      <Divider />
      <View style={styles.itemData}>
        <Text style={styles.itemUnit}>{item.unitNumber}</Text>
        <Text style={styles.itemGender}>{item.Gender}</Text>
      </View>
      <Divider />
      <View style={styles.buttons}>
        <Button
          mode="contained"
          style={styles.buttonText}
          onPress={() => sendMsg(item, type)}
        >
          Send SMS
        </Button>
        <Button
          mode="contained"
          style={styles.buttonText}
          onPress={() => sendWhatsApp(item, type)}
        >
          Send Whatsapp
        </Button>
      </View>
    </View>
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
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: SPACING / 2,
  },
  buttonText: {
    // borderRadius: 12,
  },
});

export default FlatListItem;
