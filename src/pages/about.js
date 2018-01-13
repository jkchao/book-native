/**
 * 
 * 个人信息页
 */

import React, { Component } from 'react'

import {
  TouchableOpacity,
  BackAndroid,
  Platform,
  Linking,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'

import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { appColors } from '../style/index'

// api
import Service from '../api'

import appStyle from '../style';

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  userGravatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  userName: {
    ...appStyle.fonts.title,
    color: appStyle.colors.textSecondary,
    marginTop: appStyle.size.padding,
    marginBottom: appStyle.size.padding
  },
  userSlogan: {
    ...appStyle.fonts.baseStyle,
    color: appStyle.colors.textTitle,
    marginBottom: appStyle.size.padding / 2
  },
  userSocials: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  userSocialItem: {
    marginLeft: 10,
    marginRight: 10
  },
  userSocialIcon: {
    color: appStyle.colors.textDefault
  }
});

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
      <View style={[ styles.container, styles.userContent ]}>
        <Image style={ styles.userGravatar } source={{ uri: userInfo.gravatar }}/>
        <Text style={ styles.userName }>{ userInfo.name }</Text>
        <Text style={ styles.userSlogan }>{ userInfo.slogan }</Text>
      <View style={ styles.userSocials }>
        <TouchableOpacity
          style={ styles.userSocialItem }
          onPress={() => { this.openSocial('https://jkchao.cn') }}>
          <Ionicon name="ios-link" size={ 20 } style={ styles.userSocialIcon }/>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.userSocialItem }
          onPress={() => { this.openSocial('https://github.com/jkchao') }}>
          <Ionicon name="logo-github" size={ 20 } style={ styles.userSocialIcon }/>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.userSocialItem }
          onPress={() => { this.openSocial('https://juejin.im/user/5858c896128fe1006b86cb51') }}>
          <Image  style={{width: 20, height: 17}} source={ require('../images/juejin.png') }/>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.userSocialItem }
          onPress={() => { this.openSocial('https://segmentfault.com/u/sanmao_58e1f28560e06o') }}>
          <Image  style={{width: 20, height: 20}} source={ require('../images/segmentfault.png') }/>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ styles.userSocialItem }
          onPress={() => { this.openSocial('https://weibo.com/u/5329847417') }}>
          <FontAwesome name="weibo" size={ 20 } style={ styles.userSocialIcon }/>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}
