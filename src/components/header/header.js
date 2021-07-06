import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.navBar}>
      <View style={styles.leftContainer}>
        <Button
          color="#000"
          icon="menu"
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <Text style={styles.middleContainer}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Birthday Wisher',
};

const styles = StyleSheet.create({
  navBar: {
    height: '12%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
    shadowColor: '#000',
    backgroundColor: '#fff',
    elevation: 1,
  },
  leftContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  middleContainer: {
    flex: 2,
    flexDirection: 'row',
    fontSize: 18,
    color: '#000',
  },
});

export default Header;
