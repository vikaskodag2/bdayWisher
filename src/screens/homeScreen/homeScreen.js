import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { DatePicker } from 'react-native-woodpicker';
import AppHeader from '../../components/header';

@inject('store')
@observer
class HomeScreen extends Component {
  componentDidMount() {
    RNBootSplash.hide({ fade: true });
  }

  render() {
    const { store } = this.props;
    const { navigation } = this.props;
    console.log('store: ', store.selectedDate, store.getSelectedDate);
    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <AppHeader navigation={navigation} />
        <View>
          <DatePicker
            value={store.selectedDate}
            onDateChange={date => store.setSelectedDate(date)}
            title="Date Picker"
            text={store.getSelectedDate}
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

export default HomeScreen;
