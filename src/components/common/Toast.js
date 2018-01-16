/**
 * 消息提示
 */

 import Toast from 'react-native-root-toast'
 
 const showToast = message => {
   Toast.show(message || '未知错误', {
     duration: 1000,
     position: -70,
     shadow: true,
     animation: false,
     hideOnPress: true,
     delay: 0
   })
 }

 export default showToast
 