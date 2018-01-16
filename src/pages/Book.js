/**
 * 
 * 列表页
 */

import React, { PureComponent } from 'react'

import {
  FlatList,
  View
} from 'react-native'

export default class Book extends PureComponent {
  state = {
    data: [],
    loading: false
  }
  // 尾部组件
  _footComponent = () => {
    return (
      <View>
        <Text>
          ~
        </Text>
      </View>
    )
  }

  // 获取数据
  _onEndReached = () => {
    this.setState((state) => ({
      data: state.data.concat([1, 2, 3, 4, 5, 6]),
    }))
  }

  _renderItem = (item) => {
    return (
      <Text>{ item }</Text> 
    )
  }

  render () {
    return (
      <View>
        <FlatList
          // 尾部组件
          ListFooterComponent = { this.footComponent }
          // 初始数量
          initialNumToRender = { 6 }
          // 下拉刷新获取数据
          onEndReached = { this._onEndReached }
          // data
          data = { this.state.data }
          // 每条数据
          renderItem = { this._renderItem }
          // loading
          refreshing = { this.state.loading }
        />
      </View>
    )
  }
}
