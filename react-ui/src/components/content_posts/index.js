import React from 'react';
import Post from '../../components/post/';

class ContentPosts extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/posts/", {
            method: 'GET',
            headers:{
                "Authorization": "whatever-you-want",
                "content-type" : "application/json"
            }
        }).then(res => res.json())
        .then(response => {
            this.setState({
                posts: response,
            });
        })
        .catch(error => console.error('Error:', error));
    }

    

    render() {
        return(
            <Post />
        );
    }
};

export default ContentPosts;