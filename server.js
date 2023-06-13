const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require(`./app`);

dotenv.config({ path: `${__dirname}/config.env` });

mongoose
  .connect(process.env.LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 8080;
app.listen(port, 'localhost', () => {
  console.log(`running on ${process.env.NODE_ENV}:${port}`);
});
