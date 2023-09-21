//-----------------------------Connecting to db-----------------------------------
global.dbData = require('./db')(function call(err, data, CatData) {
  if(err) console.log(err);
  global.dbData = data;
  global.dbCategory = CatData;
})

//------------------------------------IMPORTING HEADERS----------------------------
const express = require('express')
const { swaggerServe, swaggerSetup } = require('./config/swaggerConfig')

const app = express()
const port = 5000
app.use("/api-docs", swaggerServe, swaggerSetup); 

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


// const options = {
//   definition: {
//     openai:'3.0.0',
//     info: {
//       title:"BlocSoc Backend Documentation",
//       version:"1.0.0"
//     },
//     servers:[
//       {
//         api:"http://localhost:5000/"
//       }
//     ]
//   },
//   apis: ["./routes/*.js"],
// }

// const specs = swaggerJSDoc(options);
// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(specs)
// );



//-----------------------------ROUTES-----------------------------------
app.get('/', (req, res) => {
  res.send('Server up and Running!')
})
app.use('/api/auth', require('./Routes/Auth'));
app.use('/api/blog', require('./Routes/Blog'));
app.use('/api/events', require('./Routes/Event.js'));


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

