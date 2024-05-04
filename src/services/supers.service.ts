import { PrismaClient, Super } from "@prisma/client";

const prisma = new PrismaClient;

class SupersService {
  async findAll() {
    const supers = await prisma.super.findMany();
    return supers;
  };

  async findOne(superId: string) {
    const supers = await prisma.super.findMany({
      where: {
        id: superId
      }
    });
    return supers;
  };

  async create(dto: Super) {
    const newSuper = await prisma.super.create({ data: dto });
    return newSuper;
  };

  async update(superId: string, dto: Super) {
    const newSuperData = await prisma.super.update({
      where: {
        id: superId
      },
      data: dto
    });

    return newSuperData;
  };

  async delete(superId: string) {
    const deleted = await prisma.super.delete({
      where: {
        id: superId
      }
    });
    return deleted;
  };

};

export default new SupersService();
