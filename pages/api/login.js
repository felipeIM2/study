import { PrismaClient } from "@prisma/client";
import axios from "axios";
 

export default async function handler(req, res) {

  const prisma = new PrismaClient();
    
      const consult = await prisma.user.findUnique({
        where:{
          email: req.body.email,
        }
      })
      if (consult.senha == req.body.senha) {
        console.log(consult)
        res.status(200).end()
      }
      
 res.status(401).end()
}


