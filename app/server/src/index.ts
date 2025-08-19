import express from "express";
import bodyParser from "body-parser";
import messagerouter from "./apis/messageRoutes";

const app = express();
app.use(bodyParser.json());

// Register API routes
app.use("/api/messages", messagerouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
