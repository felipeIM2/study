import style from '/styles/Home.module.css'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';


export default function Home(){

 const sair = () => location = "/";
 const [myClient, setClient] = useState([])

 const { register, handleSubmit } = useForm();
  const onSubmit = async data =>  axios.post('/api/statusClient', data).then(function(){
  console.log(data)
  })


return(
  <>
 <button type='submit' className={style.b} onClick={sair}>Sair</button>
   <div>
     <form onSubmit={handleSubmit(onSubmit)} className='border-4 border-zinc-500 flex flex-col items-center mt-[20px] absolute p-[20px] left-[40%]'> 
          <h1>Contato-Clientes</h1>
        <input {...register("nome")} className={style.input} placeholder='Nome' type="text" id='value'/>
        <input {...register("email")} className={style.input} placeholder='Email' type="email" id='value'/>
        <input {...register("number")} className={style.input} placeholder='Telefone' type="number" id='value'/>
        <button type='submit' className={style.btn}>Enviar</button>
      </form>  
   </div>
   <div>
    <table>
      <tbody className='absolute left-[37%] top-[35%] flex flex-col text-center'>
        <tr>
          <td className={style.data}>Dados</td>
        </tr>
        <tr>
          <td className={style.td}>Nome</td>
          <td className={style.td}>Email</td>
          <td className={style.td}>Telefone</td>
        </tr>
      </tbody>
    </table>
   </div>

  <div className='absolute left-[37%] top-[43.6%] flex flex-col text-center'>
    <p className={style.td}>{myClient}</p>
  </div>
  </> 
 )
}
