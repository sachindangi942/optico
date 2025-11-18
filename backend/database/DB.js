const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.DBURL;
const dbname = process.env.DBNAME;

const db_connect = async()=>{
    try {
        await mongoose.connect(`${url}/${dbname}`);
        console.log("db successfully connected");
    } catch (error) {
        console.log("db connection unsuccess",error);
    }
}

module.exports = {db_connect}