// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import { infosUser } from "autoprefixer";

export default async function handler(req, res) {
  
  const infosUser  = req.body;
    const prisma = new PrismaClient();
      const newUser = await prisma.user.create({
        data: {
          nome: infosUser.nome,
          senha: infosUser.senha,
          email: infosUser.email,
        },
      });
      console.log(newUser);
      if (newUser !== '') {
        res.status(200).end();
      }
  res.status(500).end();
}




