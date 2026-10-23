import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50, 
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});