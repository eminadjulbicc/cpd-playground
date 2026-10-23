import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import { styles } from './styles';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() === '') return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <View style={styles.row}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New task"
        style={[styles.input, { flex: 1 }]}
      />
      <Pressable style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
}