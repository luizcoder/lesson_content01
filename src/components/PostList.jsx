import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Class component example
class PostList extends React.Component {
    constructor(props){
        super(props);
        this.state = {posts: []};
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
            if(res.status = 200){
                this.setState({posts: res.data});
            }
        });
    }

    render() {
        return (
            <ul>
                {
                    this.state.posts.map((post) => {
                        return (
                            <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        );
                    })
                }
            </ul>
        )
    }
}

export default PostList;