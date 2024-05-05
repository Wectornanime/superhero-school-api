import { PrismaClient, Super } from "@prisma/client";

const prisma = new PrismaClient;

class SupersService {
  async findAll() {
    const supers = await prisma.super.findMany();
    return supers;
  };

  async findOne(id: string) {
    const supers = await prisma.super.findUnique({
      where: { id }
    });
    return supers;
  };

  async create(dto: Super) {
    const newSuper = await prisma.super.create({ data: dto });
    return newSuper;
  };

  async update(id: string, dto: Super) {
    const newSuperData = await prisma.super.update({
      where: { id },
      data: dto
    });

    return newSuperData;
  };

  async delete(id: string) {
    const deleted = await prisma.super.delete({
      where: { id }
    });
    return deleted;
  };

};

export default new SupersService();
