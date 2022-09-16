// import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";



export default function Index(){
 
  const { register, handleSubmit } = useForm();
   const login = data => axios.post('/api/login', data)  
    .then(function () {
      location = '/login/home';
    })
    .catch(function (error) {
      console.log(error);

        alert('Usuário não encontrado');
        
          var confirm = window.confirm('Deseja se cadastrar?');
            if (confirm == true){
              location = '/registrar';
            }else{
              location = '/';
            }
    });


 return(
   <>
    <div>
     <form method="post" className="flex flex-col items-center mt-[50px] " onSubmit={handleSubmit(login)}>
         <h1>área login</h1>
        <input type="email" placeholder="email" className="border border-zinc-900 w-[200px] text-center" {...register("email")} />
        <input type="password" placeholder="senha" className=" flex-none border border-zinc-900 w-[200px] text-center" {...register("senha")}/>
        <button className="mt-[5px]">Entrar</button>
        <Link href="/"><button className="mt-[5px]">Cancelar</button></Link>
      </form>
    </div>
   </>
 ); 
} 