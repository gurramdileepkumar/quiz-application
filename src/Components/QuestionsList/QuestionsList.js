import React,{ useState } from 'react'
import QuestionItem from './QuestionItem'
import Card from '../UI/Card';
import classes from './QuestionsList.module.css';
import Button from '../UI/Button';
import ScoreModal from '../ScoreModal/ScoreModal';


const QuestionsList = (props) => {
  const count=props.questions.length;
  const [score,setScore]= useState(0)
  const [wrongScore,setWrongScore]=useState(0);
  const [show,setShow]=useState(false);
  // let scoreCount=0;
  const answerSubmitHandler=(ans,answer)=>{
    console.log("answer clicked")
    console.log(answer);
    console.log(ans);
    if(answer === ans ){
      setScore(
         score+1
        );
      // alert(scoreCount)

    }
    else{
       setWrongScore(wrongScore+1);
    }
   
  }
  const scoreSubmitHandler=()=>{
    // alert(score);
    setShow(true);
    props.onsubHand();
    console.log(wrongScore);
  }
  const errorHandler=()=>{
    setShow(null);
    
    
   

 }
  return (
    <React.Fragment>
      {show && (<ScoreModal  title="Your score"  
                 message={`Your score:${score} out of ${count}`} 
                 onConfirm={errorHandler} 
                 wrongAns={`wrong Attempts:${wrongScore}`}
                 />)}
      {props.questions.length === 0 && (
      <Card className={classes.noQ}>
          <p>No Questions Here</p>
      </Card>
      )}
    <div>
        {props.questions.map((question,index)=>{
            return (
                <QuestionItem
                 question={question}
                  key={index}
                   totalQuestions={count}
                   count={index+1}
                   answerSubmit={answerSubmitHandler}
                   />
            )
        })}
        <Button onClick={scoreSubmitHandler}>Submit</Button>
    </div>
    </React.Fragment>
  )
}

export default QuestionsList
