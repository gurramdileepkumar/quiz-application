import React, { useContext } from 'react'
import Card from '../UI/Card'
import CartContext from '../Store/CartContext'
import classes from './WrongQuestionItem.module.css';

const WrongQuestionItem = (props) => {
    const wrongAttempts=useContext(CartContext);
    const wrong=wrongAttempts.question.select;
    console.log(wrong);
    console.log(wrongAttempts.question);
    const removeQuestions=(id)=>{
     wrongAttempts.removeQuestions(id)
    }
  return (
    <>
        {wrongAttempts.question.map((item)=>{
          console.log(item.select);
            return(
            <Card className={classes.qTag}>
                <div key={item.id}>
                <div className={classes.m}>
                <div className={classes.question}>{item.q}</div>
                <div className={classes.trash} onClick={()=>removeQuestions(item.id)}><i class="fa fa-trash" aria-hidden="true"></i></div>
                </div>
                <div className={item.a === item.answer ? classes.rightQ:item.select === item.a?classes.wrongQ:classes.intialQ}>
                  {item.a}
                </div>
                <div className={item.b === item.answer?classes.rightQ:item.select === item.b?classes.wrongQ:classes.intialQ}
                >
                  {item.b}
                </div>
                <div className={item.c === item.answer?classes.rightQ:item.select === item.c?classes.wrongQ:classes.intialQ}
                >
                  {item.c}
                </div>
                <div className={item.d === item.answer?classes.rightQ:item.select === item.d?classes.wrongQ:classes.intialQ}
                >
                  {item.d}
                </div>
                <hr/>
                </div>
            </Card>
            )
        })}
    </>
  )
}

export default WrongQuestionItem
