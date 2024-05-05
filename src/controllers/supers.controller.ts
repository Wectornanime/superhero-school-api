import { Request, Response } from "express";
import supersService from "../services/supers.service";

class SupersController {
  async getAllSuper(req: Request, res: Response) {
    const supers = await supersService.findAll();
    return res.json(supers);
  };

  async getSuperById(req: Request, res: Response) {
    const superId = req.params.id;
    const supers = await supersService.findOne(superId);

    if (!supers) {
      return res.status(204).json({message: "Super não encontrado" });
    };

    return res.json(supers);
  };

  async createSuper(req: Request, res: Response) {
    const body = req.body;
    const newSuper = await supersService.create(body);
    return res.status(201).json(newSuper);
  };

  async updateSuper(req: Request, res: Response) {
    const body = req.body;
    const superId = req.params.id;
    const supers = await supersService.update(superId, body);

    if (!supers) {
      return res.status(400).json({message: "Super não encontrado" });
    };

    return res.json(supers);
  };

  async deleteSuper(req: Request, res: Response) {
    const superId = req.params.id;
    const supers = await supersService.delete(superId);

    if (!supers) {
      return res.status(400).json({message: "Super não encontrado" });
    };

    return res.status(204).json(supers);
  };
};

export default new SupersController();
