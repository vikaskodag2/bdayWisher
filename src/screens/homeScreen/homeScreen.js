import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { DatePicker } from 'react-native-woodpicker';

class HomeScreen extends Component {
  componentDidMount() {
    RNBootSplash.hide({ fade: true });
  }

  render() {
    const { date, setDate } = this.props.store;
    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <View>
          <Text>Hello World</Text>
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

export default inject('store')(observer(HomeScreen));
