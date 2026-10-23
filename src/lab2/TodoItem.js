import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <View
      style={[
        styles.row,
        { justifyContent: 'space-between', alignItems: 'center', marginVertical: 4 },
      ]}
    >
      <Pressable onPress={() => onToggle(todo.id)}>
        <Text
          style={[
            styles.title,
            todo.done && { textDecorationLine: 'line-through', color: '#586475' },
          ]}
        >
          {todo.title}
        </Text>
      </Pressable>
      <Pressable
        style={[styles.button, { backgroundColor: '#D9534F' }]}
        onPress={() => onRemove(todo.id)}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </Pressable>
    </View>
  );
}