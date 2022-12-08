/**
 *
 * @param {int} value
 * @returns formatted IDR currency, example: Rp 175.000,00
 */
export const formatIDR = (value: number) => {
  return value?.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
}
