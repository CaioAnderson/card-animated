import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Lottie from 'lottie-react-native';

import Item from './src/components/Item';
import astronaut from './src/assets/astronaut.json';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20, }}>
        <Item color='#404040' cabecalho='First card'>
          <Text style={{ color: 'white', textAlign: 'center', marginTop: 10 }}>Check the option you wish:</Text>
          <View style={styles.content}>
            <TouchableOpacity style={styles.button}>
              <Text>Option 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text>Option 2</Text>
            </TouchableOpacity>
          </View>
        </Item>

        <Item color='#262626' cabecalho='Second card'>
          <View style={{ marginTop: 30, marginHorizontal: 20 }}>
            <Text style={styles.text}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis debitis libero cumque asperiores. Sequi eaque ex dolore rem quaerat quae! Beatae sed ipsam exercitationem eum cupiditate fugiat reprehenderit obcaecati ea. </Text>
          </View>

        </Item>

        <Item color='black' cabecalho='Third card'>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Lottie resizeMode='contain' source={astronaut} autoPlay loop style={{ width: 200, height: 200 }} />
          </View>
        </Item>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginVertical: 20,
    alignItems: 'center',

  },
  button: {
    height: 100,
    width: 150,
    borderRadius: 20,
    backgroundColor: '#fefefe',
    marginHorizontal: 9,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .8,
    borderWidth: 2

  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  }
})

