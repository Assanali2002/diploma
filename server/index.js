const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const bookRouter = require("./routes/books");
const userRouter = require("./routes/users");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/connect");
//middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
//routes
app.use("/api/users", userRouter);

app.use("/api/books", bookRouter);

app.get("/", (req, res) => {
  res.send("Hello its a Adilet's projects server side");
});

app.get("/api/images/:imageName", (req, res) => {
  const { imageName } = req.params;
  const url = path.join(__dirname, `/images/${imageName}.jpg`);
  res.sendFile(url);
});
app.get("/api/audio/:audioId", (req, res) => {
  const { audioId } = req.params;
  const url = path.join(__dirname, `/audio/${audioId}.mp3`);
  res.sendFile(url);
});

port = process.env.PORT || 8080;

//start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
