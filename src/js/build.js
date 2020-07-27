const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");
const helpers = require(path.resolve(
  __dirname,
  "../helpers/invoiceHelpers.js"
));
const paths = {
  source: path.resolve(__dirname, "../index.hbs"),
  dist: path.resolve(__dirname, "../../dist/index.html"),
  content: path.resolve(__dirname, "../../content/sample-data.js"),
};

Handlebars.registerHelper("printCurrency", helpers.printCurrency);
Handlebars.registerHelper("printItemTotal", helpers.printItemTotal);
Handlebars.registerHelper("printInvoiceTotal", helpers.printInvoiceTotal);
Handlebars.registerHelper("greeting", helpers.greeting);
Handlebars.registerHelper("printDate", helpers.printDate);

const source = fs.readFileSync(paths.source, { encoding: "utf-8" });
const template = Handlebars.compile(source);
const data = require(paths.content);

fs.writeFile(paths.dist, template(data), (err) => {
  if (err) throw err;
  console.log("The template has been saved!");
});
