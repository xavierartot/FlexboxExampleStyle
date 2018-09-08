import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Exemple1 from './examples/Exemple1'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Exemple1 />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
