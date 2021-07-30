import { action, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import { TextInput, Snackbar } from 'react-native-paper';
import RNBootSplash from 'react-native-bootsplash';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import AppHeader from '../../components/header';
import ListContainer from '../../components/listContainer';
import monthNames from '../../assets/data/month';

@observer
class HomeScreen extends Component {
  date = new Date();
  isDatePickerVisible = false;
  isSnackBarVisible = false;

  constructor(props) {
    super(props);

    makeObservable(this, {
      date: observable,
      isDatePickerVisible: observable,
      isSnackBarVisible: observable,
      setDate: action,
      setIsDatePickerVisible: action,
      setIsSnackBarVisible: action,
    });
  }

  componentDidMount() {
    RNBootSplash.hide({ fade: true });
  }

  setDate = _date => {
    this.date = _date;
  };

  setIsDatePickerVisible = _visible => {
    this.isDatePickerVisible = _visible;
  };

  setIsSnackBarVisible = _visible => {
    console.log('setIsSnackBarVisible: ', _visible);
    this.isSnackBarVisible = _visible;
  };

  showDatePicker = () => {
    console.log('showDatePicker called');
    this.setIsDatePickerVisible(true);
  };

  hideDatePicker = () => {
    console.log('hideDatePicker called');
    this.setIsDatePickerVisible(false);
  };

  handleConfirm = date => {
    console.log('handleConfirm called with date: ', date);
    this.hideDatePicker();
    this.setIsSnackBarVisible(true);
    this.setDate(date);
  };

  render() {
    const dateValue = `${this.date.getDate()} ${
      monthNames[this.date.getMonth()]
    }`;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppHeader navigation={this.props.navigation} />
        <View style={styles.datePickerContainer}>
          <View>
            <TouchableOpacity activeOpaticy={1} onPress={this.showDatePicker}>
              <TextInput
                label="Select Date"
                mode="outlined"
                value={dateValue}
                editable={false}
              />
            </TouchableOpacity>
          </View>
          <View>
            <DateTimePickerModal
              date={this.date}
              isVisible={this.isDatePickerVisible}
              mode="date"
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ListContainer date={this.date} />
        </View>
        <View style={styles.snackbar}>
          <Snackbar
            duration={2000}
            visible={this.isSnackBarVisible}
            action={{
              label: 'Dismiss',
              onPress: () => this.setIsSnackBarVisible(false),
            }}
            onDismiss={() => this.setIsSnackBarVisible(false)}
          >
            {`Date Selected is ${dateValue}`}
          </Snackbar>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  datePickerContainer: {
    padding: 15,
  },
  snackbar: {
    bottom: 1,
  },
});

export default HomeScreen;
