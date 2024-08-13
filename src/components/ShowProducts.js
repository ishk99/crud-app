
import ProductTable from "./ProductTable";
import AddProduct from "./AddProduct";
import {useState, useContext} from 'react';
import { UserDetails } from "../context/UserDetails";
import SignupLogin from "./SignupLogin";
// i cannot pass products to AddProduct ... need to pass an empty array of obj 
const ShowProducts = () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        setShowLoginPage(true);
    }
    const {userDetails, setUserDetails} = useContext(UserDetails);
    const [showLoginPage, setShowLoginPage] = useState(false);
    return(
        <div>
            {showLoginPage ? <SignupLogin/> :
                <>
                <div className="products">
                <h1>This component will List all the products</h1>
                <div className="button-div-productTable">
                    <p>Hello, {user.name}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <ProductTable />
                </div>
                </>
            }
         </div>
    )
}

export default ShowProducts;