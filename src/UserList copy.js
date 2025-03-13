import React from 'react';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Text User',
                    email: 'textuser@gmail.com'
                },
                {
                    id: 2,
                    name: 'Anne Hunter',
                    email: 'anne.hunter@gmail.com'
                },
                {
                    id: 3,
                    name: 'Jale Boser',
                    email: 'jale.boser@gmail.com'
                }
            ]
        }
    }
    render() {
        return (<>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Email Id</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><a href='#'>Edit</a>|<a href='#'>Delete</a></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>);
    }
}

export default UserList;