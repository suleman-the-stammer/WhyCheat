const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017') .then(async () => {
    console.log(
      `Database Connected`
    )
      
  })
  .catch((err) =>  console.log(`Database Connection error`, err));

