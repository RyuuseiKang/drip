import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NativeModules, Platform} from 'react-native';

const lang =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

import ko from './translate.ko.json';
import ja from './translate.ja.json';

const resources = {
  ko: {
    translation: ko,
  },
  ja: {
    translation: ja,
  },
};

export const getCurrentLanguage = () => {
  return lang ? lang.replace('-', '_').split('_')[0] : 'ko';
};

i18n.use(initReactI18next).init({
  resources,
  lng: getCurrentLanguage(),
  fallbackLng: 'ko',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
