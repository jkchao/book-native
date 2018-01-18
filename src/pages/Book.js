/**
 * 
 * book
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
import BookHeader from '../components/book/BookHeader'
import BookFooter from '../components/book/BookFooter'

export default class Book extends PureComponent {
  state = {
    data: [],
    loading: false,
    totalPage: 1,
    currentPage: 1,
    animating: true,
    // 0 加载失败 1 加载中 2 无更多数据
    RefreshType: 1
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

  // 第一次进来时，列表数据为空，显示加载组件
  _emptyComponent = () => {
    return (
      <View style={ styles.loading }>
        {
          this.state.animating
          ? <Text>。。。。</Text>
          : <Text>无数据</Text>
        }
      </View>
    )
  }

  // 下拉刷新获取数据
  _onEndReached = () => {
    if (this.state.totalPage === 1) return
    if (
      this.state.currentPage === this.state.totalPage
    ) return
    this.setState({
      RefreshType: 1
    })
    Service
          .getBookList(currentPage = ++this.state.currentPage)
          .then(res => {
              this.setState(state => ({
                currentPage: res.result.pagination.current_page,
                data: state.data.concat(res.result.list),
                RefreshType: res.result.pagination.current_page === res.result.pagination.total_page
                             ? 2
                             : 1
              }))
           })
           .catch(() => {
             this.setState({
                RefreshType: 2
             })
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
        <FlatList
          // 列表为空时
          // ListEmptyComponent={ this._emptyComponent }
          // 尾部组件
          ListFooterComponent={ BookFooter(this.state.RefreshType) }
          // 头部组件
          ListHeaderComponent={ BookHeader }
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
          // 距离列表底部多远时，触发事件
          onEndReachedThreshold={ 0.05 }
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
    backgroundColor: 'yellow'
  },
  loading: {
    marginTop: appStyle.variables.xsPad,
    marginBottom: appStyle.variables.xsPad
  }
})
