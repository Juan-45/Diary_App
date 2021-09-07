import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  narrationSection: {
    width: '100%',
    paddingLeft: '2mm',
  },
  narrationText: {
    color: '#000000',
    fontFamily: 'Helvetica',
    fontSize: '4mm',
  },
});

const Narration = ({ text }) => (
  <View style={styles.narrationSection}>
    <Text style={styles.narrationText}>{text}</Text>
  </View>
);

export default Narration;
