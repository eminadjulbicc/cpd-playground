import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from './styles';

export default function FilterBar({ filter, onChange }) {
  const filters = ['all', 'active', 'done'];

  return (
    <View style={styles.row}>
      {filters.map((f) => {
        const isSelected = filter === f;
        return (
          <Pressable
            key={f}
            style={[
              styles.button,
              { flex: 1, backgroundColor: isSelected ? '#003A6D' : '#9AA6B5' },
            ]}
            onPress={() => onChange(f)}
          >
            <Text style={styles.buttonText}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}