import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.navBar}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          style={styles.menuIconStyle}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu-sharp" size={24} color="#fff" />
        </TouchableOpacity>
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
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
    shadowColor: '#000',
    backgroundColor: '#2d8cff',
    elevation: 1,
  },
  leftContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  middleContainer: {
    flex: 2,
    flexDirection: 'row',
    fontSize: 20,
    color: '#fff',
  },
  menuIconStyle: {
    paddingLeft: 10,
    paddingRight: 15,
  },
});

export default Header;
