const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Web Topup Kamu Sudah Live 🔥");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server jalan di port " + PORT);
});
