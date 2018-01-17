import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')
const screenHeight = width < height ? height : width
const screenWidth = width < height ? width : height

const isIphoneX = Platform === 'ios' && deviceHeight === 812 && deviceWidth === 375

export default {
  // app background
  defaultBackground: '#f5f5f5',

  // tabBar
  tabDefaultBg: '#FFFFFF',
  tabActiveColor: '#24292e',
  tabHeight: isIphoneX ? 32 : 44,

  // Navbar
  barHeight: (Platform.OS === 'ios') ? 24 : 30,

  // color
  normalColor: '#555555',
  subColor: 'rgba(0, 0, 0, 0.38)',
  titleColor: '#24292e',
  primary: '#0d86ff',
  black: '#24292e',
  danger: '#ff4949',
  success: '#5ab95c',

  // font
  fontSizeSmall: 16 * 0.8,
  fontSizeBase: 16,
  fontSizeLarge: 16 * 1.8,
  ...Platform.select({
    ios: {
      fontFamily: 'System',
    },
    android: {
      fontFamily: 'Roboto',
    }
  }),

  // padding
  xsPad: 16 * 0.6,
  smPad: 16 * 0.8,
  normalPad: 16,
  mdPad: 16 * 1.2,

  // width height
  screenWidth,
  screenHeight
}
