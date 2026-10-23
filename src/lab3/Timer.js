import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../lab2/styles';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;

    const intervalId = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seconds: {seconds}</Text>
      <View style={styles.row}>
        <Button
          title={running ? 'Pause' : 'Resume'}
          onPress={() => setRunning(!running)}
        />
        <Button title="Reset" onPress={() => setSeconds(0)} />
      </View>
    </View>
  );
}