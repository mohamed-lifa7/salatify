export const convertToSeconds = (time?: string) => {
  const array = time?.split(":") ?? [];
  const seconds =
    parseInt(array[0]!, 10) * 60 * 60 +
    parseInt(array[1]!, 10) * 60 +
    (array[2] ? parseInt(array[2], 10) : 0);
  return seconds;
};
