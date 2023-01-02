import { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
const Post = () => {

    const [post, setPost] = useState({})
    const params = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`).then((res) => {
            if (res.status == 200) {
                setPost(res.data);
            }
        })
    }, [params])

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default Post