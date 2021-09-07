import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import React, { useState, useRef, useEffect, useCallback } from 'react';

import { setDateTimeFormatForInput } from '../../utils/setDateTimeFormatForInput';
import { setGlobalDateTimeFormat } from '../../utils/setGlobalDateTimeFormat';
import DownloadPDF from '../DownloadPDF';
import { useStyles } from './style';
import useInput from './useInput';

const Form = ({ className }, ref) => {
  const classes = useStyles();

  const [isPDFFileRequested, setIsPDFFileRequested] = useState(false);
  const [isResultRequiredError, setIsResultRequiredError] = useState(false);
  const [isNarrationRequiredError, setIsNarrationRequiredError] = useState(false);
  const [isDateTimeRequiredError, setDateTimeRequiredError] = useState(false);

  const [dateTimeInputValue, dateTimeInputHandler] = useInput(
    setIsPDFFileRequested,
    setDateTimeFormatForInput(),
    true
  );
  const [resultInputValue, resultInputHandler] = useInput(setIsPDFFileRequested);
  const [narrationInputValue, narrationInputHandler] = useInput(setIsPDFFileRequested);
  const formDataObj = {
    dateTime: setGlobalDateTimeFormat(dateTimeInputValue),
    result: resultInputValue,
    narration: narrationInputValue,
  };

  let isRequiredFieldErrorSettedRef = useRef(false);

  const setRefValue = useCallback((refVariable, bool) => (refVariable.current = bool), []);
  const formValidator = useCallback(() => {
    const inputValidator = (inputValue, setErrorState, setErrorSettedRef) => {
      if (inputValue === '') {
        setErrorState(true);
        setErrorSettedRef(isRequiredFieldErrorSettedRef, true);
      } else {
        setErrorState(false);
      }
    };
    inputValidator(resultInputValue, setIsResultRequiredError, setRefValue);
    inputValidator(narrationInputValue, setIsNarrationRequiredError, setRefValue);
    inputValidator(dateTimeInputValue, setDateTimeRequiredError, setRefValue);
  }, [resultInputValue, narrationInputValue, dateTimeInputValue, setRefValue]);

  const pDFCreatorButtonHandler = (validator, refVariable) => {
    validator();
    if (!refVariable.current) {
      setIsPDFFileRequested(true);
    }
  };

  const areAllInputValuesNotAnEmptyString = useCallback(() => {
    const inputValues = [resultInputValue, narrationInputValue, dateTimeInputValue];
    const valuesChecker = (valuesArr, notEqualTo) => {
      for (let i = 0; i < valuesArr.length; i++) {
        if (valuesArr[i] === notEqualTo) {
          return false;
        }
      }
      return true;
    };
    return valuesChecker(inputValues, '');
  }, [resultInputValue, narrationInputValue, dateTimeInputValue]);

  useEffect(() => {
    if (areAllInputValuesNotAnEmptyString()) {
      setRefValue(isRequiredFieldErrorSettedRef, false);
      formValidator();
    } else if (isRequiredFieldErrorSettedRef.current === true) {
      formValidator();
    }
  }, [areAllInputValuesNotAnEmptyString, formValidator, setRefValue]);

  return (
    <Grid container direction="column" className={clsx(classes.formContainer, className)} ref={ref}>
      <Grid container className={classes.resultInputContainer}>
        <Grid item xs={12} md={6}>
          <TextField
            type="text"
            label="Resultado"
            variant="filled"
            size="small"
            color="secondary"
            className={classes.mainInputs}
            onChange={(event) => resultInputHandler(event.target.value)}
            error={isResultRequiredError}
            helperText={isResultRequiredError ? 'Campo Requerido.' : null}
          />
        </Grid>
      </Grid>
      <Grid container className={clsx(classes.textAreaContainer, classes.narrationInputContainer)}>
        <TextField
          type="text"
          label="Relato"
          variant="filled"
          size="small"
          color="secondary"
          className={classes.mainInputs}
          multiline={true}
          minRows={12}
          onChange={(event) => narrationInputHandler(event.target.value)}
          error={isNarrationRequiredError}
          helperText={isNarrationRequiredError ? 'Campo Requerido.' : null}
        />
      </Grid>

      <Grid container justifyContent="space-between" wrap="nowrap">
        <TextField
          type="datetime-local"
          label="Fecha y hora"
          variant="filled"
          size="small"
          color="secondary"
          margin="none"
          InputLabelProps={{
            shrink: true,
          }}
          value={dateTimeInputValue}
          onChange={(event) => dateTimeInputHandler(event.target.value)}
          error={isDateTimeRequiredError}
          helperText={isDateTimeRequiredError ? 'Campo Requerido.' : null}
        />
        <Grid container className={classes.buttonContainer}>
          {!isPDFFileRequested ? (
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => pDFCreatorButtonHandler(formValidator, isRequiredFieldErrorSettedRef)}
            >
              Procesar PDF
            </Button>
          ) : null}
        </Grid>
        {isPDFFileRequested ? <DownloadPDF PDFFileData={formDataObj} /> : null}
      </Grid>
    </Grid>
  );
};
export default React.forwardRef(Form);
