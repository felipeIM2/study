import { Html } from "next/document";
import Link from "next/link";
import React from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";



export default function Index() {
  


  return (
   <>
     <div className="border-4 border-zinc-500 mt-[30px] w-[200px] absolute left-[40%] p-[15px]">
       <form method="post" action="/api/register" className="flex flex-col items-center ">
        <Link href="/login"><button className="mb-[5px]">Login</button></Link>  
        <Link href="/registrar"><button className="mb-[5px]">Registrar</button></Link>
        <Link href="/remail"><button className="mb-[5px]">Alterar email</button></Link>    
        </form>
     </div>
   </>
  );
}
