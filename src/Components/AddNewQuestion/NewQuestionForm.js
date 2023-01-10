import React,{ useState } from 'react'
import ErrorModal from '../Login/ErrorModal';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './NewQuestionForm.module.css';

const NewQuestionForm = (props) => {
  const [enteredQuestion,setEnteredQuestion]=useState('');
    const [enteredOption_a,setEnteredOption_a]=useState('');
    const [enteredOption_b,setEnteredOption_b]=useState('');
    const [enteredOption_c,setEnteredOption_c]=useState('');
    const [enteredOption_d,setEnteredOption_d]=useState('');
    const [enteredCatagory,setEnteredCatagory]=useState("");
    const [enteredAnswer,setEnteredAnswer]=useState('');
    const [error,setError]=useState();

    const questionChangeHandler=(e)=>{
      setEnteredQuestion(e.target.value);
  }
  const option_aChangeHandler=(e)=>{
      setEnteredOption_a(e.target.value);
  }
  const option_bChangeHandler=(e)=>{
      setEnteredOption_b(e.target.value);
  }
  const option_cChangeHandler=(e)=>{
      setEnteredOption_c(e.target.value);
  }
  const option_dChangeHandler=(e)=>{
      setEnteredOption_d(e.target.value);
  }
  const answerChangeHandler=(e)=>{
      setEnteredAnswer(e.target.value);
  }
  const catagoryChangeHandler=(e)=>{
      setEnteredCatagory(e.target.value);
      console.log(e.target.value);
  }
  const submitHandler=(event)=>{
      event.preventDefault();
      if(enteredAnswer.trim().length === 0 || 
        enteredOption_a.trim().length === 0 ||
        enteredOption_b.trim().length === 0 ||
        enteredOption_c.trim().length === 0 ||
        enteredOption_d.trim().length === 0 ||
        enteredQuestion.trim().length === 0 ||
        enteredCatagory.length === 0
        ){
        //  return(
        //   window.alert("please enter input fileds")
        //  )
        setError({
              title:"invalid input",
              message:"please enter input fileds"
        })
        return;
      }
      const addNewQuestion={
          q:enteredQuestion,
          a:enteredOption_a,
          b:enteredOption_b,
          c:enteredOption_c,
          d:enteredOption_d,
          answer:enteredAnswer,
          catagory:enteredCatagory

      }
      console.log("somting entered")
      props.onSaveQuestionData(addNewQuestion);
      console.log(addNewQuestion)
      // setEnteredQuestion("");
      // setEnteredOption_a("");
      // setEnteredOption_b("");
      // setEnteredOption_c("");
      // setEnteredOption_d("");
      // setEnteredCatagory("");
      // setEnteredAnswer("");
      props.onCancel();
  }
  const errorHandler=()=>{
    setError(null);
 }
  return (
    <React.Fragment>
        {error && (<ErrorModal  title={error.title} message={error.message} onConfirm={errorHandler}/>)}
    <Card className={classes.main}>
    <form onSubmit={submitHandler}>
        <div className={`${classes.control}`}>
          <label>Question</label>
          <input
            type="text"
            value={enteredQuestion}
            onChange={questionChangeHandler}
          />
        </div>
        <div className={`${classes.control}`}>
          <label>A</label>
          <input
            type="text" 
            value={enteredOption_a}
            onChange={option_aChangeHandler}          
          />
        </div>
        <div className={`${classes.control}`}>
          <label>B</label>
          <input
            type="text"
            value={enteredOption_b}          
            onChange={option_bChangeHandler}
          />
        </div>
        <div className={`${classes.control}`}>
          <label>C</label>
          <input
            type="text"
            value={enteredOption_c} 
            onChange={option_cChangeHandler}         
          />
        </div>
        <div className={`${classes.control}`}>
          <label>D</label>
          <input
            type="text"
            value={enteredOption_d}
            onChange={option_dChangeHandler}          
          />
        </div>
        <div className={`${classes.control}`}>
          <label>Answer</label>
          <input
            type="text"
            value={enteredAnswer} 
            onChange={answerChangeHandler}         
          />
        </div>
        <div className={`${classes.control}`}>
          <label>catagory</label>
          <select value={enteredCatagory} onChange={catagoryChangeHandler}>
            <option>---select---</option>
            <option value="javascript">javascript</option>
            <option value="reactjs">reactjs</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <div className={`${classes.control}`}>
        <Button type="submit" className={classes.btn}>Add</Button>
        <Button type="submit" className={classes.btn} onClick={props.onCancel}>Cancel</Button>
        </div>
    </form>
    </Card>
    </React.Fragment>
  )
}

export default NewQuestionForm
