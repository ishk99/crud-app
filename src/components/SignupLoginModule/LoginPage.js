import { UserDetails } from "../../context/UserDetails";
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import ShowProducts from "../ShowProducts";

const LoginPage = () => {
    // if user exists in context then log in and route to Show Products
    // if user does not exist in context, then route to Singup Login Page

    const {userDetails, setUserDetails} = useContext(UserDetails);
    const [showProductTable, setShowProductTable] = useState(false);
    const [localInput, setLocalInput] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (event) => {
        // console.log(localInput);
        setLocalInput((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
        
    }
    const submitHandler = () => {
        console.log(localInput);
        // if user has logged in which mean if exists in context -- they can login
        // if dont exist in context -- throw error
        const matchedUser = userDetails.find((user) => user.email === localInput.email && user.password === localInput.password);
        if(matchedUser){
            // user exists
            alert('You are logged In');
            // now show product table page
            setShowProductTable(true);
            // set the user details to localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
        }else if(!matchedUser){
            alert('No user found, singup again');
        }else{
            console.log('Hey');
            
        }

    }
    return(
        <div>
            
            {showProductTable ? <ShowProducts/> : 
                <>
                <TextField id="outlined-basic2" required label="Enter Email" name="email" type="email" variant="outlined" onChange={changeHandler} value={localInput.email}/>
                <TextField id="outlined-basic1" required label="Enter Password" name="password"  type="password" variant="outlined" onChange={changeHandler} value={localInput.password}/>       
                <button onClick={submitHandler}>Login</button>
                </>
            }
        </div>
    )
}

export default LoginPage;