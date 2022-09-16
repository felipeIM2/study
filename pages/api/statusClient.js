import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {

  const prisma = new PrismaClient(); 


  // const clientData = await prisma.client.create({
  //   data:{
  //       nome: req.body.nome,
  //        telefone: req.body.number
  //   }
  // })
    const dados = await prisma.client.findMany();
      console.log(dados)



 res.status(200).json(dados)
}