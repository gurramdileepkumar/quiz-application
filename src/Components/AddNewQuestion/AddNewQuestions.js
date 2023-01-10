import React,{ useState } from 'react'
import Button from '../UI/Button'
import NewQuestionForm from './NewQuestionForm'
import classes from './AddNewQuestions.module.css';

const AddNewQuestions = (props) => {
    const [isEditable,setIsEditable]= useState(false);
    const startEditingHandler=()=>{
        setIsEditable(true);
      }
      const stopEditingHandler=()=>{
        setIsEditable(false);
      }
      const saveQuestionDataHandler=(entryQuestion,index)=>{
        const questionData={
         ...entryQuestion,
         id:Math.floor(Math.random()*100).toString(),
        };
        props.onAddData(questionData);
        console.log(questionData);
        setIsEditable(false);
}
  return (
    <React.Fragment>
        {!isEditable && (<Button onClick={startEditingHandler}>Add Question</Button>)}
        {isEditable && (<NewQuestionForm onCancel={stopEditingHandler} onSaveQuestionData={saveQuestionDataHandler}/>)}
   </React.Fragment>
  )
}

export default AddNewQuestions
