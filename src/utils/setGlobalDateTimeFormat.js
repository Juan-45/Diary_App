const setGlobalDateTimeFormat = (value) => {
  const firstSeparatorCharacter = '-';
  const secondSeparatorCharacter = 'T';
  const splittedDate = value.split(firstSeparatorCharacter);

  const year = splittedDate[0];
  const month = splittedDate[1];

  const day = splittedDate[2] ? splittedDate[2].split(secondSeparatorCharacter)[0] : '';
  const time = splittedDate[2] ? splittedDate[2].split(secondSeparatorCharacter)[1] : '';

  const dateTimeFormatted = `${day}/${month}/${year} ${time}`;
  return dateTimeFormatted;
};

export { setGlobalDateTimeFormat };
