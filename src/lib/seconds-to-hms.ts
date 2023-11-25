export const secondsToHms = (d: number) => {
  d = Number(d);
  const hour = Math.floor(d / 3600);
  const minute = Math.floor((d % 3600) / 60);
  const second = Math.floor((d % 3600) % 60);

  return `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
};
