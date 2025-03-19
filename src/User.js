function User(props) {
    return (<tr>
        <td>{props.user.name}</td>
        <td>{props.user.email}</td>
        <td><a href='#'>Edit</a>|<a href='#' data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</a></td>
    </tr>
    );
}

export default User;