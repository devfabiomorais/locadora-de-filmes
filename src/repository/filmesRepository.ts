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

  async changeStatus(id: number, status: boolean) {
    const filmes = await prisma.filmes.update({
      where: {
        id: id,
      },
      data: {
        alugado: status,
      },
    });

    return filmes;
  },

  async findByDescription(description: string) {
    const achou = await prisma.filmes.findMany({
      where: {
        nome: {
          contains: description,
          mode: "insensitive",
        },
      },
    });

    return achou;
  },

  async encontrarAlugados() {
    const alugados = await prisma.filmes.findMany({
      where: {
        alugado : true
      },
    });

    return alugados;
  },
 
};
