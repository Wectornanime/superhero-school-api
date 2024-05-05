import { Router, Request, Response, NextFunction } from "express";
import supersController from "./controllers/supers.controller";
import validateDto from "./middlewares/validateDto.middleware";
import { CreateSuperDto, UpdateSuperDto } from "./dtos/supers.dto";

const router = Router();

//Supers
router.get("/supers", supersController.getAllSuper);
router.get("/supers/:id", supersController.getSuperById);
router.post("/supers", validateDto(CreateSuperDto), supersController.createSuper);
router.put("/supers/:id", validateDto(UpdateSuperDto), supersController.updateSuper);
router.delete("/supers/:id", supersController.deleteSuper);

router.use((req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({message: "Rota não encontrada"});
});

export default router;
