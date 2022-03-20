import express from 'express';
import { CreateCourse } from './routes';

const app = express();

app.get("/", CreateCourse);

// app.get("/", (request, response) => {
//   return response.json({ message: "Hello World" })
// })

app.listen(3333);