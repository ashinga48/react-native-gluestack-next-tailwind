
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SampleScreen = () => {
  const handlePress = () => {
    alert('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Sample Screen</Text>
      <Text style={styles.description}>
        This is a sample description. Customize this screen as needed.
      </Text>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default SampleScreen;