import { Colors, Fonts } from '@constants/theme';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    fontSize: 67,
    color: Colors.text.primary,
  },
  subtitle: {
    fontFamily: Fonts.MANROPE_SEMI_BOLD,
    fontSize: 24,
    color: Colors.text.primary,
    marginTop: 8,
  },
  version: {
    fontFamily: Fonts.MANROPE_SEMI_BOLD,
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
  },
});