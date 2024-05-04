import { Router } from "express";
import supersController from "./controllers/supers.controller";

const router = Router();

//Supers
router.get("/supers", supersController.getAllSuper);
router.get("/supers/:id", supersController.getSuperById);
router.post("/supers", supersController.createSuper);
router.put("/supers/:id", supersController.updateSuper);
router.delete("/supers/:id", supersController.deleteSuper);

export default router;
