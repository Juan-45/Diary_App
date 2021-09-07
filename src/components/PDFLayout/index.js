import { Page, View, Document, StyleSheet } from '@react-pdf/renderer';

import Footer from './Footer';
import Header from './Header';
import Narration from './Narration';

const styles = StyleSheet.create({
  page: {
    paddingBottom: '18mm',
  },
  bodySection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: '25mm',
    paddingBottom: '25mm',
    width: '100%',
  },
});

const PDFLayout = ({ data }) => {
  const { dateTime, result, narration } = data;

  return (
    <Document
      title={`Entrada ${dateTime} - ${result}`}
      author="Jose"
      subject="Diario de guerrero."
      creator="Diary-App by Herrera Juan José FrontEnd Engineer"
      pdfVersion="1.7"
    >
      <Page size="A4" style={styles.page} wrap>
        <Header dateTime={dateTime} text={result} />
        <View style={styles.bodySection}>
          <Narration text={narration} />
        </View>
        <Footer />
      </Page>
    </Document>
  );
};

export default PDFLayout;
