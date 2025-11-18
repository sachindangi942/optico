const express = require("express");
const cors = require("cors");
const { db_connect } = require("./database/DB");


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



db_connect();

app.use("/api/testimonials",require("./routes/testimonialRoute"));
app.use("/api/about",require("./routes/aboutRoute"));
app.use("/api/getServices",require("./routes/servicesRoutes"));
app.use("/api/getGallery",require("./routes/galleryRoute"));
app.use("/api/quote",require("./routes/quoteRoutes"));
app.use("/api/financing",require("./routes/financingRoutes"));
app.use("/api/projects",require("./routes/projectRoutes"));




app.listen(1000,()=>console.log("server is running on port 1000"))

