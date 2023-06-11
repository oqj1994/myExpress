const app = require(`.\\app`);
const port = 8080;
app.listen(port, 'localhost', () => {
  console.log(`App running on port ${port}`);
});
