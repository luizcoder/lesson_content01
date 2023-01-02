import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"

const User = () => {
    const [user, setUser] = useState({})
    const params = useParams()

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`).then((res) =>{
            if(res.status == 200){
                setUser(res.data)
            }
        })
    }, [params])
    return (
        <>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        </>
    )
}


export default User