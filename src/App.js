import * as React from "react"
import {useForm} from "react-hook-form";
import './App.css';

export default function App(){
  const {register, handleSubmit,formState: { errors }} = useForm();
  const onSubmit=(data)=>console.log(data)
 

   return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstname",{required:true,maxLength:20,pattern:/^[A-Za-z]+$/i})} />
      {errors?.firstname?.type==="required"&&<p>this field is required</p>}
      {errors?.firstname?.type==="maxLength"&&(<p>First Name Cannot Exceed 20 charecters</p>)}
      {errors?.firstname?.type==="pattern"&&(<p>Alphabetical charecters only</p>)}
      <label>Last Name</label>
      <input {...register("lastname",{pattern:/^[A-Za-z]+$/i})} />
      {errors?.lastname?.type==="pattern"&&(<p>Alphabetical charecters only</p>)}
      <label>Age</label>
      <input {...register("age",{min:18, max:99})} />
      {errors.age&&(<p>You Must be older then 18 and younger then 99 years old</p>)}

      <input type="submit"/>

    </form>
   );

}