import express from "express";
import { getPublicCars } from "../controllers/UserController.js";

const publicRouter = express.Router();

publicRouter.get("/cars", getPublicCars);

export default publicRouter;
