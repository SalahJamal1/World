export const formatdate = (date) => {
  const x = new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
    day: "2-digit",
  }).format(new Date(date));
  return x;
};
