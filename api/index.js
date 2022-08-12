const app = require('./app');
const { sequelize } = require('./db');
require('dotenv').config();

sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, (err) => {
    if (err) return console.log(err);
    console.log('Server running on http://localhost:3001');
  });
}).catch((err) => console.log(err));
