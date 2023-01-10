import React from 'react';

const CartContext=React.createContext({
    question:[],
    addQuestions:(question)=>{},
    removeQuestions:(id)=>{},
    removeAllQuestions:()=>{}
})



export default CartContext;
