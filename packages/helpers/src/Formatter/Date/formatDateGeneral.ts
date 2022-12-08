/**
 * Format general date
 * @param {string} param, ex: '2020-01-01'
 * @returns formatted date, ex: 1 Januari 2020
 */

export const formatDateGeneral = (param: string) => {
  const dateObj = new Date(param)
  const date = dateObj.getDate()
  let month = dateObj.getMonth() as any
  const year = dateObj.getFullYear()

  switch (month) {
    case 0:
      month = 'Januari'
      break
    case 1:
      month = 'Februari'
      break
    case 2:
      month = 'Maret'
      break
    case 3:
      month = 'April'
      break
    case 4:
      month = 'Mei'
      break
    case 5:
      month = 'Juni'
      break
    case 6:
      month = 'Juli'
      break
    case 7:
      month = 'Agustus'
      break
    case 8:
      month = 'September'
      break
    case 9:
      month = 'Oktober'
      break
    case 10:
      month = 'November'
      break
    case 11:
      month = 'Desember'
      break
    default:
      return null
  }

  return `${date} ${month} ${year}`
}
