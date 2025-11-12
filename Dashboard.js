import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import Card from '../Components/Card';

export default function Dashboard() {
  const [servicos, setServicos] = useState([]);

  const adicionarServico = () => {
    const novoServico = {
      id: Date.now().toString(),
      nome: `Serviço ${servicos.length + 1}`,
    };
    setServicos([...servicos, novoServico]);
  };

  return (
    <View style={styles.container}>
      <Header title="Dashboard" />

      <Card>
        <Text style={styles.text}>Serviços recentes:</Text>
        <FlatList
          data={servicos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.item}>🔧 {item.nome}</Text>
          )}
        />
        <Button title="Adicionar serviço" onPress={adicionarServico} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  item: {
    fontSize: 15,
    marginVertical: 4,
  },
});

