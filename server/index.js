import express from "express";
import cors from "cors";

import generateReview from "./review.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/api/v1/reviews", async (req, res) => {
  const code = req.body.code;
  
  console.log("Received request with code length:", code?.length || 0);
  console.log("Request body:", req.body);

  try {
    if (!code || !code.trim()) {
      console.log("No code provided in request");
      return res.status(400).send({
        message: "No code provided",
      });
    }
    
    console.log("Generating review...");
    const review = await generateReview(code);
    console.log("Review generated, length:", review?.length || 0);
    console.log("Review preview:", review?.substring(0, 100) + "...");

    return res.send({
      review,
    });
  } catch (err) {
    console.error("Server error:", err);
    console.error("Error stack:", err.stack);
    return res.status(500).send({
      message: err.message || "Something went wrong",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
