import { Linking, Platform } from 'react-native';
import excelData from '../assets/data/data';
import monthNames from '../assets/data/month';

export const getData = (activeTab, date) => {
  let data = excelData;

  if (activeTab === 'Birthday') {
    data = data
      .filter(item => item.birthMonth === date.getMonth() + 1)
      .filter(item => item.birthDate === date.getDate());
  }

  if (activeTab === 'Anniversary') {
    data = data
      .filter(item => item.marriageMonth === monthNames[date.getMonth()])
      .filter(item => item.marriageDate === date.getDate());
  }
  return data;
};

const bdayWishingMsgs = [
  `प्यार की मूरत, ज्ञान की सूरत, तुम्हे देख प्रतीत हुआ।
आनंद में बीता समय सुहाना, जो तुम संग व्यतीत हुआ।
जन्मदिन मुबारक आपको संतों, आपका जीवन मधुर संगीत हुआ।`,
  `प्यार भरा एक सुंदर जीवन, और पुरुषार्थ का तुम हो दर्पण।
खुशियों भरा हो हर एक पल, न हो दुख का एक भी घर्षण।
आज आप का है जन्मदिन, ये तुकबंदी आप को अर्पण।`,
  `🙏प्यार मिला है निरंकार का, इस प्यार की है ना कोई कीमत
ज्ञान, बुद्धि, विवेक की बनी रहे सदा आप पर रहमत।`,
  `सबमें देखा प्रभु का नूर, नही आप में कोई गुरूर
नम्र भाव से सेवा की है, आनंद पाया है भरपूर
आगे से आगे बढ़ते जाना, अहंकार रहे आप से दूर
जन्मदिन के शुभ अवसर पे, पेड़ लगाना है जरूर।`,
  `साधा जीवन उच्च विचार,स्वभाव में है मिशन का प्रचार
जन्म सफल है आप का संतों, जीवन में आया निरंकार।
एक नूर है देखा सबमें, सबसे किया है आप ने प्यार।
पेड़ लगाऐं जरूर संतों, आपका जन्मदिन है त्योहार।`,
  `सच्चे गुरुसिख सेवादार हो, भाव समर्पण का मन में।
निरंकार का ज्ञान मिला है, जीवन बदला उपवन में।
निरंकार से जुड़े हो आप, तभी तो आनंद जीवन में।
जन्मदिन के शुभ अवसर पर, पेड़ लगाएं आंगन में।`,
];

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
  const idx = Math.floor(Math.random() * bdayWishingMsgs.length);
  const msg = bdayWishingMsgs[idx];
  return `🙏🙏🌹 धन निरंकार जी 🌹🙏🙏
आदरनिय ${name} Ji 🌹

${msg}

आपको ${type} की लाख लाख बधाइयां 🥳🥳🎂🎂��
इस दिन को यादगार बनाएँ, पृथ्वी बचाएँ - पेड़ लगाएँ|

आपका दास
अशोक आहूजा🙏🙏
झोनल इंचार्ज, पुणे

अवनीत 🙏🙏
(+917020943430)
क्षेत्रीय संचालक, पुणे सिटी और पिंपरी`;
};

export const sendMsg = (item, type) => {
  if (item.mobileNumber.toString().length !== 10) {
    alert('Mobile no not found!');
    return;
  }
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
  if (item.mobileNumber.toString().length !== 10) {
    alert('Mobile no not found!');
    return;
  }
  let phoneWithCountryCode = `91${item.mobileNumber.toString(10)}`;

  let mobile =
    Platform.OS === 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;
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
