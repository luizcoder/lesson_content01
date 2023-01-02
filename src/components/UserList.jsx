import { useEffect, useState } from "react"
import axios from 'axios'
import UserListItem from "./UserListItem"

const UserList = () => {

    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [usersLoading, setUsersLoading] = useState(false)
    const [searchKeyword, setSearchKeyword] = useState('')

    useEffect(() => {
        setUsersLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            setUsersLoading(false)
            setUsers(res.data)
            setFilteredUsers(res.data)
        })
    }, [])

    const handleSearchKeyword = (event) => {
        event.preventDefault()
        setSearchKeyword(event.target.value)
        
        const tempUsers = users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setFilteredUsers(tempUsers)
        
        
    }

    const handleClearFilter = (event) => {
        event.preventDefault()
        setSearchKeyword('')
        setFilteredUsers(users)
    }

    return (
        <>
        {/** Filter input field */}
        <form>
            <input type='text' placeholder='type to filter' value={searchKeyword} onChange={handleSearchKeyword}/>
            <input type='submit' value='Clear' onClick={handleClearFilter}/>
        </form>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredUsers.map((user) => (
                        <UserListItem key={user.id} {...user} />
                    ))
                }

            </tbody>
        </table>
        </>
    )
}

export default UserList