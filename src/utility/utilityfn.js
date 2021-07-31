import { Linking, Platform } from 'react-native';
import excelData from '../assets/data/data';
import monthNames from '../assets/data/month';

export const getData = (activeTab, date) => {
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

export const getSMSBody = (name, type) => {
  return `Dhan Nirankar ${name} Ji 

Count not the candles..see the light they give. Count not the years, but the life you live. Wishing you a wonderful time ahead.
Happy ${type} 

Popat Taware 
(+917020943430)
Khetriya Sanchalak, Pune City`;
};

export const sendMsg = (item, type) => {
  const url =
    Platform.OS === 'android'
      ? `sms:+91${item.mobileNumber.toString(10)}?body=${getSMSBody(
          item.fullName,
          type,
        )}`
      : `sms:+91${item.mobileNumber.toString(10)}`;

  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        console.log('Unsupported url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch(err => console.error('An error occurred', err));
};
