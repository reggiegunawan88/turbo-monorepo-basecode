/**
 * Format Indonesian date
 * @param {string} param, ex: '2020-01-01'
 * @returns formatted date, ex: Senin, 1 Januari 2020
 */

export const formatIndonesianDate = (param: string) => {
  const dateObj = new Date(param)
  let day = dateObj.getDay() as any
  const date = dateObj.getDate()
  let month = dateObj.getMonth() as any
  const year = dateObj.getFullYear()

  switch (day) {
    case 0:
      day = 'Minggu'
      break
    case 1:
      day = 'Senin'
      break
    case 2:
      day = 'Selasa'
      break
    case 3:
      day = 'Rabu'
      break
    case 4:
      day = 'Kamis'
      break
    case 5:
      day = 'Jumat'
      break
    case 6:
      day = 'Sabtu'
      break
    default:
      return null
  }

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
  const showIndonesianDate = `${day}, ${date} ${month} ${year}`
  return showIndonesianDate
}
