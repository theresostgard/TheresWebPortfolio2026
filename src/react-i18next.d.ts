import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof import('../../public/locales/en/translation.json');
  }
}
