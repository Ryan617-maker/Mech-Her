import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Components/Header';

export default function Alerts() {
  return (
    <View style={styles.container}>
      <Header title="Alertas" />
      <Text style={styles.text}>Você não possui alertas no momento.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  text: {
    fontSize: 16,
  },
});
