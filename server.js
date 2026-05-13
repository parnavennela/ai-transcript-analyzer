const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/analyze", async (req, res) => {
  const { transcript } = req.body;

  const result = {
    score: 7,
    evidence: [
      "Worked well with team",
      "Completed assigned tasks"
    ],
    gaps: [
      "Leadership not mentioned",
      "No systems thinking evidence"
    ]
  };

  res.json(result);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});