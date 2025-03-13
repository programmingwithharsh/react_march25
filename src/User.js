function User(props) {
    return (<tr>
        <td>{props.user.name}</td>
        <td>{props.user.email}</td>
        <td><a href='#'>Edit</a>|<a href='#'>Delete</a></td>
    </tr>);
}

export default User;