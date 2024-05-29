import { Platform } from 'react-native';

const fonts = {
  primary: {
    regular: Platform.select({
      ios: 'System',
      android: 'Roboto',
      web: 'Arial, sans-serif'
    }),
    bold: Platform.select({
      ios: 'System-Bold',
      android: 'Roboto-Bold',
      web: 'Arial Black, sans-serif'
    }),
    italic: Platform.select({
      ios: 'System-Italic',
      android: 'Roboto-Italic',
      web: 'Arial Italic, sans-serif'
    })
  },
  secondary: {
    regular: Platform.select({
      ios: 'System',
      android: 'Roboto',
      web: 'Courier New, monospace'
    }),
    bold: Platform.select({
      ios: 'System-Bold',
      android: 'Roboto-Bold',
      web: 'Courier Bold, monospace'
    }),
    italic: Platform.select({
      ios: 'System-Italic',
      android: 'Roboto-Italic',
      web: 'Courier Italic, monospace'
    })
  }
};

export default fonts;

