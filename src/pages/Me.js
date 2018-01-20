/**
 * 
 * 个人信息页
 */

import React, { Component } from 'react'

import {
  TouchableOpacity,
  Platform,
  Linking,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'

import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// api
import Service from '../api'

import appStyle from '../style';

export default class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userInfo: {}
    }
  }

  openSocial(url) {
    Linking
          .openURL(url)
          .catch(error => console.warn('An error occurred: ', error))
  }

  componentWillMount () {
    // 请求个人信息数据
    Service
          .getUserInfo()
          .then(res => {
             this.setState({ userInfo: res.result })
           })
  }

  render() {
    const userInfo = this.state.userInfo
    return (
      <View style={ [ styles.container, styles.user ] }>
        <Image style={ styles.gravatar } source={
          userInfo ? { uri: userInfo.gravatar } : require('../images/gravatar.jpg')
        }/>
        <Text style={ styles.name }>{ userInfo.name }</Text>
        <Text style={ styles.slogan }>{ userInfo.slogan }</Text>
        <View style={ styles.socials }>
          <TouchableOpacity
            style={ styles.socialItem }
            onPress={() => { this.openSocial('https://jkchao.cn') }}>
            <Ionicon name="ios-link" size={ 20 } style={ styles.socialIcon }/>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.socialItem }
            onPress={ () => { this.openSocial('https://github.com/jkchao') } }>
            <Ionicon name="logo-github" size={ 20 } style={ styles.socialIcon }/>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.socialItem }
            onPress={ () => { this.openSocial('https://juejin.im/user/5858c896128fe1006b86cb51') } }>
            <Image  style={{ width: 20, height: 17 }} source={ require('../images/juejin.png') }/>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.socialItem }
            onPress={ () => { this.openSocial('https://segmentfault.com/u/sanmao_58e1f28560e06o') } }>
            <Image  style={{ width: 20, height: 20 }} source={ require('../images/segmentfault.png') }/>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.socialItem }
            onPress={ () => { this.openSocial('https://weibo.com/u/5329847417') } }>
            <FontAwesome name="weibo" size={ 20 } style={ styles.socialIcon }/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  user: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  gravatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  name: {
    fontFamily: appStyle.variables.fontFamily,
    fontSize: appStyle.variables.fontSizeLarge,
    color: appStyle.variables.titleColor,
    marginTop: appStyle.variables.normalPad,
    marginBottom: appStyle.variables.normalPad
  },
  slogan: {
    fontFamily: appStyle.variables.fontFamily,
    fontSize: appStyle.variables.fontSize,
    color: appStyle.variables.normalColor,
    marginBottom: appStyle.variables.smPad
  },
  socials: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6
  },
  socialItem: {
    marginLeft: 10,
    marginRight: 10
  },
  socialIcon: {
    color: appStyle.variables.normalColor
  }
})
