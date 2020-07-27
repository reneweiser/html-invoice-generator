![Screenshot](https://raw.githubusercontent.com/reneweiser/html-invoice-generator/master/screenshot.png)

# html-invoice-generator

I originally created this project for personal use. But if I'm using Github to work on it, why not make it publically available. Maybe someone else will find it useful.

This project provides the markup for printable invoices which you can hydrate it with your own data using:

```bash
npm run build
```

## Getting started

Clone project

```bash
git clone https://github.com/reneweiser/html-invoice-generator.git
```

Download and install dependencies

```bash
npm install
```

Create your own data. You can use `content/sample-data.js` as a baseline.

And finally run `npm run build` to create the printable invoice in `dist`.
