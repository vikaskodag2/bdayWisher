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

const wishingMsgs = [
  'Count not the candles, see the light they give. Count not the years, but the life you live. Wishing you a wonderful time ahead.',
  'Eternal Stability of mind can be attained by connecting with eternal God.',
  'Judgements and Assumptions slowly poison Devotion.',
  'Our choice determines what to learn and what to leave.',
  'The aim of true seeker is to be one with ONE.',
  'Dissolution of ego is the beginning of True Learning.',
  'A nirankari is a ‘Sant’, trying to lead a simple saintly life at all times, in all places and among all relationships.',
  'No knowledge is complete till it comes to fruition through action.',
];

export const getSMSBody = (name, type) => {
  const idx = Math.floor(Math.random() * wishingMsgs.length);
  const msg = wishingMsgs[idx];
  return `Dhan Nirankar ${name} Ji 

${msg}
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

export const sendWhatsApp = (item, type) => {
  let msg = getSMSBody(item.fullName, type);
  let phoneWithCountryCode = `91${item.mobileNumber.toString(10)}`;

  let mobile =
    Platform.OS == 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;
  if (mobile) {
    if (msg) {
      let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
      Linking.openURL(url)
        .then(data => {
          console.log('WhatsApp Opened');
        })
        .catch(() => {
          alert('Make sure WhatsApp installed on your device');
        });
    } else {
      alert('Please insert message to send');
    }
  } else {
    alert('Please insert mobile no');
  }
};
