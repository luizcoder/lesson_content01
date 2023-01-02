import { Link } from 'react-router-dom'

const UserListItem = ({ id, name, username, email }) => {

    return (
        <>
            <tr>
                <td><Link to={`/users/${id}`}>{name}</Link></td>
                <td>{username}</td>
                <td>{email}</td>
            </tr>
        </>
    )
}

export default UserListItem