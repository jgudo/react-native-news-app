import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About this mot*****cking app</Text>
      <Text style={styles.sub}>Wala na akong maisip na maayos na masaleseng kaisipan na masinop na kaalaman.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20
  },
  sub: {
    color: '#8a8a8a',
    textAlign: 'center'
  }
})

export default About;
