export const generateInvoiceId = (executive) => {
  const currentDate = new Date()
  const year = currentDate.getFullYear().toString().substr(-2)
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
  const day = currentDate.getDate().toString().padStart(2, '0')
  const hour = currentDate.getHours().toString().padStart(2, '0')
  const minute = currentDate.getMinutes().toString().padStart(2, '0')
  const formattedDate = day + month + year + hour + minute

  const nameWords = executive.split(' ')
  const userInitials = `EXE-${nameWords[1]}`

  const uniqueId = formattedDate + userInitials

  return uniqueId
}
