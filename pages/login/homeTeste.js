
import style from '/styles/Home.module.css'
import { createElement, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { data } from 'autoprefixer';


export default function Home(){

  const { register, handleSubmit } = useForm();

const ran = (num) => Math.random() * num;
 const fix = ran(100)

    const [myClient, setClient] = useState([{
      key: 0 ,
      nome: 'luis',
      tel: '0000000'
    },
    {
      key: 1,
      nome: 'luis',
      tel: '123123123'
    },])

  const onSubmit = async clientData =>  axios.post('/api/statusClient', clientData)
   .then((base) => {
   
     console.log(base.data)

     for (let clientBank of base.data) {
       
      setClient([...myClient,  {
        key: fix,
        nome: clientBank.nome,
        tel: clientBank.tel

      }]);
     }

  })     
  //.catch((error) => console.log(error))
     
  
return(
<>
  <form onSubmit={handleSubmit(onSubmit)} className='border-4 border-zinc-500 flex flex-col items-center mt-[20px] absolute p-[20px] left-[40%]'> 
    <input {...register("nome")} className={style.input} placeholder='Nome' type="text" id='value'/>
    <input {...register("number")} className={style.input} placeholder='Telefone' type="number" id='value'/>
    <button type='submit' className={style.btn} >Enviar</button>
  </form>  
  <table className='absolute left-[45%] top-[30%] flex flex-col text-center'>
    <tbody>
    {myClient.map((myClient)=>(
      <tr>
        <td className={style.td}>{myClient.nome}</td>
        <td className={style.td}>{myClient.tel}</td>
        {/* <td className={style.td}>{myClient.key}</td> */}
      </tr>
    ))}
    </tbody>
  </table>
</>      
 )
}