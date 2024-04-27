import React from "react";
import PostItems from "./PostItems";

const PostList = ({post, title}) => {
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {post.map((post, index) =>
                <PostItems number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    )
}

export default PostList;