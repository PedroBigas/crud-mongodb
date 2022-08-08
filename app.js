const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')
const mongoose = require('mongoose');

const linkRoute = require('./routes/linkRoute')


mongoose.connect('mongodb://localhost/newlink');


let db = mongoose.connection;

db.on("error", () => {console.log("Ouve um erro");})

db.once("open", () => {console.log(db);})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoute)

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`))






// comentários








// ----------- { Conectando com callback } ----------------- 

// mongoose.connect('mongodb://localhost/blog', (err,db) => {
//         console.log(err);
//         console.log(db);
// })

// ----------- { Conectando com Promise} ----------------- 

// mongoose.connect('mongodb://localhost/blog').then(db => {
//     console.log(db);
// }).catch(err => {
//     console.log(err);
// })