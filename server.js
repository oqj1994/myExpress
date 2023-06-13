const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: `${__dirname}/config.env` });

// const DB = process.env.CONNECT_STRING.replace(
//   '<PASSWORD>',
//   process.env.PASSWORD
// );

mongoose
  .connect(process.env.LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log('DB connection successful!'));

const app = require(`./app`);
const port = process.env.PORT || 8080;
app.listen(port, 'localhost', () => {
  console.log(`running on ${process.env.NODE_ENV}:${port}`);
});
