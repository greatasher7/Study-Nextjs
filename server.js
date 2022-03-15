const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
  return res.send("Responding from server!");
});

app.get("/api/getdata", (req, res) => {
  return res.json({
    ok: true,
    data: data,
  });
});

app.post("/api/postdata", (req, res) => {
  console.log("body", req.body);

  data.push(req.body);

  res.json({
    ok: true,
  });
});

app.listen(8000);

let data = [
  {
    id: 1,
    name: "one",
  },
  {
    id: 2,
    name: "two",
  },
  {
    id: 3,
    name: "three",
  },
];
