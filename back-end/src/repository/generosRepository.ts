import { prisma } from "../database";

interface UserProps {
    genero: string;
  }

export default {
  async create(data: UserProps) {
    const createGenero = await prisma.generos.create({
      data: {
        genero: data.genero,
      },
    });

    return createGenero;
  },

 
};
