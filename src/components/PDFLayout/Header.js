import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: '28mm',
    paddingTop: '10mm',
    paddingBottom: '5mm',
    backgroundColor: '#ffd29b',
    borderBottom: '3mm solid #c3bee9',
    marginBottom: '3mm',
  },
  headerMainText: {
    color: '#000000',
    fontFamily: 'Helvetica-Oblique',
    fontSize: '6mm',
    textDecoration: 'underline',
    textDecorationColor: '#000000',
  },
  headerSecondaryText: {
    color: '#000000',
    fontFamily: 'Helvetica-Oblique',
    fontSize: '5mm',
    textDecoration: 'underline',
    textDecorationColor: '#000000',
  },
  headerTextFirstRow: {
    marginBottom: '4mm',
  },
});

const Header = ({ dateTime, text }) => (
  <View style={styles.header} fixed>
    <View style={styles.headerTextFirstRow}>
      <Text style={styles.headerMainText}>{`Entrada ${dateTime} Hs`}</Text>
    </View>
    <Text style={styles.headerSecondaryText}>{`Resultado: ${text}`}</Text>
  </View>
);

export default Header;
