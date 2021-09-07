import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footerSection: {
    backgroundColor: '#ffd29b',
    borderTop: '2mm solid #c3bee9',
    position: 'absolute',
    bottom: '0mm',
    width: '100%',
    height: '13mm',
  },
  footerSectionText: {
    position: 'absolute',
    top: '3mm',
    right: '25mm',
    fontSize: '4mm',
    fontFamily: 'Helvetica-Oblique',
  },
});

const Footer = () => (
  <View fixed style={styles.footerSection}>
    <Text
      style={styles.footerSectionText}
      render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}.`}
    />
  </View>
);

export default Footer;
