export const isToday = (date: Date) => {
  const today = new Date();
  return today.toDateString() === date.toDateString();
};

export const isYesterday = (date: Date) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return yesterday.toDateString() === date.toDateString();
};
