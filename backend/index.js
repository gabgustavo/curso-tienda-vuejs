let express = require("express");
let mongoose = require("mongoose");

let app = express();
let port = process.env.PORT || 3000;
let portDB = process.env.PORT_DB || 27017;
let hostDB = process.env.HOST_DB || '//localhost';
let DBName = process.env.DB_NAME || 'tienda';

const clienteRoutes = require('./routes/cliente');

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

app.use('/api', clienteRoutes);


module.export = app;