//We wrap up all the data here so need to make a jsx file
import React from 'react'
import UserContext from './UserContext'


// eslint-disable-next-line react/prop-types
const UserContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null);
    return(
        <>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
        </>
    );
}

export default UserContextProvider;