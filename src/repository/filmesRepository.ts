import { prisma } from "../database";

interface UserProps {
  nome: string;
  generoId: number;
  duracao: string;
}

export default {
  async create(data: UserProps) {
    const createFilme = await prisma.filmes.create({
      data: {
        nome: data.nome,
        generoId: data.generoId,
        duracao: data.duracao,
      },
    });

    return createFilme;
  },

  async findByID(id: number) {
    const findedID = await prisma.filmes.findUnique({
      where: {
        id: id
      },
    });

    return findedID;
  },
 
};
