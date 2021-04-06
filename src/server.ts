import express, { response } from "express";

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hell Galera' });
});

app.listen(3333, () => {
  console.log('👽Server started');
});
