import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const useInput = (setIsPDFRequested, initialValue, withOutDebounce) => {
  const [state, setState] = useState(() => (initialValue ? initialValue : ''));

  const defaultOnChangeHandler = (value) => {
    setState(value);
    setIsPDFRequested(false);
  };
  const onChangeHandlerDebounced = useDebouncedCallback(defaultOnChangeHandler, 200, {
    trailing: true,
  });
  const onChangeHandler = withOutDebounce ? defaultOnChangeHandler : onChangeHandlerDebounced;
  return [state, onChangeHandler];
};

export default useInput;
