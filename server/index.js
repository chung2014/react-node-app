const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const tiers = [
  {
    title: "Standard",
    price: "0",
    details: [
      ["general", true],
      ["specialist", false],
      ["physiotherapy", false],
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Premium",
    price: "388",
    details: [
      ["general", true],
      ["specialist", true],
      ["physiotherapy", true],
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
];

app.get("/api/plans", (req, res) => {
  res.json(tiers);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
