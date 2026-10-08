import express from "express";

const app = express();

const PORT = 3000;
const HOST = "localhost" || "127.0.0.1";

app.get("/", (req, res, next) => {
  res.send("hello from server");
});

app.listen(PORT, HOST, () => {
  console.log(`server is running at port ${PORT}`);
});
