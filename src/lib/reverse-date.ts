export const reverseDate = (date: string) => {
  return date.toString().split('-').reverse().join('-');
};
