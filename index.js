const app = require('./server/app');

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
