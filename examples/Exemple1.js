import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

class Exemple1 extends Component {
  render() {
    return (
      <View style={[styles.container, { flex: 1 }]}>
        <View style={[styles.box, { flex: 0.5 }]}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={[styles.box, { flex: 1 }]}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={[styles.box, { flex: 2 }]}>
          <Text style={styles.text}>3</Text>
        </View>
        <View style={[styles.box, { flex: 3 }]}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'flex-start',
    // alignItems: 'stretch',
    // alignItems: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box: {
    height: 50, // remove the height alignItems: 'stretch' and flexDirection: 'row',
    width: 50, // remove the width alignItems: 'stretch' and flexDirection: 'column',
    backgroundColor: '#e76e63',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 23,
  },
})
export default Exemple1
