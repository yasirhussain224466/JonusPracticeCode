const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Tour = require("../Models/TourModel");
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
const port = process.env.PORT
console.log(port)

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log(`Connection successfully`);
  })
  .catch((err) => {
    console.log(err);
  });

const readTours = JSON.parse(
  fs.readFileSync(`${__dirname}/SimpleTours.json`, "utf-8")
);

const importTour = async () => {
  try {
    await Tour.create(readTours);
    console.log("Data Successfully loaded");
  } catch (err) {
    console.log(err);
  }
};

const deleteTour = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data Successfully deleted");
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2]==='--importTour'){
  importTour()
}if(process.argv[2]=='--deleteTour'){
  deleteTour()
}


