import { useState, useEffect } from 'react'; // Functioan component Hooks

const UseEffectHookExample = () => {
    const [data, setData] = useState([{ name: "Debasis" }]); // default value inside useState
    const [users, setUsers] = useState([]);
    /*
        Class Component 
            this.state 
            this.setState({})

        Functional Component
            data 
            setData 
    */

    let url1 = 'https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        fetch(url1,
            {
                method: "GET"
            })
            .then((response) => response.json())
            .then((responseData) =>
                setData(responseData)
            )
    }, []); // effect will run once 

    let url2 = 'http://localhost:4000/users';
    useEffect(() => {
        fetch(url2,
            {
                method: "GET"
            })
            .then((response) => response.json())
            .then((responseData) => setUsers(responseData)
            )
    }, []); // effect will run once 

    useEffect(() => {
        fetch(url2, {
            method: 'POST',
            body: JSON.stringify({
                username: "Debasis"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, []); // effect will run once 

    useEffect(() => {
        fetch(url2, {
            method: 'PUT',
            body: JSON.stringify({
                username: "Debasis"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, []); // effect will run once 

    useEffect(() => {
        fetch(url2, {
            method: 'DELETE',
        });
    }, []); // effect will run once 

    return (<div>
        <h1>List of users using useState and useEffect Hook and fetch method using own API</h1>
        <ul>
            {users.map((user, index) => (
                <li key={index}>{user.name}</li>
            ))}
        </ul>
        <h1>List of users using useState and useEffect Hook and fetch method</h1>
        <ul>
            {data.map((user, index) => (
                <li key={index}>{user.name}</li>
            ))}
        </ul>
    </div>);
}

export default UseEffectHookExample;