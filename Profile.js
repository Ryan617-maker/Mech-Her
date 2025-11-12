import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Components/Header';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Header title="Perfil" />
      <Text style={styles.text}>Informações da usuária.</Text>
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
