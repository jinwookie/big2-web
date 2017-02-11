export const createConstants = (array, prefix = '') => {
  return array.reduce((acc, curr) => {
    const constant = `${prefix}_${curr}`;
    acc[curr] = constant;
    return acc;
  }, { });
};

export const createAsyncConstants = constant => {
  return [
    `${constant}_REQUEST`,
    `${constant}_SUCCESS`,
    `${constant}_ERROR`
  ];
};
