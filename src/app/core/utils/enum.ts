function getValuesFromEnum(e) {
  return Object.values(e).filter(item => !!isNaN(Number(item)));
}

export { getValuesFromEnum };
