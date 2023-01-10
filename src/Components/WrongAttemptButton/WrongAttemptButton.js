import React,{ useContext } from 'react'
import classes from './WrongAttemptButton.module.css';
import CartContext from '../Store/CartContext';

const WrongAttemptButton = (props) => {
  const wrongAttempts=useContext(CartContext);
  const numberOfWrongAttempts=wrongAttempts.question.length;
  return (
    <button disabled={props.onSubmitted?false:true} className={`${classes.button} ${classes.bump} ${classes.btn}`} onClick={props.onClick}>
    <span>
    <span>Wrong Attempts</span>
    <span className={classes.badge}>{numberOfWrongAttempts}</span>
    </span>
  </button>
  )
}

export default WrongAttemptButton
