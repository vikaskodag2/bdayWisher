import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { Divider, ActivityIndicator } from 'react-native-paper';
import EventList from '../flatList';
import excelData from '../../assets/data/data';
import monthNames from '../../assets/data/month';

const getData = (activeTab, date) => {
  let data = excelData;

  if (activeTab === 'Birthday') {
    data = data
      .filter(item => item.birthMonth === monthNames[date.getMonth()])
      .filter(item => item.birthDate === date.getDate());
  }

  if (activeTab === 'Anniversary') {
    data = data
      .filter(item => item.marriageMonth === monthNames[date.getMonth()])
      .filter(item => item.marriageDate === date.getDate());
  }
  return data;
};

const ListContainer = ({ date }) => {
  const [activeTab, setActiveTab] = React.useState('Birthday');
  // TODO Added loader when list is re-processed
  const [isDataLoading, setIsDataLoading] = React.useState(false);

  const data = getData(activeTab, date);
  // setIsDataLoading(false);

  return (
    <View style={{ flex: 1 }}>
      <Divider />
      <View style={styles.listTabContainer}>
        <View style={styles.listTab}>
          <TouchableOpacity
            style={[
              styles.listTabItem,
              activeTab === 'Birthday' && styles.listTabItemActive,
            ]}
            onPress={() => setActiveTab('Birthday')}
          >
            <Text
              style={[
                styles.listTabItemText,
                activeTab === 'Birthday' && styles.listTabItemTextActive,
              ]}
            >
              Birthday
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.listTabItem,
              activeTab === 'Anniversary' && styles.listTabItemActive,
            ]}
            onPress={() => setActiveTab('Anniversary')}
          >
            <Text
              style={[
                styles.listTabItemText,
                activeTab === 'Anniversary' && styles.listTabItemTextActive,
              ]}
            >
              Anniversary
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Divider />
      <View style={styles.eventListContainer}>
        {isDataLoading ? <ActivityIndicator /> : <EventList data={data} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventListContainer: {
    flex: 1,
  },
  listTabContainer: {
    padding: 20,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  listTabItem: {
    width: Dimensions.get('window').width / 2.5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 12,
  },
  listTabItemText: {
    fontSize: 16,
    color: '#000',
  },
  listTabItemActive: {
    backgroundColor: '#2d8cff',
  },
  listTabItemTextActive: {
    color: '#fff',
  },
});

export default ListContainer;
