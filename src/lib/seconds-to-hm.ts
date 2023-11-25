export const secondsToHm = (d: number) => {
  d = Number(d);
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);

  const shortHour = h % 12 || 12;

  const dateDisplay = `${shortHour < 10 ? `0${shortHour}` : `${shortHour}`}:${m < 10 ? `0${m}` : `${m}`} ${
    h <= 12 ? 'AM' : 'PM'
  }`;
  return dateDisplay;
};
