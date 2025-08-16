// Express app entry point
const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

if (process.env.VERCEL) {
  module.exports = app;
}
