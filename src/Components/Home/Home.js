import React,{ useState } from 'react';
import AddNewQuestions from '../AddNewQuestion/AddNewQuestions';
import FilteredQuestions from '../QuestionsList/FilteredQuestions';
import QuestionsList from '../QuestionsList/QuestionsList';
import TimeLeft from '../QuestionsList/TimeLeft';
import Card from '../UI/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const questions=props.questions;
  const [enteredCatagory,setEnteredCatagory]=useState("reactjs")

  const newFilteredQuestion=(newQuestion)=>{
    setEnteredCatagory(newQuestion);
  }
  let filterQuestion=questions.filter((item)=>{
    return item.catagory === enteredCatagory;
   })
   console.log(props.onLoggedUserRole);
  return (
    <React.Fragment>
      {props.onLoggedUserRole === "trainer" && (
        <Card className={classes.home}>
          <AddNewQuestions  onAddData={props.onAddQuestionData}/>
         </Card>
    )}
    <Card className={classes.home}>
        <TimeLeft totalQ={filterQuestion}/>
        <FilteredQuestions selected={enteredCatagory} onFilterChange={newFilteredQuestion}/>
        <QuestionsList  questions={filterQuestion} totalCountOfQuestions={props.totalQuestions} onSub={props.sub} onsubHand={props.subHandler}/>
      {/* <h1>Welcome back!</h1> */}
    </Card>
    </React.Fragment>
  );
};

export default Home;
