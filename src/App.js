import React,{ useState,useEffect } from 'react';
import MainHeader from './Components/MainHeader/MainHeader';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ErrorModal from './Components/Login/ErrorModal';
import CartProvider from './Components/Store/CartProvider';


const intialQuestions=[
  {
    id:1,
    q:"what is react js ?",
    a:"Js-library",
    b:"Js-framework",
    c:"Javascript language",
    d:"none of the above",
    answer:"Js-library",
    catagory:"reactjs"
  },
  {
    id:2,
    q:"Which of the following command is used to Install create-react-app?",
    a:"npm install create-react-app",
    b:"npm install -f create-react-app",
    c:"npm install -g create-react-app",
    d:" install -g create-react-app",
    answer:"npm install -g create-react-app",
    catagory:"reactjs"
  },
  {
    id:3,
    q:"Which of the following is correct about prop in react?",
    a:"Can be changed inside another component",
    b:"Can be changed inside the component",
    c:"Cannot be changed in the component",
    d:"All of the mentioned",
    answer:"Cannot be changed in the component",
    catagory:"reactjs"
  },
  {
    id:4,
    q:"React.js is written in which of the following language?",
    a:"c",
    b:"c++",
    c:"Javascript",
    d:"Java",
    answer:"Javascript",
    catagory:"reactjs"
  },
  {
    id:5,
    q:"Which of the following acts as the input of a class-based component?",
    a:"Class",
    b:"Props",
    c:" Factory",
    d:"none of the above",
    answer:"Class",
    catagory:"reactjs"
  },
  {
    id:6,
    q:"Javascript is an _______ language?",
    a:"Object-oriented",
    b:"Object-based",
    c:"Procedural",
    d:"none of the above",
    answer:"Object-oriented",
    catagory:"javascript"
  },
  {
    id:7,
    q:"Which of the following keywords is used to define a variable in Javascript?",
    a:"Var",
    b:"Let",
    c:"A & B",
    d:"none of the above",
    answer:"A & B",
    catagory:"javascript"
  },
  {
    id:8,
    q:"How can a datatype be declared to be a constant type?",
    a:"const",
    b:"Var",
    c:"Let",
    d:"Constant",
    answer:"const",
    catagory:"javascript"
  },
  {
    id:9,
    q:"What is the use of the <noscript> tag in Javascript?",
    a:"The contents are displayed by non-js-based browsers",
    b:"Clear the all cookies and cache",
    c:"A & B",
    d:"none of the above",
    answer:"The contents are displayed by non-js-based browsers",
    catagory:"javascript"
  },
  {
    id:10,
    q:"When an operator’s value is NULL, the typeof returned by the unary operator is:",
    a:"Boolean",
    b:"Undefined",
    c:"Object",
    d:"Integer",
    answer:"Object",
    catagory:"javascript"
  }
]

const totalCountOfQuestions=intialQuestions.length;
function App() {
  const [questions,setQuestions]=useState(intialQuestions);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [error,setError]=useState();
  const [submitted,setSubmitted]=useState(false);

  const submittedWrongModalHandler=()=>{
    setSubmitted(true);
  }

  const [role,setRole]=useState("");
  const [loggedCredentials,setloggedCredentials]=useState({email:"",password:""});
  const credentials=[
    {
    id:1,
    email:"dileep@gmail.com",
    password:"12345",
    role:"trainer"
   },
   {
    id:2,
    email:"dileepkumar@gmail.com",
    password:"67890",
    role:"trainee"
   }
  ];




  useEffect(()=>{
     localStorage.setItem("credentials",JSON.stringify(credentials));
    if(loggedCredentials.email !=="" && isLoggedIn && loggedCredentials.password !==""){
      const storedData=localStorage.getItem("credentials");
      const loggedData=JSON.parse(storedData);
      const filterLoggedData=loggedData.filter((item)=>{
        return (
          item.email === loggedCredentials.email && item.password === loggedCredentials.password 
        )
      })
      if(filterLoggedData.length === 0){
        setIsLoggedIn(false);
        // alert("unAthoraised user");
        setError({
          title:"invalid input",
          message:"unAthoraised user"
        })
        return;
      }
     
  
    console.log(filterLoggedData);
    setRole(filterLoggedData[0].role);
    }
  
  },[loggedCredentials,isLoggedIn]);


  const loginHandler=(email,password)=>{
    setIsLoggedIn(true);
    setloggedCredentials({email:email,password:password});
  }
  const logOutHandler=()=>{
    setIsLoggedIn(false)
  }
  const addQuestionHandler=(question)=>{
    setQuestions((prevQuestion)=>{
      return [question,...prevQuestion]
    })
  }

  const errorHandler=()=>{
    setError(null);
 }
  return (
    <React.Fragment>
      <CartProvider>
        {error && (<ErrorModal  title={error.title} message={error.message} onConfirm={errorHandler}/>)}
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logOutHandler} onRole={role}
         sub={submitted}
        subHandler={submittedWrongModalHandler}/>
      <main>
        {!isLoggedIn && (<Login  onLogin={loginHandler}/>)}
        {isLoggedIn && (
        <Home
         onLogout={logOutHandler} 
        questions={questions}
        totalQuestions={totalCountOfQuestions}
        onAddQuestionData={addQuestionHandler}
        onLoggedUserRole={role}
        sub={submitted}
        subHandler={submittedWrongModalHandler}
        />
        )}
      </main>
      </CartProvider>
    </React.Fragment>
  );
}

export default App;
