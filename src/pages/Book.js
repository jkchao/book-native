/**
 * 
 * 列表页
 */

import React, { PureComponent } from 'react'

import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

import appStyle from '../style'

import Service from '../api'

// component
import BookItem from '../components/book/BookItem'

export default class Book extends PureComponent {
  state = {
    data: [],
    loading: false,
    totalPage: 1,
    currentPage: 1,
    animating: true
  }

  // 第一次获取数据
  componentWillMount () {
    console.log('componentWillMount')
    Service
          .getBookList(currentPage = 1)
          .then(res => {
              this.setState(state => ({
                totalPage: res.result.pagination.total_page,
                currentPage: res.result.pagination.current_page,
                data: state.data.concat(res.result.list)
              }))
           })
           .catch(() => {
             this.setState({
               animating: false
             })
           })
  }

  _keyExtractor = (item, index) => item.id

  // 尾部组件
  _footComponent = () => {
    return (
      <View style={ styles.footer }>
        <Text style={{ color: 'black',  backgroundColor: '#FFFFFF' }}>
          无更多数据
        </Text>
      </View>
    )
  }

  // 第一次进来时，列表数据为空，显示加载组件
  emptyComponent = () => {
    return (
      <View style={ styles.loading }>
        { 
          this.state.animating
          ?  <ActivityIndicator
                color={ appStyle.variables.primary }
              />
          : <Text>无数据</Text>
        }
      </View>
    )
  }

  // 下拉刷新获取数据
  _onEndReached = () => {
    if (this.state.currentPage === 1) return
    if (
      this.state.currentPage === this.state.totalPage
    ) return
    Service
          .getBookList(currentPage = this.state.currentPage++)
          .then(res => {
              console.log(res)
              this.setState(state => ({
                currentPage: res.result.pagination.current_page,
                data: state.data.concat(res.result.list)
              }))
           })
  }

  // 每一项
  _renderItem = ({ item, index }) => {
    return (
      <BookItem
        item={ item }
        index={ index }
      />
    )
  }

  render () {
    return (
      <View style={ styles.bookListContainer }>
        <Text style={ styles.notifications }>下面是我读过的一些书，如果碰巧有你想要的，联系我吧。</Text>
        <FlatList
          // 列表为空时
          ListEmptyComponent={ this.emptyComponent }
          // 尾部组件
          ListFooterComponent={ this.footComponent }
          // 初始数量
          initialNumToRender={ 6 }
          // 下拉刷新获取数据
          onEndReached={ this._onEndReached }
          // data
          data={ this.state.data }
          // 指定 key
          keyExtractor={ this._keyExtractor }
          // 每条数据
          renderItem={ this._renderItem }
          // loading
          refreshing={ true }
          // 使用新的列表
          legacyImplementation={ false }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bookListContainer: {
    flex: 1,
    backgroundColor: appStyle.variables.defaultBackground
  },
  footer: {
    width: 24,
    padding: 24,
    backgroundColor: 'yellow'
  },
  loading: {
    marginTop: appStyle.variables.xsPad
  },
  notifications: {
    margin: appStyle.variables.mdPad,
    padding: appStyle.variables.mdPad,
    backgroundColor: '#FFFFFF' 
  }
})
