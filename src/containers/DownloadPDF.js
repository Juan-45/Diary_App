import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { usePDF } from '@react-pdf/renderer';

import LightSpinner from '../components/LightSpinner/';
import PDFLayout from '../components/PDFLayout/';

const useStyles = makeStyles({
  spinnerContainer: {
    width: 'fit-content',
    marginRight: '80px',
  },
});

const DownloadPDF = ({ PDFFileData }) => {
  const classes = useStyles();
  const { dateTime, result } = PDFFileData;
  const [instance] = usePDF({ document: <PDFLayout data={PDFFileData} /> });

  if (instance.url === null) {
    return (
      <Grid container alignItems="flex-start" className={classes.spinnerContainer}>
        <LightSpinner />
      </Grid>
    );
  } else if (instance.error) {
    return <Typography>Ocurrio un error, vuelva a intentar descargar el archivo.</Typography>;
  } else
    return (
      <Button
        variant="contained"
        size="small"
        color="secondary"
        download={`Entrada ${dateTime} - ${result}`}
        href={instance.url}
        onClick={() => true}
      >
        Descargar PDF
      </Button>
    );
};
export default DownloadPDF;
