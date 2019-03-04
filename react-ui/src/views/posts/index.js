import React from 'react';
import Navbar from '../../components/navbar/';
import ContentPosts from '../../components/content_posts/';
import BottonTo from '../../components/bottons';

const Posts = () => {
    return(
        <React.Fragment>
            <Navbar />
            <ContentPosts />
            <BottonTo path="new-post"/>
        </React.Fragment>
    );
}

export default Posts;
