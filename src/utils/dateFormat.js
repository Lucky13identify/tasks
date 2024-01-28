export function formatBackendDate(date) {
  const backendDate = new Date(date);
  const day = backendDate.getDate();
  const month = backendDate.getMonth() + 1;
  const year = backendDate.getFullYear();

  const formattedDate = `${day < 10 ? '0' : ''}${day}.${
    month < 10 ? '0' : ''
  }${month}.${year}`;

  return formattedDate;
}
