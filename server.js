const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in /public as static assets
app.use(express.static(path.join(__dirname, "public")));

// Fallback: always serve the portfolio page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Jatelo Technologies portfolio running on port ${PORT}`);
});
