import React, { useState} from "react";

const PostItems = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong> {props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__bttns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItems;
