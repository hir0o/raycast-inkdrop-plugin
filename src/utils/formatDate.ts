export const zeroPadding = (num: number, length: number) => {
  return ("0".repeat(length) + num).slice(-length);
};

export const formatDate = (date: Date, format: string) => {
  const year = zeroPadding(date.getFullYear(), 4);
  const month = zeroPadding(date.getMonth() + 1, 2);
  const day = zeroPadding(date.getDate(), 2);
  const hour = zeroPadding(date.getHours(), 2);
  const minute = zeroPadding(date.getMinutes(), 2);
  const second = zeroPadding(date.getSeconds(), 2);

  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hour)
    .replace(/mm/g, minute)
    .replace(/ss/g, second);
};
