export const measureTime = (date) => {
  const minutes = (Date.now() - new Date(date)) / 60000;
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();
  if (Math.round(minutes) < 60) {
    return `${Math.round(minutes)} minutes ago`;
  } else if (Math.round(minutes) < 1440) {
    return `${Math.round(minutes / 60)} hours ago`;
  } else {
    return `${day}/${month + 1}/${year}`;
  }
};
