const express = require('express');
const exphbs = require('express-handlebars');

const port = process.env.PORT || 3000;

//express config
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

//routes
const students = ['Jean', 'Binta', 'Agathe', 'Adil'];
app.get('/', (req, res) => {
  res.render('home', {
    THeStudents: students,
  });
});
app.post('/students/add', (req, res) => {
  console.log('POST/students/add');
  console.log('req.body', req.body);

  res.send('The new student has been added');
});
app.listen(port, () => {
  console.log(`Server starts on port:  ${port}`);
});
