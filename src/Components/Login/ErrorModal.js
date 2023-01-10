import React from 'react'
import  ReactDOM  from 'react-dom';
import classes from './ErrorModal.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';



const BackDrop=(props)=>{
    return(
    <div className={classes.backdrop} onClick={props.onConfirm}></div>
    )
}

const ModalOverLay=(props)=>{
    return(
        <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
            <p>{props.wrong}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>OKay</Button>
        </footer>
    </Card>
    )
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
       {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm}></BackDrop>,(document.getElementById("backdrop-root")))}
       {ReactDOM.createPortal(<ModalOverLay title={props.title} message={props.message} onConfirm={props.onConfirm} wrong={props.wrongAns}></ModalOverLay>,(document.getElementById("overlay-root")))}
       
    </React.Fragment>
  )
}

export default ErrorModal
