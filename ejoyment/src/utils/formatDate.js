export function formatDate(dateString) {
  const date = [dateString.slice(0, 4), dateString.slice(5, 7), dateString.slice(8, 10)];
  const event = new Date(Date.UTC(date[0], date[1], date[2]));
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return event.toLocaleDateString(undefined, options);
}