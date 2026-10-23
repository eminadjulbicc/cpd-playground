import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import FilterBar from './FilterBar';

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: '1', title: 'Install Expo Go', done: true },
    { id: '2', title: 'Finish Lab 2', done: false },
  ]);
  const [filter, setFilter] = useState('all');

  // Task 5: Add item
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // Task 5: Remove item
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // Task 6: Toggle done state
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  // Task 6: Derived count of active items
  const activeCount = todos.filter((item) => !item.done).length;

  // Task 7: Filter items
  const visibleTodos = todos.filter((item) => {
    if (filter === 'active') return !item.done;
    if (filter === 'done') return item.done;
    return true;
  });

  return (
    <View style={styles.screen}>
      <AddTodo onAdd={addTodo} />
      
      <FilterBar filter={filter} onChange={setFilter} />

      <Text style={styles.muted}>
        {todos.length === 0 ? 'No tasks yet' : `${activeCount} left`}
      </Text>

      <FlatList
        data={visibleTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        )}
      />
    </View>
  );
}