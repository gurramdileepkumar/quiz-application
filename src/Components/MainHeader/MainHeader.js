import React from 'react'
import classes from './MainHeader.module.css';
import Navigation from './Navigation';


const MainHeader = (props) => {
  return (
    <header className={classes.mainHeader}>
       <h1>QUIZ APP</h1>
       <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} role={props.onRole} onSub={props.sub}/>
    </header>
  )
}

export default MainHeader
