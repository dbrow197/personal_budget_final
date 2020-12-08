import React from 'react';


export default function InputArea() {

    return (
        <form>
            <input type="text" placeholder="Item" name="email"/>
            <input type="password" placeholder="Value" name="password"/>
            <input type="submit"/>
        </form>
    );
}