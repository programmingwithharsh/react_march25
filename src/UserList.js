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

            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">Confirm User Deletion</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are You Sure?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Ok</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>);
    }
}

export default UserList;