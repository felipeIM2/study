import { PrismaClient } from "@prisma/client";
import { email } from "autoprefixer";

export default async function handler(req, res) {
    
    const prisma = new PrismaClient();

    const email = req.body;
      const post = await prisma.user.update({
        where:{
          email:email.email,
        },
          data: {
            email:email.text,
          }
      });

        if (email) {
          res.status(200).end()
        }
}


  


