let express = require("express");

let app = express();
let port = process.env.PORT || 3000;

app.listen(port, () => { 
    console.log(`Server is running on port: ${port}`);
    
});

module.export = app;