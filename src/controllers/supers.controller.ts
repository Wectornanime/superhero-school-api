import { Request, Response } from "express";

class SupersController {
  async getAllSuper(req: Request, res: Response) {
    res.json({messege: 'Retorna todos os Supers'});
  };

  async getSuperById(req: Request, res: Response) {
    res.json({messege: 'Retorna um Super'});
  };
  async createSuper(req: Request, res: Response) {
    res.json({messege: 'Cria um Super'});
  };
  async updateSuper(req: Request, res: Response) {
    res.json({messege: 'Atualiza um Super'});
  };
  async deleteSuper(req: Request, res: Response) {
    res.json({messege: 'Deleta um Super'});
  };
};

export default new SupersController();
