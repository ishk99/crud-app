import { createContext, useState } from "react";

const users = [
    {name: 'Jessica',email: 'jess@gmail.com',password: 'Encrypt'},
]

export const UserDetails = createContext();

const UserDetailsProvider = ({children}) => {
  const [userDetails, setUserDetails] = useState(users);

  return(
    <UserDetails.Provider value={{userDetails, setUserDetails}}>
        {children}
    </UserDetails.Provider>
  )
}
export default UserDetailsProvider;


