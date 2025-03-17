import React from 'react';
import User from './User';

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
            <table className='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Email Id</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.users.map((user, index) => (
                        <User key={index} user={user} />
                    ))}

                </tbody>
            </table>
        </>);
    }
}

export default UserList;