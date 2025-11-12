import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Header from '../Components/Header';

export default function Services() {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [salvo, setSalvo] = useState(false);

  const salvar = () => {
    if (nome && data) {
      setSalvo(true);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Adicionar Serviço" />

      <Text style={styles.label}>Nome do serviço:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Troca de óleo"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Data:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 12/11/2025"
        value={data}
        onChangeText={setData}
      />

      <Button title="Salvar" onPress={salvar} />

      {salvo && <Text style={styles.sucesso}>✅ Serviço salvo!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  label: { fontSize: 16, marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
  },
  sucesso: { marginTop: 10, color: 'green', fontWeight: 'bold' },
});
