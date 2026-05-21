const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");

const Insight = require("./models/DataModel");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const data = JSON.parse(
  fs.readFileSync("./data/jsondata.json", "utf-8")
);

const importData = async () => {
  try {
    await Insight.deleteMany();
    await Insight.insertMany(data);

    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();