import React,{ useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from './ErrorModal';
import classes from './Login.module.css';

const Login = (props) => {
  // const [isLogin,setIsLogin]=useState(true);
  // const [isLoading,setIsLoading]=useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState();
    const emailChangeHandler=(e)=>{
         setEmail(e.target.value);
    }
    const passwordChangeHandler=(e)=>{
        setPassword(e.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(email.trim().length === 0 || password.trim().length === 0){
        //  return(window.alert("Please enter valid email & password"))
        setError({
          title:"invalid input",
          message:"please enter valid Email and Password"
      })
      return;
    
        }
       if(email.includes('@') && email.trim().length < 6){
          //  return(window.alert("email have's '@' & length should be above 6 char"))
          setError({
            title:"invalid input",
            message:"Email includes '@' & length at least 6 charactors"
        })
        return;
         
        }
        if(password.trim().length < 5){
          // return(window.alert("password length should be above 5 char"))
          setError({
            title:"invalid input",
            message:"Password Length at least 5 charactors"
        })
        return;
        }
        // const myLogin=localStorage.getItem("credentials");
        // const myLoginCredentials=JSON.parse(myLogin);
        // console.log(myLoginCredentials[0].role);
        // const myCredentials=myLoginCredentials[0].role;
        props.onLogin(email,password);
    }

    const errorHandler=()=>{
      setError(null);
   }
  //  const switchAuthModeHandler = (e) => {
  //   setIsLogin((prevState) => !prevState);
  //  }
  //  const switchAuthModeHandler=(e)=>{
  //   e.preventDefault();
  //   let user={
  //     email:email,
  //     password:password
  //   }
  //   console.log(user);
  //  }

  return (
    <React.Fragment>
        {error && (<ErrorModal  title={error.title} message={error.message} onConfirm={errorHandler}/>)}
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={`${classes.control}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit">Login</Button>
           {/* <button type="submit" className={classes.btn}>
            {isLogin ? 'Login' : 'Create Account'}
           </button>
          <button type="button"
          className={classes.toggle}
          onClick={switchAuthModeHandler}
          >
          {isLogin ? 'Create new account' : 'Login with existing account'}
          </button> */}
        </div>
      </form>
    </Card>
    </React.Fragment>
  )
}

export default Login
