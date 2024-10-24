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
  'जब कोई जुकता है तो समझना चाहिए की वह ऊंचाई की तरफ जा रहा है|',
  'धर्म है बस इन्सा होना, कोई और र्धर्म ईमान नही|',
  'भक्त एक खिले हुये फूल की भांति होता है और भक्ति उसकी महक|',
  'दूसरा तभी छोटा दिखता है जब हम उसे दूर से या ग़रूर से देखें|',
  'अगर किश्ती में सुराक हो तो वह डूबेगी ही, भले ही सागर शान्त हो या तूफान आ जाए|',
  'प्यार बटोरने के लिए नहीं बल्कि बांटने के लिए होता है|',
  'मानव हो मानव को प्यारा, इक दूजे का बनें सहारा|',
  'परमात्मा अचल है, इसके एहसास से मन को भी ठहराव मिलता है|',
  'कुछ भी बनो मुभारक है, पर पहले इनसान बनो|',
  'सागर के सामने रहना ह़ी, बूंद को बूंद होने का एहसास दिलाता है|',
];

export const getSMSBody = (name, type) => {
  const idx = Math.floor(Math.random() * wishingMsgs.length);
  const msg = wishingMsgs[idx];
  return `🙏🙏🌹 धन निरंकार जी 🌹🙏🙏
आदरनिय ${name} Ji 🌹
${msg}
आपको ${type} की लाख लाख बधाइयां 🥳🥳🎂🎂🌹🌹
इस दिन को यादगार बनाएँ, पृथ्वी बचाएँ - पेड़ लगाएँ|

आपका दास
अवनीत 🙏🙏
(+917020943430)
क्षेत्रीय संचालक, पुणे सिटी`;
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
