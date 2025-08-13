let express = require("express");
let mongoose = require("mongoose");
const bodyParser = require("body-parser");

let app = express();
let port = process.env.PORT || 3000;
let portDB = process.env.PORT_DB || 27017;
let hostDB = process.env.HOST_DB || '//localhost';
let DBName = process.env.DB_NAME || 'tienda';

const clienteRoutes = require('./routes/cliente');
const usuarioRoutes = require('./routes/usuario');

async function connectToDatabase() {
  try {
    await mongoose.connect(`mongodb:${hostDB}:${portDB}/${DBName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('MongoDB connection error: ', error);
  }
}
connectToDatabase();

app.listen(port, () => { 
    console.log(`Server is running on port: ${port}`);    
});

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api', clienteRoutes);
app.use('/api', usuarioRoutes);


module.export = app;