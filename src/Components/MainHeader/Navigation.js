import React,{ useState } from 'react'
import WrongAttemptButton from '../WrongAttemptButton/WrongAttemptButton';
import WrongAttemptModal from '../WrongAttemptButton/WrongAttemptModal';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const [showWrongModal,setShowWrongModal]=useState(false);
  const showWrongModalHandler=()=>{
    setShowWrongModal(true);
  }
  const closeWrongModalHandler=()=>{
    setShowWrongModal(false);
  }
  return (
    <React.Fragment>
    <nav className={classes.nav}>
        <ul>
          <li>
            {props.isLoggedIn && (
              <a href="/">{props.role}</a>
            )}
          </li>
          <li>
            {props.isLoggedIn && (
              props.onSub && (<WrongAttemptButton  onClick={showWrongModalHandler} onSubmitted={props.onSub}/>)
            )}
          </li>
            <li>
                {props.isLoggedIn && (
                <button onClick={props.onLogout}>LogOut</button>
                )}
            </li>
        </ul>
      
    </nav>
    {showWrongModal && (<WrongAttemptModal  onCartClose={closeWrongModalHandler}/>)}
    </React.Fragment>
  )
}

export default Navigation
