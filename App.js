import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginCard from './components/login-screen/login-card/LoginCard';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
