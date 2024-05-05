import { NextFunction, Request, Response } from "express";
import { Schema, ZodError } from "zod";

const validateDto = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.safeParse(req.body);
      next();
    } catch(error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Erro de validação",
          error: error.errors
        });
      } else {
        next(error)
      };
    };
  };
};

export default validateDto;
