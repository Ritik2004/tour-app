import express from "express";

const router = express.Router();

import { getTours, createTour } from "../controllers/tour.js";

router.post("/", createTour);
router.get("/", getTours);



export default router