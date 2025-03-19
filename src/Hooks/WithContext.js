import { useState, createContext, useContext } from 'react';
/*

With Context

C1 -> C2 -> C3 -> C4 -> C5
"Manoj" -> C2 -> C3 -> C4 -> "Manoj"

Created separate component file 
Create one file and create 5 components inside it
*/

const UserContext = createContext(); // create context
// const EmailContext = createContext(); // create context

// 1st component username is "Manoj"
const WithContext = () => {
    const [username, setUsername] = useState("Manoj"); // username is Manoj

    const firstname = "Ananta";

    return <div>
        <h1>With Context example</h1>
        <div>In Component 1, Username is {username}</div>
        <UserContext.Provider value={firstname}>
            <C2 />
        </UserContext.Provider>
    </div>
}
// 2nd component
const C2 = () => {
    
    return (<UserContext.Provider value={'Harsh'}>
        <C3 />
    </UserContext.Provider>);
}
// 3rd component
const C3 = () => {
    return (<C4 />);
}
// 4th component
const C4 = () => {
    return (<C5 />);
}
// 5th component
const C5 = () => {
    const username = useContext(UserContext); // using value from context
    return (<div>
        <div>In Component 5, Username is {username}</div>
    </div>);
}

export default WithContext;

