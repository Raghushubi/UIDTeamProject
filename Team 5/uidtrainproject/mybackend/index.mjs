import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.post("/getData", (req, res) => {
  const { fromStation, toStation, date } = req.body;
  res.send("Data received!");
});

app.get("/getData", (req, res) => {
  res.send("");
});

app.listen(5000, () => console.log("app is running"));