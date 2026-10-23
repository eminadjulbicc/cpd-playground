import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';

export default function Counter() {
  // Task 3 state
  const [count, setCount] = useState(0);

  // Task 4 state
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.screen}>
      {/* Task 3: Counter */}
      <Text style={styles.title}>Count: {count}</Text>
      <View style={styles.row}>
        <Pressable
          style={[styles.button, count === 0 && { backgroundColor: '#ccc' }]}
          disabled={count === 0}
          onPress={() => setCount((c) => Math.max(0, c - 1))}
        >
          <Text style={styles.buttonText}>-1</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => setCount((c) => c + 1)}
        >
          <Text style={styles.buttonText}>+1</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>

      {/* Task 4: Like Button */}
      <View style={{ marginTop: 24 }}>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: liked ? '#007AFF' : '#003A6D' },
          ]}
          onPress={() => setLiked(!liked)}
        >
          <Text style={styles.buttonText}>
            {liked ? 'Liked (13)' : 'Like (12)'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}