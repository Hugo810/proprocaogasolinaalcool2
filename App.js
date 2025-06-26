import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title'
import Form from './src/components/Form'

// Componente principal da aplicação que junta os demais
export default function App() {
  return (
    <View style={styles.container}>
      {/* Título do App */}
      <Title />

      {/* Formulário de entrada e resultado */}
      <Form />

      {/* Barra de status */}
      <StatusBar style="auto" />
    </View>
  );
}

// Estilo principal do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
