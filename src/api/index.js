/**
 * 
 * 数据请求
 */

 import showToast from '@app/components/Toast'

 const baseUrl = 'https://api.jkchao.cn/api'
 const service = (url, option = {}) => {
   return fetch(url, options)
          .then(res => res.json())
          .then(res => {
            showToast(res.message)
            return res
          })
          .catch(error => {
            showToast(res.message || '网络错误')
          })
 }

 export default class Api {

   //  获取书本列表
   static getBookList (current_page = 1) {
     return service(`${baseUrl}/getBookList?/current_page=${current_page}`)
   }

   // 获取博主信息
   static getUserInfo () {
     return service(`${baseUrl}/Auth`)
   }


 }