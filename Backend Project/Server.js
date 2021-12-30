const app = require("./index");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

const password = process.env.PASSWORD;
const DB = process.env.DATABASE.replace("<PASSWORD>", password);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log(
      `MongoDB is connected Successfully on port: ${data.connection.port}`
    );
  })
  .catch((err) => {
    console.log(`${err}`);
  });

// mongoose Schema

// const TourSchema = new mongoose.Schema({
//   name:{
//     type: String,
//     required:[true,'A tour must have a Name'],
//     unique:true
//   },
//   rating:{
//     type:Number,
//     default:4.5,
//   },
//   price:{
//     type:Number,
//     required:true
//   }
// })

// // Object Model
// const Tour = mongoose.model('Tour', TourSchema)

// const testTour = new Tour({
//   name: "The Forest Hikker",
//   rating: 4.5,
//   price: 140
// })

// testTour.save().then(doc=>{
//   console.log(doc)
// }).catch((err)=>{
//   console.log(err)
// })

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is Starting on PORT ${port}`);
});
