import { User } from "@prisma/client"
import { prisma } from "../db/client.js"

const createUser = async (user: User) => {
  const res = await prisma.user.create({
    data: user
  });

  return res;
}

export {
  createUser,
}