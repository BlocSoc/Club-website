//-----------------------------Connecting to db-----------------------------------
global.dbData = require('./db')(function call(err, data, CatData) {
  if(err) console.log(err);
  global.dbData = data;
  global.dbCategory = CatData;
})

//------------------------------------IMPORTING HEADERS----------------------------
const express = require('express')
const app = express()

const port = 5000

//----------------------------------APP USE STATEMENTS------------------------------

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())



//-----------------------------ROUTES-----------------------------------
app.get('/', (req, res) => {
  res.send('Server up and Running!')
})
app.use('/api/auth', require('./Routes/Auth'));
app.use('/api/blog', require('./Routes/Blog'));


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

