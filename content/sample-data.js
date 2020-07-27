module.exports = {
  recipient: {
    gender: "male",
    title: "Herr",
    firstName: "Max",
    lastName: "Mustermann",
    street: "Musterstr. 5",
    postcode: 555555,
    city: "Musterstadt",
  },
  sender: {
    businessDescription: "I do stuff with computers",
    firstName: "Joseph C.",
    lastName: "Harrison",
    street: "Fakestreet",
    postcode: 222222,
    city: "Fake City",
  },
  contact: {
    mobile: "0123/123456789",
    email: "placeholder@email.com",
    taxNumber: "1234567890",
  },
  bankInfo: {
    accountOwner: "Joseph Harrison",
    accountNumber: "12345678",
    blz: "123456789",
    iban: "XX12 1234 1234 1234 12",
    bic: "ABCDEFG0ABC",
  },
  invoice: {
    id: "xx12341234",
    introduction:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    closing:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  items: [
    {
      date: "07/2020",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
      amount: 3,
      perUnit: 300.4,
    },
    {
      date: "07/2020",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
      amount: 2,
      perUnit: 300.4,
    },
  ],
};
