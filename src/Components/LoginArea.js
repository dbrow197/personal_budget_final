import * as React from 'react';
import { useForm } from "react-hook-form";

export default function LoginArea(){

   const { register, handleSubmit, errors } = useForm();
const onSubmit = data => {
    //todo: send this to server not to console
    console.log(data) 
};

    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
              type="text" 
              placeholder="Email" name="email" ref={register}/>
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              ref={register({required: "PASSWORD REQUIRED", 
              minLength: {value: 8, message: "Too Short"}})}
            />
           
            <input type="submit"/>
             {errors.password && <p>{errors.password.message}</p>}
        </form>
        </div>
    );
   
    }


