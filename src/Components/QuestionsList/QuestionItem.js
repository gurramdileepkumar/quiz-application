import React, { useContext } from 'react'
import Card from '../UI/Card';
import classes from './QuestionItem.module.css';
import CartContext from '../Store/CartContext';

const QuestionItem = (props) => {
  const wrongQ=useContext(CartContext);
    const {q,a,b,c,d,answer}=props.question;
    const answerHandler=(ans)=>{
      props.answerSubmit(ans,answer);
      if(ans !== answer){
        console.log(props.question);
        wrongQ.addQuestions({...props.question,select:ans});
      } 
    }
    // console.log(props.question.select);
   
  return (
    <Card>
    <div className={classes.controls}>
        <div>
          <p>{q}</p>
        </div>
        <div>
          <input type="radio" name={answer} id="a"  onClick={()=>answerHandler(a)}/>
          <label htmlFor="a">{a}</label>
        </div>
        <div>
           <input type="radio" name={answer} id="b" onClick={()=>answerHandler(b)}/>
          <label htmlFor="b">{b}</label>
        </div>
        <div>
          <input type="radio" name={answer} id="c" onClick={()=>answerHandler(c)}/>
          <label htmlFor="c">{c}</label>
        </div>
        <div>
          <input type="radio" name={answer} id="d" onClick={()=>answerHandler(d)} />
          <label htmlFor="d">{d}</label>
        </div>
        <div className={classes.countQuestions}>
          <span>{props.count} of {props.totalQuestions}</span>
        </div>
    </div>
    </Card>
  )
}

export default QuestionItem
