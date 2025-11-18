const express = require("express");
const cors = require("cors");
const { db_connect } = require("./database/DB");
const dotenv = require("dotenv");
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 8000;



db_connect();

app.use("/api/testimonials",require("./routes/testimonialRoute"));
app.use("/api/about",require("./routes/aboutRoute"));
app.use("/api/getServices",require("./routes/servicesRoutes"));
app.use("/api/getGallery",require("./routes/galleryRoute"));
app.use("/api/quote",require("./routes/quoteRoutes"));
app.use("/api/financing",require("./routes/financingRoutes"));
app.use("/api/projects",require("./routes/projectRoutes"));




app.listen(PORT,()=>console.log("server is running on port 1000"))

