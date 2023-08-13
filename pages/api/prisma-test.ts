import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
 
const prisma = new PrismaClient();
 
export default async function prismaExample(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: 'Zezo Soares',
  //     email: 'zezo@example.com',
  //   }
  // })
 
  const users = await prisma.user.findMany();
  return response.status(200).json({ users });
}