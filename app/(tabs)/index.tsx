import { Colors, Fonts, Spacing } from '@/constants/theme';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💪 GymTracker</Text>
      <Text style={styles.subtitle}>Welcome back</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  title: {
    fontSize: Fonts.sizes.xxl,
    fontWeight: '800',
    color: Colors.primary,
  },
  subtitle: {
    fontSize: Fonts.sizes.md,
    color: Colors.textMuted,
    marginTop: Spacing.sm,
  },
});
