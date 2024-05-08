import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";


const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) =>{
        e.preventDefault();
        const newPost ={
            ...post, id:Date.now()
        }
        create(newPost);
        setPost({title:'', body: ''});
    }

    return(
        <form>
            <MyInput 
                type='text'
                placeholder='Название поста'
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}/>
            <MyInput
                type='text'
                value={post.body}
                placeholder='Описание поста'
                onChange={newEvent => setPost({...post, body: newEvent.target.value})}/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    )
}


export default PostForm;