import { useState, useEffect } from 'react'; // Functioan component Hooks

const UseEffectHookExample = () => {
    const [data, setData] = useState([ { name: "Debasis" }]); // default value inside useState
    /*
        Class Component 
            this.state 
            this.setState({})

        Functional Component
            data 
            setData 
    */
    let url = 'https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        fetch(url,
            {
                method: "GET"
            })
            .then((response) => response.json())
            .then((responseData) => setData(responseData)
            )
    }, []); // effect will run once 

    return (<div>
        <h1>List of users using useState and useEffect Hook and fetch method</h1>
        <ul>
            {data.map((user, index) => (
                <li key={index}>{user.name}</li>
            ))}
        </ul>
    </div>);
}

export default UseEffectHookExample;