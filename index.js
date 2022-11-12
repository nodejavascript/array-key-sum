const arrayKeySum = (array, key) => {
  if (!array) throw new Error('arrayKeySum requires array')
  if (!key) throw new Error('arrayKeySum requires key')

  if (!array.length === 0) return 0

  const sum = array.reduce((previousValue, currentValue) => previousValue + currentValue[key], 0)
  if (!sum) return 0

  return sum
}

module.exports = { arrayKeySum }
