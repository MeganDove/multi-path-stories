import express from 'express';
// import path, {dirname} from 'path';

import router from './routes/sentences.js'
 
const app = express();

// const __dirname = path.resolve();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "src/views") //sets the views directory
app.set("view engine", "hbs") //uses the handlebars view engine

app.use('/', router);

const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log(`Server Running on Port: http://localhost:${PORT}`));