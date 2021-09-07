const setTwoDigitsDateFormat = (number) => number.toString().padStart(2, '0');
const setDateTimeFormatForInput = (date = new Date()) =>
  `${date.getFullYear()}-${setTwoDigitsDateFormat(date.getMonth() + 1)}-${setTwoDigitsDateFormat(
    date.getDate()
  )}T${setTwoDigitsDateFormat(date.getHours())}:${setTwoDigitsDateFormat(date.getMinutes())}`;

export { setDateTimeFormatForInput };
