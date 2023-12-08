import express from "express";
import {
  deleteTask,
  getMytask,
  newTast,
  updateTask,
} from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// add Task
router.post("/new", isAuthenticated, newTast);

// all Task
router.get("/my", isAuthenticated, getMytask);

// Edit Task &&  Delete Task
router
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default router;
