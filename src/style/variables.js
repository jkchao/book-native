import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')
const screenHeight = width < height ? height : width
const screenWidth = width < height ? width : height

const isIphoneX = Platform === 'ios' && deviceHeight === 812 && deviceWidth === 375;

export default {
  // app background
  defaultBg: '#FFFFFF',

  // tabBar
  tabDefaultBg: '#FFFFFF',
  tabActiveColor: '#24292e',
  tabHeight: isIphoneX ? 32 : 44,

  // Navbar
  navbarHeight: (Platform.OS === 'ios') ? 50 : 50,
  statusBarHeight: (Platform.OS === 'ios') ? 16 : 24,

  // color
  normalColor: '#555555',
  subColor: 'rgba(0, 0, 0, 0.38)',
  titleColor: '#24292e',

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
