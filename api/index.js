const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT, (err) => {
  if (err) return console.log(err);
  console.log('Server running on http://localhost:3001');
});
