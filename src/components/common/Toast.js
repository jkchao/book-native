/**
 * 消息提示
 */

 import Toast from 'react-native-root-toast'
 
 const showToast = message => {
   Toast.show(message || '', {
     duration: 500,
     position: -70,
     shadow: true,
     animation: false,
     hideOnPress: true,
     delay: 0
   })
 }

 export default showToast
 