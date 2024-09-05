import { prisma } from "../database";

interface UserProps {
  name: string;
  email: string;
  cpf: string;
}

export default {
  async create(data: UserProps) {
    const createUser = await prisma.usuario.create({
      data: {
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        status: true,
        first: true,
      },
    });

    return createUser;
  },

  async findByID(id: number) {
    const findedID = await prisma.usuario.findUnique({
      where: {
        id: id
      },
    });

    return findedID;
  },

 
};
