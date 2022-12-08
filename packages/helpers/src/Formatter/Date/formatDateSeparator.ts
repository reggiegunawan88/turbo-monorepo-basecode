/**
 * Format Indonesian date
 * @param {string | Date} param, ex: '2020-01-01', 'new Date()'
 * @param {string} separator, ex: '/' or '-'
 * @returns separator is '/' and reverse is false will be return '01/01/2020'
 * @returns separator is '/' and reverse is true will be return '2020/01/01'
 * @returns separator is '-' and reverse is false will be return '01-01-2020'
 * @returns separator is '-' and reverse is true will be return '2020-01-01'
 */

interface IFormatDateSeparator {
  param: string | Date
  separator?: string
  reverse?: boolean
}

export const formatDateSeparator = ({ param, separator = '/', reverse }: IFormatDateSeparator) => {
  const dateObj = new Date(param)
  const date = dateObj.getDate()
  const month = dateObj.getMonth() + 1
  const year = dateObj.getFullYear()
  const slashDate = `${date < 10 ? `0${date}` : date}${separator}${month < 10 ? `0${month}` : month}${separator}${year}`
  if (reverse) return slashDate.split(separator).reverse().join(separator)
  return slashDate
}
