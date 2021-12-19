import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.topText}>Top Left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>Center</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Bottom Right</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3FDFF',
    flex: 1,
  },
  containerTop: { flex: 1 },
  top: {
    marginTop: 20,
    marginHorizontal: 40,
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  topText: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold'
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  center: {
    width: 150,
    height: 150,
    backgroundColor: 'green',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  containerBottom: { flex: 1 },
  bottom: {
    marginTop: 80,
    marginHorizontal: 40,
    backgroundColor: '#59AFC4',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 18,

  },
  bottomText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right',
  },

});
