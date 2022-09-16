import { Html } from "next/document";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { data } from "autoprefixer";


export default function Index() {
  
  const { register, handleSubmit } = useForm();
  
    const newRegister = infosUser => axios.post('/api/register', infosUser)
    .then(function () {
    location = '/';
    })
    .catch(function (error) {
      console.log(error)
      alert('Preencha todos os campos!');
    }) 


  return (
    <div>
     <form method="post" className="flex flex-col items-center mt-[50px] " onSubmit={handleSubmit(newRegister)}>
      <h1>Faça um novo registro aqui:</h1>
      <input name="nome" type="text" placeholder="nome" className="border border-zinc-900 w-[200px] text-center" {...register("nome")} />
      <input name="email" type="email" placeholder="email" className="border border-zinc-900 w-[200px] text-center" {...register("email")} />
      <input name="senha" type="password" placeholder="senha" className=" flex-none border border-zinc-900 w-[200px] text-center" {...register("senha")}/>
      <button type="submit" className="mt-[5px]">Registrar</button>
      
      <Link href="/"><button className="mt-[5px]">Cancelar</button></Link>  
    </form>
   
    </div>
  );
}
