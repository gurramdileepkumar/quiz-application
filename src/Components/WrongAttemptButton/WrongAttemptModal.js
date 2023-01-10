import React, { useContext } from 'react';
import  ReactDOM  from 'react-dom';
import Button from '../UI/Button';
import classes from './WrongAttemptsModal.module.css';
import WrongQuestionItem from './WrongQuestionItem';
import CartContext from '../Store/CartContext';

const Backdrop=(props)=>{
   return <div className={classes.backdrop} onClick={props.onClick}></div>
}
const ModalOverlay=(props)=>{
    const wrongAttempts=useContext(CartContext);
    const allRemoveHandler=()=>{
        wrongAttempts.removeAllQuestions();
        props.onConfirm();
    }
    return <div className={classes.modal}>
        <div className={classes.content}>
         <WrongQuestionItem/>
        <Button onClick={props.onConfirm}>Close</Button>
        <Button onClick={allRemoveHandler} className={classes.removeAllBtn}>clear</Button>
        </div>
    </div>
}
const WrongAttemptModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop  onClick={props.onCartClose}/>,(document.getElementById('backdrop-root')))}
      {ReactDOM.createPortal(<ModalOverlay onConfirm={props.onCartClose}>{props.children}</ModalOverlay>,(document.getElementById("overlay-root")))}
    </React.Fragment>
  )
}

export default WrongAttemptModal
