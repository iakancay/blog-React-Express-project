export const measureTime = (date) => {
  const minutes = (Date.now() - new Date(date)) / 60000;

  if (Math.round(minutes) < 60) {
    return `${Math.round(minutes)} minutes ago`;
  } else if (Math.round(minutes) < 1440) {
    return `${Math.round(minutes / 60)} hours ago`;
  } else {
    return new Date(date).toDateString();
  }
};
