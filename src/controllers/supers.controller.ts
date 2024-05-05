import { Request, Response } from "express";
import supersService from "../services/supers.service";
import { CreateSuperDto, UpdateSuperDto } from "../dtos/supers.dto";

class SupersController {
  async getAllSuper(req: Request, res: Response) {
    const supers = await supersService.findAll();
    return res.json(supers);
  };

  async getSuperById(req: Request, res: Response) {
    const superId = req.params.id;
    const supers = await supersService.findOne(superId);

    if (!supers) {
      return res.status(204).json({ message: "Super não encontrado" });
    };

    return res.json(supers);
  };

  async createSuper(req: Request, res: Response) {
    const parcedResult = CreateSuperDto.safeParse(req.body);

    if (!parcedResult.success) {
      return res.status(400).json({ message: parcedResult.error.issues });
    };

    const newSuper = await supersService.create(parcedResult.data);
    return res.status(201).json(newSuper);
  };

  async updateSuper(req: Request, res: Response) {
    const superId = req.params.id;
    const supers = await supersService.findOne(superId);
    const parcedResult = UpdateSuperDto.safeParse(req.body);

    if (!supers) {
      return res.status(400).json({ message: "Super não encontrado" });
    };

    if (!parcedResult.success) {
      return res.status(400).json({ message: parcedResult.error.issues });
    };

    const newSupers = await supersService.update(superId, parcedResult.data);
    return res.status(201).json(newSupers);
  };

  async deleteSuper(req: Request, res: Response) {
    const superId = req.params.id;
    const supers = await supersService.findOne(superId);

    if (!supers) {
      return res.status(400).json({ message: "Super não encontrado" });
    };
    await supersService.delete(superId);
    return res.status(204).json(supers);
  };
};

export default new SupersController();
