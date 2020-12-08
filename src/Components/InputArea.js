import React from 'react';
import  { useForm } from "react-hook-form";

export default function InputArea() {
    return (
        <form>
            <input type="text" placeholder="Item" name="email"/>
            <input type="password" placeholder="Value" name="password"/>
            <input type="submit"/>
        </form>
    );
}