const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export function formatDate(date: string) {
  const d = new Date(date)
  return (
    (d.getHours() % 12 || 12) +
    ':' +
    String('00' + d.getMinutes()).slice(-2) +
    ' ' +
    (d.getHours() < 12 ? 'AM' : 'PM') +
    ' · ' +
    months[d.getMonth()] +
    ' ' +
    d.getDate() +
    ', ' +
    d.getFullYear()
  )
}
