import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  formContainer: {
    paddingTop: '25px',
    paddingBottom: '25px',
  },
  resultInputContainer: {
    marginBottom: '25px',
  },
  narrationInputContainer: {
    marginBottom: '55px',
  },
  mainInputs: {
    width: '100%',
  },
  textAreaContainer: {
    maxHeight: '300px',
    overflowY: 'auto',
  },
  buttonContainer: {
    width: 'fit-content',
  },
});

export { useStyles };
