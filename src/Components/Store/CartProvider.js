import React,{ useReducer } from 'react'
import CartContext from './CartContext'

const intialState={
    question:[],
}


const QuestionItemReducer=(state,action)=>{
    if(action.type === "ADD"){
        let atteptedWrong = state.question.concat(action.question);
        return{
            question:atteptedWrong,
        }
    }
    if(action.type === "REMOVE"){
        let atteptedWrong=state.question.filter((item)=>item.id !== action.id);
        return{
            question:atteptedWrong,
        }
    }
    if(action.type === "REMOVEALL"){
        let atteptedWrong = [];
        return{
            question:atteptedWrong,
        }
    }
    return intialState;
}

const CartProvider = (props) => {
    const [questionState,dispatchQuestionAction]=useReducer(
        QuestionItemReducer,
        intialState
    )
    const addQuestionHandler=(question)=>{
        dispatchQuestionAction({type:"ADD",question:question});
    }
    const removeQuestionHandler=(id)=>{
        dispatchQuestionAction({type:"REMOVE",id:id});
    }
    const removeAllQuestionsHandler=()=>{
        dispatchQuestionAction({type:"REMOVEALL"});
    }
    const wrongQuestion={
        question:questionState.question,
        addQuestions:addQuestionHandler,
        removeQuestions:removeQuestionHandler,
        removeAllQuestions:removeAllQuestionsHandler,
    }
  return (
    <CartContext.Provider value={wrongQuestion}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
