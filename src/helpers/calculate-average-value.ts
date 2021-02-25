function calculateAverageValue(values: number[], fractionDigits = 2) {
  if (values.length === 0) {
    return 0;
  }

  const sum = values.reduce((acc, value) => {
    return acc + value;
  }, 0);

  const average = sum / values.length;

  return Number(average.toFixed(fractionDigits));
}

export default calculateAverageValue;
