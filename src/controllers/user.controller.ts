import { Prisma, User } from "@prisma/client"
import { prisma } from "../db/client.js"

export default class UserController {
  
  async create(user: Prisma.UserCreateInput) {
    const createdUser = await prisma.user.create({
      data: user
    })

    return createdUser
  }

  async update(user: User) {
    const updatedUser = await prisma.user.update({
      where: {
        id: user.id
      },
      data: user
    })

    return updatedUser
  }

  async delete(id: string) {
    const deletedUser = await prisma.user.delete({
      where: {
        id
      }
    })

    return deletedUser
  }

  findOne(
    productWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return prisma.user.findUnique({
      where: productWhereUniqueInput,
    });
  }
  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }) {
    const users = await prisma.user.findMany(params)

    return users
  }
}