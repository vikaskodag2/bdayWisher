import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { DatePicker } from 'react-native-woodpicker';
import AppHeader from '../../components/header';

class HomeScreen extends Component {
  componentDidMount() {
    RNBootSplash.hide({ fade: true });
  }

  render() {
    const { date, setDate } = this.props.store;
    const { navigation } = this.props;

    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <AppHeader navigation={navigation} />
        <View>
          <DatePicker
            value={date}
            onDateChange={setDate}
            title="Date Picker"
            isNullable
            androidDisplay="calendar"
            androidMode="calendar"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default inject('store')(observer(HomeScreen));
