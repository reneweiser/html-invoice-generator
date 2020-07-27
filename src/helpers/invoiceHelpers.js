const printCurrency = (value) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};

const printItemTotal = (amount, value) => {
  return printCurrency(amount * value);
};

const printInvoiceTotal = (items) => {
  return printCurrency(
    items.reduce((acc, curr) => acc + curr.amount * curr.perUnit, 0)
  );
};

const greeting = (recipient) => {
  return `Sehr ${recipient.gender == "female" ? "geehrte" : "geehrter"} ${
    recipient.title
  } ${recipient.lastName}`;
};

const printDate = () => {
  const date = new Date(Date.UTC(2020, 6, 27));
  return date.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

module.exports = {
  printCurrency,
  printItemTotal,
  printInvoiceTotal,
  greeting,
  printDate,
};
