/**
 * 
 * 列表页
 */
import React, { Component } from 'react'

import {
  Button
} from 'react-native'

export default class Home extends Component {
  render () {
    const { goBack } = this.props.navigation;
    return (
      <Button
        title="Go back to home tab"
        onPress={() => goBack()}
      />
    )
  }
}
