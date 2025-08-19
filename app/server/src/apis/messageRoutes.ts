// app/server/src/api/messageRoutes.ts
import { Router } from "express";
import { handleIncomingMessage } from "../services/messageService";

const messagerouter = Router();

// POST /api/messages
messagerouter.post("/", async (req, res) => {
  try {
    const result = await handleIncomingMessage(req.body);
    res.json(result);
  } catch (err) {
    console.error("Error handling message:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default messagerouter;
