/**
 * Format date
 * @date formatted date, today
 * @start_date formatted date, ex: Tue Nov 01 2022 00:00:00 GMT+0700 (Western Indonesia Time)
 * @formatted date, ex: Wed Nov 30 2022 00:00:00 GMT+0700 (Western Indonesia Time)
 * @returns { start_date, end_date }
 */

export const formatCurrentMonth = () => {
  const date = new Date() // today
  const year = date.getFullYear() // returns a four-digit number representing the year of a given date
  const month = date.getMonth() // returns an integer between 0 (January) and 11 (December) and represents the month of a given date
  return { start_date: new Date(year, month, 1), end_date: new Date(year, month + 1, 0) }
}
