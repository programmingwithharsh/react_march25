import { useState, useEffect } from 'react';

const UseStateHookExample = () => {
    const [data, setData] = useState([{
        name: "Ananta"
    }]);

    useEffect(() => {
        setData([{
            name: "Harsh"
        }]);
    }, []); // effect will run once 

    return (<div>
        <h1>Display User name using useState and useEffect Hook</h1>
        <ul>
            {data.map((user, index) => (
                <li key={index}>{user.name}</li>
            ))}
        </ul>
    </div>);
}

export default UseStateHookExample;