import { useForm } from "react-hook-form"
import axios from "axios";
import { email } from "autoprefixer";
import Link from "next/link";

export default function Index() {

  const { register, handleSubmit } = useForm();
  const reValue = (email) => axios.post('/api/remail', email)
    .then(function () {
      location = '/';
    })
    .catch(function () {
      alert('Preencha todos os campos!');
     }) 

  return (
    <>
      <div>
        <form className="flex flex-col items-center mt-[20px]" onSubmit={handleSubmit(reValue)}>
          <h1>Altere seu email aqui:</h1>
        <input placeholder="email atual" className="flex w-[200px] border border-zinc-900 text-center" {...register("email")}/>
        <input placeholder="novo email" className="flex w-[200px] border border-zinc-900 text-center" {...register("text")}/>
        <button type="submit" className="mt-[5px]">Enviar</button>
        <Link href="/"><button className="mt-[5px]">Cancelar</button></Link>  
        </form>
      </div>
    </>
  );
}
