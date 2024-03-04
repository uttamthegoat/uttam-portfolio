import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import generateMail from "./utils/sendMail";
config();

// eslint-disable-next-line no-undef
const port = process.env.PORT;

const app = express();

const corsOptions = {
  // origin: "http://localhost:5173",
  origin: "https://uttamthegoat.netlify.app",
};

app.use(cors(corsOptions));
app.use(json());

app.get("/", (req, res) => {
  res.send("Welcome to BuyBox server!");
});

app.post("/send-email", (req, res) => {
  try {
    const { name, email, message } = req.body;
    generateMail(name, email, message);
    res.status(200).json({ success: true, message: "Mail successfully sent!" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ success: false, message: "Internal Server error" });
  }
});

app.listen(port, () => {
  console.log("Server running on port 5001");
});
