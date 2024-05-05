import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { CreateSuperDto, UpdateSuperDto } from "../dtos/supers.dto";

const prisma = new PrismaClient;

class SupersService {
  async findAll() {
    const supers = await prisma.super.findMany();
    return supers;
  };

  async findOne(id: string) {
    try {
      const supers = await prisma.super.findUnique({
        where: { id }
      });
      return supers;
    } catch {
      return '';
    };
  };

  async create(dto: z.infer<typeof CreateSuperDto>) {
    const newSuper = await prisma.super.create({ data: dto });
    return newSuper;
  };

  async update(id: string, dto: z.infer<typeof UpdateSuperDto>) {
    try {
      const newSuperData = await prisma.super.update({
        where: { id },
        data: dto
      });
      return newSuperData;
    } catch {
      return '';
    };
  };

  async delete(id: string) {
    try {
      const deleted = await prisma.super.delete({
        where: { id }
      });
      return deleted;
    } catch {
      return '';
    };
  };

};

export default new SupersService();
