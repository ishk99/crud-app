import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import {UserDetails} from '../../context/UserDetails'
import LoginPage from './LoginPage';
const SignupPage = () => {
    const [showLoginPage, setShowLoginPage] = useState(false);
    const [input, setInput] = useState({
            name: "",
            email: "",
            password: ""
        })
    const {userDetails, setUserDetails} = useContext(UserDetails);
    
    const changeHandler = (event) => {
        setInput((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    const submitData = () => {
       console.log('Input from signup ',input); 
        // if already id exists, then dont submit it
        // otherwise add to the context state variable
        const matchedUser = userDetails.find((obj) => obj.name === userDetails.name);
        console.log(matchedUser);
        
        if(matchedUser === undefined){  
            //add data to the context
            setUserDetails((prevState) => ([
                ...prevState,
                input
            ]))
        }else {           
            alert('User already exists, Please Login');
        }
        setShowLoginPage(true);
    }
    console.log('Input from context', userDetails); 
    
     return(
        <div className='signup-page'>
            
            {showLoginPage ?  <LoginPage/> : 
                <>
                    <p>This is the signup page</p>
                    <TextField id="outlined-basic" required label="Enter Name" name="name" type="text" value={input.name} onChange={changeHandler} variant="outlined" />
                    <TextField id="outlined-basic1" required label="Enter Password" name="password" value={input.password} type="password" onChange={changeHandler} variant="outlined" />
                    <TextField id="outlined-basic2" required label="Enter Email" name="email" type="email"  value={input.email} onChange={changeHandler} variant="outlined" />
                    <button onClick={submitData}>Submit</button>
                </>
            }
        </div>
    )
}

export default SignupPage;