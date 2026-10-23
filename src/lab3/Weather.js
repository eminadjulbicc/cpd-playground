import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from '../lab2/styles';
import { CITIES, currentUrl } from './cities';

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(currentUrl(CITIES[0]));
        if (!response.ok) {
          throw new Error('Failed to load weather');
        }
        const json = await response.json();
        setWeather(json.current);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{CITIES[0].name}</Text>
      <Text style={styles.temp}>{weather.temperature_2m} °C</Text>
      <Text>Wind {weather.wind_speed_10m} km/h</Text>
    </View>
  );
}